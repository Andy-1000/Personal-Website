// The site menus (Data stories, Games, Reviews), the same on every page with a
// nav bar. Each page holds <nav class="site" id="site"> with plain links to
// the three hub pages, loads this straight after it, and gets the menus.
//
// To add a story or game, put it at the top of its list here (each menu shows
// its first three), then add it to its hub page and its door on the home page.
//
// A mouse opens a menu by hovering, anything can open one with a click or tap,
// and Escape, a click elsewhere or tabbing away close it. Only one is ever open.
(function () {
  "use strict";

  var SECTIONS = [
    {
      id: "Stories", name: "Data stories", short: "Stories", hub: "/stories", all: "All data stories",
      items: [
        { href: "/shakespeare/", img: "/snapshots/shakespeare.jpg", title: "Did Shakespeare Really Invent That?", sub: "Words first recorded in Shakespeare" },
        { href: "/slang/", img: "/snapshots/slang.jpg", title: "Bussin' to Groovy", sub: "Slang across a century" },
        { href: "/names", img: "/snapshots/names.jpg", title: "Is Your Name Dying?", sub: "American baby names since 1880" }
      ]
    },
    {
      id: "Games", name: "Games", hub: "/games", all: "All games",
      items: [
        { href: "/paper/", img: "/snapshots/paper.jpg", img4k: "/snapshots/paper-4k.jpg", title: "The Paper Game", sub: "An idle game that gets out of hand" },
        { href: "/crossy/", img: "/snapshots/crossy.jpg", img4k: "/snapshots/crossy-4k.jpg", title: "Cross Country", sub: "Open world crossy road" }
      ]
    },
    {
      id: "Reviews", name: "Reviews", hub: "/reviews", all: "All reviews", rows: true, show: 4,
      items: [
        { href: "/movies", img: "/snapshots/movies.jpg", title: "Movies", sub: "Watched and rated" },
        { href: "/albums", img: "/snapshots/albums.jpg", title: "Albums", sub: "Listened to and rated" },
        { href: "/novels", img: "/snapshots/novels.jpg", title: "Novels", sub: "Read and rated" },
        { href: "/books", img: "/snapshots/books.jpg", title: "Books", sub: "Non-fiction, read and rated" }
      ]
    }
  ];

  var nav = document.getElementById("site");
  if (!nav) return;

  var CHEV = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';

  // "/movies.html", "/movies/" and "/movies" are all the same page
  function norm(p) {
    p = p.replace(/index\.html$/, "").replace(/\.html$/, "");
    return p.length > 1 ? p.replace(/\/$/, "") : p;
  }
  var here = norm(location.pathname);

  nav.innerHTML = '<ul class="site-list">' + SECTIONS.map(function (s) {
    var items = s.items.slice(0, s.show || 3);
    var inSection = norm(s.hub) === here || items.some(function (it) { return norm(it.href) === here; });
    return '<li class="drop' + (inSection ? " here" : "") + '">' +
      '<button class="drop-toggle" type="button" aria-expanded="false" aria-controls="menu' + s.id + '">' +
        (s.short ? '<span class="full">' + s.name + '</span><span class="short">' + s.short + "</span>" : s.name) + CHEV +
      "</button>" +
      '<div class="menu' + (s.rows ? " menu-rows" : "") + '" id="menu' + s.id + '">' +
        '<ul class="menu-items">' + items.map(function (it) {
          var src = it.img4k
            ? 'src="' + it.img + '" srcset="' + it.img + " 1600w, " + it.img4k + ' 3840w" sizes="(max-width: 760px) 76px, 184px"'
            : 'src="' + it.img + '"';
          return '<li><a href="' + it.href + '"' + (norm(it.href) === here ? ' aria-current="page"' : "") + ">" +
            '<span class="m-shot"><img ' + src + ' alt="" width="800" height="500" decoding="async"></span>' +
            '<span class="m-text"><span class="m-title">' + it.title + '</span><span class="m-sub">' + it.sub + "</span></span>" +
          "</a></li>";
        }).join("") + "</ul>" +
        '<a class="menu-all" href="' + s.hub + '"' + (norm(s.hub) === here ? ' aria-current="page"' : "") + ">" + s.all + " " + ARROW + "</a>" +
      "</div>" +
    "</li>";
  }).join("") + "</ul>";

  var mouse = matchMedia("(hover: hover) and (pointer: fine)");
  var phone = matchMedia("(max-width: 760px)");
  var drops = [].map.call(nav.querySelectorAll(".drop"), function (li) {
    return { li: li, toggle: li.querySelector(".drop-toggle"), menu: li.querySelector(".menu"), links: [].slice.call(li.querySelectorAll(".menu a")) };
  });
  // byHover: it closes again when the pointer leaves; hovered: the pointer opened it
  var open = null, byHover = false, hovered = false, closeT;

  // a menu hangs from the right of its button, nudged back on screen if that
  // runs it off the left; on a phone it spans the screen, centred whichever
  // side the nav is on
  function place(d) {
    d.menu.style.left = d.menu.style.right = d.menu.style.width = "";
    var vw = document.documentElement.clientWidth;
    if (!phone.matches) {
      var left = d.menu.getBoundingClientRect().left;
      if (left < 16) d.menu.style.right = Math.round(left - 16) + "px";
      return;
    }
    var w = Math.min(vw - 16, 420);
    d.menu.style.width = w + "px";
    d.menu.style.left = Math.round((vw - w) / 2 - nav.getBoundingClientRect().left) + "px";
  }

  // the closed menus too, or they hang off the side of a phone and let it scroll
  // sideways; and again once the fonts are in, as they move the nav a little
  drops.forEach(place);
  if (document.fonts) document.fonts.ready.then(function () { drops.forEach(place); });

  function set(d, how) {
    clearTimeout(closeT);
    open = d;
    byHover = !!d && how === "hover";
    hovered = !!d && (how === "hover" || how === "hover-pinned");
    if (d) place(d);
    drops.forEach(function (x) {
      x.li.classList.toggle("open", x === d);
      x.toggle.setAttribute("aria-expanded", x === d ? "true" : "false");
    });
  }

  drops.forEach(function (d) {
    d.toggle.addEventListener("click", function () {
      // hovering already opened it, so a click pins it open rather than shutting it
      if (open === d && hovered) {
        byHover = hovered = false;
        return;
      }
      set(open === d ? null : d, "click");
    });

    d.li.addEventListener("pointerenter", function (e) {
      if (e.pointerType !== "mouse" || !mouse.matches) return;
      if (open === d) clearTimeout(closeT);
      // a pinned menu moves across with the pointer and stays pinned
      else set(d, open && !byHover ? "hover-pinned" : "hover");
    });

    d.li.addEventListener("pointerleave", function (e) {
      if (e.pointerType === "mouse" && open === d && byHover) closeT = setTimeout(function () { set(null); }, 220);
    });

    d.li.addEventListener("keydown", function (e) {
      var at = d.links.indexOf(document.activeElement);
      if (e.key === "Escape" && open === d) {
        set(null);
        d.toggle.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (open !== d) set(d, "key");
        d.links[Math.min(d.links.length - 1, at + 1)].focus();
      } else if (e.key === "ArrowUp" && open === d) {
        e.preventDefault();
        if (at <= 0) d.toggle.focus(); else d.links[at - 1].focus();
      }
    });

    d.li.addEventListener("focusout", function (e) {
      if (open === d && !d.li.contains(e.relatedTarget)) set(null);
    });
  });

  document.addEventListener("pointerdown", function (e) {
    if (open && !nav.contains(e.target)) set(null);
  });

  window.addEventListener("resize", function () {
    drops.forEach(place);
  });
})();
