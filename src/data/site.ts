/**
 * Single source of truth for company details, navigation and SEO defaults.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *  ⚠  BEFORE LAUNCH: every value written as [SOMETHING] is a placeholder.
 *     Search this file for "[" to find them all. Nothing outside this file
 *     and `content.ts` needs editing to publish real company data.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Metal Holland',
  /** Used in <title> after the page name. */
  shortName: 'Metal Holland',
  tagline: 'Heavy steel fabrication, Dutch standards.',
  description:
    'Metal Holland fabricates heavy welded steel constructions — plate work, sections and complete assemblies — for shipbuilding, offshore and infrastructure clients across Europe.',
  /** Update together with `site` in astro.config.mjs. */
  url: 'https://www.metalholland.com',
  locale: 'en',
} as const;

export const contact = {
  email: 'info@metalholland.com',
  phone: '+387 54 620 470',
  /** Digits only, for tel: links. */
  phoneHref: '+38754620470',

  works: {
    label: 'Works & head office',
    country: 'Bosnia and Herzegovina',
    lines: ['Njegoševa 5', '76230 Šamac', 'Bosnia and Herzegovina'],
    /** Opens the pin in whatever map app the visitor uses. */
    mapUrl: 'https://maps.app.goo.gl/FtN6afG5aKsxbXr7A',
    /** Keyless Google Maps iframe — same pin, no API key required. */
    mapEmbedUrl:
      'https://maps.google.com/maps?q=45.05029,18.4777441&z=16&hl=en&output=embed',
  },

  hours: 'Monday – Friday, [08:00 – 17:00 CET]',

  registration: {
    vat: 'VAT 401899980009',
  },

  social: {
    linkedin: '[https://www.linkedin.com/company/metal-holland]',
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  /** Shown in the mega-style mobile menu. */
  blurb?: string;
};

export const primaryNav: NavItem[] = [
  { label: 'Capabilities', href: '/capabilities', blurb: 'Cutting, forming, welding, assembly' },
  { label: 'Industries', href: '/industries', blurb: 'Shipbuilding, offshore, infrastructure' },
  { label: 'Facility', href: '/facility', blurb: 'Halls, machinery, capacity' },
  { label: 'Projects', href: '/projects', blurb: 'Selected work' },
  { label: 'About', href: '/about', blurb: 'Who we are and how we work' },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Company',
    items: [
      { label: 'About Metal Holland', href: '/about' },
      { label: 'Facility & equipment', href: '/facility' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'What we do',
    items: [
      { label: 'CNC plasma cutting', href: '/capabilities#cutting' },
      { label: 'Forming & machining', href: '/capabilities#forming' },
      { label: 'Certified welding', href: '/capabilities#welding' },
      { label: 'Assembly & finishing', href: '/capabilities#assembly' },
    ],
  },
  {
    title: 'Sectors',
    items: [
      { label: 'Shipbuilding & yachts', href: '/industries#shipbuilding' },
      { label: 'Offshore & energy', href: '/industries#offshore' },
      { label: 'Infrastructure & bridges', href: '/industries#infrastructure' },
      { label: 'Industrial & machine building', href: '/industries#industrial' },
    ],
  },
];
