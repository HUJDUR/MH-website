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
  /**
   * The registered entity, for places that must name the legal person rather
   * than the brand — the privacy policy's controller block above all. Kept
   * apart from `name` so headings and nav stay unencumbered by the d.o.o.
   */
  legalName: 'Metal Holland d.o.o.',
  /** Used in <title> after the page name. */
  shortName: 'Metal Holland',
  /** Update together with `site` and `base` in astro.config.mjs. */
  url: 'https://hujdur.github.io/MH-website',
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
   * Numbers only. Each is always rendered behind its label from the locale
   * dictionary (`common.vatLabel` / `common.jibLabel`), because "401899980009"
   * next to "4401899980009" is otherwise a typo waiting to be reported — and
   * because the VAT label itself translates (VAT / PDV / btw) while the digits
   * do not. The JIB is the company's registration number; the VAT number is the
   * same digits without the leading 4, which is how the tax authority issues them.
   */
  registration: {
    vat: '401899980009',
    jib: '4401899980009',
  },
} as const;

/**
 * Both forms — the enquiry form on /contact and the application form on
 * /careers — post here, and both must keep posting to the same place: the
 * relay forwards to info@metalholland.com and stores nothing, so a second key
 * would mean a second dashboard to watch and a second allowlist to keep in
 * step. They are only told apart in the inbox by the subject prefix each page
 * sets. Defined once here rather than per page because the two literals had
 * no way of staying equal on their own.
 *
 * The access key is a submit-only credential and is public by design: it
 * cannot read past submissions or reach the account. Any key the browser uses
 * is visible to the browser, so do not treat this as a secret and do not
 * propose hiding it. The protection that matters is the domain allowlist in
 * the Web3Forms dashboard — restrict this key to metalholland.com so nobody
 * can post to it from elsewhere.
 */
export const web3forms = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: '64977760-c428-4e97-af05-a8eec75b5c8e',
} as const;

