// Opens the mobile menu and captures it.
import { chromium } from 'playwright-core';
const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
await page.click('[data-menu-toggle]');
await page.waitForTimeout(900);
await page.screenshot({ path: 'shots/menu-open.png' });
console.log('menu-open');
await browser.close();
