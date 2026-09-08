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
      { href: '/about', label: 'About', blurb: 'Who we are and how we work' },
      { href: '/capabilities', label: 'Capabilities', blurb: 'Cutting, forming, welding, assembly' },
      { href: '/industries', label: 'Industries', blurb: 'Shipbuilding, offshore, infrastructure' },
      { href: '/facility', label: 'Facility', blurb: 'Halls, machinery, capacity' },
      { href: '/projects', label: 'Projects', blurb: 'Selected work' },
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
    groups: [
      {
        title: 'Company',
        items: [
          { href: '/about', label: 'About Metal Holland' },
          { href: '/facility', label: 'Facility & equipment' },
          { href: '/projects', label: 'Projects' },
          { href: '/careers', label: 'Careers' },
          { href: '/contact', label: 'Contact' },
        ],
      },
      {
        title: 'What we do',
        items: [
          { href: '/capabilities#cutting', label: 'CNC plasma cutting' },
          { href: '/capabilities#forming', label: 'Forming & machining' },
          { href: '/capabilities#welding', label: 'Certified welding' },
          { href: '/capabilities#assembly', label: 'Assembly & finishing' },
        ],
      },
      {
        title: 'Sectors',
        items: [
          { href: '/industries#shipbuilding', label: 'Shipbuilding & yachts' },
          { href: '/industries#offshore', label: 'Offshore & energy' },
          { href: '/industries#infrastructure', label: 'Infrastructure & bridges' },
          { href: '/industries#industrial', label: 'Industrial & machine building' },
        ],
      },
    ],
    rights: 'All rights reserved.',
    cookiePolicy: 'Cookie policy',
    cookieSettings: 'Cookie settings',
    country: 'Bosnia and Herzegovina',

    officeLabel: 'Company location',
  },

  common: {
    requestQuote: 'Reach out',
    ourCapabilities: 'Our capabilities',
    allCapabilities: 'All capabilities',
    moreAbout: 'More about Metal Holland',
    facilityEquipment: 'Facility & equipment',
    whatWeBuild: 'What we build',
    seeWhatWeBuild: 'See what we can build',
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

    capabilitiesEyebrow: 'Capabilities',
    capabilitiesTitle: 'From plate to primed section, under one roof.',

    facilityEyebrow: 'The facility',
    facilityTitle: 'Sized for the sections that are hard to place.',
    facilityLede:
      'Four halls, gantry cutting tables, drilling lines, rolls and welding bays — sized for sections that leave on a low-loader, not in a crate.',
    facilityAlt: 'Aerial view of the Metal Holland production facility and yard',
    facilityInset: 'of production area, with overhead cranage in every hall',
    facilityRows: [
      { label: 'Covered halls', value: 'Cutting, forming, fitting, welding, finishing' },
      { label: 'Overhead cranage', value: 'Up to [XX] tonnes per hall' },
      { label: 'Outdoor yard', value: 'Blasting, priming, storage and loading' },
      { label: 'Transport', value: 'Abnormal loads to yards and sites across Europe' },
    ],

    industriesEyebrow: 'Industries',
    industriesTitle: 'Different sectors, the same standard.',
    industriesLede:
      'Each one brings its own tolerances and its own paperwork. What does not change is how the work is planned, welded and checked before it leaves.',

    assuranceEyebrow: 'What you get',
    assuranceTitle: 'Every delivery arrives with its file.',
    assuranceLede:
      'The documentation is assembled while the work runs, not reconstructed afterwards. Unless your specification asks for more, this is what comes with the steel.',
    assurance: [
      {
        title: 'Material certificates',
        body: 'Mill certificates for the plate and sections used, traceable to the heat number in the finished construction.',
      },
      {
        title: 'Welding procedures',
        body: 'The qualified WPS for each joint type in the job, with the WPQR that supports it.',
      },
      {
        title: 'Welder qualifications',
        body: 'Certificates for every welder who worked on it, valid on the dates the work was actually done.',
      },
      {
        title: 'Dimensional report',
        body: 'Measured against the drawing before release. Where something deviates, it is recorded and reported rather than quietly absorbed.',
      },
      {
        title: 'Inspection records',
        body: 'Visual inspection throughout, and NDT reports where the specification calls for them, with method and operator named.',
      },
      {
        title: 'Surface treatment',
        body: 'Preparation grade, the product used, and measured dry film thickness.',
      },
    ],
    assuranceNote:
      'Ask and we will send a sample delivery file from recent work, with the client details removed, so you can judge the standard before you commit to anything.',

    energyEyebrow: 'Energy',
    energyTitle: 'The hall roofs carry solar.',
    energyLede:
      'Every hall roof that could take panels now carries them. Fabrication is an energy-hungry business — generating our own is the part of that we can do something about.',
    energyBody:
      'The array feeds the works directly. While the sun is up, the cutting tables, the extraction, the cranes and the lights run on it. It is also the reason our EN ISO 14001 certificate describes something more than a filing cabinet.',
    energyFigures: [
      { value: '[XXX] kWp', label: 'Installed capacity' },
      { value: '[XX]%', label: 'Of annual consumption' },
      { value: '[X]', label: 'Hall roofs fitted' },
    ],
    energyImages: [
      { slug: 'solar-roof', alt: 'Solar panels covering the roof of a Metal Holland hall' },
      { slug: 'solar-array', alt: 'Rooftop solar array across the works, seen from the air' },
      { slug: 'solar-overhead', alt: 'The hall roofs and their panels seen from directly above' },
    ],

    qualityEyebrow: 'Quality',
    qualityTitle: 'Quality control, recorded as the work runs.',
    qualityLede:
      'Qualified procedures, certified welders, recorded inspections. The delivery file is assembled as the work happens, not reconstructed afterwards.',
    qualityNote: 'Certificates and scope statements are available on request.',
  },

  capabilitiesPage: {
    title: 'Capabilities',
    description:
      "CNC plasma cutting, forming and rolling, certified welding, assembly and finishing — Metal Holland's fabrication capabilities from plate to primed section.",
    eyebrow: 'Capabilities',
    heroTitle: 'From plate to primed section.',
    heroLede:
      'Cutting, forming, welding, finishing and delivery run in one building, on one schedule, under one responsibility.',
    heroAlt: 'Plasma cutting head working across heavy steel plate',
    processEyebrow: 'How a project runs',
    processTitle: 'Five stages, with a report at each one.',
    processLede:
      'Problems in heavy fabrication tend to surface late. A fixed reporting rhythm is how we avoid that, rather than a promise to call if something comes up.',
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
    ctaTitle: 'Not sure it can be built?',
    ctaBody:
      'Send the drawing anyway. Much of our work starts with a client asking whether a section can be made in one piece. You will get an answer either way, before you commit to anything.',
  },

  industriesPage: {
    title: 'Industries',
    description:
      'Metal Holland fabricates for shipbuilding and yachtbuilding, offshore and energy, infrastructure and bridges, and industrial machine building.',
    eyebrow: 'Industries',
    heroTitle: 'Where our steel ends up.',
    heroLede:
      'Hulls, platforms, bridges and machines. Different rules, different paperwork, the same shop floor discipline behind all of them.',
    heroAlt: 'A vessel at sea at sunset',
    workingEyebrow: 'Working with us',
    workingTitle: 'What working with us involves.',
    working: [
      {
        title: 'Capacity that absorbs a peak',
        body: 'Yards and OEMs use us to take the overflow their own shop cannot swallow without pushing everything else back.',
      },
      {
        title: 'One party, whole scope',
        body: 'Cutting, welding, coating and transport come from us. There is no gap between suppliers for a problem to fall into.',
      },
      {
        title: 'Documentation that survives audit',
        body: 'Certificates, procedures and inspection records are gathered as the work runs, so handover is not an archaeology exercise.',
      },
    ],
    ctaTitle: 'Your sector not listed?',
    ctaBody:
      'If it is heavy, welded and made of steel, it is probably work we know. Tell us what you are building.',
  },

  facilityPage: {
    title: 'Facility & equipment',
    description:
      "Metal Holland's production facility: covered fabrication halls, CNC cutting tables, drilling lines, rolls, welding bays, blasting and priming, and loading for abnormal transport.",
    eyebrow: 'Facility',
    heroTitle: 'The shop floor.',
    heroLede:
      'Four covered halls, gantry cutting, cranage in every bay and a yard sized for the sections that leave on a low-loader.',
    heroAlt: 'Interior of a Metal Holland fabrication hall',
    worksEyebrow: 'The works',
    worksTitle: 'One site, start to finish.',
    worksLede:
      'Plate arrives at one end of the yard and leaves the other end as a coated, measured, documented section. Nothing is trucked across town between operations.',
    worksAlt: 'Aerial view of the Metal Holland works',
    figures: [
      { value: '32,000 m²+', label: 'Site area' },
      { value: '[4]', label: 'Fabrication halls' },
      { value: '[XX] t', label: 'Max crane capacity' },
      { value: '13 m', label: 'Longest section handled' },
    ],
    equipmentEyebrow: 'Equipment',
    equipmentTitle: 'What is on the floor.',
    equipmentLede:
      'An indicative list. Ask us about a specific size, thickness or tolerance and you will get a straight answer about whether it fits.',
    machinesEyebrow: 'Machines',
    machinesTitle: 'The principal machines.',
    machinesLede:
      'Two thirty-metre plasma tables, a 320-tonne brake, a drilling line and a deburring machine. Between them they cover most of what arrives as a drawing.',
    galleryEyebrow: 'Inside the halls',
    galleryTitle: 'Work in progress.',
    gallery: [
      { slug: 'cnc-gantry', alt: 'CNC gantry cutting table in the plate hall' },
      { slug: 'welding-hall', alt: 'Welders working on sections in the fabrication hall' },
      { slug: 'nested-plate', alt: 'Nested parts cut from a single plate' },
      { slug: 'machine-hall', alt: 'Machine hall with overhead cranage' },
      { slug: 'drilling-detail', alt: 'Drilling a section on the beam line' },
      { slug: 'pipe-fabrication', alt: 'Pipe spool fabrication in progress' },
      { slug: 'steel-sections', alt: 'Primed steel sections awaiting despatch' },
    ],
    logisticsEyebrow: 'Getting it to you',
    logisticsTitle: 'Sections leave whole.',
    logisticsLede:
      'We would rather solve a transport problem than split a construction into pieces that have to be welded again on site. Abnormal loads, escorts and permits are part of the job, not an afterthought.',
    logisticsBody:
      'Inside the fence it is the same argument. Our own fleet of forklifts moves plate and finished sections between the halls and the yard, so a construction waits on the next operation rather than on a hired machine.',
    forkliftsAlt: "Metal Holland's forklift fleet lined up in the yard, filmed from above",
    ctaTitle: 'Come and see it.',
    ctaBody:
      'Visits are welcome. Walk the halls, meet the people who would build your work, and judge the shop for yourself.',
  },

  projectsPage: {
    title: 'Projects',
    description:
      'Selected fabrication work by Metal Holland — bridge sections, hull sections, pipe spools, welded girders and serial machine frames.',
    eyebrow: 'Projects',
    heroTitle: 'Selected work.',
    heroLede:
      'A cross-section of what leaves the yard. Client names and figures are shared on request where confidentiality allows.',
    heroAlt: 'A welded truss assembly on trestles in the fabrication hall',
    filter: 'Filter',
    all: 'All',
    empty: 'No projects listed in this sector yet.',
    ctaTitle: 'References for your sector.',
    ctaBody:
      'Ask and we will put you in touch with clients doing work like yours — the most useful reference is always the one that matches your own drawings.',
  },

  aboutPage: {
    title: 'About',
    description:
      'Metal Holland combines Dutch engineering and project management with a full steel fabrication facility — cutting, forming, welding and finishing heavy constructions in house.',
    eyebrow: 'About',
    heroTitle: 'Engineering and capacity in one place.',
    heroLede:
      'One shop, one responsible party, and a straight answer about what is possible.',
    heroAlt: 'A Metal Holland operator at a machine control panel',
    storyEyebrow: 'Our story',
    storyTitle: 'Why the company is set up this way.',
    storyLede:
      'Metal Holland exists because clients in the Dutch maritime and infrastructure world kept needing the same two things at once: engineering they could talk to in their own language, and fabrication capacity large enough to matter.',
    storyBody1:
      'So we built both under one roof in Šamac. Project management, work preparation and client contact sit alongside the floor, and cutting, forming, welding, finishing and loading happen in our own halls, on our own equipment, with our own people. There is no chain of subcontractors between an enquiry and the steel.',
    storyBody2:
      'The result is unglamorous and hard to fake: sections that arrive on the agreed date, at the agreed size, with the file that proves how they were made. Most of our work now comes from clients who have already sent us something once.',
    valuesEyebrow: 'How we work',
    valuesTitle: 'How we work.',
    peopleEyebrow: 'People',
    peopleTitle: '50+ people, most of them on the floor.',
    peopleLede:
      'Welders, fitters, machine operators, work preparers and project engineers. The ratio matters: this is a company where the majority of staff are the ones actually making things.',
    peopleBody:
      'We train our own welders and keep their qualifications current because the alternative — hiring certification in when a project demands it — produces exactly the kind of surprise nobody wants three weeks before delivery.',
    peopleAlt: 'Metal Holland fabricators at work in the hall',
    certEyebrow: 'Certification',
    certTitle: 'Certified and audited.',
    ctaTitle: 'Work with us.',
    ctaBody:
      'Whether you need a single section or a year of capacity, the conversation starts the same way — send the drawings and tell us the date.',
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
        title: 'Shipbuilding & yachtbuilding',
        summary:
          'Hull sections, foundations and outfitting steel built to yard drawings and delivered on the yard schedule.',
        bullets: [
          'Hull and superstructure sections',
          'Bulkheads, girders and web frames',
          'Engine and equipment foundations',
          'Outfitting steel and stainless detail work',
        ],
        image: 'industry-shipbuilding',
      },
      {
        id: 'offshore',
        title: 'Offshore & energy',
        summary:
          'Heavy welded structures for offshore and energy work, where documentation matters as much as the steel.',
        bullets: [
          'Frames, skids and support structures',
          'Deck sections and access steel',
          'Pipe spools and pipe supports',
          'Full traceability and weld documentation',
        ],
        image: 'industry-offshore',
      },
      {
        id: 'infrastructure',
        title: 'Infrastructure & bridges',
        summary:
          'Bridge girders and modular bridge components, fabricated in sections sized for road transport.',
        bullets: [
          'Welded bridge girders and box sections',
          'Modular and temporary bridge components',
          'Lock, weir and hydraulic steel structures',
          'Railings, gratings and access structures',
        ],
        image: 'industry-infrastructure',
      },
      {
        id: 'industrial',
        title: 'Industrial & machine building',
        summary:
          'Frames, hoppers and machine bases for OEMs who need fabrication capacity they can plan around.',
        bullets: [
          'Machine frames and welded bases',
          'Hoppers, chutes and conveyor structures',
          'Storage tanks and pressure-free vessels',
          'Serial and repeat production',
        ],
        image: 'steel-frame',
      },
    ],

    stats: [
      { value: '20+', label: 'Years in heavy fabrication', sub: 'Serving European clients' },
      { value: '32,000 m²+', label: 'Production area', sub: 'Across [4] fabrication halls' },
      { value: '1,000 t+', label: 'Steel processed per year', sub: 'Plate, sections and hollow profiles' },
      { value: '50+', label: 'People on the floor', sub: 'Welders, fitters, operators, engineers' },
    ],

    processSteps: [
      {
        step: '01',
        title: 'Enquiry & engineering review',
        body: 'We read the drawings before we quote. Where the design and the workshop disagree, you hear about it at the enquiry stage — not during production.',
      },
      {
        step: '02',
        title: 'Work preparation',
        body: 'Nesting, cutting files, weld procedures and a build sequence are prepared per project, so the floor works from one agreed plan.',
      },
      {
        step: '03',
        title: 'Fabrication',
        body: 'Cutting, forming, fitting and welding run under one roof. Progress and inspection points are reported on an agreed rhythm.',
      },
      {
        step: '04',
        title: 'Inspection & finishing',
        body: 'Dimensional control, weld inspection and surface treatment, with the certificates and reports collected into the delivery file.',
      },
      {
        step: '05',
        title: 'Delivery',
        body: 'Sections are loaded, secured and transported to your yard or site — including abnormal loads where the section calls for it.',
      },
    ],

    certifications: [
      { code: 'EN 1090-2', label: 'Execution of steel structures' },
      { code: 'EN ISO 3834-2', label: 'Comprehensive quality requirements for fusion welding' },
      { code: 'EN ISO 9001', label: 'Quality management' },
      { code: 'EN ISO 14001', label: 'Environmental management' },
      { code: 'EN ISO 45001', label: 'Occupational health & safety' },
    ],

    projects: [
      {
        title: 'Modular bridge sections',
        sector: 'Infrastructure',
        meta: '[Client] · [Year] · [XXX] tonnes',
        body: 'Welded truss sections fabricated, trial-assembled and shipped as road-legal units for on-site erection.',
        image: 'bridge-transport',
      },
      {
        title: 'Hull sections & foundations',
        sector: 'Shipbuilding',
        meta: '[Client] · [Year] · [XXX] tonnes',
        body: 'Bulkheads, web frames and equipment foundations built to yard drawings and delivered to the building dock in sequence.',
        image: 'welding-hall',
      },
      {
        title: 'Pipe spools & support steel',
        sector: 'Offshore & energy',
        meta: '[Client] · [Year] · [XXX] spools',
        body: 'Spool fabrication with full weld traceability, delivered with the inspection documentation required for offshore handover.',
        image: 'pipe-fabrication',
      },
      {
        title: 'Heavy welded girders',
        sector: 'Infrastructure',
        meta: '[Client] · [Year] · [XXX] tonnes',
        body: 'Plate girders cut, assembled and submerged-arc welded, then blasted and primed before transport.',
        image: 'truss-assembly',
      },
      {
        title: 'Machine frames, serial production',
        sector: 'Industrial',
        meta: '[Client] · [Year] · [XXX] units',
        body: 'Repeat production of welded frames from a fixed jig, with dimensional control on every unit.',
        image: 'steel-frame',
      },
      {
        title: 'Stainless outfitting steel',
        sector: 'Yachtbuilding',
        meta: '[Client] · [Year] · [XXX] parts',
        body: 'Formed and polished stainless detail work for interior and deck outfitting, finished to a visible-surface standard.',
        image: 'formed-plate',
      },
    ],

    values: [
      {
        title: 'Dates we can hold',
        body: 'A realistic date you can plan around is worth more than an optimistic one you cannot. If a schedule is tight, we say so before we accept it.',
      },
      {
        title: 'Documentation ships with the steel',
        body: 'Material certificates, weld procedures, inspection records. A construction that arrives without its documentation is not finished.',
      },
      {
        title: 'One point of responsibility',
        body: 'Cutting through to coating happens under our own roof. There is no seam in the chain for a problem to fall into.',
      },
      {
        title: 'Engineering next to the floor',
        body: 'Our engineering sits next to the shop floor. Decisions on paper get tested against the people who have to make them work in steel.',
      },
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
