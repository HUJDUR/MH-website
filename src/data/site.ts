/**
 * Company facts that do not change with language: address, phone, VAT, URLs.
 * Navigation labels and all copy live in `src/i18n/` instead.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *  ⚠  BEFORE LAUNCH: every value written as [SOMETHING] is a placeholder.
 *     Search this file for "[" to find them all. Translated copy lives in
 *     `src/i18n/{en,bs,nl}.ts`.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Metal Holland',
  /** Used in <title> after the page name. */
  shortName: 'Metal Holland',
  /** Update together with `site` in astro.config.mjs. */
  url: 'https://www.metalholland.com',
} as const;

export const contact = {
  email: 'info@metalholland.com',
  phone: '+387 54 620 470',
  /** Digits only, for tel: links. */
  phoneHref: '+38754620470',

  works: {
    country: 'Bosnia and Herzegovina',
    /** Street and city only — the country line comes from the dictionary. */
    lines: ['Njegoševa 5', '76230 Šamac'],
    /** Opens the pin in whatever map app the visitor uses. */
    mapUrl: 'https://maps.app.goo.gl/FtN6afG5aKsxbXr7A',
    /** Keyless Google Maps iframe — same pin, no API key required. */
    mapEmbedUrl:
      'https://maps.google.com/maps?q=45.05029,18.4777441&z=16&hl=en&output=embed',
  },

  /**
   * Both carry their own label, because "401899980009" next to "4401899980009"
   * is otherwise a typo waiting to be reported. The JIB is the company's
   * registration number; the VAT number is the same digits without the leading
   * 4, which is how the tax authority issues them.
   */
  registration: {
    vat: 'VAT 401899980009',
    jib: 'JIB 4401899980009',
  },
} as const;

