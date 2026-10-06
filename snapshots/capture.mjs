// Takes the home page tile snapshots of the data stories.
//
//   npx serve -l 4173 .                     (from the site root, in one terminal)
//   node snapshots/capture.mjs names slang  (in another; one slug per page)
//
// Each slug is the page's path on the site and the name of its snapshot:
// "names" opens /names and writes snapshots/names.jpg.

import { chromium } from "playwright";

const BASE = process.env.BASE || "http://localhost:4173";
const slugs = process.argv.slice(2);
if (!slugs.length) {
  console.error("usage: node snapshots/capture.mjs <slug> [<slug> ...]");
  process.exit(1);
}

const browser = await chromium.launch();
// laid out like a laptop screen, saved at 800 x 500, which is plenty for a tile
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 0.625 });
for (const slug of slugs) {
  await page.goto(`${BASE}/${slug}`, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: "a.home { visibility: hidden !important; }" }); // the corner link back here
  await page.waitForTimeout(4000); // let the intro animations settle
  await page.screenshot({ path: new URL(`./${slug}.jpg`, import.meta.url).pathname, type: "jpeg", quality: 78 });
  console.log("wrote", `snapshots/${slug}.jpg`);
}
await browser.close();
