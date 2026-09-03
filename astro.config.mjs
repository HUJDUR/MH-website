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
