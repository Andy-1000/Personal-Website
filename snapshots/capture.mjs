// Takes the tile snapshots used by the site menus (site-nav.js), the home page
// doors and the hub pages (/stories, /games, /reviews).
//
//   npx serve -l 4173 .                     (from the site root, in one terminal)
//   node snapshots/capture.mjs names slang  (in another; one slug per page)
//
// Each slug is the page's path on the site and the name of its snapshot:
// "names" opens /names and writes snapshots/names.jpg, at 800 x 500.
//
// Games get more care: drawn at 4K (snapshots/<slug>-4k.jpg, 3840 x 2400)
// with a 1600 x 1000 copy (snapshots/<slug>.jpg) for the pages to use, and
// each starts a little way in rather than on its title screen (GAMES below).

import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { writeFileSync } from "node:fs";

const BASE = process.env.BASE || "http://localhost:4173";
const slugs = process.argv.slice(2);
if (!slugs.length) {
  console.error("usage: node snapshots/capture.mjs <slug> [<slug> ...]");
  process.exit(1);
}

const out = (name) => fileURLToPath(new URL(`./${name}`, import.meta.url));
const wait = (page, ms) => page.waitForTimeout(ms);

// How to get each game to a moment worth showing. Returns false if the moment
// was missed (the run ended), and the shot is tried again from the start.
const GAMES = {
  // a few hops into a run of Cross Country, player still alive
  crossy: async (page) => {
    await page.click("#btn-play");
    await wait(page, 2500);
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press("ArrowUp");
      await wait(page, 800);
    }
    return page.evaluate(() => document.getElementById("screen-over").classList.contains("hidden") &&
      Number(document.getElementById("score").textContent) >= 4);
  },
  // The Paper Game from a level 6 save with a few staff (set before load, below)
  paper: async () => true,
};

// software WebGL, so the 3D games draw without a GPU
const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });

for (const slug of slugs) {
  if (!GAMES[slug]) {
    // laid out like a laptop screen, saved at 800 x 500, which is plenty for a tile
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 0.625 });
    await page.goto(`${BASE}/${slug}`, { waitUntil: "networkidle" });
    await page.addStyleTag({ content: "a.home { visibility: hidden !important; }" }); // the corner link back here
    await wait(page, 4000); // let the intro animations settle
    await page.screenshot({ path: out(`${slug}.jpg`), type: "jpeg", quality: 78 });
    console.log("wrote", `snapshots/${slug}.jpg`);
    await page.close();
    continue;
  }

  // the same laptop layout drawn at 3x: 3840 x 2400
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 3 });
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

  let done = false;
  for (let attempt = 1; attempt <= 12 && !done; attempt++) {
    await page.goto(`${BASE}/${slug}/`, { waitUntil: "networkidle" });
    await wait(page, 3000);
    if (!(await GAMES[slug](page))) continue;
    const big = await page.screenshot({ type: "jpeg", quality: 85 });
    // still going a moment later, so the shot didn't catch the end of the run
    await wait(page, 1500);
    if (slug === "crossy" && !(await page.evaluate(() => document.getElementById("screen-over").classList.contains("hidden")))) continue;

    // the 1600 x 1000 copy, scaled down in the browser
    const small = await page.evaluate(async (b64) => {
      const img = new Image();
      img.src = "data:image/jpeg;base64," + b64;
      await img.decode();
      const c = document.createElement("canvas");
      c.width = 1600;
      c.height = 1000;
      const g = c.getContext("2d");
      g.imageSmoothingQuality = "high";
      g.drawImage(img, 0, 0, c.width, c.height);
      return c.toDataURL("image/jpeg", 0.85).split(",")[1];
    }, big.toString("base64"));

    writeFileSync(out(`${slug}-4k.jpg`), big);
    writeFileSync(out(`${slug}.jpg`), Buffer.from(small, "base64"));
    console.log("wrote", `snapshots/${slug}-4k.jpg`, "and", `snapshots/${slug}.jpg`);
    done = true;
  }
  if (!done) console.error("gave up on", slug);
  await page.close();
}
await browser.close();
