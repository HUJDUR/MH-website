// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Update to the production domain before launch — used for canonical URLs and sitemap.
  site: 'https://www.metalholland.com',
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
