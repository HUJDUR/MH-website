// Dev-only visual check: screenshots the built site using the locally
// installed Chrome. Not part of the production build.
import { chromium } from 'playwright-core';

const BASE = process.env.BASE ?? 'http://localhost:4321';
const OUT = process.env.OUT ?? 'shots';
const pages = (process.env.PAGES ?? '/').split(',');
const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};
const only = process.env.VP;

const browser = await chromium.launch({ channel: 'chrome' });
for (const [name, viewport] of Object.entries(viewports)) {
  if (only && only !== name) continue;
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const p of pages) {
    await page.goto(BASE + p, { waitUntil: 'networkidle' });
    // Scroll through so reveal animations settle before capture. Smooth
    // scrolling has to be off or the steps outrun the actual scroll position.
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      const step = window.innerHeight * 0.6;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 220));
      }
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 600));
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 600));
    });
    await page.waitForTimeout(900);
    const slug = p === '/' ? 'home' : p.replace(/\//g, '');
    await page.screenshot({
      path: `${OUT}/${slug}-${name}.png`,
      fullPage: process.env.FULL === '1',
    });
    console.log(`${slug}-${name}`);
  }
  await ctx.close();
}
await browser.close();
