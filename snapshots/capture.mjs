// Takes the tile snapshots used by the home page menus and doors and by the
// hub pages (/stories, /games, /reviews).
//
//   npx serve -l 4173 .                     (from the site root, in one terminal)
//   node snapshots/capture.mjs names slang  (in another; one slug per page)
//
// Each slug is the page's path on the site and the name of its snapshot:
// "names" opens /names and writes snapshots/names.jpg.

import { chromium } from "playwright";
import { fileURLToPath } from "node:url";

const BASE = process.env.BASE || "http://localhost:4173";
const slugs = process.argv.slice(2);
if (!slugs.length) {
  console.error("usage: node snapshots/capture.mjs <slug> [<slug> ...]");
  process.exit(1);
}

// software WebGL, so the 3D games (Cross Country) draw without a GPU
const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
// laid out like a laptop screen, saved at 800 x 500, which is plenty for a tile
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 0.625 });

// The Paper Game opens on an almost empty page, so it's snapped a little way
// in: level 6 with a few staff, about where a player is after ten minutes
await page.addInitScript(() => {
  if (!location.pathname.startsWith("/paper")) return;
  const emp = (n, cost, kcost) => ({ n, cost, kcost });
  localStorage.setItem("thePaperGame.save", JSON.stringify({
    v: 1, page: 1, creases: 0, shelf: [], level: 6,
    r: { tree: 342, paper: 4820, money: 12450, ink: 961, book: 612, knowledge: 243, imagination: 0, reputation: 0, paperwork: 0 },
    emp: { paper: emp(6, 50, 10), money: emp(4, 200, 20), ink: emp(3, 500, 30), book: emp(2, 1000, 40), knowledge: emp(0, 2500, 50) },
    stats: { time: 640, paperMade: 21500, clicks: 900, paintings: 0, cranesFolded: 0, treesUsed: 215 },
  }));
});

for (const slug of slugs) {
  await page.goto(`${BASE}/${slug}`, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: "a.home { visibility: hidden !important; }" }); // the corner link back here
  await page.waitForTimeout(4000); // let the intro animations settle
  await page.screenshot({ path: fileURLToPath(new URL(`./${slug}.jpg`, import.meta.url)), type: "jpeg", quality: 78 });
  console.log("wrote", `snapshots/${slug}.jpg`);
}
await browser.close();
