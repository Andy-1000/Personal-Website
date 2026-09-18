/* Layout audit for /movies.
 *
 * Load it on any same-origin page (movies.html itself is fine):
 *   <script src="movies-audit.js"></script>
 * then in the console:
 *   await movieAudit()
 *
 * Each viewport is a real one: the audit loads movies.html into an iframe sized
 * to the target, so media queries, dvh and 100vw all behave as they do on the
 * device. Resizing the page with CSS does not do that, and quietly passes or
 * fails the wrong things.
 *
 * At every size x every sort it checks:
 *   1. the page never scrolls sideways
 *   2. no two chart labels overlap
 *   3. no chart label escapes the chart card
 *   4. every poster tile sits inside the plot
 *   5. the detail dialog fits on screen, and its close button clears the title
 */
(function () {
  "use strict";

  var PAGE = "movies.html";

  var SIZES = [
    { w: 320, h: 568, name: "320x568" },
    { w: 375, h: 667, name: "375x667" },
    { w: 390, h: 844, name: "390x844" },
    { w: 768, h: 1024, name: "768x1024" },
    { w: 1024, h: 768, name: "1024x768" },
    { w: 1280, h: 800, name: "1280x800" },
    { w: 1920, h: 1080, name: "1920x1080" },
    { w: 844, h: 390, name: "844x390 landscape" }
  ];
  var MODES = ["rating", "year", "director"];

  // the longest review on the page: the tallest the dialog ever has to get
  var LONGEST = "inception-2010";

  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  function overlap(a, b) {
    return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;
  }

  function inside(outer, inner, pad) {
    pad = pad || 0;
    return inner.left >= outer.left - pad && inner.right <= outer.right + pad &&
           inner.top >= outer.top - pad && inner.bottom <= outer.bottom + pad;
  }

  function frame(size) {
    return new Promise(function (res) {
      var f = document.createElement("iframe");
      f.setAttribute("title", "movie audit viewport");
      f.style.cssText = "position:fixed;left:-10000px;top:0;border:0;visibility:hidden;" +
                        "width:" + size.w + "px;height:" + size.h + "px";
      f.src = PAGE + "?audit=1";
      f.onload = function () {
        // measure settled layouts, not frames mid-tween
        var s = f.contentDocument.createElement("style");
        s.textContent = "*,*::before,*::after{transition:none!important;animation:none!important}";
        f.contentDocument.head.appendChild(s);
        setTimeout(function () { res(f); }, 120);
      };
      document.body.appendChild(f);
    });
  }

  async function checkOne(f, size, mode, out) {
    var win = f.contentWindow, doc = f.contentDocument;
    var note = function (problem, detail) { out.push({ size: size.name, sort: mode, problem: problem, detail: detail }); };

    var btn = doc.querySelector('.switch button[data-sort="' + mode + '"]');
    if (btn.getAttribute("aria-pressed") !== "true") btn.click();
    await sleep(900);                                  // let the tween settle

    var viz = doc.querySelector(".viz").getBoundingClientRect();
    var plot = doc.getElementById("plot").getBoundingClientRect();

    // 1. nothing reaches past the viewport edge.
    // body has overflow-x:hidden, which clamps scrollWidth and hides real
    // overflow, so measure the elements themselves.
    var over = [].slice.call(doc.querySelectorAll("body *")).filter(function (el) {
      if (el.closest("#tip, dialog, .cursor")) return false;       // fixed / off-flow layers
      var st = win.getComputedStyle(el);
      if (st.position === "fixed" || st.display === "none" || st.visibility === "hidden") return false;
      var r = el.getBoundingClientRect();
      return r.width > 0 && (r.right > size.w + 1 || r.left < -1);
    }).map(function (el) {
      var r = el.getBoundingClientRect();
      return (el.className || el.tagName) + " → " + Math.round(r.left) + ".." + Math.round(r.right);
    });
    if (over.length) note("overflows-viewport", over.length + ": " + over.slice(0, 4).join("; "));
    if (doc.documentElement.scrollWidth > size.w + 1) {
      note("h-scroll", doc.documentElement.scrollWidth + "px scrollable");
    }

    // 2 + 3. chart labels
    var boxes = [].slice.call(doc.querySelectorAll("#labels .lab"))
      .map(function (el) { return { el: el, r: el.getBoundingClientRect() }; })
      .filter(function (b) { return b.r.width > 0 && b.r.height > 0; });

    var hits = [];
    for (var i = 0; i < boxes.length; i++) {
      for (var j = i + 1; j < boxes.length; j++) {
        if (overlap(boxes[i].r, boxes[j].r)) {
          hits.push('"' + boxes[i].el.textContent.trim() + '" x "' + boxes[j].el.textContent.trim() + '"');
        }
      }
    }
    if (hits.length) note("label-overlap", hits.length + ": " + hits.slice(0, 3).join(", "));

    // labels may sit just outside the plot box, but must stay within the chart card
    var escaped = boxes.filter(function (b) { return !inside(viz, b.r, 1); })
                       .map(function (b) { return '"' + b.el.textContent.trim() + '"'; });
    if (escaped.length) note("label-outside-card", escaped.length + ": " + escaped.slice(0, 4).join(", "));

    // 4. every tile inside the plot
    var stray = [].slice.call(doc.querySelectorAll("#tiles .dot")).filter(function (d) {
      var r = d.getBoundingClientRect();
      return r.width > 0 && !inside(plot, r, 1);
    });
    if (stray.length) {
      var r0 = stray[0].getBoundingClientRect();
      note("tile-outside-plot", stray.length + " tiles, first at " +
        Math.round(r0.left - plot.left) + "," + Math.round(r0.top - plot.top));
    }

    // 5. the detail dialog, opened on the longest review so the tallest case is
    //    the one under test
    var card = doc.querySelector(".card");
    if (card) {
      card.click();
      await sleep(120);
      win.location.hash = LONGEST;      // deep-link to the worst case
      await sleep(220);
      var dlg = doc.getElementById("detail");
      if (!dlg.open) {
        note("dialog-did-not-open", "");
      } else {
        var r = dlg.getBoundingClientRect();
        if (r.width > size.w + 1 || r.height > win.innerHeight + 1 || r.left < -1 || r.top < -1) {
          note("dialog-overflow", Math.round(r.width) + "x" + Math.round(r.height) +
            " in " + size.w + "x" + win.innerHeight);
        }
        if (overlap(doc.getElementById("dTitle").getBoundingClientRect(),
                    doc.getElementById("dClose").getBoundingClientRect())) {
          note("close-covers-title", "");
        }
        // nothing may be cut off sideways (there is no horizontal scroll to save it)
        ["#dTitle", "#dReview", ".detail .cover", ".detail nav"].forEach(function (sel) {
          var el = doc.querySelector(sel);
          if (!el) return;
          var er = el.getBoundingClientRect();
          if (er.width > 0 && (er.right > r.right + 1 || er.left < r.left - 1)) {
            note("clipped-sideways", sel + " by " +
              Math.round(Math.max(er.right - r.right, r.left - er.left)) + "px");
          }
        });

        // A long review must scroll, not push the prev / next arrows out of the
        // dialog. Scroll the card to its end and check they actually turn up.
        var info = doc.querySelector(".detail .info");
        var sc = (win.getComputedStyle(info).overflowY === "auto" &&
                  info.scrollHeight > info.clientHeight) ? info : doc.querySelector(".detail");
        sc.scrollTop = sc.scrollHeight;
        await sleep(140);
        var navr = doc.querySelector(".detail nav").getBoundingClientRect();
        r = dlg.getBoundingClientRect();
        if (navr.bottom > r.bottom + 2 || navr.top < r.top - 2) {
          note("nav-unreachable", "scrolled to the end, arrows still " +
            Math.round(navr.bottom - r.bottom) + "px past the dialog");
        }
        dlg.close();
        await sleep(80);
      }
    }
  }

  window.movieAudit = async function () {
    var out = [];
    for (var s = 0; s < SIZES.length; s++) {
      var f = await frame(SIZES[s]);
      for (var m = 0; m < MODES.length; m++) {
        await checkOne(f, SIZES[s], MODES[m], out);
      }
      f.remove();
    }
    if (!out.length) {
      console.log("%cmovie audit: clean — " + SIZES.length + " sizes x " + MODES.length + " sorts",
                  "color:#0a0;font-weight:600");
    } else {
      console.warn("movie audit: " + out.length + " problem(s)");
      console.table(out);
    }
    return out;
  };

  window.movieAuditSizes = SIZES;
})();
