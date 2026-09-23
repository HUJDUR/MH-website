// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Used for canonical URLs and the sitemap. This is the staging subdomain, so
  // the site sits at the root of its own host and needs no `base` — the helpers
  // in src/i18n/index.ts read BASE_URL, which is "/" without it, so every link
  // and asset path collapses back to root form on its own. Nothing else had to
  // be reverted when `base` was dropped.
  //
  // Going live means changing this one line to the production host. Do that and
  // the noindex in Base.astro and the Disallow in src/pages/robots.txt.ts both
  // switch themselves off — see the note in each.
  site: 'https://test.metalholland.com',
  // English lives at the root; the other two are prefixed. Pages are generated
  // from src/pages/[...lang]/ — see src/i18n/index.ts.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bs', 'nl'],
    routing: { prefixDefaultLocale: false },
  },
  /**
   * Every internal link is prefetched, so the next page's HTML is usually in
   * cache before the click lands. All five pages of a locale are ~52 KB
   * gzipped — less than one of the font files — so this is cheap even if a
   * visitor only ever reads one of them.
   *
   * `hover` fetches 80ms after the pointer settles on a link, and Astro drops
   * that on `saveData` and any 2g connection. On those it falls back to the
   * tap strategy on its own: nothing is fetched until mousedown or touchstart,
   * by which point the visitor has committed to the navigation anyway.
   */
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', bs: 'bs-BA', nl: 'nl-NL' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
