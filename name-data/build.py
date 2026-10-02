"""Build the data behind /names ("Is Your Name Dying?").

    python name-data/build.py <names.zip | folder of yobYYYY.txt> <lifetables.csv>

Inputs
  - SSA national baby names, https://www.ssa.gov/oact/babynames/names.zip
    (either the zip itself or a folder of its yobYYYY.txt files).
  - SSA cohort life tables (Actuarial Study 120, Table 7) as CSV with the
    columns x, lx, sex, year - the `lifetables` dataset of the babynames R
    package (github.com/hadley/babynames) is exactly that.

Outputs, next to this script
  - core.json    year totals, survival odds, the field of threads, story data
  - a.txt..z.txt every name, sharded by first letter, one line per name and sex:
                 Name|F|firstYear|count,count,...  (base 36, blank = under 5)

When SSA publishes a new year, rerun this and bump REF if the calendar year
has moved on.
"""
import base64, glob, io, json, os, sys, zipfile
from collections import defaultdict

import numpy as np
import pandas as pd

REF = 2026            # "today", for who is still alive
FIELD_MIN = 1 / 3000  # a name joins the field if it ever reached 1 in 3,000 babies
LOG_LO, LOG_HI = -6.0, -0.8   # field's log10(share) range, packed into a byte

HERE = os.path.dirname(os.path.abspath(__file__))


def read_names(src):
    frames = []
    if src.endswith('.zip'):
        z = zipfile.ZipFile(src)
        files = [(n, lambda n=n: io.TextIOWrapper(z.open(n), 'utf-8')) for n in z.namelist()]
    else:
        files = [(os.path.basename(f), lambda f=f: open(f, encoding='utf-8')) for f in glob.glob(os.path.join(src, 'yob*.txt'))]
    for name, opener in files:
        if not (name.startswith('yob') and name.endswith('.txt')):
            continue
        d = pd.read_csv(opener(), names=['name', 'sex', 'n'], keep_default_na=False,
                        dtype={'name': str, 'sex': str, 'n': np.int64})
        d['year'] = int(name[3:7])
        frames.append(d)
    return pd.concat(frames, ignore_index=True)


def survival(years, lt_path):
    """Odds that someone born in each year is alive in REF, by sex.

    Interpolates the decade cohort tables, and conditions people born before
    1937 on living until Social Security began - they are only in the name
    data because they applied for a number."""
    lt = pd.read_csv(lt_path)
    out = {}
    for sx in 'FM':
        t = lt[lt.sex == sx]
        decs = sorted(int(d) for d in t.year.unique())
        L = {d: t[t.year == d].sort_values('x').lx.values / 100000.0 for d in decs}

        def lx(y, age):
            age = max(0.0, min(119.0, float(age)))
            yc = min(max(y, decs[0]), decs[-1])
            lo = max(d for d in decs if d <= yc)
            hi = min(d for d in decs if d >= yc)
            f = 0 if hi == lo else (yc - lo) / (hi - lo)

            def at(arr):
                a0 = int(np.floor(age)); a1 = min(a0 + 1, 119); g = age - a0
                return arr[a0] * (1 - g) + arr[a1] * g
            return at(L[lo]) * (1 - f) + at(L[hi]) * f

        arr = []
        for y in years:
            age = REF - y
            p = lx(y, age) / lx(y, max(0, 1937 - y)) if age < 119 else 0.0
            arr.append(round(max(0.0, min(1.0, p)), 5))
        out[sx] = arr
    return out


def b36(n):
    if n == 0:
        return ''
    d = '0123456789abcdefghijklmnopqrstuvwxyz'
    s = ''
    while n:
        n, r = divmod(n, 36)
        s = d[r] + s
    return s


def main(src, lt_path):
    df = read_names(src)
    years = list(range(int(df.year.min()), int(df.year.max()) + 1))
    first, last = years[0], years[-1]
    print(f'{len(df):,} rows, {first}-{last}')

    tot = df.groupby(['sex', 'year']).n.sum().unstack(0).reindex(years).fillna(0).astype(int)
    W = df.pivot_table(index=['name', 'sex'], columns='year', values='n', fill_value=0, aggfunc='sum')
    W = W.reindex(columns=years, fill_value=0)
    N = W.values.astype(np.int64)
    T = np.vstack([tot[sx].values for _, sx in W.index]).astype(float)
    S = N / T
    keys = list(W.index)
    row = {k: i for i, k in enumerate(keys)}
    yi = {y: i for i, y in enumerate(years)}

    # ---- shards: every name, by first letter ----
    shards = defaultdict(list)
    for i, (name, sx) in enumerate(keys):
        nz = np.nonzero(N[i])[0]
        a, b = nz[0], nz[-1]
        counts = ','.join(b36(int(v)) for v in N[i, a:b + 1])
        shards[name[0].lower()].append((-int(N[i].sum()), f'{name}|{sx}|{years[a]}|{counts}'))
    for f in glob.glob(os.path.join(HERE, '[a-z].txt')):
        os.remove(f)
    for letter, rows in shards.items():
        rows.sort()
        with open(os.path.join(HERE, f'{letter}.txt'), 'w', encoding='utf-8', newline='\n') as fh:
            fh.write('\n'.join(r for _, r in rows) + '\n')

    # ---- the field: one thread per name that was ever common ----
    peak = S.max(1)
    fidx = [i for i in np.argsort(-peak) if peak[i] >= FIELD_MIN]
    with np.errstate(divide='ignore'):
        lg = np.log10(S[fidx])
    q = np.where(np.isfinite(lg), np.clip(np.round((lg - LOG_LO) / (LOG_HI - LOG_LO) * 254) + 1, 1, 255), 0).astype(np.uint8)
    # delta-code along each row: neighbouring years are close, so it packs well
    dq = np.diff(q.astype(np.int16), axis=1, prepend=0).astype(np.uint8)
    field = {
        'names': ','.join(keys[i][0] for i in fidx),
        'sex': ''.join(keys[i][1] for i in fidx),
        'lo': LOG_LO, 'hi': LOG_HI,
        'data': base64.b64encode(dq.tobytes()).decode('ascii'),
    }

    # ---- story data ----
    def series(name, sx):
        return [int(v) for v in N[row[(name, sx)]]]

    named = ['Linda F', 'Mary F', 'Jennifer F',
             'Woodrow M', 'Shirley F', 'Jaime F', 'Farrah F', 'Hillary F', 'Katrina F', 'Isis F', 'Alexa F',
             'Hazel F', 'Violet F', 'Stella F', 'Eleanor F', 'Leo M',
             'Debra F', 'Carol F', 'Tammy F', 'Rhonda F', 'Vicki F', 'Myrtle F',
             'Mildred F', 'Gary M', 'Jason M', 'Brittany F', 'Madison F', 'Liam M']
    story_series = {k: series(*k.split()) for k in named}

    # how fast common names fade: years from peak until share halves
    fade = []
    pi = S.argmax(1)
    for i in np.where(peak >= 1 / 1000)[0]:
        py = years[pi[i]]
        if py < first + 10 or py > last - 15:
            continue
        after = np.where(S[i, pi[i]:] < 0.5 * peak[i])[0]
        hl = int(after[0]) if len(after) else None
        fade.append([keys[i][0], keys[i][1], py, hl if hl is not None else last - py, 0 if hl is not None else 1])

    # how many names it takes to cover half of all babies, every year
    half = {}
    for sx in 'FM':
        rows_sx = [i for i, k in enumerate(keys) if k[1] == sx]
        Ssx = S[rows_sx]
        per_year = []
        for j, y in enumerate(years):
            order = np.argsort(-Ssx[:, j])
            col = Ssx[order, j]
            k = int(np.searchsorted(np.cumsum(col), 0.5)) + 1
            per_year.append({
                'k': k,
                'top10': round(float(col[:10].sum()), 4),
                'shares': [int(round(v * 1e5)) for v in col[:k]],
                'names': [keys[rows_sx[o]][0] for o in order[:6]],
            })
        half[sx] = per_year

    core = {
        'first': first, 'last': last, 'ref': REF,
        'totals': {sx: [int(v) for v in tot[sx].values] for sx in 'FM'},
        'surv': survival(years, lt_path),
        'field': field,
        'story': {'series': story_series, 'fade': fade, 'half': half},
        'count': {'names': len(keys), 'babies': int(N.sum())},
    }
    with open(os.path.join(HERE, 'core.json'), 'w', encoding='utf-8') as fh:
        json.dump(core, fh, separators=(',', ':'))

    sizes = {f: os.path.getsize(os.path.join(HERE, f)) for f in os.listdir(HERE) if f.endswith(('.json', '.txt'))}
    print(f'{len(fidx)} threads in the field, {len(keys):,} names in {len(shards)} shards')
    print(f"core.json {sizes['core.json'] / 1e3:.0f} kB, shards {sum(v for k, v in sizes.items() if k.endswith('.txt')) / 1e6:.1f} MB "
          f"(largest {max(v for k, v in sizes.items() if k.endswith('.txt')) / 1e3:.0f} kB)")


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
