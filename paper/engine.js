/*
  The Paper Game: the rules.

  Nothing in here touches the page, so the whole game can be played by a
  script as well as by a person (that's how it gets balanced). game.js draws
  it and wires up the buttons.
*/
(function (root) {
  'use strict';

  var SAVE_VERSION = 1;

  // ---------------------------------------------------------------------------
  // Numbers

  var BIG_NAMES = [
    'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion',
    'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion',
    'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion',
    'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion',
    'unvigintillion', 'duovigintillion', 'trevigintillion', 'quattuorvigintillion', 'quinvigintillion',
    'sexvigintillion', 'septenvigintillion', 'octovigintillion', 'novemvigintillion', 'trigintillion'
  ];

  function fmt(n, round) {
    if (!isFinite(n)) return n > 0 ? 'more than can be counted' : '0';
    if (n < 0) return '-' + fmt(-n, round);
    if (n < 1e6) {
      var v = round === 'ceil' ? Math.ceil(n - 1e-9) : Math.floor(n + 1e-9);
      return v.toLocaleString('en-US');
    }
    var tier = Math.floor(Math.log10(n) / 3) - 2;
    if (tier >= BIG_NAMES.length) return n.toExponential(2).replace('e+', 'e');
    var scaled = n / Math.pow(10, (tier + 2) * 3);
    return (scaled < 10 ? scaled.toFixed(2) : scaled < 100 ? scaled.toFixed(1) : scaled.toFixed(0)) + ' ' + BIG_NAMES[tier];
  }

  function fmtSmall(n) {
    if (n >= 100 || n === 0) return fmt(n);
    if (n >= 10) return n.toFixed(1).replace(/\.0$/, '');
    return n.toFixed(2).replace(/\.?0+$/, '');
  }

  // How thick a sheet is after n folds, starting at a tenth of a millimetre
  function thickness(n) {
    var m = 1e-4 * Math.pow(2, n);
    var ly = 9.4607e15, au = 1.496e11;
    if (m < 0.01) return fmtSmall(m * 1000) + ' mm';
    if (m < 1) return fmtSmall(m * 100) + ' cm';
    if (m < 1000) return fmtSmall(m) + ' m';
    if (m < 1e9) return fmt(m / 1000) + ' km';
    if (m < 0.05 * ly) return fmt(m / au) + ' AU';
    if (m < 1e6 * ly) return fmt(m / ly) + ' light years';
    return fmt(m / ly) + ' light years';
  }

  // ---------------------------------------------------------------------------
  // Resources

  var RES = {
    tree:        { one: 'tree', many: 'trees' },
    paper:       { one: 'paper', many: 'paper' },
    money:       { one: '$', many: '$', dollars: true },
    ink:         { one: 'ink', many: 'ink' },
    book:        { one: 'book', many: 'books' },
    knowledge:   { one: 'knowledge', many: 'knowledge' },
    imagination: { one: 'imagination', many: 'imagination' },
    reputation:  { one: 'reputation', many: 'reputation' },
    paperwork:   { one: 'paperwork', many: 'paperwork' }
  };
  var COST_ORDER = ['paper', 'ink', 'money', 'book', 'knowledge', 'tree', 'imagination', 'reputation', 'paperwork'];

  function amountText(key, n) {
    var r = RES[key];
    if (r.dollars) return '$' + fmt(n, 'ceil');
    return fmt(n, 'ceil') + ' ' + (n === 1 ? r.one : r.many);
  }

  function costText(cost) {
    var parts = [];
    COST_ORDER.forEach(function (k) { if (cost && cost[k]) parts.push(amountText(k, cost[k])); });
    if (parts.length < 2) return parts.join('');
    return parts.slice(0, -1).join(', ') + ' & ' + parts[parts.length - 1];
  }

  function canAfford(S, cost) {
    for (var k in cost) if (S.r[k] < cost[k] - 1e-9) return false;
    return true;
  }

  function pay(S, cost) {
    for (var k in cost) S.r[k] = Math.max(0, S.r[k] - cost[k]);
  }

  // ---------------------------------------------------------------------------
  // Employees. Each one does its job twice a second, as long as there's enough
  // of whatever it needs.

  var EMPLOYEES = [
    { id: 'paper', name: 'Pay your friend to make paper', cost: 50, kcost: 10, lv: 2,
      does: 'Makes 2 paper a second, from a hundredth of a tree each' },
    { id: 'money', name: 'Hire door to door paper salesman', cost: 200, kcost: 20, lv: 3,
      does: 'Sells 2 paper a second' },
    { id: 'ink', name: 'Acquire a tame squid', cost: 500, kcost: 30, lv: 4,
      does: 'Turns $1 into ink twice a second' },
    { id: 'book', name: 'Buy a printing press', cost: 1000, kcost: 40, lv: 5,
      does: 'Assembles 2 books a second' },
    { id: 'knowledge', name: 'Dupe a librarian', cost: 2500, kcost: 50, lv: 6,
      does: 'Reads 2 books a second' },
    { id: 'tree', name: 'Recruit a tree farmer', cost: 5000, kcost: 60, lv: 7,
      does: 'Plants 2 trees a second, for $20 & 1 knowledge each (they buy saplings in bulk)' },
    { id: 'artist', name: 'Hire an artist', cost: 10000, kcost: 70, lv: 9, noPause: true,
      does: 'Every artist makes the painting go faster' },
    { id: 'servant', name: 'Appoint a public servant', cost: 25000, kcost: 250, lv: 11,
      does: 'Turns 1 paper & 1 ink into a form, twice a second' },
    { id: 'mint', name: 'Hire a banknote printer', cost: 250000, kcost: 2500, lv: 12, needs: 'mint',
      does: 'Turns 1 paper & 1 ink into $25, twice a second' },
    { id: 'journalist', name: 'Hire a journalist', cost: 100000, kcost: 1000, lv: 12, needs: 'gazette',
      does: 'Turns 20 paper & 5 ink into a little reputation, twice a second' }
  ];
  var EMP = {};
  EMPLOYEES.forEach(function (e) { EMP[e.id] = e; });

  // Doing it yourself. From level 9 your hands are too valuable for this,
  // unless nobody works that job for you (or you could get stuck for good).
  var MANUAL = [
    { id: 'paper', label: 'Make paper', hint: '1 tree makes 100 paper', lv: 1, worker: 'paper' },
    { id: 'sell', label: 'Sell paper on eBay', hint: '1 paper makes $', lv: 2, worker: 'money' },
    { id: 'ink', label: 'Steal ink from squid', hint: '$1 makes 1 ink', lv: 3, worker: 'ink' },
    { id: 'book', label: 'Assemble a book', hint: '2 ink & 5 paper make 1 book', lv: 4, worker: 'book' },
    { id: 'knowledge', label: 'Extract knowledge from book', hint: '1 book makes 1 knowledge', lv: 5, worker: 'knowledge' },
    { id: 'tree', label: 'Plant tree', hint: '$100 & 5 knowledge makes 1 tree', lv: 6, worker: 'tree' }
  ];
  var MAN = {};
  MANUAL.forEach(function (a) { MAN[a.id] = a; });

  function manualShown(S, a) {
    return S.level >= a.lv && (S.level < 9 || S.emp[a.worker].n === 0);
  }

  function employeeShown(S, e) {
    return S.level >= e.lv && (!e.needs || S.done[e.needs]);
  }

  var EXECUTIVES = ['staff', 'hiring', 'hr', 'productivity', 'production', 'innovation', 'coo'];

  function staffCount(S) {
    var n = 0;
    EMPLOYEES.forEach(function (e) { n += S.emp[e.id].n; });
    EXECUTIVES.forEach(function (x) { if (S.done[x]) n++; });
    return n;
  }

  function creaseMult(S) { return Math.pow(2, S.creases); }
  function productivity(S) { return 1 + 0.05 * S.prodUp; }
  var PACE = 2; // jobs a second each employee does
  function workMult(S) { return PACE * productivity(S) * S.m.work * creaseMult(S); }

  // ---------------------------------------------------------------------------
  // Levels. `need` is spent when you upgrade; `cond` just has to be true.

  var LEVELS = {
    2:  { need: { paper: 100 },
          msg: "100 paper! Someone on eBay is interested." },
    3:  { need: { paper: 250, money: 250 },
          msg: "Business is booming. Somewhere in the ocean, a squid glances over its shoulder." },
    4:  { need: { paper: 500, ink: 100, money: 750 },
          msg: "Paper and ink. You know what that means." },
    5:  { need: { paper: 1500, ink: 250, money: 2000, book: 100 },
          msg: "Your books are flying off the shelves. Someone should probably read one." },
    6:  { need: { book: 500, money: 10000, knowledge: 100 },
          msg: "Quite the operation. Maybe plant something back." },
    7:  { need: { knowledge: 1000 },
          msg: "You know so much now. Mostly about paper." },
    8:  { need: { tree: 500 },
          msg: "500 trees, gone. The forest has started avoiding eye contact." },
    9:  { need: { paper: 10000, ink: 2500, book: 2000, knowledge: 1000 },
          msg: "Your hands are now far too valuable for manual labour." },
    10: { need: { paper: 100000 },
          msg: "100,000 paper. People are starting to talk about you. Mostly good things." },
    11: { need: { money: 500000 }, cond: function (S) { return S.won.mayor; }, condText: 'Mayoral status',
          msg: "Think this is over?! Well... no. Not even close. You're the Mayor now, and a Mayor runs on paperwork." },
    12: { need: { money: 2.5e6, paperwork: 10000 },
          msg: "Papertown is thriving. The State is starting to notice." },
    13: { need: { money: 2.5e7 }, cond: function (S) { return S.won.premier; }, condText: 'Premier status',
          msg: "Premier! The state forests rustle nervously." },
    14: { need: { paperwork: 250000 }, cond: function (S) { return S.won.pm; }, condText: 'Prime Minister status',
          msg: "Prime Minister. The country runs on paper, and you run the country." },
    15: { cond: function (S) { return S.done.treaty; }, condText: 'the signature of every person on Earth',
          msg: "Every person on Earth has signed. You are the Chairperson of Earth, and Earth is mostly forest, and forest is mostly paper that hasn't happened yet." },
    16: { need: { knowledge: 2e6 }, cond: function (S) { return S.fold >= 42; }, condText: '42 folds (the Moon)',
          msg: "You climb the sheet to the Moon. It was always going to be 42." },
    17: { need: { imagination: 2.5e7 }, cond: function (S) { return S.fold >= 51; }, condText: '51 folds (the Sun)',
          msg: "The sheet reaches the Sun. It hasn't caught fire, because you're very good at this." },
    18: { need: { reputation: 1e7 }, cond: function (S) { return S.fold >= 69; }, condText: '69 folds (Proxima Centauri)',
          msg: "Proxima Centauri. Nice." },
    19: { need: { ink: 2e9 }, cond: function (S) { return S.fold >= 83; }, condText: '83 folds (across the Milky Way)',
          msg: "The sheet is wider than the Milky Way. From up here the whole galaxy looks like a crumpled piece of paper." },
    20: { need: { paperwork: 5e8 }, cond: function (S) { return S.fold >= 103; }, condText: '103 folds (the edge of the page)',
          msg: "The sheet is thicker than the observable universe is wide. And then, all at once, it stops. You have reached the edge of the page." }
  };
  var MAX_LEVEL = 20;

  function levelReqText(n) {
    var L = LEVELS[n];
    var parts = [];
    if (L.need) parts.push(costText(L.need));
    if (L.condText) parts.push(L.condText);
    return parts.join(' & ');
  }

  function canLevel(S) {
    var L = LEVELS[S.level + 1];
    if (!L) return false;
    if (L.cond && !L.cond(S)) return false;
    return !L.need || canAfford(S, L.need);
  }

  // ---------------------------------------------------------------------------
  // Projects: a to-do list. Each one shows up once the one before it is done
  // and you're on a high enough level.

  var PROJECTS = [
    // Level 2
    { id: 'readbook', lv: 2, title: 'Purchase and read a book on paper making', gain: 'Makes 25 knowledge',
      cost: { money: 100 }, fx: function (S) { S.r.knowledge += 25; } },
    { id: 'degree', lv: 2, title: 'Get a degree in paper making', gain: 'Makes 50 knowledge',
      cost: { money: 200 }, fx: function (S) { S.r.knowledge += 50; } },
    { id: 'paperbag', lv: 2, title: 'Develop and sell a revolutionary paper bag design', gain: 'Makes $150',
      cost: { paper: 100 }, fx: function (S) { S.r.money += 150; } },
    // Level 3
    { id: 'phd', lv: 3, title: 'Get a PhD in applied paper making', gain: 'Makes 100 knowledge',
      cost: { money: 400 }, fx: function (S) { S.r.knowledge += 100; } },
    { id: 'news', lv: 3, title: "Print the local newspaper's latest issue", gain: 'Makes $200',
      cost: { paper: 300, ink: 50 }, fx: function (S) { S.r.money += 200; } },
    { id: 'bribe', lv: 3, title: 'Bribe Officeworks for a superior paper formula', gain: 'Makes 200 knowledge',
      cost: { money: 800 }, fx: function (S) { S.r.knowledge += 200; } },
    // Level 4
    { id: 'ceo', lv: 4, title: 'Become CEO', gain: 'Allows employees to be managed',
      cost: { money: 500, ink: 100 },
      msg: "You're the CEO. You can now tell any of your employees to take a break." },
    { id: 'garden', lv: 4, title: 'Buy a community garden', gain: 'Makes 80 trees',
      cost: { money: 1250 }, fx: function (S) { S.r.tree += 80; } },
    { id: 'encyclopedias', lv: 4, title: 'Print and read a set of encyclopedias', gain: 'Makes 150 knowledge',
      cost: { book: 50, paper: 300, ink: 100 }, fx: function (S) { S.r.knowledge += 150; } },
    { id: 'comics', lv: 4, title: 'Print and sell a set of comic books', gain: 'Makes $750',
      cost: { book: 50, paper: 300, ink: 200 }, fx: function (S) { S.r.money += 750; } },
    // Level 5
    { id: 'orchard', lv: 5, title: 'Buy an orchard', gain: 'Makes 130 trees',
      cost: { money: 5000, knowledge: 50 }, fx: function (S) { S.r.tree += 130; } },
    { id: 'collection', lv: 5, title: 'Purchase a rare collection of books', gain: 'Makes 200 books',
      cost: { money: 2000 }, fx: function (S) { S.r.book += 200; } },
    { id: 'atlas', lv: 5, title: 'Design and sell an atlas', gain: 'Makes $1,000',
      cost: { paper: 1000, ink: 500 }, fx: function (S) { S.r.money += 1000; } },
    // Level 6
    { id: 'invisible', lv: 6, title: 'Invent and sell a formula for invisible ink', gain: 'Makes $4,000',
      cost: { book: 750 }, fx: function (S) { S.r.money += 4000; } },
    { id: 'library', lv: 6, title: 'Gather a library', gain: 'Allows double the amount of knowledge from each book',
      cost: { book: 1000 }, fx: function (S) { S.ke += 1; } },
    // Level 7
    { id: 'staff', lv: 7, title: 'Employ a Chief of Staff', gain: 'Relays total staff body',
      cost: { money: 7500 } },
    { id: 'inflation', lv: 7, title: 'Counteract rising inflation to maximise profits', gain: 'Sells paper for $3 instead of $2',
      cost: { knowledge: 2000 }, fx: function (S) { S.sellprice += 1; } },
    { id: 'hiring', lv: 7, title: 'Employ a Chief of Hiring', gain: 'Allows you to employ set amounts of each employee',
      cost: { money: 5000, paper: 2500, ink: 1000 } },
    // Level 8
    { id: 'blueprints', lv: 8, title: 'Generate the blueprints for a retirement home', gain: 'Makes $20,000',
      cost: { paper: 1000, knowledge: 1000 }, fx: function (S) { S.r.money += 20000; } },
    { id: 'hr', lv: 8, title: 'Employ a Chief of Human Resources', gain: 'Allows you to employ the max you can afford',
      cost: { money: 5000, paper: 2500, ink: 1000 } },
    { id: 'picturebooks', lv: 8, title: 'Make and sell a set of picture books', gain: 'Makes $40,000',
      cost: { ink: 2000, book: 2000 }, fx: function (S) { S.r.money += 40000; } },
    // Level 9
    { id: 'bobross', lv: 9, title: 'Research Operation Bob Ross', gain: 'Unlocks Operation Bob Ross',
      cost: { knowledge: 2000 },
      msg: "Operation Bob Ross is go. There are no mistakes, only happy little profits. (Hire an artist to start painting.)" },
    { id: 'kids', lv: 9, title: 'Enact "Bring Your Kid to Work Day"', gain: 'Sucks the children of their imagination for the day',
      cost: { knowledge: 5000, money: 50000 }, fx: function (S) { S.r.imagination += 10000; },
      msg: "The children go home pale and quiet. You have 10,000 imagination." },
    { id: 'productivity', lv: 9, title: 'Employ a Chief of Productivity', gain: 'Allows you to see the productivity of all workers',
      cost: { money: 100000 } },
    // Level 10
    { id: 'innovation', lv: 10, title: 'Employ a Chief of Innovation', gain: 'Allows you to begin creating imagination',
      cost: { money: 200000 },
      msg: "Tick Innovate and every employee stops working and starts daydreaming. Daydreams make imagination." },
    { id: 'production', lv: 10, title: 'Employ a Chief of Production', gain: 'Allows you to increase the productivity of every worker',
      cost: { money: 100000 } },
    { id: 'slimmer', lv: 10, title: 'Make slimmer books', gain: 'Reduces paper to create a book from 5 to 4',
      cost: { imagination: 50000 }, fx: function (S) { S.bookpaper = 4; } },

    // ---- Act II: Papertown ----
    // Level 11: Mayor
    { id: 'coo', lv: 11, title: 'Employ a Chief Operating Officer', gain: "Workers leave alone whatever your next project, level or painting needs",
      cost: { money: 250000 },
      msg: "Your COO puts a sticky note on everything you're saving for: DO NOT TOUCH. Everyone obeys sticky notes." },
    { id: 'papertown', lv: 11, title: 'Rename the town to Papertown', gain: 'Makes 5 reputation',
      cost: { paperwork: 100 }, fx: function (S) { S.r.reputation += 5; },
      msg: "Welcome to Papertown. The sign is, naturally, made of paper." },
    { id: 'triplicate', lv: 11, title: 'Require every form in triplicate', gain: 'Paper is in demand: sells for $4 instead of $3',
      cost: { paperwork: 500 }, fx: function (S) { S.sellprice += 1; } },
    { id: 'squids', lv: 11, title: 'Declare squids a protected species (in your tanks only)', gain: 'Squids make 3 ink for every $1',
      cost: { paperwork: 1000, money: 100000 }, fx: function (S) { S.m.ink = 3; },
      msg: "The squids are protected now. They seem happier. They make more ink when they're happy." },
    { id: 'ereaders', lv: 11, title: 'Ban e-readers', gain: 'Makes 1 more knowledge from every book',
      cost: { paperwork: 2500 }, fx: function (S) { S.ke += 1; } },
    // Level 12
    { id: 'mint', lv: 12, title: 'Open the Papertown Mint', gain: 'Unlocks banknote printers',
      cost: { paperwork: 5000, knowledge: 10000 },
      msg: "Money is just paper with ambition." },
    { id: 'gazette', lv: 12, title: 'Buy the Papertown Gazette', gain: 'Unlocks journalists, who make reputation',
      cost: { money: 1e6 },
      msg: "The Gazette's front page: LOCAL MAYOR VERY GOOD, SOURCES SAY." },
    { id: 'treeperresident', lv: 12, title: 'Mandate a tree be planted for every resident', gain: 'Tree farmers plant 5 trees at a time',
      cost: { paperwork: 10000 }, fx: function (S) { S.m.tree = 5; } },
    // Level 13: Premier
    { id: 'origami', lv: 13, title: 'Make origami compulsory in schools', gain: 'Triples imagination from innovating',
      cost: { paperwork: 50000, money: 5e6 }, fx: function (S) { S.m.imag *= 3; },
      msg: "The children are getting very good at folding cranes. Suspiciously good." },
    { id: 'clearfell', lv: 13, title: 'Clear-fell the state forest', gain: 'Makes 1,000,000 trees. Nobody will notice. (They will notice: costs 250 reputation)',
      cost: { reputation: 250 }, fx: function (S) { S.r.tree += 1e6; } },
    { id: 'recycling', lv: 13, title: 'Introduce a recycling scheme', gain: 'Librarians hand back 3 paper for every book they read',
      cost: { paperwork: 50000 }, fx: function (S) { S.m.recycle = 3; } },
    // Level 14: Prime Minister
    { id: 'banknotes', lv: 14, title: 'Put your face on the banknotes', gain: 'Banknote printers print 4 times as much',
      cost: { paperwork: 100000, imagination: 100000 }, fx: function (S) { S.m.mint *= 4; },
      msg: "It's a good likeness. Everyone says so, because it's on the money." },
    { id: 'cranes', lv: 14, title: 'Fold a thousand paper cranes', gain: 'Legend says whoever folds a thousand paper cranes is granted a wish',
      cost: { paper: 1000, imagination: 3e5 }, fx: function (S) { S.pending = 'firstwish'; } },
    { id: 'treatydraft', lv: 14, title: 'Draft the Paper Treaty', gain: 'One page. It says that everything is paper now. Everyone has to sign it',
      cost: { paperwork: 500000, knowledge: 2e5 } },
    { id: 'treaty', lv: 14, title: 'Have every person on Earth sign the Paper Treaty', gain: 'One copy each. After that, the whole world runs on paper',
      cost: { paper: 8e9 } },

    // ---- Act III: The Paper Sky ----
    // Level 15: Chairperson of Earth
    { id: 'workforce1', lv: 15, title: 'Cranes join the workforce', gain: 'Every employee works 10 times as hard',
      cost: { paper: 1e11 }, fx: function (S) { S.m.work *= 10; } },
    { id: 'gallivan', lv: 15, title: "Read Britney Gallivan's paper on folding paper", gain: 'Unlocks The Sheet',
      cost: { knowledge: 2e6 }, fx: function (S) { S.sheet = true; },
      msg: "Gallivan worked out that every fold needs about four times as much paper as the one before. Fold a sheet 42 times and it would reach the Moon. Nobody has ever had the paper to try. You have cranes." },
    { id: 'wishhard', lv: 15, title: 'Teach the cranes to wish properly', gain: 'Cranes wish up 10 times as much paper',
      cost: { paper: 1e12, imagination: 5e6 }, fx: function (S) { S.m.wish *= 10; },
      msg: "It turns out you have to really mean it." },
    { id: 'autofold', lv: 15, title: 'Teach the cranes to fold the sheet', gain: 'The sheet folds itself whenever there is enough paper',
      cost: { knowledge: 2e6 }, fx: function (S) { S.autofold = true; } },
    // Level 16: the Moon
    { id: 'workforce2', lv: 16, title: 'Cranes join the workforce (again)', gain: 'Every employee works 10 times as hard, again',
      cost: { paper: 1e37 }, fx: function (S) { S.m.work *= 10; } },
    { id: 'visitmoon', lv: 16, title: 'Visit the Moon', gain: 'Fill in the forms, climb the sheet, and go inside the lantern',
      cost: { paperwork: 2e6 }, fx: function (S) { S.m.flock *= 2; },
      msg: "It's warm inside the lantern, and light enough to see by. The cranes can fold through the night now: twice as many new cranes." },
    { id: 'smaller', lv: 16, title: 'Fold smaller cranes', gain: 'Twice as many cranes fit on the sheet',
      cost: { imagination: 3e7 }, fx: function (S) { S.m.nest *= 2; },
      msg: "The smallest paper crane anyone had ever folded was about the size of a grain of rice. Yours are smaller." },
    { id: 'visitmars', lv: 16, title: 'Visit Mars', gain: "Bring back the rovers' drawings",
      req: function (S) { return S.fold >= 49; }, reqText: 'the sheet to reach Mars (49 folds)',
      cost: { knowledge: 2e7, reputation: 5e5 }, fx: function (S) { S.m.imag *= 3; },
      msg: "The rovers have been drawing in crayon for years. Mostly rocks. They're very good rocks, and they triple everyone's imagination." },
    // Level 17: the Sun
    { id: 'visitsun', lv: 17, title: 'Visit the Sun', gain: "Don't blow it out",
      cost: { knowledge: 5e7, ink: 1e8 }, fx: function (S) { S.m.wish *= 10; },
      msg: "You don't blow it out. You sit by it for a while. Everything grows better in the warm: the cranes wish up 10 times as much paper." },
    { id: 'visitjupiter', lv: 17, title: 'Visit Jupiter', gain: 'Somebody painted those stripes on',
      req: function (S) { return S.fold >= 53; }, reqText: 'the sheet to reach Jupiter (53 folds)',
      cost: { imagination: 2e8 }, fx: function (S) { S.m.ink *= 10; },
      msg: "The stripes are ink. A lot of ink. Your squids are very interested, and make 10 times as much." },
    { id: 'visitvoyager', lv: 17, title: 'Catch up with Voyager 1', gain: 'It has been carrying a message since 1977',
      req: function (S) { return S.fold >= 58; }, reqText: 'the sheet to reach Voyager 1 (58 folds)',
      cost: { paperwork: 1e8 }, fx: function (S) { S.m.job.journalist = (S.m.job.journalist || 1) * 10; },
      msg: "The golden record says: hello from the children of planet Earth. You write back, on paper, and fold it into a crane. Everyone at home reads about it: journalists make 10 times as much reputation." },
    // Level 18: Proxima Centauri
    { id: 'workforce3', lv: 18, title: 'Cranes join the workforce (for good)', gain: 'Every employee works 10 times as hard, again again',
      cost: { paper: 1e55 }, fx: function (S) { S.m.work *= 10; } },
    { id: 'pinhole', lv: 18, title: 'Look through the pinhole', gain: 'There is a light on the other side',
      cost: { knowledge: 2e8, imagination: 1e9 }, fx: function (S) { S.ke *= 10; },
      msg: "On the other side there's a light: warm, yellow and very close, like a desk lamp. It's lovely to read by. Librarians get 10 times the knowledge from every book." },
    { id: 'smaller2', lv: 18, title: 'Fold even smaller cranes', gain: 'Four times as many cranes fit on the sheet',
      cost: { paperwork: 3e8 }, fx: function (S) { S.m.nest *= 4; },
      msg: "You need a microscope to fold them now. The cranes don't seem to mind." },
    // Level 19: the Milky Way
    { id: 'visitmilkyway', lv: 19, title: 'Unfold a corner of the Milky Way', gain: 'Carefully',
      cost: { paper: 1e64 }, fx: function (S) { S.m.flock *= 2; },
      msg: "It's tissue paper, crumpled into a spiral, the way you'd make a flower at a children's party. You fold it back exactly as it was. The cranes copy the spiral, and fold new cranes twice as fast." },
    { id: 'babel', lv: 19, title: 'Print the Library of Babel', gain: 'Every book that could ever be written. One of them is this game. Librarians get 10 times the knowledge from every book',
      cost: { book: 2e8, ink: 5e8 }, fx: function (S) { S.ke *= 10; } },
    { id: 'visitandromeda', lv: 19, title: 'Leave the Paper Treaty with Andromeda', gain: "It's coming this way anyway",
      req: function (S) { return S.fold >= 88; }, reqText: 'the sheet to reach Andromeda (88 folds)',
      cost: { reputation: 1e8 }, fx: function (S) { S.m.job.servant = (S.m.job.servant || 1) * 10; },
      msg: "Andromeda signs. A sticky note on it says 'Back in 4.5 billion years.' Public servants, inspired, make 10 times as much paperwork." },
    { id: 'visitlaniakea', lv: 19, title: 'Glue the Laniakea Supercluster back together', gain: 'Someone ran out of glue halfway',
      req: function (S) { return S.fold >= 96; }, reqText: 'the sheet to reach Laniakea (96 folds)',
      cost: { imagination: 5e9 }, fx: function (S) { S.m.nest *= 4; },
      msg: "It's papier-mâché: a hundred thousand galaxies stuck together in long strings. You finish the job. There's room for four times as many cranes in the gaps." },

    // ---- Act IV: The Margin ----
    // Level 20: the edge of the page
    { id: 'margin', lv: 20, title: 'Step over the edge of the page', gain: 'Into the margin',
      cost: { knowledge: 2e9 },
      msg: "Past the edge of the observable universe the paper just stops, and there's a margin, wide and white and quiet. Someone has written in it, in pencil, very small: \u201cI know you can see this. Don't stop folding. I'm nearly finished with you.\u201d It isn't signed. The handwriting looks a little like yours." },
    { id: 'behind', lv: 20, title: 'Look behind the page', gain: 'Where the light is coming from',
      cost: { imagination: 5e9 },
      msg: "Behind the page there is a desk lamp, the edge of a desk, a rubber, a pencil, and a cup of tea that went cold hours ago. Somebody has been drawing all of this. The universe. The squid. You." },
    { id: 'pencil', lv: 20, title: 'Sharpen the pencil', gain: "Pencils are made of trees too. You'd forgotten",
      cost: { tree: 1 } },
    { id: 'redraw', lv: 20, title: 'Draw back every tree you ever cut down', gain: 'Your artists know what to do. Happy little trees',
      cost: { ink: 1e9 }, fx: function (S) { S.drawing = 0; } },
    { id: 'pagefold1', lv: 20, title: 'Fold the page in half', gain: 'Fold away the paper company',
      req: function (S) { return S.drawing >= 1; }, reqText: 'your artists to finish drawing the trees',
      cost: { money: 1e24 }, fx: function (S) { S.pageFolds = 1; } },
    { id: 'pagefold2', lv: 20, title: 'Fold the page again', gain: 'Fold away the paintings',
      cost: { imagination: 2e9 }, fx: function (S) { S.pageFolds = 2; } },
    { id: 'pagefold3', lv: 20, title: 'Fold the page again', gain: 'Fold away Papertown',
      cost: { paperwork: 1e9 }, fx: function (S) { S.pageFolds = 3; } },
    { id: 'pagefold4', lv: 20, title: 'Fold the page again', gain: 'Fold away the elections',
      cost: { reputation: 1e9 }, fx: function (S) { S.pageFolds = 4; } },
    { id: 'pagefold5', lv: 20, title: 'Fold the page again', gain: 'Fold away the library',
      cost: { knowledge: 2e9 }, fx: function (S) { S.pageFolds = 5; } },
    { id: 'pagefold6', lv: 20, title: 'Fold the page again', gain: 'Fold away the sky',
      cost: { paper: 1e60 }, fx: function (S) { S.pageFolds = 6; } },
    { id: 'pagefold7', lv: 20, title: 'Fold the page one last time', gain: 'Folklore says you can only fold paper seven times. This time, folklore is right',
      cost: { ink: 1e9 }, fx: function (S) { S.pageFolds = 7; S.pending = 'lastwish'; } }
  ];
  var PROJ = {};
  PROJECTS.forEach(function (p) { PROJ[p.id] = p; });

  // The next project on the list: done ones are skipped, and the list stops at
  // the first one you can't see yet.
  function currentProject(S) {
    for (var i = 0; i < PROJECTS.length; i++) {
      var p = PROJECTS[i];
      if (S.done[p.id]) continue;
      if (S.level < p.lv) return { blocked: 'level', p: p };
      if (p.req && !p.req(S)) return { blocked: 'req', p: p };
      return { p: p };
    }
    return null;
  }

  // ---------------------------------------------------------------------------
  // Elections. You need more reputation than every other candidate.

  var RACES = [
    { id: 'mayor', title: 'Mayor', lv: 10, base: 10, cost: { imagination: 100000 }, salary: 20,
      run: 'Run for mayor',
      rivals: ['Councillor Pulp', 'Dave from Officeworks', 'A man who owns a Kindle', 'The incumbent (a squid)'] },
    { id: 'premier', title: 'Premier', lv: 12, base: 300, cost: { paperwork: 25000, imagination: 200000 }, salary: 2000,
      run: 'Run for Premier',
      rivals: ['Sir Laminate', 'The Member for Plastics', 'A very large tablet', 'Dave from Officeworks (again)'] },
    { id: 'pm', title: 'Prime Minister', lv: 13, base: 4000, cost: { paperwork: 100000, imagination: 600000 }, salary: 100000,
      run: 'Run for Prime Minister',
      rivals: ['The Paperless Party', 'An e-reader in a suit', 'The Squid (it has not forgotten)', 'Bob Ross (posthumously)'] }
  ];

  function currentRace(S) {
    for (var i = 0; i < RACES.length; i++) {
      var r = RACES[i];
      if (S.won[r.id]) continue;
      return S.level >= r.lv ? r : null;
    }
    return null;
  }

  function rivalScore(race) {
    return race.base * (1 + 0.02 * (1 + Math.floor(Math.random() * 10)));
  }

  // ---------------------------------------------------------------------------
  // The Sheet, and everything it can reach

  // Gallivan: each fold needs about four times the paper of the one before.
  // The bigger sheet is also four times the room for cranes to live on.
  function foldCost(n) { return 20 * Math.pow(4, n); }
  var MAX_FOLDS = 103; // as thick as the observable universe is wide; there's nowhere further to go
  var NEST = 1e10;     // cranes that fit on a sheet that hasn't been folded yet

  function craneRoom(S) { return NEST * S.m.nest * Math.pow(4, S.fold); }

  // Everywhere the sheet reaches turns out to be paper already
  var PLACES = [
    { id: 'moon', name: 'The Moon', fold: 42, seen: "It's a paper lantern. Somebody has left it on." },
    { id: 'mars', name: 'Mars', fold: 49, seen: "Red construction paper, faded where the Sun has been on it. There are crayon marks all over it." },
    { id: 'sun', name: 'The Sun', fold: 51, seen: "A much bigger lantern, with a candle inside. A note is taped to it: DO NOT BLOW OUT." },
    { id: 'jupiter', name: 'Jupiter', fold: 53, seen: "A lantern with stripes painted on. The Great Red Spot is where somebody put down a cup of tea." },
    { id: 'voyager', name: 'Voyager 1', fold: 58, seen: "Still going, 49 years after it left. It has a golden record bolted to its side, with a message on it." },
    { id: 'proxima', name: 'Proxima Centauri', fold: 69, seen: "It isn't a star. It's a pinhole in a sheet of black paper, with light shining through from the other side. They all are." },
    { id: 'milkyway', name: 'The Milky Way', fold: 83, seen: "Tissue paper, crumpled into a spiral." },
    { id: 'andromeda', name: 'Andromeda', fold: 88, seen: "Another tissue-paper spiral, with a sticky note on it." },
    { id: 'laniakea', name: 'The Laniakea Supercluster', fold: 96, seen: "Papier-m\u00e2ch\u00e9, with gaps where the glue ran out." },
    { id: 'edge', name: 'The edge of the page', fold: 103, seen: "The paper just stops." }
  ];

  function placesSeen(S) {
    return PLACES.filter(function (p) { return S.fold >= p.fold; });
  }

  var FOLD_NOTES = {
    1: "You fold the sheet in half. It's twice as thick. This is going to escalate.",
    7: "Seven folds. Folklore says you can't fold paper more than seven times. Folklore didn't have cranes.",
    12: "Twelve folds: Britney Gallivan's world record, set in 2002 with a very long roll of toilet paper.",
    13: "Thirteen folds. A new world record. Britney Gallivan sends her congratulations.",
    14: "The sheet is now taller than you are.",
    23: "The sheet is taller than the Burj Khalifa.",
    27: "The sheet is taller than Mount Everest.",
    30: "The sheet has reached space.",
    32: "The International Space Station has to swerve.",
    56: "The sheet is past Neptune. Pluto is, at last, not the smallest thing out here.",
    62: "The sheet reaches the Oort Cloud, where comets go to think."
  };

  function doFold(S) {
    var cost = foldCost(S.fold + 1);
    if (!S.sheet || S.fold >= MAX_FOLDS || S.r.paper < cost) return false;
    S.r.paper -= cost;
    S.fold++;
    S.full = false;
    if (FOLD_NOTES[S.fold]) log(S, FOLD_NOTES[S.fold]);
    PLACES.forEach(function (p) { if (p.fold === S.fold) log(S, 'The sheet reaches ' + p.name.replace(/^The /, 'the ') + '. ' + p.seen); });
    return true;
  }

  // ---------------------------------------------------------------------------
  // State

  function newState(prev) {
    var S = {
      v: SAVE_VERSION,
      page: prev ? prev.page + 1 : 1,
      creases: prev ? prev.creases + 1 : 0,
      shelf: prev ? prev.shelf.slice() : [],
      level: 1,
      r: { tree: 50, paper: 0, money: 0, ink: 0, book: 0, knowledge: 0, imagination: 0, reputation: 0, paperwork: 0 },
      emp: {},
      paused: {},
      done: {},
      won: {},
      salary: 0,
      sellprice: 2, ke: 1, bookink: 2, bookpaper: 5,
      hireCount: 1, hrMax: false, innovating: false, cooOff: false,
      prodUp: 0, prodCost: 1000,
      m: { work: 1, ink: 1, tree: 1, mint: 1, imag: 1, recycle: 0, flock: 1, wish: 1, nest: 1, job: {} },
      art: { stage: 0, n: 0, p: 0, paper: 10000, ink: 5000, imagination: 10000, knowledge: 1000, rep: 3, money: 25000 },
      cranes: 0, alloc: 50, full: false, drawing: null, pageFolds: 0,
      sheet: false, fold: 0, autofold: false, autofoldOn: true,
      pending: null, ended: false, hints: {},
      log: [],
      stats: { time: 0, paperMade: 0, clicks: 0, paintings: 0, cranesFolded: 0, treesUsed: 0 }
    };
    EMPLOYEES.forEach(function (e) { S.emp[e.id] = { n: 0, cost: e.cost, kcost: e.kcost }; });
    if (!prev) log(S, 'You have 50 trees and an idea.');
    if (prev) {
      log(S, 'Page ' + S.page + '. The paper feels familiar, like it has been folded before. Everything works ' +
        fmt(creaseMult(S)) + ' times as hard.');
    }
    return S;
  }

  function log(S, text) {
    S.log.unshift({ t: S.stats.time, text: text });
    if (S.log.length > 60) S.log.length = 60;
  }

  function made(S, n) { S.stats.paperMade += n; }

  // Bring an older or partial save up to date, filling in anything missing
  function restore(saved) {
    if (!saved || saved.v !== SAVE_VERSION) return null;
    var S = newState();
    S.log = [];
    Object.keys(saved).forEach(function (k) {
      if (saved[k] && typeof saved[k] === 'object' && !Array.isArray(saved[k]) && S[k] && typeof S[k] === 'object') {
        Object.keys(saved[k]).forEach(function (kk) { S[k][kk] = saved[k][kk]; });
      } else {
        S[k] = saved[k];
      }
    });
    EMPLOYEES.forEach(function (e) { if (!S.emp[e.id]) S.emp[e.id] = { n: 0, cost: e.cost, kcost: e.kcost }; });
    return S;
  }

  // ---------------------------------------------------------------------------
  // Doing things

  function click(S, what) {
    var r = S.r, c = creaseMult(S), x;
    if (!MAN[what] || !manualShown(S, MAN[what])) return;
    S.stats.clicks++;
    if (what === 'paper') {
      x = Math.min(c, r.tree / 0.01);
      if (x <= 0) return;
      r.paper += x; r.tree = Math.max(0, r.tree - 0.01 * x); S.stats.treesUsed += 0.01 * x; made(S, x);
    } else if (what === 'sell') {
      x = Math.min(c, r.paper);
      if (x <= 0) return;
      r.paper -= x; r.money += x * S.sellprice;
    } else if (what === 'ink') {
      x = Math.min(c, r.money);
      if (x < 1) return;
      r.money -= x; r.ink += x;
    } else if (what === 'book') {
      x = Math.min(c, Math.floor(r.paper / S.bookpaper), Math.floor(r.ink / S.bookink));
      if (x <= 0) return;
      r.paper -= x * S.bookpaper; r.ink -= x * S.bookink; r.book += x;
    } else if (what === 'knowledge') {
      x = Math.min(c, Math.floor(r.book));
      if (x <= 0) return;
      r.book -= x; r.knowledge += x * S.ke;
    } else if (what === 'tree') {
      x = Math.min(c, Math.floor(r.money / 100), Math.floor(r.knowledge / 5));
      if (x <= 0) return;
      r.money -= 100 * x; r.knowledge -= 5 * x; r.tree += x;
    }
  }

  function levelUp(S) {
    if (!canLevel(S)) return false;
    var L = LEVELS[S.level + 1];
    if (L.need) pay(S, L.need);
    S.level++;
    if (L.msg) log(S, L.msg);
    return true;
  }

  function buyProject(S) {
    var cur = currentProject(S);
    if (!cur || cur.blocked || !canAfford(S, cur.p.cost)) return false;
    var p = cur.p;
    pay(S, p.cost);
    S.done[p.id] = true;
    if (p.fx) p.fx(S);
    if (p.msg) log(S, p.msg);
    return true;
  }

  function hire(S, id) {
    var e = S.emp[id];
    var times = S.done.hr && S.hrMax ? Infinity : (S.done.hiring ? S.hireCount : 1);
    var bought = 0;
    while (bought < times && bought < 100000 && S.r.money >= e.cost && S.r.knowledge >= e.kcost) {
      S.r.money -= e.cost; S.r.knowledge -= e.kcost;
      e.n++; e.cost *= 1.1; e.kcost *= 1.05;
      bought++;
    }
    return bought;
  }

  function improveProductivity(S) {
    if (!S.done.production || S.r.money < S.prodCost) return false;
    S.r.money -= S.prodCost;
    S.prodCost *= 1.5;
    S.prodUp++;
    return true;
  }

  function setHireCount(S, n) { S.hireCount = Math.max(1, Math.floor(n)); }

  // Operation Bob Ross: gather, brainstorm, paint, then donate or sell
  function paintTime(S) {
    // milliseconds per percent, as in the original: slower every painting, faster every artist
    var ms = Math.max(20, 600 + 300 * S.art.n - 100 * S.emp.artist.n);
    return ms / 10; // seconds for the whole painting
  }

  function artCost(S) {
    var a = S.art;
    if (a.stage === 0) return { paper: a.paper, ink: a.ink };
    if (a.stage === 1) return { imagination: a.imagination, knowledge: a.knowledge };
    return null;
  }

  function artStep(S, choice) {
    var a = S.art;
    if (!S.done.bobross) return false;
    if (a.stage === 0) {
      if (!canAfford(S, artCost(S))) return false;
      pay(S, artCost(S)); a.paper *= 1.05; a.ink *= 1.05; a.stage = 1;
    } else if (a.stage === 1) {
      if (!canAfford(S, artCost(S))) return false;
      pay(S, artCost(S)); a.imagination *= 1.05; a.knowledge *= 1.05; a.stage = 2;
    } else if (a.stage === 2) {
      if (S.emp.artist.n < 1) return false;
      a.stage = 3; a.p = 0;
    } else if (a.stage === 4) {
      if (choice === 'donate') {
        S.r.reputation += a.rep;
        log(S, 'A museum gratefully accepts your painting. +' + fmt(a.rep) + ' reputation.');
      } else if (choice === 'sell') {
        S.r.money += a.money;
        log(S, 'A private collector pays $' + fmt(a.money) + ' for your painting and hangs it in a bathroom.');
      } else return false;
      a.rep *= 1.5; a.money *= 2; a.n++; a.stage = 0; S.stats.paintings++;
    } else return false;
    return true;
  }

  function runForOffice(S) {
    var race = currentRace(S);
    if (!race || !canAfford(S, race.cost)) return null;
    pay(S, race.cost);
    var you = 1 + S.r.reputation;
    var scores = race.rivals.map(function () { return rivalScore(race); });
    var best = Math.max.apply(null, scores);
    var result = { race: race, you: you, scores: scores, won: you > best };
    if (result.won) {
      S.won[race.id] = true;
      S.salary += race.salary;
      log(S, 'You win the election! You are now ' + race.title + ', with a salary of $' + fmt(race.salary) + ' a second.');
    } else {
      var who = race.rivals[scores.indexOf(best)];
      log(S, 'You lose the election to ' + who + ' (' + fmt(best) + ' reputation to your ' + fmt(you) + '). The campaign costs are gone. Build some reputation and try again.');
    }
    return result;
  }

  function setAlloc(S, pct) { S.alloc = Math.max(0, Math.min(100, Math.round(pct))); }

  // The wishes. The first is granted at a thousand cranes; the last at the end.
  var FIRST_WISHES = {
    peace: "You wish for world peace. The cranes confer. Peace, they decide, is best written down. On paper. Lots of paper.",
    pony: "You wish for a pony. The cranes fold you a pony. Out of paper. Then they keep folding.",
    paper: "You wish for more paper. The cranes nod. They are, after all, made of it."
  };

  function wish(S, choice) {
    if (S.pending === 'firstwish') {
      if (!FIRST_WISHES[choice]) return false;
      S.pending = null;
      S.cranes = 1000;
      log(S, FIRST_WISHES[choice]);
      log(S, 'The thousand cranes come alive. Some fold more cranes; the rest wish, and every wish is for paper. Use the slider to decide how many do which.');
      return true;
    }
    if (S.pending === 'lastwish') {
      if (choice !== 'ending' && choice !== 'more') return false;
      S.pending = null;
      S.ended = choice;
      S.shelf.push({ page: S.page, time: S.stats.time, paper: S.stats.paperMade, wish: choice });
      return true;
    }
    return false;
  }

  function turnPage(S) {
    return newState(S);
  }

  // The penalty for holding down Enter (it clicks buttons for you)
  function demise(S) {
    ['tree', 'paper', 'money', 'knowledge', 'book', 'ink', 'imagination'].forEach(function (k) { S.r[k] = 0; });
  }

  // ---------------------------------------------------------------------------
  // Time passing

  // What each kind of employee uses and makes, per job done
  var JOBS = {
    paper:      { use: { tree: 0.01 } },
    book:       { use: { paper: 5, ink: 2 } },
    knowledge:  { use: { book: 1 } },
    money:      { use: { paper: 1 } },
    ink:        { use: { money: 1 } },
    tree:       { use: { money: 20, knowledge: 1 } },
    servant:    { use: { paper: 1, ink: 1 } },
    journalist: { use: { paper: 20, ink: 5 } },
    mint:       { use: { paper: 1, ink: 1 } }
  };
  var JOB_ORDER = ['paper', 'book', 'knowledge', 'money', 'ink', 'tree', 'servant', 'journalist', 'mint'];

  function jobUse(S, id) {
    if (id === 'book') return { paper: S.bookpaper, ink: S.bookink };
    return JOBS[id].use;
  }

  // The COO's sticky notes: what the current project needs is kept back, except
  // anything that's needed to make something else the project needs. `why`, if
  // given, is filled in with what each kept thing is being saved for.
  function reserve(S, why) {
    var keep = {};
    if (!S.done.coo || S.cooOff) return keep;
    var cur = currentProject(S), cost = {}, whyAll = {};
    function add(c, what) {
      for (var k in c) if (!(c[k] <= (cost[k] || 0))) { cost[k] = c[k]; whyAll[k] = what; }
    }
    if (cur && !cur.blocked) add(cur.p.cost, 'the next project');
    else if (LEVELS[S.level + 1] && LEVELS[S.level + 1].need) add(LEVELS[S.level + 1].need, 'Level ' + (S.level + 1));
    if (S.done.bobross) add(artCost(S) || {}, 'the next painting');
    var makes = { book: 'book', knowledge: 'knowledge', money: 'money', ink: 'ink', tree: 'tree',
                  servant: 'paperwork', journalist: 'reputation', mint: 'money' };
    // everything upstream of what's still missing has to keep flowing
    var upstream = {}, todo = [];
    for (var k in cost) if (S.r[k] < cost[k]) todo.push(k);
    while (todo.length) {
      var want = todo.pop();
      for (var id in makes) {
        if (makes[id] !== want || !S.emp[id].n) continue;
        var use = jobUse(S, id);
        for (var u in use) if (!upstream[u]) { upstream[u] = true; todo.push(u); }
      }
    }
    for (k in cost) if (!upstream[k]) { keep[k] = cost[k]; if (why) why[k] = whyAll[k]; }
    return keep;
  }

  // Staff with nothing to do because the COO is keeping back what they'd use:
  // { book: { res: 'paper', what: 'the next project' }, ... }
  function onHold(S) {
    var why = {}, keep = reserve(S, why), out = {};
    JOB_ORDER.forEach(function (id) {
      if (id === 'paper' || !S.emp[id].n || S.paused[id]) return;
      var use = jobUse(S, id);
      for (var k in use) if (keep[k] && S.r[k] < keep[k]) { out[id] = { res: k, what: why[k] }; return; }
    });
    return out;
  }

  // When there isn't enough of something to go round, everyone who needs it
  // gets a fair share, so no one kind of worker can starve the rest.
  function work(S, dt) {
    var r = S.r, m = workMult(S);
    var want = {}, demand = {};
    JOB_ORDER.forEach(function (id) {
      var n = S.paused[id] ? 0 : S.emp[id].n * m * dt;
      if (id === 'tree') n *= S.m.tree;
      if (S.m.job[id]) n *= S.m.job[id];
      want[id] = n;
      if (id === 'paper' || !n) return;
      var use = jobUse(S, id);
      for (var k in use) demand[k] = (demand[k] || 0) + n * use[k];
    });

    // paper makers first: they only need trees
    var x = Math.min(want.paper, r.tree / 0.01);
    if (x > 0) { r.paper += x; r.tree -= 0.01 * x; S.stats.treesUsed += 0.01 * x; made(S, x); }

    var keep = reserve(S), share = {};
    for (var k in demand) share[k] = demand[k] > 0 ? Math.min(1, Math.max(0, r[k] - (keep[k] || 0)) / demand[k]) : 1;
    var out = {};
    JOB_ORDER.forEach(function (id) {
      if (id === 'paper' || !want[id]) return;
      var use = jobUse(S, id), f = 1;
      for (var k in use) f = Math.min(f, share[k]);
      var done = want[id] * f;
      for (k in use) r[k] = Math.max(0, r[k] - done * use[k]);
      out[id] = done;
    });

    if (out.book) r.book += out.book;
    if (out.knowledge) {
      r.knowledge += out.knowledge * S.ke;
      if (S.m.recycle) { r.paper += out.knowledge * S.m.recycle; made(S, out.knowledge * S.m.recycle); }
    }
    if (out.money) r.money += out.money * S.sellprice;
    if (out.ink) r.ink += out.ink * S.m.ink;
    if (out.tree) r.tree += out.tree;
    if (out.servant) r.paperwork += out.servant;
    if (out.journalist) r.reputation += 0.02 * out.journalist;
    if (out.mint) r.money += 25 * out.mint * S.m.mint;
  }

  function imaginationRate(S) {
    return staffCount(S) * 1 * S.m.imag * workMult(S);
  }

  // Cranes either fold more cranes (a sheet each) or wish, and every wish is
  // for paper. They live on the sheet, so there's only room for so many until
  // you fold it again.
  var CRANE_FOLD = 0.04; // new cranes per crane per second
  var CRANE_WISH = 1;   // paper per crane per second

  function craneRates(S) {
    var a = S.alloc / 100, c = creaseMult(S);
    var room = Math.max(0, craneRoom(S) - S.cranes);
    return {
      fold: Math.min(S.cranes * a * CRANE_FOLD * S.m.flock * c, room),
      wish: S.cranes * (1 - a) * CRANE_WISH * S.m.wish * c
    };
  }

  function cranes(S, dt) {
    if (S.cranes <= 0) return;
    var rate = craneRates(S);
    var wished = rate.wish * dt;
    S.r.paper += wished; made(S, wished);
    var born = Math.min(rate.fold * dt, S.r.paper, Math.max(0, craneRoom(S) - S.cranes));
    if (born > 0) { S.r.paper -= born; S.cranes += born; S.stats.cranesFolded += born; }
    if (!S.full && S.cranes >= craneRoom(S) * 0.999 && S.alloc > 0) {
      S.full = true;
      log(S, S.sheet ? 'There is no room left on the sheet for more cranes. Fold it again: a bigger sheet has room for four times as many.'
                     : 'There is no room left for more cranes. They will need something much bigger to live on.');
    }
  }

  // Act IV: the artists draw back the trees, then the page folds
  function drawTime(S) { return Math.max(60, 600 / (1 + S.emp.artist.n / 50)); }

  function drawing(S, dt) {
    if (S.drawing === null || S.drawing === undefined || S.drawing >= 1) return;
    var step = Math.min(dt / drawTime(S), 1 - S.drawing);
    S.drawing += step;
    S.r.tree += step * S.stats.treesUsed;
    if (S.drawing >= 1) log(S, 'Every tree you ever turned into paper is back, in pencil: ' + fmt(S.stats.treesUsed) + " of them. They look happy. Bob Ross would be proud.");
  }

  var REGROW = 0.1; // trees a second, up to the 50 you started with, so you can never run out for good

  function tick(S, dt) {
    if (S.ended && S.ended !== 'more') return;
    S.stats.time += dt;
    if (S.r.tree < 50) S.r.tree = Math.min(50, S.r.tree + REGROW * dt);
    if (S.innovating && S.done.innovation) {
      S.r.imagination += imaginationRate(S) * dt;
    } else {
      work(S, dt);
    }
    S.r.money += S.salary * dt;
    if (S.art.stage === 3) {
      S.art.p += dt / paintTime(S);
      if (S.art.p >= 1) { S.art.p = 1; S.art.stage = 4; }
    }
    cranes(S, dt);
    drawing(S, dt);
    if (S.autofold && S.autofoldOn) {
      for (var i = 0; i < 4 && doFold(S); i++);
    }
    for (var k in S.r) if (!(S.r[k] >= 0)) S.r[k] = 0; // no NaN, no negatives
    hints(S);
  }

  // A nudge, once each, when you're stuck in a way that isn't obvious
  function hints(S) {
    var h = S.hints, r = S.r;
    if (!h.trees && r.tree < 1 && S.emp.paper.n > 0 && !S.emp.tree.n && S.level < 9) {
      h.trees = true;
      log(S, "You're out of trees, so your friends can't make paper. Trees grow back slowly on their own" +
        (S.level >= 6 ? ', or you can plant some.' : '. A community garden would help.'));
    }
    if (!h.squids && r.money < 1 && S.emp.ink.n > 0 && !S.paused.ink && r.ink > 2000 && S.done.ceo) {
      h.squids = true;
      log(S, 'Your squids are turning every dollar you make into ink you don\'t need. You could give them a break.');
    }
  }

  var api = {
    SAVE_VERSION: SAVE_VERSION,
    RES: RES, EMPLOYEES: EMPLOYEES, EMP: EMP, EXECUTIVES: EXECUTIVES, LEVELS: LEVELS, MAX_LEVEL: MAX_LEVEL,
    PROJECTS: PROJECTS, PROJ: PROJ, RACES: RACES, PLACES: PLACES,
    fmt: fmt, fmtSmall: fmtSmall, thickness: thickness, costText: costText, amountText: amountText,
    canAfford: canAfford, levelReqText: levelReqText, canLevel: canLevel,
    currentProject: currentProject, currentRace: currentRace, rivalScore: rivalScore,
    MANUAL: MANUAL, manualShown: manualShown, employeeShown: employeeShown, staffCount: staffCount, productivity: productivity, workMult: workMult,
    creaseMult: creaseMult, imaginationRate: imaginationRate, craneRates: craneRates, craneRoom: craneRoom, drawTime: drawTime,
    foldCost: foldCost, MAX_FOLDS: MAX_FOLDS, placesSeen: placesSeen, paintTime: paintTime, artCost: artCost,
    newState: newState, restore: restore, log: log, reserve: reserve, onHold: onHold,
    click: click, levelUp: levelUp, buyProject: buyProject, hire: hire, improveProductivity: improveProductivity,
    setHireCount: setHireCount, artStep: artStep, runForOffice: runForOffice, setAlloc: setAlloc,
    fold: doFold, wish: wish, turnPage: turnPage, demise: demise, tick: tick
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.PaperEngine = api;
})(this);
