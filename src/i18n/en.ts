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
    tagline: 'Heavy welded steel constructions',
    description:
      'Metal Holland fabricates heavy welded steel constructions — plate work, sections and complete assemblies — for shipbuilding, offshore and infrastructure clients across Europe.',
  },

  nav: {
    items: [
      { href: '/#about', label: 'About', blurb: 'Who we are and how we work' },
      { href: '/#capabilities', label: 'Capabilities', blurb: 'Cutting, forming, welding, assembly' },
      { href: '/#industries', label: 'Industries', blurb: 'Ships, steelwork, ironwork, offshore' },
      { href: '/#facility', label: 'Facility', blurb: 'Halls, machinery, capacity' },
      { href: '/media', label: 'Media', blurb: 'Photographs of the works' },
      { href: '/careers', label: 'Careers', blurb: 'Welders, fitters, engineers' },
      { href: '/contact', label: 'Contact', blurb: 'Address, phone, enquiry form' },
    ],
    toggleMenu: 'Toggle menu',
    siteSections: 'Site sections',
    primary: 'Primary',
    mobile: 'Mobile',
    skipToContent: 'Skip to content',
    language: 'Language',
    theme: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
  },

  footer: {
    rights: 'All rights reserved.',
    cookiePolicy: 'Cookie policy',
    cookieSettings: 'Cookie settings',
    country: 'Bosnia and Herzegovina',

    officeLabel: 'Company location',
  },

  common: {
    requestQuote: 'Reach out',
    contactForm: 'Contact form',
    ourCapabilities: 'Our capabilities',
    backToHome: 'Back to home',
    contactUs: 'Contact us',
    sector: 'Sector',
  },

  home: {
    title: 'Home',
    heroEyebrow: '20+ years of steel fabrication',
    heroTitleA: 'Steel structures,',
    heroTitleB: 'built to your specification.',
    heroLede:
      'From single parts to complete steel structures — cutting, forming, welding and finishing in one place.',
    heroAlt: 'A Metal Holland operator at the controls of a cutting machine',

    whoEyebrow: 'Who we are',
    whoTitle: 'Everything happens in our own halls.',
    whoBody1:
      'Metal Holland cuts, forms, welds and finishes heavy steel constructions in its own halls. Nothing is quietly passed down a chain of subcontractors — the plate that arrives on our yard leaves it as a finished section, with the documentation to match.',
    whoBody2:
      'Project management and work preparation sit alongside the floor, so the people quoting your job are the people who have to build it. Clients in shipbuilding, offshore and infrastructure work with us because one responsible party is simpler to plan around than five.',

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
      { slug: 'solar-roof', alt: 'Solar panels covering the roof of a Metal Holland hall' },
      { slug: 'solar-array', alt: 'Rooftop solar array across the works, seen from the air' },
      { slug: 'solar-overhead', alt: 'The hall roofs and their panels seen from directly above' },
    ],

  },

  capabilitiesPage: {
    materialsEyebrow: 'Materials',
    materialsTitle: 'Carbon steel, stainless, aluminium.',
    materialsLede:
      'Material is ordered against certificate and kept traceable through cutting, fitting and welding, so the heat number on the delivery file is the heat number in the construction.',
    materials: [
      { term: 'Structural steel', detail: 'S235 · S275 · S355 · higher grades on request' },
      { term: 'Shipbuilding grades', detail: 'Classification-approved plate and sections' },
      { term: 'Stainless', detail: '304 · 316 and duplex, in a separated work area' },
      { term: 'Aluminium', detail: 'Marine grades, welded by qualified procedure' },
      { term: 'Plate', detail: 'Up to [200] mm thickness' },
      { term: 'Sections', detail: 'Beams, hollow sections, pipe and bar' },
    ],
  },

  industriesPage: {
    eyebrow: 'Industries',
    heroTitle: 'Where our steel ends up.',
  },

  facilityPage: {
    equipmentEyebrow: 'Equipment',
    equipmentTitle: 'What is on the floor.',
    equipmentLede:
      'An indicative list. Ask us about a specific size, thickness or tolerance and you will get a straight answer about whether it fits.',
    machinesEyebrow: 'Machines',
    machinesTitle: 'The principal machines.',
    machinesLede:
      'Two thirty-metre plasma tables, a 320-tonne brake, a drilling line and a deburring machine. Between them they cover most of what arrives as a drawing.',
  },

  mediaPage: {
    title: 'Media',
    description:
      'Photographs from the Metal Holland works — the shop floor, finished work leaving the yard, and the machines it is made on.',
    eyebrow: 'Media',
    heroTitle: 'The works, photographed.',
    heroAlt: 'A welded beam on trestles in the fabrication hall',
    filter: 'Filter',
    all: 'All',
    groups: [
      { id: 'workshop', label: 'Workshop' },
      { id: 'projects', label: 'Projects' },
      { id: 'machines', label: 'Machines' },
    ],
    videoAlt: "Metal Holland's forklift fleet lined up in the yard, filmed from above",
    album: [
      { slug: 'arc-plume', alt: 'Welding arc lighting a plume of smoke in the dark of the hall', group: 'workshop' },
      { slug: 'welding-dark', alt: 'A welder behind the arc, the hall lost in darkness around it', group: 'workshop' },
      { slug: 'girder-welding', alt: 'Welding a stiffener into a primed girder section', group: 'workshop' },
      { slug: 'arc-dark', alt: 'The arc at the moment of striking', group: 'workshop' },
      { slug: 'beam-welding', alt: 'A welder working along a long primed beam', group: 'workshop' },
      { slug: 'tube-grinding', alt: 'Grinding sparks running off a row of tubes on the bench', group: 'workshop' },
      { slug: 'girder-sparks', alt: 'Dressing back the welds on a girder section', group: 'workshop' },
      { slug: 'welder-beam', alt: 'A welder running a seam along a beam', group: 'workshop' },
      { slug: 'hall-long-section', alt: 'A long fabricated section filling the length of the hall', group: 'workshop' },
      { slug: 'welder-hall-dark', alt: 'Welder at work in the darkened hall, the arc the only light', group: 'workshop' },
      { slug: 'operator-console', alt: 'An operator at a machine control panel', group: 'workshop' },
      { slug: 'team-workshop', alt: 'Two fabricators setting up work on the bench', group: 'workshop' },
      { slug: 'control-station', alt: 'Machine operator at the control station of the sawing line', group: 'workshop' },
      { slug: 'steel-stock', alt: 'Steel flats stacked ready for cutting', group: 'workshop' },
      { slug: 'workshop-hall', alt: 'Benches and trestles down the length of the workshop', group: 'workshop' },
      { slug: 'drill-detail', alt: 'A drill working into a steel section', group: 'workshop' },
      { slug: 'roller-detail', alt: 'Feed rollers on the drilling line', group: 'workshop' },
      { slug: 'steel-sections', alt: 'Primed girder sections lined up in the hall', group: 'workshop' },
      { slug: 'girder-line', alt: 'Welders working along a line of primed girder sections', group: 'workshop' },
      { slug: 'pipe-spools', alt: 'Pipe spools laid out on trestles', group: 'workshop' },
      { slug: 'pipe-fabrication', alt: 'A welded railing and cage ladder under construction', group: 'workshop' },
      { slug: 'welding-arc', alt: 'Welding arc against a box girder', group: 'workshop' },
      { slug: 'welded-frame', alt: 'A long welded frame set up on trestles', group: 'workshop' },
      { slug: 'beam-sparks', alt: 'Sparks flying as a beam is cut to length', group: 'workshop' },
      { slug: 'hall-beams', alt: 'Beams laid out across the hall, an arc burning at the far bench', group: 'workshop' },
      { slug: 'truss-assembly', alt: 'Dressing back the welds on a long fabricated beam', group: 'workshop' },
      { slug: 'long-beam', alt: 'A finished beam running the length of the hall floor', group: 'workshop' },
      { slug: 'marked-parts', alt: 'Cut plate parts, hard-marked with their part numbers', group: 'workshop' },
      { slug: 'hall-sparks', alt: 'Grinding sparks arcing across the hall floor', group: 'workshop' },
      { slug: 'plasma-head-cut', alt: 'The plasma head cutting into plate', group: 'workshop' },
      { slug: 'plasma-gantry', alt: 'The plasma gantry travelling along a full plate', group: 'workshop' },
      { slug: 'nested-parts', alt: 'An operator lifting finished parts out of the cut nest', group: 'workshop' },
      { slug: 'cutting-bed', alt: 'The cutting bed with a plate loaded', group: 'workshop' },
      { slug: 'plasma-sparks', alt: 'Sparks streaming from the plasma cut across the bed', group: 'workshop' },
      { slug: 'project-marked-plate', alt: 'Marked and cut plate parts on the bench', group: 'projects' },
      { slug: 'bridge-transport', alt: 'A welded lattice girder loaded on a low-loader in the yard', group: 'projects' },
      { slug: 'girder-transport-2', alt: 'The lattice girder leaving the works on its trailer', group: 'projects' },
      { slug: 'girder-transport-3', alt: 'The lattice girder on the road outside the works', group: 'projects' },
      { slug: 'steel-frame', alt: 'A large primed welded frame standing in the hall', group: 'projects' },
      { slug: 'stainless-trough', alt: 'A stainless steel trough, welds dressed back', group: 'projects' },
      { slug: 'stainless-trough-2', alt: 'The finished stainless trough seen along its length', group: 'projects' },
      { slug: 'frame-assembly', alt: 'A heavy welded frame assembled on the shop floor', group: 'projects' },
      { slug: 'frame-loaded', alt: 'A fabricated frame loaded on a trailer at the works', group: 'projects' },
      { slug: 'frame-transport', alt: 'Two fabricated frames secured on a flatbed trailer', group: 'projects' },
      { slug: 'frame-transport-2', alt: 'The loaded trailer leaving the yard', group: 'projects' },
      { slug: 'crane-lift', alt: 'A mobile crane lifting a stainless vessel', group: 'projects' },
      { slug: 'crane-lift-2', alt: 'The crane setting the load down', group: 'projects' },
      { slug: 'access-platform', alt: 'An access platform with grating deck and tubular railings, assembled in the hall', group: 'projects' },
      { slug: 'machine-esab', alt: 'ESAB CNC plasma cutting gantry over its thirty-metre table', group: 'machines' },
      { slug: 'machine-messer', alt: 'Messer MultiTherm plasma cutting a steel plate', group: 'machines' },
      { slug: 'machine-durma', alt: 'Durma AD-S 40320 CNC press brake in the forming bay', group: 'machines' },
      { slug: 'machine-vernet', alt: 'Vernet Behringer FP 400 line with its control station', group: 'machines' },
      { slug: 'machine-qfin', alt: 'QFIN SER 600 deburring and edge-rounding machine', group: 'machines' },
      { slug: 'machine-bp40', alt: 'BP 40 horizontal press', group: 'machines' },
      { slug: 'machine-fp80', alt: 'FP 80 horizontal press', group: 'machines' },
      { slug: 'machine-jaespa', alt: 'Jaespa bandsaw on its roller feed', group: 'machines' },
      { slug: 'machine-kaltenbach', alt: 'Kaltenbach saw', group: 'machines' },
      { slug: 'machine-pilous', alt: 'Pilous bandsaw', group: 'machines' },
      { slug: 'forklifts-yard', alt: 'The forklift fleet lined up in the yard', group: 'machines' },
      { slug: 'forklifts-yard-2', alt: 'Forklifts parked along the edge of the yard', group: 'machines' },
    ],
    ctaTitle: 'Want to see the place itself?',
    ctaBody:
      'Photographs only go so far.\n\nVisits are welcome — walk the halls and see the production yourself!',
  },

  aboutPage: {
    eyebrow: 'About',
    heroTitle: 'Engineering and capacity in one place.',
    heroLede:
      'One shop, one responsible party, and a straight answer about what is possible.',
    storyLede:
      'Metal Holland exists because clients in the Dutch maritime and infrastructure world kept needing the same two things at once: engineering they could talk to in their own language, and fabrication capacity large enough to matter.',
    storyBody1:
      'So we built both under one roof in Šamac. Project management, work preparation and client contact sit alongside the floor, and cutting, forming, welding, finishing and loading happen in our own halls, on our own equipment, with our own people. There is no chain of subcontractors between an enquiry and the steel.',
    storyBody2:
      'The result is unglamorous and hard to fake: sections that arrive on the agreed date, at the agreed size, with the file that proves how they were made. Most of our work now comes from clients who have already sent us something once.',
    peopleEyebrow: 'People',
    peopleTitle: '50+ people, most of them on the floor.',
    peopleLede:
      'Welders, fitters, machine operators, work preparers and project engineers. The ratio matters: this is a company where the majority of staff are the ones actually making things.',
    peopleBody:
      'We train our own welders and keep their qualifications current because the alternative — hiring certification in when a project demands it — produces exactly the kind of surprise nobody wants three weeks before delivery.',
    peopleAlt: 'Metal Holland fabricators at work in the hall',
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
    heroAlt: 'A welding arc lighting the dark of the fabrication hall',
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
      honeypot: 'Leave this field empty',
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
    heroAlt: 'Metal Holland fabricators at work in the hall',
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
    title: 'Cookie policy',
    description:
      'How Metal Holland uses cookies: one essential cookie to remember your choice, and optional third-party cookies only if you load the Google Maps embed.',
    eyebrow: 'Legal',
    heroTitle: 'Cookie policy.',
    heroLede:
      'A short policy, because it is a short list. We set one cookie of our own and no tracking cookies at all.',
    heroAlt: "A machine operator's console in the fabrication hall",
    whatTitle: 'What cookies are',
    whatBody:
      'A cookie is a small text file that a website asks your browser to store. It lets a site remember something between page loads — a preference, a session, or, on many sites, your behaviour across the web. Similar technologies such as local storage work the same way in practice and are covered by this policy.',
    useTitle: 'What we use',
    useBody1:
      'This website sets one cookie of its own. It records whether you accepted or rejected optional cookies, so the banner does not reappear on every page. It holds nothing else — no identifier, no profile, no history.',
    useBody2:
      'One further preference — whether you switched the site to light mode, and which language you are reading — is kept in your browser’s local storage. It is not a cookie, it is never sent to us, and it does nothing but restore the look you chose.',
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
        name: 'mh-theme, mh-lang (local storage)',
        provider: 'Metal Holland (this website)',
        purpose:
          'Remember whether you switched the site to light mode and which language you last read. Not cookies and never sent to us — they stay in your browser.',
        duration: 'Until you clear your browser data',
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
    policy: 'Cookie policy',
    label: 'Cookie consent',
  },

  notFound: {
    title: 'Page not found',
    description: 'The page you were looking for is not here.',
    eyebrow: 'Error 404',
    heading: 'This one did not make it off the plate.',
    body: 'The page you were looking for has moved or never existed. The rest of the site is intact.',
  },

  content: {
    capabilities: [
      {
        id: 'cutting',
        title: 'CNC plasma & oxy-fuel cutting',
        summary:
          'Plate is nested and cut on our own gantry tables, so every part downstream starts from an accurate, repeatable profile.',
        detail:
          'Cutting sets the tolerance everything downstream inherits. We nest for material yield, cut bevels in the same pass where the weld preparation calls for it, and hard-mark parts so they arrive at the fitting bench already identified.',
        points: [
          'Gantry plasma and oxy-fuel cutting of heavy plate',
          'Bevel cutting for weld preparation',
          'Nesting optimised for material yield',
          'Part marking and identification at source',
        ],
        image: 'plasma-cutting',
      },
      {
        id: 'forming',
        title: 'Forming, rolling & machining',
        summary:
          'Rolled shells, pressed brackets, drilled and sawn sections — the shaping work that turns flat stock into structure.',
        detail:
          'Curved shell plate, knuckles and cone sections are rolled and checked against templates. Drilling lines and sawing bring beams and hollow sections to length and hole pattern before they ever reach assembly.',
        points: [
          'Plate rolling and press braking',
          'Beam drilling lines and band sawing',
          'Template-checked curved and conical sections',
          'Machining of connection and bearing surfaces',
        ],
        image: 'formed-plate',
      },
      {
        id: 'welding',
        title: 'Certified welding',
        summary:
          'Qualified welders working to approved procedures, with the documentation to prove it.',
        detail:
          'Procedures are qualified for the material and thickness at hand, welders are certified against them, and the work is recorded so the file that ships with a construction stands up to review.',
        points: [
          'MAG, MIG and submerged-arc welding',
          'Qualified procedures (WPS/WPQR) per project',
          'Certified welders with maintained qualifications',
          'Visual, dimensional and NDT inspection on request',
        ],
        image: 'welding-arc',
      },
      {
        id: 'assembly',
        title: 'Assembly, finishing & delivery',
        summary:
          'Sections are built up, measured, surface-treated and shipped as complete units ready to install.',
        detail:
          'Sub-assemblies are jigged and measured, blasted and primed or fully coated to specification, then loaded and transported to the yard or site.',
        points: [
          'Jigged sub-assembly and complete sections',
          'Dimensional control before release',
          'Blasting, priming and coating to specification',
          'Transport to yard or site across Europe',
        ],
        image: 'steel-sections',
      },
    ],

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

    machines: [
      {
        name: 'ESAB CNC plasma',
        spec: '30,000 × 3,000 mm table',
        body: 'Gantry plasma cutting on a thirty-metre bed, so long plate is cut in one setup instead of being indexed and re-registered halfway.',
        image: 'machine-esab',
        imageAlt: 'ESAB CNC plasma cutting gantry over its thirty-metre table',
      },
      {
        name: 'Messer MultiTherm',
        spec: '30,000 × 3,000 mm table · Kjellberg Q3000 plus',
        body: 'Our second thirty-metre table, running a Kjellberg Q3000 plus source — the cut quality that keeps weld preparation off the grinder.',
        image: 'machine-messer',
        imageAlt: 'Messer MultiTherm plasma cutting a steel plate, arc lit',
      },
      {
        name: 'Durma AD-S 40320',
        spec: '4,050 mm · 320 tonnes',
        body: 'CNC press brake for the heavy forming: four metres of bending length at three hundred and twenty tonnes.',
        image: 'machine-durma',
        imageAlt: 'Durma AD-S 40320 CNC press brake in the forming bay',
      },
      {
        name: 'Vernet Behringer FP 400',
        spec: '',
        body: 'CNC line for flats and plate — drilling, marking and tapping in one pass, with a Behringer saw alongside for cutting to length.',
        image: 'machine-vernet',
        imageAlt: 'Vernet Behringer FP 400 drilling line with its control station',
      },
      {
        name: 'QFIN SER 600',
        spec: '',
        body: 'Deburring and edge rounding for cut parts, so what leaves the cutting hall is ready to handle, coat and weld.',
        image: 'machine-qfin',
        imageAlt: 'QFIN SER 600 deburring and edge-rounding machine',
      },
    ],

    equipment: [
      {
        group: 'Cutting',
        items: [
          'Two CNC gantry plasma tables, 30,000 × 3,000 mm each',
          'Oxy-fuel cutting for heavy plate up to [200] mm',
          'Bevel-cutting head for weld preparation',
          'Band saws for sections and hollow profiles',
        ],
      },
      {
        group: 'Forming & machining',
        items: [
          'Plate rolls, capacity to [XX] mm × [X,XXX] mm',
          'CNC press brake, 4,050 mm at 320 tonnes',
          'CNC drilling and marking line for flats and plate',
          'Conventional turning and milling',
        ],
      },
      {
        group: 'Welding',
        items: [
          'MAG/MIG welding stations across all halls',
          'Submerged-arc welding for girders and long seams',
          'Welding positioners and rotators',
          'Dedicated stainless welding area',
        ],
      },
      {
        group: 'Handling & finishing',
        items: [
          'Overhead cranes to [XX] tonnes per hall',
          'Forklift fleet for movement between halls and yard',
          'Deburring and edge rounding for cut parts',
          'Blasting and priming facility',
          'Loading for abnormal and oversized transport',
        ],
      },
    ],
  },
};

/** Every other locale must match this shape exactly. */
export type Dictionary = typeof en;
