/*
  The Paper Game: the page. engine.js has the rules; this draws them, wires up
  the buttons, and keeps your progress in this browser.

  On a phone the game is split into tabs along the bottom (Work, Staff, Art,
  Sky); on a wider screen they sit side by side.

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
  // Sets a class on or off, touching the page only when it actually changes.
  // (classList.toggle with anything but true or false flips the class instead,
  // which made rows blink on every redraw.)
  function flag(node, cls, on) { on = !!on; if (node.classList.contains(cls) !== on) node.classList.toggle(cls, on); }
  function show(node, on) { flag(node, 'hidden', !on); }
  function text(node, t) { t = String(t); if (node.textContent !== t) node.textContent = t; }
  function html(node, h) { if (node._h !== h) { node.innerHTML = h; node._h = h; } }
  function attr(node, name, value) { if (node.getAttribute(name) !== value) node.setAttribute(name, value); }
  // Whether a button looks affordable. When money hovers right around a price
  // it can be yes one moment and no the next; a button only changes once the
  // new answer has held for a moment, so it doesn't flicker. (Straight after
  // you press a button, that button changes at once.)
  var pressed = null;
  function able(node, ok) {
    var now = Date.now();
    if (node._ok === undefined || node === pressed) node._ok = ok;
    if (ok === node._ok) node._since = 0;
    else if (!node._since) node._since = now;
    else if (now - node._since >= 450) { node._ok = ok; node._since = 0; }
    var shown = node._ok;
    flag(node, 'cant', !shown);
    attr(node, 'aria-disabled', shown ? 'false' : 'true');
  }

  // Short numbers: 12,345 then 12.3K, 4.56M, 7.89B ... then 1.2e45
  var SUFFIX = ['K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
  function num(n, round) {
    if (!isFinite(n)) return '∞';
    if (n < 1e4) return fmt(n, round);
    var t = Math.floor(Math.log10(n) / 3);
    if (t - 1 >= SUFFIX.length) return n.toExponential(1).replace('e+', 'e');
    var v = n / Math.pow(10, t * 3);
    var s = v < 10 ? v.toFixed(2) : v < 100 ? v.toFixed(1) : v.toFixed(0);
    if (s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, '');
    return s + SUFFIX[t - 1];
  }
  var COST_NAMES = { paper: 'paper', ink: 'ink', book: 'books', knowledge: 'knowledge', tree: 'trees',
                     imagination: 'imagination', reputation: 'reputation', paperwork: 'paperwork' };
  var COST_ORDER = ['money', 'paper', 'ink', 'book', 'knowledge', 'tree', 'imagination', 'reputation', 'paperwork'];
  function cost(c) {
    return COST_ORDER.filter(function (k) { return c && c[k]; }).map(function (k) {
      return k === 'money' ? '$' + num(c[k], 'ceil') : num(c[k], 'ceil') + ' ' + COST_NAMES[k];
    }).join(' · ');
  }
  function rateText(x) {
    var a = Math.abs(x);
    return (x < 0 ? '−' : '+') + (a < 10 ? a.toFixed(1) : num(a)) + '/s';
  }
  function duration(sec) {
    sec = Math.floor(sec);
    var h = Math.floor(sec / 3600), m = Math.floor(sec / 60) % 60;
    if (h) return h + (h === 1 ? ' hour ' : ' hours ') + m + (m === 1 ? ' minute' : ' minutes');
    return m + (m === 1 ? ' minute' : ' minutes');
  }

  // Redraw on the next frame, however many taps arrive before it
  var queued = false;
  function soon() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; render(); pressed = null; });
  }

  // A quick press on every tap, restarted each time so it never falls behind.
  // It moves the button with top rather than transform or opacity: those run on
  // Chrome's compositor, which pulls the text below onto its own layer and turns
  // it grey on Windows for as long as the animation runs.
  function bump(node) {
    pressed = node;
    if (!node.animate) return;
    if (node._bump) node._bump.cancel();
    var shadow = getComputedStyle(node).boxShadow;
    node._bump = node.animate([{ top: '2px', boxShadow: 'none' }, { top: '0px', boxShadow: shadow }], { duration: 160, easing: 'ease-out' });
  }

  function button(cls, onClick) {
    var b = el('button', 'btn' + (cls ? ' ' + cls : ''));
    b.type = 'button';
    b.addEventListener('click', function (ev) { onClick(ev); bump(b); soon(); });
    return b;
  }

  // For buttons made to be hammered: act the moment a finger or mouse goes down
  function mash(b, act) {
    b.addEventListener('pointerdown', function (ev) {
      if (ev.button > 0) return;
      act(); bump(b); soon();
    });
    b.addEventListener('click', function (ev) { if (ev.detail === 0) { act(); bump(b); soon(); } }); // keyboard
    b.addEventListener('contextmenu', function (ev) { ev.preventDefault(); });
    b.addEventListener('mousedown', function (ev) { if (ev.detail > 1) ev.preventDefault(); }); // no double-click selecting
  }

  // ---------------------------------------------------------------------------
  // Resources, along the top

  var RES_ROWS = [
    { k: 'tree', label: 'Trees', lv: 1 },
    { k: 'paper', label: 'Paper', lv: 1 },
    { k: 'money', label: 'Money', lv: 2, dollars: true },
    { k: 'knowledge', label: 'Knowledge', lv: 2 },
    { k: 'ink', label: 'Ink', lv: 3 },
    { k: 'book', label: 'Books', lv: 4 },
    { k: 'imagination', label: 'Imagination', lv: 9 },
    { k: 'reputation', label: 'Reputation', lv: 10 },
    { k: 'paperwork', label: 'Paperwork', lv: 11 },
    { k: 'cranes', label: 'Cranes', lv: 14 }
  ];
  var rates = {}, lastSample = null, lastSampleT = 0;

  RES_ROWS.forEach(function (row) {
    row.box = el('div', 'res');
    row.box.appendChild(el('dt', '', row.label));
    row.val = el('dd', 'val');
    row.rate = el('dd', 'rate');
    row.box.appendChild(row.val);
    row.box.appendChild(row.rate);
    $('resources').appendChild(row.box);
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
      show(row.box, on);
      if (!on) return;
      var v = a[row.k];
      text(row.val, (row.dollars ? '$' : '') + num(v, row.k === 'tree' ? 'ceil' : undefined));
      var r = rates[row.k] || 0;
      text(row.rate, Math.abs(r) >= 0.05 && Math.abs(r) >= v * 1e-6 ? rateText(r) : '');
      flag(row.rate, 'down', r < 0);
    });
  }

  // ---------------------------------------------------------------------------
  // The news: each new line pops up on a slip of paper for a few seconds, then
  // goes. They queue up rather than talk over each other.

  var toast = $('toast'), newsSeen = null, newsQueue = [], newsUntil = 0;
  toast.addEventListener('click', function () { newsUntil = 0; pumpNews(); });

  function catchUpNews(replay) {
    newsSeen = replay ? null : S.log[0];
    newsQueue = [];
    newsUntil = 0;
  }

  function collectNews() {
    var fresh = [];
    for (var i = 0; i < S.log.length && S.log[i] !== newsSeen; i++) fresh.push(S.log[i].text);
    newsSeen = S.log[0];
    if (!fresh.length) return;
    newsQueue = newsQueue.concat(fresh.reverse()).slice(-4); // a burst only shows its last few
  }

  function pumpNews() {
    var now = Date.now();
    if (now < newsUntil) return;
    if (!newsQueue.length) { flag(toast, 'show', false); return; }
    var line = newsQueue.shift();
    text(toast, line);
    flag(toast, 'show', true);
    var stay = Math.min(8000, Math.max(3200, 2200 + line.length * 45));
    newsUntil = now + (newsQueue.length ? Math.min(stay, 3000) : stay);
  }

  // A popup for something you just did: it goes ahead of the queue
  function say(line) {
    newsQueue.unshift(line);
    newsUntil = 0;
    pumpNews();
  }

  function renderNews() {
    collectNews();
    pumpNews();
  }

  // ---------------------------------------------------------------------------
  // Little question marks (phones only): a tap opens what hovering shows on a
  // laptop, and a tap anywhere else closes it

  var tip = el('div', 'tip'), tipFor = null;
  tip.setAttribute('role', 'tooltip');
  document.body.appendChild(tip);

  function closeTip() {
    if (!tipFor) return;
    flag(tip, 'show', false);
    attr(tipFor, 'aria-expanded', 'false');
    tipFor = null;
  }

  function openTip(q, words) {
    closeTip();
    tip.textContent = words;
    flag(tip, 'show', true);
    var r = q.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    var bottom = window.innerHeight - ($('tabs').classList.contains('hidden') ? 0 : $('tabs').offsetHeight);
    var top = r.bottom + 8 + h <= bottom - 8 ? r.bottom + 8 : r.top - 8 - h;
    var left = Math.min(Math.max(12, r.left + r.width / 2 - w / 2), window.innerWidth - w - 12);
    tip.style.top = Math.round(top) + 'px';
    tip.style.left = Math.round(left) + 'px';
    attr(q, 'aria-expanded', 'true');
    tipFor = q;
  }

  function helper(words) {
    var q = el('button', 'help', '?');
    q.type = 'button';
    q.setAttribute('aria-label', 'What is this?');
    q.setAttribute('aria-expanded', 'false');
    q.addEventListener('click', function (ev) {
      ev.stopPropagation();
      if (tipFor === q) closeTip(); else openTip(q, typeof words === 'function' ? words() : words);
    });
    return q;
  }

  document.addEventListener('pointerdown', function (ev) {
    if (tipFor && ev.target !== tipFor && ev.target !== tip) closeTip();
  }, true);
  window.addEventListener('scroll', closeTip, { passive: true });
  window.addEventListener('resize', closeTip);

  // ---------------------------------------------------------------------------
  // Doing it yourself

  var MANUAL_SHORT = { paper: 'Make paper', sell: 'Sell paper', ink: 'Steal ink', book: 'Make a book', knowledge: 'Read a book', tree: 'Plant a tree' };
  var manualButtons = {};
  E.MANUAL.forEach(function (a) {
    var b = el('button', 'btn manual-btn');
    b.type = 'button';
    b.id = 'manual-' + a.id;
    b.innerHTML = '<span class="label"><span class="long">' + a.label + '</span><span class="short">' + MANUAL_SHORT[a.id] + '</span></span><span class="cost"></span>';
    mash(b, function () { E.click(S, a.id); });
    manualButtons[a.id] = b;
    $('manual').appendChild(b);
  });

  function manualCost(id) {
    if (id === 'paper') return '1/100 of a tree';
    if (id === 'sell') return '$' + S.sellprice + ' each';
    if (id === 'ink') return '$1 each';
    if (id === 'book') return S.bookpaper + ' paper · ' + S.bookink + ' ink';
    if (id === 'knowledge') return '1 book → ' + fmt(S.ke);
    return '$100 · 5 knowledge';
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
    var any = 0;
    E.MANUAL.forEach(function (a) {
      var b = manualButtons[a.id], on = E.manualShown(S, a);
      show(b, on);
      if (!on) return;
      any++;
      text(b.querySelector('.cost'), manualCost(a.id));
      able(b, manualPossible(a.id));
    });
    show($('manual'), any > 0);
    // a grid with no gaps: 1 button is full width, 4 make two pairs, and so on
    var m = $('manual');
    var cd = String(Math.max(1, any)), cm = String(any <= 3 ? any : any === 4 ? 2 : 3);
    if (m.style.getPropertyValue('--cd') !== cd) m.style.setProperty('--cd', cd);
    if (m.style.getPropertyValue('--cm') !== cm) m.style.setProperty('--cm', cm);
  }

  // ---------------------------------------------------------------------------
  // Levels and projects

  var levelUp = $('level-up');
  levelUp.addEventListener('click', function () { E.levelUp(S); bump(levelUp); soon(); });

  function titleFor() {
    if (S.done.behind) return 'somewhere behind the page';
    if (S.level >= 20) return 'Chairperson of Everything';
    if (S.level >= 19) return 'Chairperson of the Galaxy';
    if (S.level >= 17) return 'Chairperson of the Solar System';
    if (S.level >= 16) return 'Chairperson of the Earth and Moon';
    if (S.level >= 15) return 'Chairperson of the Earth';
    if (S.won.pm) return 'Prime Minister';
    if (S.won.premier) return 'Premier';
    if (S.won.mayor) return S.done.papertown ? 'Mayor of Papertown' : 'Mayor';
    return '';
  }

  function levelNeeds(n) {
    var L = E.LEVELS[n], parts = [];
    if (L.need) parts.push(cost(L.need));
    if (L.condText) parts.push(L.condText);
    return parts.join(' · ');
  }

  function renderLevel() {
    text($('level'), S.level);
    text($('title'), titleFor());
    var next = S.level + 1;
    show(levelUp, next <= E.MAX_LEVEL);
    if (next <= E.MAX_LEVEL) {
      html(levelUp, 'Upgrade to Level ' + next + '<span class="cost">' + levelNeeds(next) + '</span>');
      able(levelUp, E.canLevel(S));
      flag(levelUp, 'ready', E.canLevel(S));
    }
  }

  var projectButton = $('project');
  projectButton.addEventListener('click', function () { E.buyProject(S); bump(projectButton); soon(); });

  function renderProjects() {
    show($('projects'), S.level >= 2);
    var cur = E.currentProject(S);
    var sign = $('sign');
    if (!cur) { show(projectButton, false); show(sign, false); return; }
    if (cur.blocked) {
      show(projectButton, false);
      show(sign, true);
      if (cur.blocked === 'level') html(sign, 'More at Level ' + cur.p.lv);
      else if (cur.p.id === 'pagefold1') html(sign, 'Your artists are drawing back the trees: ' +
        num(S.drawing * S.stats.treesUsed) + ' of ' + num(S.stats.treesUsed) +
        '<span class="draw-bar"><span style="width:' + (100 * S.drawing).toFixed(1) + '%"></span></span>');
      else html(sign, 'Waiting for ' + cur.p.reqText);
      return;
    }
    show(sign, false);
    show(projectButton, true);
    var p = cur.p;
    html(projectButton, '<span class="label">' + p.title + '</span><span class="gain">' + p.gain + '</span><span class="cost">' + cost(p.cost) + '</span>');
    able(projectButton, E.canAfford(S, p.cost));
    flag(projectButton, 'ready', E.canAfford(S, p.cost));
  }

  // ---------------------------------------------------------------------------
  // Operation Bob Ross: one button that changes as the painting comes along

  var artStep = button('', function () { E.artStep(S); });
  var choices = el('div', 'pair');
  var donate = button('', function () { E.artStep(S, 'donate'); });
  var sell = button('', function () { E.artStep(S, 'sell'); });
  choices.appendChild(donate); choices.appendChild(sell);
  $('art-body').appendChild(artStep);
  $('art-body').appendChild(choices);

  function renderArt() {
    show($('art'), !!S.done.bobross);
    if (!S.done.bobross) return;
    var a = S.art;
    show(artStep, a.stage <= 2);
    show($('progress'), a.stage === 3);
    show(choices, a.stage === 4);
    if (a.stage === 0) {
      html(artStep, 'Gather supplies<span class="cost">' + cost(E.artCost(S)) + '</span>');
      able(artStep, E.canAfford(S, E.artCost(S)));
    } else if (a.stage === 1) {
      html(artStep, 'Brainstorm a design<span class="cost">' + cost(E.artCost(S)) + '</span>');
      able(artStep, E.canAfford(S, E.artCost(S)));
    } else if (a.stage === 2) {
      html(artStep, 'Paint it' + (S.emp.artist.n ? '' : '<span class="cost">hire an artist first</span>'));
      able(artStep, S.emp.artist.n > 0);
    } else if (a.stage === 3) {
      var pct = Math.min(100, Math.floor(a.p * 100));
      $('bar').style.width = pct + '%';
      text($('bar-text'), pct + '%');
    } else {
      html(donate, 'Donate<span class="cost">+' + num(a.rep) + ' reputation</span>');
      html(sell, 'Sell<span class="cost">+$' + num(a.money) + '</span>');
    }
    text($('art-count'), a.n ? fmt(a.n) + (a.n === 1 ? ' painting so far' : ' paintings so far') : '');
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
      var track = el('div', 'bar-track');
      var val = el('span', 'bar-val');
      var bar = el('div', 'bar-fill');
      bar.style.background = i === 0 ? '#565c70' : RIVAL_COLOURS[i - 1];
      track.appendChild(val); track.appendChild(bar);
      col.appendChild(track); col.appendChild(el('span', 'bar-name', name));
      $('bars').appendChild(col);
      bars.push({ val: val, bar: bar });
    });
    rivalScores = race.rivals.map(function () { return E.rivalScore(race); });
  }

  var runButton = $('run');
  runButton.addEventListener('click', function () {
    var res = E.runForOffice(S);
    if (res) { rivalScores = res.scores; frozenUntil = Date.now() + 4000; }
    bump(runButton); soon();
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
      text(bars[i].val, num(v));
    });
    html(runButton, race.run + '<span class="gain">Most reputation wins · $' + num(race.salary) + '/s salary</span><span class="cost">' + cost(race.cost) + '</span>');
    able(runButton, E.canAfford(S, race.cost));
  }

  // ---------------------------------------------------------------------------
  // Cranes

  $('alloc').addEventListener('input', function () { E.setAlloc(S, 100 - Number(this.value)); soon(); });

  function renderCranes() {
    show($('cranes'), S.cranes > 0);
    if (S.cranes <= 0) return;
    var full = S.cranes >= E.craneRoom(S) * 0.999;
    text($('crane-count'), num(S.cranes) + (full ? ', no room for more' : ''));
    var slider = $('alloc');
    if (document.activeElement !== slider) slider.value = 100 - S.alloc;
    var rr = E.craneRates(S);
    text($('crane-rates'), full && S.sheet ? 'No room for more. Fold the sheet to make some.' :
      rateText(rr.fold) + ' cranes · ' + rateText(rr.wish) + ' paper');
  }

  // ---------------------------------------------------------------------------
  // The Sheet

  var LANDMARKS = [
    { f: 27, t: 'Everest' }, { f: 42, t: 'Moon' }, { f: 51, t: 'Sun' }, { f: 69, t: 'Proxima' },
    { f: 83, t: 'Milky Way' }, { f: 103, t: 'The edge' }
  ];
  var NEXT_SIGHTS = [
    { f: 7, t: 'the folklore limit' }, { f: 13, t: 'the world record' }, { f: 14, t: 'your height' },
    { f: 23, t: 'the Burj Khalifa' }, { f: 27, t: 'Everest' }, { f: 30, t: 'space' },
    { f: 32, t: 'the ISS' }, { f: 42, t: 'the Moon' }, { f: 49, t: 'Mars' },
    { f: 51, t: 'the Sun' }, { f: 53, t: 'Jupiter' }, { f: 56, t: 'Neptune' }, { f: 58, t: 'Voyager 1' },
    { f: 62, t: 'the Oort Cloud' }, { f: 69, t: 'Proxima Centauri' }, { f: 83, t: 'across the Milky Way' },
    { f: 88, t: 'Andromeda' }, { f: 96, t: 'Laniakea' }, { f: 103, t: 'the edge' }
  ];
  LANDMARKS.forEach(function (m, i) {
    var mark = el('span', 'mark' + (i % 2 ? ' low' : ''), m.t);
    mark.style.left = (100 * m.f / E.MAX_FOLDS) + '%';
    $('ruler-marks').appendChild(mark);
  });

  var foldButton = $('fold');
  foldButton.addEventListener('click', function () { E.fold(S); bump(foldButton); soon(); });
  $('autofold').addEventListener('change', function () { S.autofoldOn = this.checked; });

  function renderSheet() {
    show($('sheet'), !!S.sheet);
    if (!S.sheet) return;
    text($('folds'), S.fold);
    var next = NEXT_SIGHTS.filter(function (m) { return m.f > S.fold; })[0];
    text($('thick'), E.thickness(S.fold) + ' thick' + (next ? ' · next: ' + next.t + ' at ' + next.f : ''));
    $('ruler-fill').style.width = (100 * S.fold / E.MAX_FOLDS) + '%';
    if (S.fold >= E.MAX_FOLDS) {
      html(foldButton, "It won't fold any further");
      able(foldButton, false);
    } else {
      html(foldButton, 'Fold it in half<span class="cost">' + num(E.foldCost(S.fold + 1), 'ceil') + ' paper</span>');
      able(foldButton, S.r.paper >= E.foldCost(S.fold + 1));
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
      li.appendChild(document.createTextNode(' ' + p.seen));
      list.appendChild(li);
    });
  }

  // ---------------------------------------------------------------------------
  // Staff: one line each

  var SHORT_NAMES = { paper: 'Friends', money: 'Salesmen', ink: 'Squids', book: 'Presses', knowledge: 'Librarians',
                      tree: 'Tree farmers', artist: 'Artists', servant: 'Public servants', mint: 'Banknote printers',
                      journalist: 'Journalists' };
  var empRows = {};
  E.EMPLOYEES.forEach(function (e) {
    var row = el('div', 'emp');
    row.title = e.name + ': ' + e.does;
    var info = el('div', 'emp-info', '<span class="emp-name">' + SHORT_NAMES[e.id] + '</span> <span class="emp-n"></span>' +
      '<span class="emp-cost"></span><span class="emp-does">' + e.does + '</span>');
    info.insertBefore(helper(e.name + '. ' + e.does + '.'), info.querySelector('.emp-cost'));
    var pause = el('button', 'toggle');
    pause.type = 'button';
    pause.addEventListener('click', function () { S.paused[e.id] = !S.paused[e.id]; bump(pause); soon(); });
    var hire = button('hire', function () { E.hire(S, e.id); });
    row.appendChild(info); row.appendChild(pause); row.appendChild(hire);
    $('staff-list').appendChild(row);
    empRows[e.id] = { row: row, n: info.querySelector('.emp-n'), cost: info.querySelector('.emp-cost'), hire: hire, pause: pause };
  });

  function renderEmployees() {
    var any = false;
    var many = S.done.hr && S.hrMax ? 'Hire max' : S.done.hiring && S.hireCount > 1 ? 'Hire ' + S.hireCount : 'Hire';
    E.EMPLOYEES.forEach(function (e) {
      var r = empRows[e.id], st = S.emp[e.id];
      var on = E.employeeShown(S, e);
      show(r.row, on);
      if (!on) return;
      any = true;
      text(r.n, st.n ? '×' + num(st.n) : '');
      text(r.hire, many);
      text(r.cost, '$' + num(st.cost, 'ceil') + ' · ' + num(st.kcost, 'ceil') + ' knowledge');
      able(r.hire, S.r.money >= st.cost && S.r.knowledge >= st.kcost);
      var canPause = S.done.ceo && !e.noPause && st.n > 0;
      flag(r.pause, 'invisible', !canPause);
      var off = !!S.paused[e.id];
      text(r.pause, off ? '▶' : '❚❚');
      flag(r.pause, 'off', off);
      flag(r.row, 'resting', canPause && off);
      attr(r.pause, 'aria-label', off ? 'Put the ' + SHORT_NAMES[e.id].toLowerCase() + ' back to work' : 'Give the ' + SHORT_NAMES[e.id].toLowerCase() + ' a break');
    });
    show($('employees'), any);
  }

  // ---------------------------------------------------------------------------
  // Executives: what each one lets you do, and not much else

  var ex = {};
  var phone = window.matchMedia('(max-width: 700px)');
  (function buildExecs() {
    var list = $('exec-list');
    function row(id, label, help) {
      var r = el('div', 'exec');
      r.title = help;
      var name = el('span', 'exec-name', label);
      name.appendChild(helper(help));
      r.appendChild(name);
      var right = el('span', 'exec-ctl');
      r.appendChild(right);
      list.appendChild(r);
      ex[id] = { row: r, ctl: right };
      return right;
    }

    row('staff', 'Staff', 'Everyone on the payroll, executives included.').appendChild(el('span', 'v'));

    var h = row('hiring', 'Hire at a time', 'How many people each Hire button takes on in one tap.');
    var less = el('button', 'tiny', '−'); less.type = 'button'; less.setAttribute('aria-label', 'Fewer');
    var count = el('span', 'count');
    var more = el('button', 'tiny', '+'); more.type = 'button'; more.setAttribute('aria-label', 'More');
    less.addEventListener('click', function () { E.setHireCount(S, S.hireCount - 1); bump(less); soon(); });
    more.addEventListener('click', function () { E.setHireCount(S, S.hireCount + 1); bump(more); soon(); });
    h.appendChild(less); h.appendChild(count); h.appendChild(more);

    var hr = row('hr', 'Hire as many as I can afford', 'Hire buttons take on as many people as you can pay for in one tap.');
    var hrBox = el('input'); hrBox.type = 'checkbox'; hrBox.setAttribute('aria-label', 'Hire as many as I can afford');
    hrBox.addEventListener('change', function () { S.hrMax = this.checked; soon(); });
    hr.appendChild(hrBox);

    row('productivity', 'Productivity', 'How hard everyone works. 100% is normal.').appendChild(el('span', 'v'));

    var improve = el('button', 'btn small-btn'); improve.type = 'button';
    improve.addEventListener('click', function () { E.improveProductivity(S); bump(improve); soon(); });
    row('production', 'Everyone works 5% harder', 'Pay to make every member of staff 5% faster, for good. It costs more each time.').appendChild(improve);

    var inn = row('innovation', 'Innovate', 'Everyone stops their usual work and daydreams up imagination instead. Untick to put them back to work.');
    var innBox = el('input'); innBox.type = 'checkbox'; innBox.setAttribute('aria-label', 'Innovate');
    innBox.addEventListener('change', function () {
      S.innovating = this.checked;
      if (S.innovating && phone.matches) say('Everyone is daydreaming: ' + rateText(E.imaginationRate(S)) + ' imagination');
      soon();
    });
    inn.appendChild(innBox);
    ex.innovation.note = el('p', 'small exec-note');
    ex.innovation.row.after(ex.innovation.note);

    row('coo', 'Keeping back', 'Your COO holds this back so staff don\'t use up what you need for your next level, project or painting.').appendChild(el('span', 'v'));
  })();

  function renderExecs() {
    var any = false;
    E.EXECUTIVES.forEach(function (id) {
      show(ex[id].row, !!S.done[id]);
      if (S.done[id]) any = true;
    });
    show(ex.innovation.note, !!S.done.innovation);
    show($('executives'), any);
    if (!any) return;
    if (S.done.staff) text(ex.staff.ctl.querySelector('.v'), num(E.staffCount(S)));
    if (S.done.hiring) text(ex.hiring.ctl.querySelector('.count'), S.hireCount);
    if (S.done.hr) ex.hr.ctl.querySelector('input').checked = !!S.hrMax;
    if (S.done.productivity) text(ex.productivity.ctl.querySelector('.v'), num(100 * E.productivity(S)) + '%');
    if (S.done.production) {
      var b = ex.production.ctl.querySelector('button');
      text(b, '$' + num(S.prodCost, 'ceil'));
      able(b, S.r.money >= S.prodCost);
    }
    if (S.done.innovation) {
      ex.innovation.ctl.querySelector('input').checked = !!S.innovating;
      text(ex.innovation.note, S.innovating ? 'Everyone is daydreaming: ' + rateText(E.imaginationRate(S)) + ' imagination' :
        'Stops all work; everyone daydreams up imagination instead');
    }
    if (S.done.coo) {
      var keep = E.reserve(S);
      text(ex.coo.ctl.querySelector('.v'), Object.keys(keep).length ? cost(keep) : 'nothing');
    }
  }

  // ---------------------------------------------------------------------------
  // Tabs (phones only; wide screens show everything)

  var TAB_SHOWN = {
    work: function () { return true; },
    staff: function () { return S.level >= 2; },
    art: function () { return !!S.done.bobross || !!E.currentRace(S); },
    sky: function () { return S.cranes > 0; }
  };
  var TAB_DOT = {
    work: function () {
      var cur = E.currentProject(S);
      return E.canLevel(S) || !!(cur && !cur.blocked && E.canAfford(S, cur.p.cost));
    },
    staff: function () {
      return E.EMPLOYEES.some(function (e) {
        var st = S.emp[e.id];
        return E.employeeShown(S, e) && st.n === 0 && S.r.money >= st.cost && S.r.knowledge >= st.kcost;
      });
    },
    art: function () {
      var race = E.currentRace(S);
      return S.done.bobross && (S.art.stage === 4 || (S.art.stage === 2 && S.emp.artist.n > 0)) ||
        !!(race && E.canAfford(S, race.cost) && 1 + S.r.reputation > race.base * 1.2);
    },
    sky: function () {
      return !!S.sheet && !S.autofold && S.fold < E.MAX_FOLDS && S.r.paper >= E.foldCost(S.fold + 1);
    }
  };
  var tab = 'work';
  var tabButtons = Array.prototype.slice.call(document.querySelectorAll('#tabs button'));
  tabButtons.forEach(function (b) {
    b.addEventListener('click', function () {
      tab = b.getAttribute('data-go');
      closeTip();
      window.scrollTo(0, 0);
      soon();
    });
  });

  function renderTabs() {
    if (!TAB_SHOWN[tab]()) tab = 'work';
    if (document.body.getAttribute('data-tab') !== tab) document.body.setAttribute('data-tab', tab);
    var count = 0;
    tabButtons.forEach(function (b) {
      var id = b.getAttribute('data-go'), on = TAB_SHOWN[id]();
      show(b, on);
      if (on) count++;
      flag(b, 'on', id === tab);
      flag(b, 'dot', on && id !== tab && TAB_DOT[id]());
    });
    show($('tabs'), count > 1);
    flag(document.body, 'has-tabs', count > 1);
    // on wide screens, a column with nothing in it gets out of the way
    ['col-work', 'col-world', 'col-staff'].forEach(function (id) {
      var col = $(id);
      flag(col, 'empty', !col.querySelector('.panel:not(.hidden)'));
    });
    var solo = $('col-world').classList.contains('empty');
    flag(document.querySelector('.desk'), 'solo', solo);
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
    lastSample = null; rates = {}; shownRace = null; atlasShown = -1; tab = 'work';
    catchUpNews(true);
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
        [{ label: 'Turn the page<span class="cost">Start again, with everything working twice as hard</span>', go: function () { startAgain(false); } },
         { label: 'Start from scratch', go: function () { startAgain(true); } }]);
    } else if (S.ended === 'more') {
      openModal('more', 'And there was more paper',
        '<p>The crane nods, and unfolds, and keeps on unfolding, until it is a page again. Then a hand you can only just see turns it over.</p>' +
        '<p>The other side is blank, and white, and waiting. This was only page ' + S.page + '.</p>' + stats() + shelf(),
        [{ label: 'Turn the page<span class="cost">Page ' + (S.page + 1) + ': everything works ' + fmt(Math.pow(2, S.creases + 1)) + ' times as hard</span>',
           go: function () { startAgain(false); } }]);
    } else if (modalFor) {
      closeModal();
    }
  }

  // ---------------------------------------------------------------------------
  // Everything, ten times a second

  function render() {
    renderResources();
    renderNews();
    renderManual();
    renderLevel();
    renderProjects();
    renderArt();
    renderElection();
    renderCranes();
    renderSheet();
    renderEmployees();
    renderExecs();
    renderTabs();
    renderModal();
    var pf = S.pageFolds || 0;
    if (document.body.getAttribute('data-folds') !== String(pf)) document.body.setAttribute('data-folds', pf);
    var page = $('page-no');
    show(page, S.page > 1);
    if (S.page > 1) text(page, 'Page ' + S.page + ' · ×' + fmt(E.creaseMult(S)));
  }

  catchUpNews(S.stats.time < 2);

  // The game moves in even tenth-of-a-second steps, however unevenly the
  // timer fires, so a steady economy shows steady numbers. A backgrounded tab
  // catches up when you come back, within reason.
  var STEP = 0.1;
  var paused = false;
  var last = performance.now(), owed = 0;
  setInterval(function () {
    var now = performance.now();
    owed = Math.min(owed + (now - last) / 1000, 120);
    last = now;
    if (paused) owed = 0;
    while (owed > 5) { E.tick(S, 0.5); owed -= 0.5; }
    while (owed >= STEP - 1e-6) { E.tick(S, STEP); owed -= STEP; }
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
