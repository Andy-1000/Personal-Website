/*
  Layout audit for /books.

  Loads books.html in an off-screen iframe at each viewport size, switches
  through all three sorts, and checks four things every time:

    1. nothing scrolls sideways
    2. no chart label overlaps another, or spills out of the plot
    3. no cover tile sits outside the plot
    4. the detail dialog fits on the screen

  Run it from the browser console on any page of the site:

      const s = document.createElement("script");
      s.src = "books-audit.js";
      document.head.appendChild(s);
      // then
      await BooksAudit.run();

  BooksAudit.run() prints a table and resolves to { pass, fail, failures, results }.
*/
(function (global) {
  "use strict";

  var SIZES = [
    { w: 320, h: 568, name: "320 (small phone)" },
    { w: 375, h: 667, name: "375 (phone)" },
    { w: 390, h: 844, name: "390 (phone)" },
    { w: 768, h: 1024, name: "768 (tablet)" },
    { w: 1024, h: 768, name: "1024 (small laptop)" },
    { w: 1280, h: 800, name: "1280 (laptop)" },
    { w: 1920, h: 1080, name: "1920 (desktop)" },
    { w: 844, h: 390, name: "844x390 (phone, landscape)" }
  ];

  var SORTS = ["rating", "year", "author"];
  var PAGE = "books.html";
  var SLACK = 1;          // a pixel of rounding is not a bug
  var OVERLAP = 0.5;      // labels must clear each other by at least this much

  function rectsOverlap(a, b) {
    return a.left < b.right - OVERLAP && b.left < a.right - OVERLAP &&
           a.top < b.bottom - OVERLAP && b.top < a.bottom - OVERLAP;
  }

  function outside(inner, outer, slack) {
    var d = [];
    if (inner.left < outer.left - slack) d.push("left by " + (outer.left - inner.left).toFixed(1));
    if (inner.right > outer.right + slack) d.push("right by " + (inner.right - outer.right).toFixed(1));
    if (inner.top < outer.top - slack) d.push("top by " + (outer.top - inner.top).toFixed(1));
    if (inner.bottom > outer.bottom + slack) d.push("bottom by " + (inner.bottom - outer.bottom).toFixed(1));
    return d;
  }

  function frame(w, h) {
    return new Promise(function (resolve, reject) {
      var f = document.createElement("iframe");
      f.setAttribute("aria-hidden", "true");
      f.style.cssText = "position:fixed;left:-10000px;top:0;border:0;visibility:hidden";
      f.width = w; f.height = h;
      f.src = PAGE + "?audit=" + Date.now();
      f.onload = function () { resolve(f); };
      f.onerror = function () { reject(new Error("could not load " + PAGE)); };
      document.body.appendChild(f);
    });
  }

  function settle(ms) {
    return new Promise(function (r) { setTimeout(r, ms); });
  }

  // measure the settled layout, not a frame midway through a transition
  function freeze(doc) {
    var s = doc.createElement("style");
    s.textContent = "*,*::before,*::after{transition:none !important;animation:none !important}";
    doc.head.appendChild(s);
  }

  function checkOne(doc, win, size, sort) {
    var issues = [];
    var add = function (kind, msg) { issues.push({ kind: kind, msg: msg }); };

    /* ---- 1. no horizontal scrolling ---- */
    var de = doc.documentElement;
    if (de.scrollWidth > win.innerWidth + SLACK) {
      add("h-scroll", "document scrollWidth " + de.scrollWidth + " > viewport " + win.innerWidth);
    }
    // and nothing sticking out past the right edge
    Array.prototype.forEach.call(doc.querySelectorAll("main, .viz, .plot, .shelf, .grid, .toolbar, header.page, footer"), function (el) {
      var r = el.getBoundingClientRect();
      if (r.right > win.innerWidth + SLACK) add("h-scroll", el.className || el.tagName, r.right.toFixed(1));
      if (r.left < -SLACK) add("h-scroll", (el.className || el.tagName) + " starts at " + r.left.toFixed(1));
    });

    /* ---- 2. chart labels: inside the plot, and clear of each other ---- */
    var plot = doc.getElementById("plot");
    var pr = plot.getBoundingClientRect();
    var labs = Array.prototype.slice.call(doc.querySelectorAll("#labels .lab"));
    var boxes = labs.map(function (el) {
      var r = el.getBoundingClientRect();
      // a button label carries 6x7px of padding purely as a tap target; judge the ink, not the padding
      var pad = el.tagName === "BUTTON" ? { x: 7, y: 6 } : { x: 0, y: 0 };
      return {
        el: el, text: (el.textContent || "").trim() || el.getAttribute("aria-label") || "?",
        left: r.left + pad.x, right: r.right - pad.x, top: r.top + pad.y, bottom: r.bottom - pad.y
      };
    });
    boxes.forEach(function (b) {
      var d = outside(b, pr, SLACK);
      if (d.length) add("label-clipped", '"' + b.text + '" spills ' + d.join(", "));
    });
    for (var i = 0; i < boxes.length; i++) {
      for (var j = i + 1; j < boxes.length; j++) {
        if (rectsOverlap(boxes[i], boxes[j])) {
          add("label-overlap", '"' + boxes[i].text + '" over "' + boxes[j].text + '"');
        }
      }
    }
    if (!labs.length) add("label-missing", "the chart drew no labels at all");

    /* ---- 3. every tile inside the plot ---- */
    var dots = doc.querySelectorAll("#tiles .dot");
    var strays = 0, worst = "";
    Array.prototype.forEach.call(dots, function (el, k) {
      var d = outside(el.getBoundingClientRect(), pr, SLACK);
      if (d.length) { strays++; if (!worst) worst = "tile #" + k + " " + d.join(", "); }
    });
    if (strays) add("tile-outside", strays + " of " + dots.length + " tiles outside the plot (" + worst + ")");
    if (dots.length !== (win.BOOK_COUNT || dots.length)) add("tile-count", "expected " + win.BOOK_COUNT + " tiles, drew " + dots.length);

    /* ---- 4. the detail dialog fits on screen, for every book ----
       the longest review is the one that breaks the layout, so open them all
       rather than trusting whichever card happens to come first */
    var cards = Array.prototype.slice.call(doc.querySelectorAll(".card"));
    if (!cards.length) { add("no-cards", "no shelves rendered"); return issues; }
    var dlg = doc.getElementById("detail");
    var vp = { left: 0, top: 0, right: win.innerWidth, bottom: win.innerHeight };
    var worstSpill = null, worstCtl = null, hscroll = null;

    cards.forEach(function (card) {
      card.click();
      if (!dlg.open) { add("dialog", "clicking a cover did not open the detail dialog"); return; }
      var title = doc.getElementById("dTitle").textContent;
      var dr = dlg.getBoundingClientRect();
      var od = outside(dr, vp, SLACK);
      if (od.length && !worstSpill) worstSpill = title + ": " + od.join(", ");

      var inner = dlg.querySelector(".detail");
      if (inner.scrollWidth > inner.clientWidth + SLACK && !hscroll) {
        hscroll = title + " (" + inner.scrollWidth + " > " + inner.clientWidth + ")";
      }
      // the prev / next arrows live at the end of a scrolling column, so the
      // question is whether you can reach them, not where they sit unscrolled
      inner.scrollTop = inner.scrollHeight;
      var info = dlg.querySelector(".info");
      info.scrollTop = info.scrollHeight;

      ["dClose", "dPrev", "dNext"].forEach(function (id) {
        var r = doc.getElementById(id).getBoundingClientRect();
        if (r.width < 24 || r.height < 24) add("control-small", id + " is " + r.width.toFixed(0) + "x" + r.height.toFixed(0));
        var off = Math.max(r.bottom - dr.bottom, dr.top - r.top, r.right - dr.right, dr.left - r.left);
        if (off > 8 && (!worstCtl || off > worstCtl.off)) {
          worstCtl = { off: off, msg: id + " is still " + Math.round(off) + "px outside the dialog on " + title + ", scrolled to the end" };
        }
      });
      dlg.close();
    });

    if (worstSpill) add("dialog-offscreen", "dialog spills " + worstSpill);
    if (hscroll) add("dialog-hscroll", "dialog content scrolls sideways on " + hscroll);
    if (worstCtl) add("control-outside", worstCtl.msg);
    return issues;
  }

  function run(opts) {
    opts = opts || {};
    var sizes = opts.sizes || SIZES;
    var results = [], failures = [];

    return sizes.reduce(function (chain, size) {
      return chain.then(function () {
        return frame(size.w, size.h).then(function (f) {
          var win = f.contentWindow, doc = f.contentDocument;
          freeze(doc);
          // measure the page in the font it actually renders in, not the fallback
          return (doc.fonts && doc.fonts.ready ? doc.fonts.ready : Promise.resolve())
            .then(function () { return settle(120); }).then(function () {
            return SORTS.reduce(function (c2, sort) {
              return c2.then(function () {
                var btn = doc.querySelector('.switch button[data-sort="' + sort + '"]');
                if (!btn) throw new Error("no sort button for " + sort);
                btn.click();
                return settle(90).then(function () {
                  var issues = checkOne(doc, win, size, sort);
                  var row = { size: size.name, w: size.w, h: size.h, sort: sort,
                              chartH: doc.getElementById("plot").getBoundingClientRect().height,
                              issues: issues, ok: issues.length === 0 };
                  results.push(row);
                  if (!row.ok) failures.push(row);
                });
              });
            }, Promise.resolve());
          }).then(function () {
            // on a wide screen the chart must not change height between sorts
            if (size.w >= 600) {
              var hs = results.filter(function (r) { return r.w === size.w && r.h === size.h; })
                              .map(function (r) { return Math.round(r.chartH); });
              if (Math.max.apply(null, hs) - Math.min.apply(null, hs) > 1) {
                var row = { size: size.name, w: size.w, h: size.h, sort: "(all)",
                            issues: [{ kind: "chart-jumps", msg: "chart heights differ between sorts: " + hs.join(", ") }], ok: false };
                results.push(row); failures.push(row);
              }
            }
            f.remove();
          });
        });
      });
    }, Promise.resolve()).then(function () {
      var pass = results.filter(function (r) { return r.ok; }).length;
      console.log("%c/books layout audit", "font-weight:bold;font-size:14px");
      console.table(results.map(function (r) {
        return { viewport: r.size, sort: r.sort, chart: Math.round(r.chartH || 0) + "px",
                 result: r.ok ? "pass" : r.issues.map(function (i) { return i.kind; }).join(", ") };
      }));
      failures.forEach(function (r) {
        console.group("%cFAIL " + r.size + " / " + r.sort, "color:#b00");
        r.issues.forEach(function (i) { console.log(i.kind + ": " + i.msg); });
        console.groupEnd();
      });
      console.log(pass + " / " + results.length + " checks passed" + (failures.length ? " - " + failures.length + " FAILED" : " - all good"));
      return { pass: pass, fail: failures.length, failures: failures, results: results };
    });
  }

  global.BooksAudit = { run: run, SIZES: SIZES, SORTS: SORTS };
})(window);
