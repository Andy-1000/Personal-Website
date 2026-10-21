/*
  The Paper Game: the page. engine.js has the rules; this draws them, wires up
  the buttons, and keeps your progress in this browser.

  (And the keys. You were warned.)
*/
(function () {
  'use strict';

  var E = window.PaperEngine;
  var fmt = E.fmt;
  var SAVE_KEY = 'thePaperGame.save';

  function $(id) { return document.getElementById(id); }

  // ---------------------------------------------------------------------------
  // Saving

  function load() {
    try {
      var raw = localStorage.getItem(SAVE_KEY);
      return raw ? E.restore(JSON.parse(raw)) : null;
    } catch (e) { return null; }
  }

  function save() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) { /* private window: no saving */ }
  }

  var S = load() || E.newState();

  // ---------------------------------------------------------------------------
  // Little helpers

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function show(node, on) { node.classList.toggle('hidden', !on); }
  function text(node, t) { t = String(t); if (node.textContent !== t) node.textContent = t; }
  function html(node, h) { if (node._h !== h) { node.innerHTML = h; node._h = h; } }
  function able(node, ok) {
    node.classList.toggle('cant', !ok);
    node.setAttribute('aria-disabled', ok ? 'false' : 'true');
  }
  function button(cls, onClick) {
    var b = el('button', 'btn' + (cls ? ' ' + cls : ''));
    b.type = 'button';
    b.addEventListener('click', function (ev) { onClick(ev); render(); });
    return b;
  }
  function rateText(x) {
    var a = Math.abs(x);
    var v = a < 10 ? a.toFixed(1) : fmt(a);
    return (x < 0 ? '-' : '+') + v + '/s';
  }
  function duration(sec) {
    sec = Math.floor(sec);
    var h = Math.floor(sec / 3600), m = Math.floor(sec / 60) % 60;
    if (h) return h + (h === 1 ? ' hour ' : ' hours ') + m + (m === 1 ? ' minute' : ' minutes');
    return m + (m === 1 ? ' minute' : ' minutes');
  }

  // ---------------------------------------------------------------------------
  // Resources, with how fast each is going up or down

  var RES_ROWS = [
    { k: 'tree', label: 'Trees', lv: 1 },
    { k: 'paper', label: 'Papers', lv: 1 },
    { k: 'money', label: 'Money', lv: 2, dollars: true },
    { k: 'ink', label: 'Ink', lv: 3 },
    { k: 'book', label: 'Books', lv: 4 },
    { k: 'knowledge', label: 'Knowledge', lv: 2 },
    { k: 'imagination', label: 'Imagination', lv: 9 },
    { k: 'reputation', label: 'Reputation', lv: 10 },
    { k: 'paperwork', label: 'Paperwork', lv: 11 },
    { k: 'cranes', label: 'Cranes', lv: 14 }
  ];
  var rates = {}, lastSample = null, lastSampleT = 0;

  RES_ROWS.forEach(function (row) {
    row.dt = el('dt', '', row.label);
    row.dd = el('dd');
    row.val = el('span', 'val');
    row.rate = el('span', 'rate');
    row.dd.appendChild(row.val);
    row.dd.appendChild(row.rate);
    $('resources').appendChild(row.dt);
    $('resources').appendChild(row.dd);
  });

  function amounts() {
    var a = Object.assign({}, S.r);
    a.cranes = S.cranes;
    return a;
  }

  function sampleRates() {
    var now = S.stats.time, a = amounts();
    if (lastSample && now - lastSampleT >= 1) {
      var span = now - lastSampleT;
      for (var k in a) {
        var r = (a[k] - lastSample[k]) / span;
        rates[k] = rates[k] === undefined ? r : rates[k] * 0.6 + r * 0.4;
      }
    }
    if (!lastSample || now - lastSampleT >= 1 || now < lastSampleT) {
      lastSample = a;
      lastSampleT = now;
    }
  }

  function renderResources() {
    var a = amounts();
    RES_ROWS.forEach(function (row) {
      var on = S.level >= row.lv && (row.k !== 'cranes' || S.cranes > 0);
      show(row.dt, on); show(row.dd, on);
      if (!on) return;
      var v = a[row.k];
      text(row.val, (row.dollars ? '$' : '') + (row.k === 'tree' ? fmt(v, 'ceil') : fmt(v)));
      var r = rates[row.k] || 0;
      var visible = Math.abs(r) >= 0.05 && Math.abs(r) >= v * 1e-6;
      text(row.rate, visible ? rateText(r) : '');
      row.rate.classList.toggle('down', r < 0);
    });
  }

  // ---------------------------------------------------------------------------
  // Doing it yourself

  var manualButtons = {};
  E.MANUAL.forEach(function (a) {
    var b = button('manual-btn', function () { E.click(S, a.id); });
    b.id = 'manual-' + a.id;
    b.innerHTML = a.label + ' <span class="tip"></span>';
    manualButtons[a.id] = b;
    $('manual').appendChild(b);
  });

  function manualHint(id) {
    if (id === 'paper') return '1 tree makes 100 paper. Trees grow back slowly while you have fewer than 50';
    if (id === 'sell') return '1 paper makes $' + S.sellprice;
    if (id === 'ink') return '$1 makes 1 ink';
    if (id === 'book') return S.bookink + ' ink & ' + S.bookpaper + ' paper make 1 book';
    if (id === 'knowledge') return '1 book makes ' + fmt(S.ke) + ' knowledge';
    return '$100 & 5 knowledge makes 1 tree';
  }

  function manualPossible(id) {
    var r = S.r;
    if (id === 'paper') return r.tree >= 0.01;
    if (id === 'sell') return r.paper >= 1;
    if (id === 'ink') return r.money >= 1;
    if (id === 'book') return r.paper >= S.bookpaper && r.ink >= S.bookink;
    if (id === 'knowledge') return r.book >= 1;
    return r.money >= 100 && r.knowledge >= 5;
  }

  function renderManual() {
    E.MANUAL.forEach(function (a) {
      var b = manualButtons[a.id];
      show(b, E.manualShown(S, a));
      text(b.querySelector('.tip'), manualHint(a.id));
      able(b, manualPossible(a.id));
    });
  }

  // ---------------------------------------------------------------------------
  // Levels and projects

  $('level-up').addEventListener('click', function () { E.levelUp(S); render(); });

  function titleFor() {
    if (S.done.behind) return 'somewhere behind the page';
    if (S.level >= 20) return 'Chairperson of Everything';
    if (S.level >= 19) return 'Chairperson of the Galaxy';
    if (S.level >= 17) return 'Chairperson of the Solar System';
    if (S.level >= 16) return 'Chairperson of the Earth (and the Moon)';
    if (S.level >= 15) return 'Chairperson of the Earth';
    if (S.won.pm) return 'Prime Minister';
    if (S.won.premier) return 'Premier';
    if (S.won.mayor) return S.done.papertown ? 'Mayor of Papertown' : 'Mayor';
    return '';
  }

  function renderLevel() {
    text($('level'), S.level);
    var t = titleFor();
    text($('title'), t ? ' · ' + t : '');
    var b = $('level-up');
    var next = S.level + 1;
    show(b, next <= E.MAX_LEVEL);
    if (next <= E.MAX_LEVEL) {
      html(b, 'Upgrade to Level ' + next + '<br><span class="cost">Requires: ' + E.levelReqText(next) + '</span>');
      able(b, E.canLevel(S));
    }
  }

  var projectButton = button('project', function () { E.buyProject(S); });
  $('project').appendChild(projectButton);

  function renderProjects() {
    show($('projects'), S.level >= 2);
    var cur = E.currentProject(S);
    var sign = $('sign');
    if (!cur) { show(projectButton, false); show(sign, false); return; }
    if (cur.blocked) {
      show(projectButton, false);
      show(sign, true);
      if (cur.blocked === 'level') html(sign, 'Upgrade to unlock<br>--more projects--');
      else if (cur.p.id === 'pagefold1') html(sign, 'Your artists are drawing back the trees: ' +
        fmt(S.drawing * S.stats.treesUsed) + ' of ' + fmt(S.stats.treesUsed) + '<span class="draw-bar"><span style="width:' + (100 * S.drawing).toFixed(1) + '%"></span></span>');
      else html(sign, 'Waiting for ' + cur.p.reqText);
      return;
    }
    show(sign, false);
    show(projectButton, true);
    var p = cur.p;
    html(projectButton, '<strong>' + p.title + '</strong><br>' + p.gain + '<br><span class="cost">Cost: ' + E.costText(p.cost) + '</span>');
    able(projectButton, E.canAfford(S, p.cost));
  }

  // ---------------------------------------------------------------------------
  // Operation Bob Ross

  var art = {
    gather: button('', function () { E.artStep(S); }),
    design: button('', function () { E.artStep(S); }),
    paint: button('', function () { E.artStep(S); }),
    donate: button('', function () { E.artStep(S, 'donate'); }),
    sell: button('', function () { E.artStep(S, 'sell'); }),
    count: el('p', 'small')
  };
  var choices = el('div', 'art-choices');
  choices.appendChild(art.donate); choices.appendChild(art.sell);
  [art.gather, art.design, art.paint, choices, art.count].forEach(function (n) { $('art-body').appendChild(n); });

  function renderArt() {
    show($('art'), !!S.done.bobross);
    if (!S.done.bobross) return;
    var a = S.art;
    show(art.gather, a.stage === 0);
    show(art.design, a.stage === 1);
    show(art.paint, a.stage === 2);
    show($('progress'), a.stage === 3);
    show(choices, a.stage === 4);
    if (a.stage === 0) {
      html(art.gather, 'Gather supplies for artwork<br><span class="cost">Cost: ' + E.costText(E.artCost(S)) + '</span>');
      able(art.gather, E.canAfford(S, E.artCost(S)));
    } else if (a.stage === 1) {
      html(art.design, 'Brainstorm a design for the artwork<br><span class="cost">Cost: ' + E.costText(E.artCost(S)) + '</span>');
      able(art.design, E.canAfford(S, E.artCost(S)));
    } else if (a.stage === 2) {
      html(art.paint, S.emp.artist.n ? 'Begin painting artwork' : 'Begin painting artwork<br><span class="cost">(hire an artist first)</span>');
      able(art.paint, S.emp.artist.n > 0);
    } else if (a.stage === 3) {
      var pct = Math.min(100, Math.floor(a.p * 100));
      $('bar').style.width = pct + '%';
      text($('bar-text'), 'Artwork ' + pct + '% completed');
    } else {
      html(art.donate, 'Donate artwork to a museum<br><span class="cost">Gain: ' + fmt(a.rep) + ' reputation</span>');
      html(art.sell, 'Sell artwork to a private collector<br><span class="cost">Gain: $' + fmt(a.money) + '</span>');
    }
    text(art.count, a.n ? 'Paintings so far: ' + fmt(a.n) : '');
  }

  // ---------------------------------------------------------------------------
  // Elections

  var RIVAL_COLOURS = ['#6600cc', '#339966', '#996633', '#990033'];
  var bars = [], shownRace = null, rivalScores = [], frozenUntil = 0;

  function buildBars(race) {
    $('bars').innerHTML = '';
    bars = [];
    ['You'].concat(race.rivals).forEach(function (name, i) {
      var col = el('div', 'bar-col');
      var val = el('span', 'bar-val');
      var bar = el('div', 'bar-fill');
      bar.style.background = i === 0 ? '#565c70' : RIVAL_COLOURS[i - 1];
      var label = el('span', 'bar-name', name);
      col.appendChild(val); col.appendChild(bar); col.appendChild(label);
      $('bars').appendChild(col);
      bars.push({ val: val, bar: bar });
    });
    rivalScores = race.rivals.map(function () { return E.rivalScore(race); });
  }

  $('run').addEventListener('click', function () {
    var res = E.runForOffice(S);
    if (res) { rivalScores = res.scores; frozenUntil = Date.now() + 4000; }
    render();
  });

  setInterval(function () {
    var race = E.currentRace(S);
    if (race && Date.now() > frozenUntil) rivalScores = race.rivals.map(function () { return E.rivalScore(race); });
  }, 1000);

  function renderElection() {
    var race = E.currentRace(S);
    show($('election'), !!race);
    if (!race) return;
    if (shownRace !== race.id) { shownRace = race.id; buildBars(race); }
    text($('election-title'), 'Election for ' + race.title);
    var you = 1 + S.r.reputation;
    var scores = [you].concat(rivalScores);
    var top = Math.max(you, race.base * 1.25) * 1.1;
    scores.forEach(function (v, i) {
      bars[i].bar.style.height = Math.max(1, Math.min(100, 100 * v / top)) + '%';
      text(bars[i].val, fmt(v));
    });
    html($('run'), race.run + ' (salary of $' + fmt(race.salary) + '/s)<br>Whoever has the greatest reputation wins<br><span class="cost">Cost: ' + E.costText(race.cost) + '</span>');
    able($('run'), E.canAfford(S, race.cost));
  }

  // ---------------------------------------------------------------------------
  // Cranes

  $('alloc').addEventListener('input', function () { E.setAlloc(S, 100 - Number(this.value)); render(); });

  function renderCranes() {
    show($('cranes'), S.cranes > 0);
    if (S.cranes <= 0) return;
    text($('crane-count'), fmt(S.cranes));
    var room = E.craneRoom(S);
    text($('crane-room'), S.cranes >= room * 0.999 ?
      (S.sheet ? 'The sheet is full. Fold it again to make room for four times as many.' : 'There is no room for any more cranes yet.') :
      'Room for ' + fmt(room) + (S.sheet ? ' on the sheet' : ''));
    var slider = $('alloc');
    if (document.activeElement !== slider) slider.value = 100 - S.alloc;
    var rr = E.craneRates(S);
    text($('crane-rates'), S.alloc + '% folding cranes (' + rateText(rr.fold) + ') \u00b7 ' +
      (100 - S.alloc) + '% wishing (' + rateText(rr.wish) + ' paper)');
  }

  // ---------------------------------------------------------------------------
  // The Sheet

  var LANDMARKS = [
    { f: 27, t: 'Everest' }, { f: 42, t: 'Moon' }, { f: 51, t: 'Sun' }, { f: 69, t: 'Proxima' },
    { f: 83, t: 'Milky Way' }, { f: 96, t: 'Laniakea' }, { f: 103, t: 'The edge' }
  ];
  var NEXT_SIGHTS = [
    { f: 7, t: 'the folklore limit' }, { f: 13, t: "Britney Gallivan's world record" }, { f: 14, t: 'your own height' },
    { f: 23, t: 'the Burj Khalifa' }, { f: 27, t: 'Mount Everest' }, { f: 30, t: 'space' },
    { f: 32, t: 'the International Space Station' }, { f: 42, t: 'the Moon' }, { f: 49, t: 'Mars' },
    { f: 51, t: 'the Sun' }, { f: 53, t: 'Jupiter' }, { f: 56, t: 'Neptune' }, { f: 58, t: 'Voyager 1' },
    { f: 62, t: 'the Oort Cloud' }, { f: 69, t: 'Proxima Centauri' }, { f: 83, t: 'the far side of the Milky Way' },
    { f: 88, t: 'Andromeda' }, { f: 96, t: 'the Laniakea Supercluster' }, { f: 103, t: 'the edge of the observable universe (and the page)' }
  ];
  LANDMARKS.forEach(function (m, i) {
    var mark = el('span', 'mark' + (i % 2 ? ' low' : ''), m.t);
    mark.style.left = (100 * m.f / E.MAX_FOLDS) + '%';
    $('ruler-marks').appendChild(mark);
  });

  $('fold').addEventListener('click', function () { E.fold(S); render(); });
  $('autofold').addEventListener('change', function () { S.autofoldOn = this.checked; });

  function renderSheet() {
    show($('sheet'), !!S.sheet);
    if (!S.sheet) return;
    text($('folds'), S.fold);
    text($('thick'), E.thickness(S.fold));
    $('ruler-fill').style.width = (100 * S.fold / E.MAX_FOLDS) + '%';
    var next = NEXT_SIGHTS.filter(function (m) { return m.f > S.fold; })[0];
    text($('next-mark'), next ? 'Next: ' + next.t + ' at ' + next.f + ' folds' : 'There is nowhere further to go.');
    var b = $('fold');
    if (S.fold >= E.MAX_FOLDS) {
      html(b, "It won't fold any further");
      able(b, false);
    } else {
      html(b, 'Fold the sheet in half<br><span class="cost">Cost: ' + fmt(E.foldCost(S.fold + 1), 'ceil') + ' paper</span>');
      able(b, S.r.paper >= E.foldCost(S.fold + 1));
    }
    show($('autofold-row'), !!S.autofold);
    if (S.autofold) $('autofold').checked = !!S.autofoldOn;
    renderAtlas();
  }

  var VISIT = { moon: 'visitmoon', mars: 'visitmars', sun: 'visitsun', jupiter: 'visitjupiter', voyager: 'visitvoyager',
                proxima: 'pinhole', milkyway: 'visitmilkyway', andromeda: 'visitandromeda', laniakea: 'visitlaniakea', edge: 'margin' };
  var atlasShown = -1;
  function renderAtlas() {
    var seen = E.placesSeen(S);
    var key = seen.length * 100 + seen.filter(function (p) { return S.done[VISIT[p.id]]; }).length;
    show($('atlas-box'), seen.length > 0);
    if (key === atlasShown) return;
    atlasShown = key;
    var list = $('atlas');
    list.innerHTML = '';
    seen.slice().reverse().forEach(function (p) {
      var li = el('li', S.done[VISIT[p.id]] ? 'visited' : '');
      li.appendChild(el('strong', '', p.name));
      li.appendChild(document.createTextNode(' (' + p.fold + ' folds) ' + p.seen + (S.done[VISIT[p.id]] ? ' Visited.' : '')));
      list.appendChild(li);
    });
  }

  // ---------------------------------------------------------------------------
  // Employees

  var empRows = {};
  E.EMPLOYEES.forEach(function (e) {
    var row = el('div', 'emp');
    var b = button('hire', function () { E.hire(S, e.id); });
    var have = el('span', 'have');
    var pause = el('button', 'toggle');
    pause.type = 'button';
    pause.addEventListener('click', function () { S.paused[e.id] = !S.paused[e.id]; render(); });
    row.appendChild(b); row.appendChild(have); row.appendChild(pause);
    $('staff-list').appendChild(row);
    empRows[e.id] = { row: row, b: b, have: have, pause: pause };
  });

  function renderEmployees() {
    var any = false;
    var each = S.done.hr && S.hrMax ? ' (as many as you can)' : S.done.hiring && S.hireCount > 1 ? ' (×' + S.hireCount + ')' : '';
    E.EMPLOYEES.forEach(function (e) {
      var r = empRows[e.id], st = S.emp[e.id];
      var on = E.employeeShown(S, e);
      show(r.row, on);
      if (!on) return;
      any = true;
      html(r.b, e.name + each + '<br><span class="cost">Cost: $' + fmt(st.cost, 'ceil') + ' + ' + fmt(st.kcost, 'ceil') +
        ' knowledge</span><span class="tip">' + e.does + '</span>');
      able(r.b, S.r.money >= st.cost && S.r.knowledge >= st.kcost);
      text(r.have, 'You have ' + fmt(st.n));
      var canPause = S.done.ceo && !e.noPause && st.n > 0;
      show(r.pause, canPause);
      if (canPause) {
        text(r.pause, S.paused[e.id] ? 'on a break' : 'working');
        r.pause.classList.toggle('off', !!S.paused[e.id]);
        r.pause.title = S.paused[e.id] ? 'Put them back to work' : 'Give them a break';
      }
    });
    show($('employees'), any);
  }

  // ---------------------------------------------------------------------------
  // Executives

  var ex = {};
  (function buildExecs() {
    var list = $('exec-list');
    function row(id) { var r = el('div', 'exec'); r.id = 'exec-' + id; list.appendChild(r); ex[id] = r; return r; }

    row('staff').innerHTML = 'Chief of Staff: <span></span> employees';

    var h = row('hiring');
    h.appendChild(document.createTextNode('Chief of Hiring: '));
    var less = el('button', 'tiny', '&lt;'); less.type = 'button';
    var count = el('span', 'count');
    var more = el('button', 'tiny', '&gt;'); more.type = 'button';
    less.addEventListener('click', function () { E.setHireCount(S, S.hireCount - 1); render(); });
    more.addEventListener('click', function () { E.setHireCount(S, S.hireCount + 1); render(); });
    h.appendChild(less); h.appendChild(count); h.appendChild(more);
    h.appendChild(document.createTextNode(' at a time'));

    var hr = row('hr');
    hr.innerHTML = '<label class="check"><input type="checkbox"> Chief of Human Resources: hire as many as you can afford</label>';
    hr.querySelector('input').addEventListener('change', function () { S.hrMax = this.checked; render(); });

    row('productivity').innerHTML = 'Chief of Productivity: <span></span>%';

    var pr = row('production');
    pr.appendChild(document.createTextNode('Chief of Production: '));
    var improve = el('button', 'btn small-btn'); improve.type = 'button';
    improve.addEventListener('click', function () { E.improveProductivity(S); render(); });
    pr.appendChild(improve);

    var inn = row('innovation');
    inn.innerHTML = '<label class="check"><input type="checkbox"> Chief of Innovation: Innovate</label><span class="small"></span>';
    inn.querySelector('input').addEventListener('change', function () { S.innovating = this.checked; render(); });

    row('coo').innerHTML = 'Chief Operating Officer: <span></span>';
  })();

  function renderExecs() {
    var any = false;
    E.EXECUTIVES.forEach(function (id) { show(ex[id], !!S.done[id]); if (S.done[id]) any = true; });
    show($('executives'), any);
    if (!any) return;
    if (S.done.staff) text(ex.staff.querySelector('span'), fmt(E.staffCount(S)));
    if (S.done.hiring) text(ex.hiring.querySelector('.count'), ' ' + S.hireCount + ' ');
    if (S.done.hr) ex.hr.querySelector('input').checked = !!S.hrMax;
    if (S.done.productivity) text(ex.productivity.querySelector('span'), fmt(100 * E.productivity(S)));
    if (S.done.production) {
      var b = ex.production.querySelector('button');
      html(b, 'Improve by 5%<br><span class="cost">Cost: $' + fmt(S.prodCost, 'ceil') + '</span>');
      able(b, S.r.money >= S.prodCost);
    }
    if (S.done.innovation) {
      ex.innovation.querySelector('input').checked = !!S.innovating;
      text(ex.innovation.querySelector('.small'), S.innovating ?
        'Everyone has stopped work to daydream: ' + rateText(E.imaginationRate(S)) + ' imagination' :
        'Ticking this stops all work, and everyone daydreams up imagination instead');
    }
    if (S.done.coo) {
      var keep = E.reserve(S);
      text(ex.coo.querySelector('span'), Object.keys(keep).length ? 'keeping back ' + E.costText(keep) : 'nothing to keep back right now');
    }
  }

  // ---------------------------------------------------------------------------
  // The log

  var shownTop = null;
  function renderLog() {
    if (S.log[0] === shownTop) return;
    shownTop = S.log[0];
    var list = $('log');
    list.innerHTML = '';
    S.log.slice(0, 6).forEach(function (entry) { list.appendChild(el('li', '', '')).textContent = entry.text; });
  }

  // ---------------------------------------------------------------------------
  // Wishes and endings

  var modalFor = null;
  function openModal(key, title, bodyHtml, buttons) {
    if (modalFor === key) return;
    modalFor = key;
    text($('modal-title'), title);
    $('modal-body').innerHTML = bodyHtml;
    var box = $('modal-buttons');
    box.innerHTML = '';
    buttons.forEach(function (b) {
      var btn = el('button', 'btn', b.label);
      btn.type = 'button';
      btn.addEventListener('click', function () { b.go(); closeModal(); render(); save(); });
      box.appendChild(btn);
    });
    show($('modal'), true);
    setTimeout(function () { var first = box.querySelector('button'); if (first) first.focus(); }, 50);
  }
  function closeModal() { modalFor = null; show($('modal'), false); }

  function startAgain(fresh) {
    S = fresh ? E.newState() : E.turnPage(S);
    lastSample = null; rates = {}; shownTop = null; shownRace = null; atlasShown = -1;
    save();
  }

  function stats() {
    var won = ['mayor', 'premier', 'pm'].filter(function (k) { return S.won[k]; }).length;
    return '<p class="stats">You played for ' + duration(S.stats.time) + '. You made ' + fmt(S.stats.paperMade) +
      ' paper, folded the sheet ' + S.fold + ' times, folded ' + fmt(S.stats.cranesFolded + 1000) + ' cranes, painted ' +
      fmt(S.stats.paintings) + ' pictures, won ' + won + ' elections' +
      (S.drawing >= 1 ? ', and drew back ' + fmt(S.stats.treesUsed) + ' trees' : '') + '.</p>';
  }

  function shelf() {
    if (S.shelf.length < 2) return '';
    return '<p class="small">Pages so far: ' + S.shelf.map(function (p) {
      return 'page ' + p.page + ' (' + duration(p.time) + ')';
    }).join(', ') + '</p>';
  }

  function renderModal() {
    if (S.pending === 'firstwish') {
      openModal('firstwish', 'A thousand paper cranes',
        '<p>The children of Papertown have folded a thousand paper cranes. Legend says whoever folds a thousand cranes is granted one wish.</p>' +
        '<p>The cranes are looking at you, expectantly.</p>',
        [{ label: 'I wish for world peace', go: function () { E.wish(S, 'peace'); } },
         { label: 'I wish for a pony', go: function () { E.wish(S, 'pony'); } },
         { label: 'I wish for more paper', go: function () { E.wish(S, 'paper'); } }]);
    } else if (S.pending === 'lastwish') {
      openModal('lastwish', 'The last crane',
        '<p>On the seventh fold, the page becomes a paper crane: the last one, folded out of everything you ever made. The company, the paintings, Papertown, the elections, the library and the sky are all in there somewhere.</p>' +
        '<p>A thousand cranes earns a wish. You have folded ' + fmt(S.stats.cranesFolded + 1000) + '. This one is waiting.</p>',
        [{ label: 'I wish for a happy ending', go: function () { E.wish(S, 'ending'); } },
         { label: 'I wish for more paper', go: function () { E.wish(S, 'more'); } }]);
    } else if (S.ended === 'ending') {
      openModal('ending', 'The End',
        '<p>The crane hops off the desk, flaps once, which is a strange thing for paper to do, and flies out of the open window.</p>' +
        '<p>The lamp clicks off.</p>' +
        '<p>In the morning a kid finds a crumpled sheet of paper on the desk, with a great many very small trees drawn in one corner. They smooth it out flat, and start to draw.</p>' +
        stats() + shelf() + '<p>Thanks for playing.</p>',
        [{ label: 'Turn the page<br><span class="cost">Start again, with everything working twice as hard</span>', go: function () { startAgain(false); } },
         { label: 'Start from scratch', go: function () { startAgain(true); } }]);
    } else if (S.ended === 'more') {
      openModal('more', 'And there was more paper',
        '<p>The crane nods, and unfolds, and keeps on unfolding, until it is a page again. Then a hand you can only just see turns it over.</p>' +
        '<p>The other side is blank, and white, and waiting. This was only page ' + S.page + '.</p>' + stats() + shelf(),
        [{ label: 'Turn the page<br><span class="cost">Page ' + (S.page + 1) + ': everything works ' + fmt(Math.pow(2, S.creases + 1)) + ' times as hard</span>',
           go: function () { startAgain(false); } }]);
    } else if (modalFor) {
      closeModal();
    }
  }

  // ---------------------------------------------------------------------------
  // Everything, ten times a second

  function render() {
    renderResources();
    renderManual();
    renderLevel();
    renderProjects();
    renderArt();
    renderElection();
    renderCranes();
    renderSheet();
    renderEmployees();
    renderExecs();
    renderLog();
    renderModal();
    var pf = S.pageFolds || 0;
    if (document.body.getAttribute('data-folds') !== String(pf)) document.body.setAttribute('data-folds', pf);
    var page = $('page-no');
    show(page, S.page > 1);
    if (S.page > 1) text(page, 'Page ' + S.page + ' · everything works ' + fmt(E.creaseMult(S)) + ' times as hard');
  }

  var paused = false;
  var last = performance.now();
  setInterval(function () {
    var now = performance.now();
    var dt = Math.min((now - last) / 1000, 120); // a backgrounded tab catches up, within reason
    last = now;
    if (!paused) {
      while (dt > 0) { var step = Math.min(dt, 0.5); E.tick(S, step); dt -= step; }
    }
    sampleRates();
    render();
  }, 100);

  setInterval(save, 5000);
  window.addEventListener('pagehide', save);
  document.addEventListener('visibilitychange', function () { if (document.hidden) save(); });

  $('reset').addEventListener('click', function () {
    if (confirm('Start over from scratch? Everything you have made will be gone.')) { startAgain(true); render(); }
  });

  // ---------------------------------------------------------------------------
  // The keys. Cheat at your own peril.

  function reveal(id) {
    var img = $(id).querySelector('img[data-src]');
    if (img) { img.src = img.getAttribute('data-src'); img.removeAttribute('data-src'); }
    show($(id), true);
  }

  function togglePause() {
    paused = !paused;
    if (paused) reveal('paused'); else show($('paused'), false);
  }
  $('paused').addEventListener('click', togglePause);
  $('rick').addEventListener('click', function () { show($('rick'), false); });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') { // holding Enter on a button clicks it for you. Not allowed.
      event.preventDefault();
      E.demise(S);
      alert('You may not press the Enter button. Doing so will result in your immediate demise. Have fun playing!');
    } else if (event.key === 'ArrowUp') {
      reveal('rick');
    } else if (event.key === 'Backspace') {
      event.preventDefault();
      manualButtons.paper.classList.toggle('naughty');
    } else if (event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      togglePause();
    }
  });

  render();
})();
