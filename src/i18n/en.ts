/**
 * English — the source language. Every other locale file mirrors this shape,
 * and TypeScript enforces it: `Dictionary` is derived from this object, so a
 * missing or misspelled key in bs.ts or nl.ts fails the build rather than
 * silently rendering nothing.
 *
 * Figures, machine models and certification codes are deliberately NOT
 * translated — they are the same in every language.
 */
export const en = {
  site: {
    description:
      'Metal Holland fabricates heavy welded steel constructions — plate work, sections and complete assemblies — for shipbuilding, offshore and infrastructure clients across Europe.',
  },

  nav: {
    items: [
      { href: '/', label: 'Home', blurb: 'Who we are and what we build' },
      { href: '/media', label: 'Media', blurb: 'Photographs of the works' },
      { href: '/careers', label: 'Careers', blurb: 'Welders, fitters, engineers' },
      { href: '/contact', label: 'Contact', blurb: 'Address, phone, enquiry form' },
    ],
    toggleMenu: 'Toggle menu',
    siteSections: 'Site sections',
    primary: 'Primary',
    mobile: 'Mobile',
    skipToContent: 'Skip to content',
    theme: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
  },

  footer: {
    rights: 'All rights reserved.',
    cookiePolicy: 'Privacy and cookie policy',
    cookieSettings: 'Cookie settings',
    country: 'Bosnia and Herzegovina',

    officeLabel: 'Company location',
  },

  common: {
    requestQuote: 'Reach out',
    contactForm: 'Contact form',
    backToHome: 'Back to home',
    contactUs: 'Contact us',
    sector: 'Sector',
    policyLink: 'See our privacy and cookie policy',
    vatLabel: 'VAT',
    jibLabel: 'JIB',
  },

  home: {
    title: 'Home',
    heroEyebrow: '20+ years of steel fabrication',
    heroTitleA: 'Steel structures,',
    heroTitleB: 'built to your specification.',
    heroLede:
      'From single parts to complete steel structures — cutting, forming, welding and finishing in one place.',
    heroAlt: '',

    whoEyebrow: 'Who we are',
    whoTitle: 'Family Business. Global Reach.',
    whoBody1:
      'Metal Holland is a family business founded in 2005 in a small city on the border of the European Union. We started out with a handful of workers making greenhouses for the locals, and today we make products for some of the most exclusive industries in the world. We’re involved in superyachts, offshore projects, and general steel construction for clients mostly across the Benelux region.',
    whoBody2:
      'Even though we’ve grown considerably over the past decade, at our core we remain a family-owned company — one that stays connected to its workers, their families, and the local community.',

    energyEyebrow: 'Energy',
    energyTitle: 'We are always looking for improvements.',
    energyLede:
      'Fabrication is an energy-intensive business. Solar panels on our hall roofs offset part of that load.',
    energyBody:
      'This is one step in an ongoing shift toward cleaner energy use across the facility.',
    energyFigures: [
      { value: '240 kWp', label: 'Installed capacity' },
      { value: '2 / 4', label: 'Hall roofs fitted' },
    ],
    energyImages: [
      { slug: 'solar-roof', alt: '' },
      { slug: 'solar-array', alt: '' },
      { slug: 'solar-overhead', alt: '' },
    ],

    investmentTitle: 'Investing in Ourselves',
    investmentNote:
      'Most of our resources go back into improving how we work — new machines, better tools, faster processes in production halls.',
    investmentImages: [
      { slug: 'facility-aerial', alt: '' },
    ],

  },

  industriesPage: {
    eyebrow: 'Industries',
    heroTitle: 'Where our steel ends up.',
  },

  mediaPage: {
    title: 'Media',
    description:
      'Photographs from the Metal Holland works — the shop floor, finished work leaving the yard, and the machines it is made on.',
    eyebrow: 'Media',
    heroTitle: 'The works, photographed.',
    heroAlt: '',
    filter: 'Filter',
    all: 'All',
    prev: 'Previous photograph',
    next: 'Next photograph',
    close: 'Close',
    groups: [
      { id: 'workshop', label: 'Workshop' },
      { id: 'projects', label: 'Projects' },
    ],
    videoAlt: '',
    album: [
      { slug: 'arc-plume', alt: '', group: 'workshop' },
      { slug: 'welding-dark', alt: '', group: 'workshop' },
      { slug: 'girder-welding', alt: '', group: 'workshop' },
      { slug: 'arc-dark', alt: '', group: 'workshop' },
      { slug: 'beam-welding', alt: '', group: 'workshop' },
      { slug: 'tube-grinding', alt: '', group: 'workshop' },
      { slug: 'girder-sparks', alt: '', group: 'workshop' },
      { slug: 'welder-beam', alt: '', group: 'workshop' },
      { slug: 'hall-long-section', alt: '', group: 'workshop' },
      { slug: 'welder-hall-dark', alt: '', group: 'workshop' },
      { slug: 'operator-console', alt: '', group: 'workshop' },
      { slug: 'team-workshop', alt: '', group: 'workshop' },
      { slug: 'control-station', alt: '', group: 'workshop' },
      { slug: 'steel-stock', alt: '', group: 'workshop' },
      { slug: 'workshop-hall', alt: '', group: 'workshop' },
      { slug: 'drill-detail', alt: '', group: 'workshop' },
      { slug: 'roller-detail', alt: '', group: 'workshop' },
      { slug: 'steel-sections', alt: '', group: 'workshop' },
      { slug: 'girder-line', alt: '', group: 'workshop' },
      { slug: 'pipe-spools', alt: '', group: 'workshop' },
      { slug: 'pipe-fabrication', alt: '', group: 'workshop' },
      { slug: 'welding-arc', alt: '', group: 'workshop' },
      { slug: 'welded-frame', alt: '', group: 'workshop' },
      { slug: 'beam-sparks', alt: '', group: 'workshop' },
      { slug: 'hall-beams', alt: '', group: 'workshop' },
      { slug: 'truss-assembly', alt: '', group: 'workshop' },
      { slug: 'long-beam', alt: '', group: 'workshop' },
      { slug: 'marked-parts', alt: '', group: 'workshop' },
      { slug: 'hall-sparks', alt: '', group: 'workshop' },
      { slug: 'plasma-head-cut', alt: '', group: 'workshop' },
      { slug: 'plasma-gantry', alt: '', group: 'workshop' },
      { slug: 'nested-parts', alt: '', group: 'workshop' },
      { slug: 'cutting-bed', alt: '', group: 'workshop' },
      { slug: 'plasma-sparks', alt: '', group: 'workshop' },
      { slug: 'forklifts-yard', alt: '', group: 'workshop' },
      { slug: 'forklifts-yard-2', alt: '', group: 'workshop' },
      { slug: 'facility-aerial', alt: '', group: 'workshop' },
      { slug: 'project-marked-plate', alt: '', group: 'projects' },
      { slug: 'bridge-transport', alt: '', group: 'projects' },
      { slug: 'girder-transport-2', alt: '', group: 'projects' },
      { slug: 'girder-transport-3', alt: '', group: 'projects' },
      { slug: 'steel-frame', alt: '', group: 'projects' },
      { slug: 'stainless-trough', alt: '', group: 'projects' },
      { slug: 'stainless-trough-2', alt: '', group: 'projects' },
      { slug: 'frame-assembly', alt: '', group: 'projects' },
      { slug: 'frame-loaded', alt: '', group: 'projects' },
      { slug: 'frame-transport', alt: '', group: 'projects' },
      { slug: 'frame-transport-2', alt: '', group: 'projects' },
      { slug: 'crane-lift', alt: '', group: 'projects' },
      { slug: 'crane-lift-2', alt: '', group: 'projects' },
      { slug: 'access-platform', alt: '', group: 'projects' },
      { slug: 'crawler-frame', alt: '', group: 'projects' },
      { slug: 'crawler-frame-2', alt: '', group: 'projects' },
      { slug: 'crawler-frame-3', alt: '', group: 'projects' },
    ],
    ctaTitle: 'Want to see the place itself?',
    ctaBody:
      'Photographs only go so far.\n\nVisits are welcome — walk the halls and see the production yourself!',
  },

  aboutPage: {
    peopleEyebrow: 'People',
    peopleTitle: '50+ people,\nSome have been with us since day one,\nMost stay for years',
    peopleAlt: '',
    certEyebrow: 'Certification',
    certTitle: 'Certified and audited.',
    ctaTitle: 'Reach out to us.',
    ctaBody:
      'We are always in search of new and stable suppliers and interested clients.',
  },

  contactPage: {
    title: 'Contact',
    description:
      'Reach out to Metal Holland — send drawings and a delivery date for a price and a lead time, or ask about capacity, materials and transport before you have either.',
    eyebrow: 'Contact',
    heroTitle: 'Get in touch.',
    heroLede:
      'Send drawings and a required date and you will get a realistic price, a realistic date, and any questions the drawings raise. If you are earlier than that — checking capacity, a material, or whether a section can leave our yard — write anyway and we will tell you what we know.',
    heroAlt: '',
    fields: {
      name: 'Name',
      namePlaceholder: 'Your name',
      company: 'Company',
      companyPlaceholder: 'Company name',
      email: 'Email',
      emailPlaceholder: 'name@company.com',
      phone: 'Phone',
      phonePlaceholder: 'Including country code',
      message: 'Message',
      messagePlaceholder: 'Tell us what you need.',
    },
    submit: 'Send message',
    sending: 'Sending…',
    success: 'Thank you — we will come back to you shortly.',
    error: 'Something went wrong. Please email us directly:',
    subject: 'Enquiry',
    directTitle: 'Direct',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    hours: 'Monday – Friday, 07:00 – 15:45',
    hoursLabel: 'Working hours',
    directions: 'Get directions',
    mapEyebrow: 'Where to find us',
    openInMaps: 'Open in Google Maps',
    mapConsent:
      'The map is loaded from Google Maps, which sets its own cookies. Load it to see the works on a map, or open the pin directly in Google Maps instead.',
    loadMap: 'Load map',
    mapTitle: 'Map showing Metal Holland at',
  },

  careersPage: {
    title: 'Careers',
    description:
      'Work at Metal Holland: welders, fitters, machine operators, work preparers and project engineers at our fabrication works in Šamac.',
    eyebrow: 'Careers',
    heroTitle: 'Come and build with us.',
    heroAlt: '',
    openingsEyebrow: 'Vacancies',
    openingsTitle: 'Available positions.',
    openingsBody: 'There are no open positions at the moment.',
    formTitle: 'Apply',
    formNote:
      'Even when nothing is posted, we are glad to meet people who might fit a job later in the future — reach out!',
    fields: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'name@example.com',
      phone: 'Phone',
      phonePlaceholder: '+387',
      city: 'City',
      cityPlaceholder: 'Where you live',
      message: 'Tell us about yourself',
      messagePlaceholder:
        'What you have worked on, which machines or processes you know, and any certificates you hold.',
    },
    submit: 'Send application',
    sending: 'Sending…',
    success: 'Thank you — we have your application and will be in touch.',
    error: 'Something went wrong. Please email us directly:',
    subject: 'Job application',
    asideTitle: 'Prefer to call?',
  },

  cookiesPage: {
    title: 'Privacy and cookie policy',
    description:
      'What personal data Metal Holland collects, who sees it and how long we keep it — and the cookies we set: one essential cookie, and optional third-party cookies only if you load the Google Maps embed.',
    eyebrow: 'Legal',
    heroTitle: 'Privacy and cookie policy.',
    heroLede:
      'What we do with your data, and what we store in your browser. Both lists are short: we set one cookie of our own and no tracking cookies at all.',
    heroAlt: '',
    privacyTitle: 'Privacy',
    whoWeAreTitle: 'Who we are',
    whoWeAreLede:
      'The company responsible for the personal data described on this page is:',
    whoWeAreContact: 'Contact',
    collectTitle: 'What we collect',
    collectBody1:
      'When you use our contact form, we receive your name, company, email, phone and message, and use them only to reply.',
    collectBody2:
      'When you apply for a job, we receive your name, email, phone, city and what you tell us about your experience, and use them only to consider you for work.',
    collectBody3:
      'Our host keeps short technical logs, including IP addresses, for security.',
    shareTitle: 'Who else sees it',
    shareBody1:
      'Only our hosting and email providers, who handle data on our behalf, and Google if you choose to load the map on our contact page.',
    shareBody2: 'We never sell or share your data for marketing.',
    retentionTitle: 'How long',
    retentionInquiries: 'Inquiries',
    retentionInquiriesValue: '2 years',
    retentionApplications: 'Applications',
    retentionApplicationsValue: '6 months',
    retentionLogs: 'Logs',
    retentionLogsValue: '30 days',
    retentionBody:
      'We keep data longer only where the law requires it, for example contracts and invoices.',
    rightsTitle: 'Your rights',
    rightsBody1:
      'You can ask us to show, correct or delete your data, or withdraw your consent, by writing to',
    rightsBody2: 'You can also complain to a data protection authority.',
    whatTitle: 'What cookies are',
    whatBody:
      'A cookie is a small text file that a website asks your browser to store. It lets a site remember something between page loads — a preference, a session, or, on many sites, your behaviour across the web. Similar technologies such as local storage work the same way in practice and are covered by this policy.',
    useTitle: 'What we use',
    useBody1:
      'This website sets one cookie of its own. It records whether you accepted or rejected optional cookies, so the banner does not reappear on every page. It holds nothing else — no identifier, no profile, no history.',
    useBody2:
      'Two further preferences are kept in your browser itself, not in a cookie: whether you switched the site to light mode, and whether the opening animation has already played this visit. Neither is ever sent to us, and neither does anything but restore what you chose.',
    useBody3:
      'We run no analytics, no advertising pixels and no social media trackers. Nothing on this site follows you to another one.',
    thirdTitle: 'The one third party',
    thirdBody1:
      'Our contact page can show our location on an embedded Google map. Google sets its own cookies when that map loads, which is why the map stays switched off until you accept optional cookies or press Load map. If you decline, the map is never requested and Google is never contacted — and you can still open the same pin directly in Google Maps, on Google’s own terms, through the link next to it.',
    thirdBody2:
      'What Google does with those cookies is governed by its privacy policy, not ours.',
    changeTitle: 'Changing your mind',
    changeBody1:
      'Your choice is not final. Reopen the banner with the button below and decide again — rejecting after having accepted also removes the map from the page.',
    changeBody2:
      'You can delete cookies at any time in your browser settings, or block them entirely. Blocking the consent cookie only means you will be asked again on your next visit; nothing else on this site depends on cookies to work.',
    settingsButton: 'Cookie settings',
    contactTitle: 'Contact',
    contactBody: 'Questions about this policy go to',
    contactBodyOr: ', or to',
    lastUpdatedLabel: 'Last updated',
    lastUpdated: '3 September 2026',
    tableTitle: 'Every cookie, listed',
    setBy: 'Set by',
    keptFor: 'Kept for',
    essential: 'Essential',
    optional: 'Optional',
    table: [
      {
        name: 'mh_cookie_consent',
        provider: 'Metal Holland (this website)',
        purpose:
          'Records whether you accepted or rejected optional cookies, so you are not asked again on every page.',
        duration: '1 year',
        category: 'essential',
      },
      {
        name: 'mh-theme (local storage)',
        provider: 'Metal Holland (this website)',
        purpose:
          'Remembers whether you switched the site to light mode. Not a cookie and never sent to us — it stays in your browser.',
        duration: 'Until you clear your browser data',
        category: 'essential',
      },
      {
        name: 'mh-loader-seen (session storage)',
        provider: 'Metal Holland (this website)',
        purpose:
          'Records that the opening animation has already played, so it runs once per visit rather than on every page. Not a cookie and never sent to us.',
        duration: 'Until you close the tab',
        category: 'essential',
      },
      {
        name: 'NID, SOCS, CONSENT and similar',
        provider: 'Google Maps (Google Ireland Ltd.)',
        purpose:
          'Set by the Google Maps embed on our contact page, and only if you choose to load it. Google uses them to remember map preferences and for security and abuse prevention. We have no access to them.',
        duration: 'Up to 24 months, set by Google',
        category: 'optional',
      },
    ],
  },

  cookieBanner: {
    heading: 'Cookies',
    body: 'We use one essential cookie to remember this choice. Optional cookies are set only by the Google Maps embed on our contact page — reject them and the map simply is not loaded. We run no advertising or analytics tracking.',
    accept: 'Accept all',
    reject: 'Reject optional',
    policy: 'Privacy and cookie policy',
    label: 'Cookie consent',
  },

  notFound: {
    title: 'Page not found',
    description: 'The page you were looking for is not here.',
    heading: 'Page not found',
    body: 'The page you were looking for has moved or never existed. The rest of the site is intact.',
  },

  content: {
    industries: [
      {
        id: 'shipbuilding',
        title: 'Shipbuilding & yacht building',
        bullets: [
          'Cutting and forming of hull sections',
          'Prefabrication of smaller sections and sub-assemblies',
          'Full plate traceability, from the mill certificate to the finished section',
          'All material supplied with 3.2 certificates',
        ],
        image: 'industry-shipbuilding',
      },
      {
        id: 'steelwork',
        title: 'Classic steel construction',
        bullets: [
          'Access platforms and walkways',
          'Stairs, landings and railings',
          'Welded frames and supporting structures',
          'Executed to EN 1090-2, execution class EXC2',
        ],
        image: 'pipe-fabrication',
      },
      {
        id: 'ironwork',
        title: 'Small ironwork in stainless, aluminium and steel',
        bullets: [
          'Equipment and machine foundations',
          'Heavy ducting and ventilation steel',
          'Drip trays and containment pans',
          'Stainless, aluminium and carbon steel',
        ],
        image: 'stainless-trough',
      },
      {
        id: 'offshore',
        title: 'Accessories and parts for the offshore steel market',
        bullets: [
          'Working platforms and deck access steel',
          'Railings, handrails and stanchions',
          'Cage ladders and stair towers',
          'Made throughout to offshore quality requirements',
        ],
        image: 'industry-offshore',
      },
    ],

    stats: [
      { value: '20+', label: 'Years in heavy fabrication', sub: 'Serving European clients' },
      { value: '32,000 m²+', label: 'Production area', sub: 'Across [4] fabrication halls' },
      { value: '1,000 t+', label: 'Steel processed per year', sub: 'Plate, sections and hollow profiles' },
      { value: '50+', label: 'People on the floor', sub: 'Welders, fitters, operators, engineers' },
    ],

    certifications: [
      { code: 'EN 1090-2 EXC2', label: 'Execution of steel structures, execution class 2' },
      { code: 'EN ISO 3834-2', label: 'Comprehensive quality requirements for fusion welding' },
      { code: 'EN ISO 9001', label: 'Quality management' },
      { code: 'EN ISO 14001', label: 'Environmental management' },
      { code: 'EN ISO 45001', label: 'Occupational health & safety' },
    ],

  },
};

/** Every other locale must match this shape exactly. */
export type Dictionary = typeof en;
