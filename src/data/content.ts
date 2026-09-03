/**
 * Editorial content. Copy lives here rather than in markup so it can be
 * reviewed and translated without touching layout.
 *
 * WARNING: values in [brackets] are placeholders — see the note in `site.ts`.
 */

export type Capability = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
  /** Slug of an image in src/assets/img (without extension). */
  image: string;
};

export const capabilities: Capability[] = [
  {
    id: 'cutting',
    title: 'CNC plasma & oxy-fuel cutting',
    summary:
      'Plate is nested and cut on our own gantry tables, so every part downstream starts from an accurate, repeatable profile.',
    detail:
      'Cutting is where tolerance is won or lost. We nest for material yield, cut bevels in the same pass where the weld preparation calls for it, and hard-mark parts so they arrive at the fitting bench already identified.',
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
      'Welding is the discipline the rest of the shop is built around. Procedures are qualified for the material and thickness at hand, welders are certified against them, and the work is recorded so the file that ships with a construction stands up to review.',
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
      'We would rather hand over a section that fits than a pallet of parts that might. Sub-assemblies are jigged and measured, blasted and primed or fully coated to specification, then loaded and transported to the yard or site.',
    points: [
      'Jigged sub-assembly and complete sections',
      'Dimensional control before release',
      'Blasting, priming and coating to specification',
      'Transport to yard or site across Europe',
    ],
    image: 'steel-sections',
  },
];

export type Industry = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  image: string;
};

export const industries: Industry[] = [
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
];

/** Numbers are placeholders — confirm before launch. */
export const stats = [
  { value: '20+', label: 'Years in heavy fabrication', sub: 'Serving Dutch and European clients' },
  { value: '32,000 m²+', label: 'Production area', sub: 'Across [4] fabrication halls' },
  { value: '1,000 t+', label: 'Steel processed per year', sub: 'Plate, sections and hollow profiles' },
  { value: '50+', label: 'People on the floor', sub: 'Welders, fitters, operators, engineers' },
];

export const processSteps = [
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
];

/** The schemes Metal Holland is certified against. */
export const certifications = [
  { code: 'EN 1090-2', label: 'Execution of steel structures' },
  { code: 'EN ISO 3834-2', label: 'Comprehensive quality requirements for fusion welding' },
  { code: 'EN ISO 9001', label: 'Quality management' },
  { code: 'EN ISO 14001', label: 'Environmental management' },
  { code: 'EN ISO 45001', label: 'Occupational health & safety' },
];

export type Project = {
  title: string;
  sector: string;
  /** Short factual line: scope, tonnage, material. */
  meta: string;
  body: string;
  image: string;
};

/** PLACEHOLDER project descriptions — replace with real references. */
export const projects: Project[] = [
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
];

export const values = [
  {
    title: 'We say what is possible',
    body: 'A realistic date you can plan around is worth more than an optimistic one you cannot. If a schedule is tight, we say so before we accept it.',
  },
  {
    title: 'The file is part of the product',
    body: 'Material certificates, weld procedures, inspection records. A construction that arrives without its documentation is not finished.',
  },
  {
    title: 'One shop, one responsibility',
    body: 'Cutting through to coating happens under our own roof, so there is no seam in the chain where accountability can go missing.',
  },
  {
    title: 'Built by people who weld',
    body: 'Our engineering sits next to the shop floor. Decisions on paper get tested against the people who have to make them work in steel.',
  },
];

/** Equipment list for the facility page. Figures in [brackets] are placeholders. */
export const equipment = [
  {
    group: 'Cutting',
    items: [
      'CNC gantry plasma cutting table, [3,000 × 12,000] mm',
      'Oxy-fuel cutting for heavy plate up to [200] mm',
      'Bevel-cutting head for weld preparation',
      'Band saws for sections and hollow profiles',
    ],
  },
  {
    group: 'Forming & machining',
    items: [
      'Plate rolls, capacity to [XX] mm × [X,XXX] mm',
      'Press brake, [XXX] tonne',
      'CNC beam drilling line',
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
      'Mobile crane for yard loading',
      'Blasting and priming facility',
      'Loading for abnormal and oversized transport',
    ],
  },
];
