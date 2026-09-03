// Dev-only accessibility / integrity sweep across the built pages.
import { chromium } from 'playwright-core';

const PAGES = ['/', '/capabilities', '/industries', '/facility', '/projects', '/about', '/contact', '/404'];
const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();

const problems = [];
page.on('console', (m) => {
  if (m.type() === 'error') problems.push(`console error: ${m.text()}`);
});
page.on('pageerror', (e) => problems.push(`page error: ${e.message}`));
page.on('response', (r) => {
  if (r.status() >= 400) problems.push(`${r.status()} ${r.url()}`);
});

for (const p of PAGES) {
  await page.goto('http://localhost:4321' + p, { waitUntil: 'networkidle' });
  const report = await page.evaluate(() => {
    const out = [];
    // Images must carry alt (empty alt is fine for decorative).
    document.querySelectorAll('img:not([alt])').forEach((el) =>
      out.push(`img without alt: ${el.getAttribute('src')?.slice(0, 70)}`)
    );
    // Exactly one h1, and no skipped heading levels.
    const h1s = document.querySelectorAll('h1');
    if (h1s.length !== 1) out.push(`${h1s.length} h1 elements`);
    let prev = 0;
    document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((h) => {
      const level = Number(h.tagName[1]);
      if (prev && level > prev + 1)
        out.push(`heading jump h${prev} -> h${level}: "${h.textContent?.trim().slice(0, 40)}"`);
      prev = level;
    });
    // Links and buttons need an accessible name.
    document.querySelectorAll('a,button').forEach((el) => {
      const name = (el.textContent || '').trim() || el.getAttribute('aria-label');
      if (!name) out.push(`unnamed ${el.tagName.toLowerCase()}`);
    });
    // Internal links must resolve to a real route.
    const routes = ['/', '/capabilities', '/industries', '/facility', '/projects', '/about', '/contact'];
    document.querySelectorAll('a[href^="/"]').forEach((a) => {
      const href = a.getAttribute('href').split('#')[0] || '/';
      if (!routes.includes(href)) out.push(`link to unknown route: ${href}`);
    });
    // Horizontal overflow is the classic responsive failure.
    if (document.documentElement.scrollWidth > window.innerWidth + 1)
      out.push(`horizontal overflow: ${document.documentElement.scrollWidth}px`);
    return out;
  });
  report.forEach((r) => problems.push(`${p} — ${r}`));
}

await browser.close();
console.log(problems.length ? problems.join('\n') : 'no problems found');
