/**
 * Curates and downscales source photography from /media into src/assets/img.
 * Astro's image pipeline handles responsive variants from there; this step only
 * strips the 5-11MB camera originals down to a sane working size.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const PHOTOS = 'media/Projects';
const ALBUM = 'media/Album';
const INDUSTRIES = 'media/Industries present';
const MACHINES = 'media/Machines';
const OUT = 'src/assets/img';

/**
 * Slugs whose source photograph is no longer in /media. The processed JPEG in
 * src/assets/img is now the only copy, so **do not delete those files** — this
 * script cannot regenerate them.
 *
 * The shoot was reorganised on 2026-09-08: most originals moved from
 * media/Projects to media/Album (repointed below), but these ten were dropped
 * from /media altogether. Ask the client for the originals, or repoint each
 * slug at a surviving photograph — a guess made here silently changes what a
 * page shows, so it is left to a person.
 *
 * Seven of them stopped being rendered anywhere when the facility gallery and
 * aerial came off the home page, which makes them look like dead weight the
 * usual way: unreferenced files under src/assets/img. They are not. Deleting
 * one destroys the photograph. Leave them until the client has been asked.
 */
const KNOWN_MISSING = {
  'plasma-head': `${PHOTOS}/Z62_2438.JPG`,
  'plasma-cutting': `${PHOTOS}/Z62_2444.JPG`,
  'cnc-gantry': `${PHOTOS}/Z62_2459.JPG`,
  'nested-plate': `${PHOTOS}/Z62_2484.JPG`,
  'welding-hall': `${PHOTOS}/Z62_2242.JPG`,
  'grinding-sparks': `${PHOTOS}/Z62_2257.JPG`,
  'drilling-detail': `${PHOTOS}/Z62_2295.JPG`,
  'formed-plate': `${PHOTOS}/Z62_2416.JPG`,
  'hall-overview': `${PHOTOS}/Z62_2276.JPG`,
  'machine-hall': `${PHOTOS}/IMG_1069.JPG`,
};

/**
 * [source file, output slug, max width]
 *
 * Only images actually referenced by a page belong here — anything left in
 * src/assets/img is emitted into the build whether it is rendered or not.
 * The full shoot stays in /media; add a line here to bring one in.
 *
 * Renaming or moving anything under /media breaks this list, and the build
 * keeps working from the already-processed files, so the break only surfaces
 * here. Every source is checked before any work starts.
 */
const SELECTION = [
  // ── Referenced by the page markup ──────────────────────────────────────
  // Process — cutting, welding, forming
  [`${ALBUM}/Z62_2331.JPG`, 'welding-arc', 2400],
  [`${ALBUM}/Z62_2270.JPG`, 'welder-beam', 2400],
  [`${ALBUM}/E12.jpg`, 'welding-dark', 2000],

  // Product — assemblies and sections
  [`${ALBUM}/Z62_2317.JPG`, 'steel-sections', 2400],
  [`${ALBUM}/Z62_2325.JPG`, 'pipe-fabrication', 2400],
  [`${ALBUM}/Z62_2347.JPG`, 'truss-assembly', 2400],
  [`${PHOTOS}/IMG_0056.JPG`, 'steel-frame', 2400],
  [`${PHOTOS}/IMG-0069a83f7cf1fe2be9562aff3d30d790-V.jpg`, 'bridge-transport', 2000],

  // Facility
  [`${ALBUM}/Z62_2292.JPG`, 'workshop-hall', 2400],
  // One drone shot now stands in for both aerials — the second angle was
  // dropped from /media. Add a source here if another one turns up.
  ['media/MH sky.jpg', 'facility-aerial', 2600],
  ['media/MH sky.jpg', 'facility-aerial-2', 2600],

  // People
  [`${ALBUM}/Z62_2283.JPG`, 'operator-console', 2400],
  [`${ALBUM}/Z62_2285.JPG`, 'team-workshop', 2400],

  // Industries served
  [`${INDUSTRIES}/Shipbuilding.jpg`, 'industry-shipbuilding', 2400],
  [`${INDUSTRIES}/Offshore sector.jpg`, 'industry-offshore', 2400],
  [`${INDUSTRIES}/Infrastructure.jpg`, 'industry-infrastructure', 2400],

  // Renewable energy — rooftop arrays on the halls
  ['media/Solar panels 2.jpg', 'solar-roof', 2400],
  ['media/Solar panels 3.jpg', 'solar-array', 2400],
  ['media/Solar panels 1.jpg', 'solar-overhead', 2400],

  // Machines — slugs match `content.machines` in the locale dictionaries
  [`${MACHINES}/ESAB.JPG`, 'machine-esab', 2400],
  [`${MACHINES}/Messer.JPG`, 'machine-messer', 2400],
  [`${MACHINES}/Durma.jpg`, 'machine-durma', 2400],
  [`${MACHINES}/Vernet.jpg`, 'machine-vernet', 2400],
  [`${MACHINES}/QFIN.jpg`, 'machine-qfin', 2400],

  // ── The photo album on /media ──────────────────────────────────────────
  // Only ever shown in a grid, so 2000px is plenty. Slugs above are reused by
  // the album where the photograph is the same file; these are the rest.

  // Workshop
  [`${ALBUM}/E11.jpg`, 'arc-plume', 2000],
  [`${ALBUM}/Z1.jpg`, 'girder-welding', 2000],
  [`${ALBUM}/Z62_2243.JPG`, 'arc-dark', 2000],
  [`${ALBUM}/Z62_2250.JPG`, 'beam-welding', 2000],
  [`${ALBUM}/Z62_2262.JPG`, 'tube-grinding', 2000],
  [`${ALBUM}/Z62_2269.JPG`, 'girder-sparks', 2000],
  [`${ALBUM}/Z62_2272.JPG`, 'hall-long-section', 2000],
  [`${ALBUM}/Z62_2278.JPG`, 'welder-hall-dark', 2000],
  [`${ALBUM}/Z62_2287.JPG`, 'control-station', 2000],
  [`${ALBUM}/Z62_2291.JPG`, 'steel-stock', 2000],
  [`${ALBUM}/Z62_2309.JPG`, 'drill-detail', 2000],
  [`${ALBUM}/Z62_2314.JPG`, 'roller-detail', 2000],
  [`${ALBUM}/Z62_2319.JPG`, 'girder-line', 2000],
  [`${ALBUM}/Z62_2324.JPG`, 'pipe-spools', 2000],
  [`${ALBUM}/Z62_2335.JPG`, 'welded-frame', 2000],
  [`${ALBUM}/Z62_2342.JPG`, 'beam-sparks', 2000],
  [`${ALBUM}/Z62_2345.JPG`, 'hall-beams', 2000],
  [`${ALBUM}/Z62_2361.JPG`, 'long-beam', 2000],
  [`${ALBUM}/Z62_2417.JPG`, 'marked-parts', 2000],
  [`${ALBUM}/Z62_2420.JPG`, 'hall-sparks', 2000],
  [`${ALBUM}/Z62_2441.JPG`, 'plasma-head-cut', 2000],
  [`${ALBUM}/Z62_2446.JPG`, 'plasma-gantry', 2000],
  [`${ALBUM}/Z62_2460.JPG`, 'nested-parts', 2000],
  [`${ALBUM}/Z62_2485.JPG`, 'cutting-bed', 2000],
  [`${ALBUM}/Z62_2487.JPG`, 'plasma-sparks', 2000],

  // Projects
  [`${PHOTOS}/3.jpg`, 'project-marked-plate', 2000],
  [`${PHOTOS}/IMG-7434c74aa9c05fb6331aff895f4c33b7-V.jpg`, 'girder-transport-2', 2000],
  [`${PHOTOS}/IMG-8e8e8a2f94a1548f1a5db544d66762b6-V.jpg`, 'girder-transport-3', 2000],
  [`${PHOTOS}/IMG_3247.JPG`, 'stainless-trough', 2000],
  [`${PHOTOS}/IMG_3251.JPG`, 'stainless-trough-2', 2000],
  [`${PHOTOS}/IMG_7290.JPG`, 'frame-assembly', 2000],
  [`${PHOTOS}/IMG_8229.JPG`, 'frame-loaded', 2000],
  [`${PHOTOS}/IMG_8234.JPG`, 'frame-transport', 2000],
  [`${PHOTOS}/IMG_8241.JPG`, 'frame-transport-2', 2000],
  [`${PHOTOS}/IMG_8778.JPG`, 'crane-lift', 2000],
  [`${PHOTOS}/IMG_8781.JPG`, 'crane-lift-2', 2000],
  [`${PHOTOS}/WhatsApp Image 2026-08-14 at 08.38.33.jpeg`, 'access-platform', 1600],

  // Machines
  [`${MACHINES}/BP 40 horizontal press.jpeg`, 'machine-bp40', 2000],
  [`${MACHINES}/FP 80 horizontal press.jpeg`, 'machine-fp80', 2000],
  [`${MACHINES}/Jaespa bandsaw.jpeg`, 'machine-jaespa', 2000],
  [`${MACHINES}/Kaltenbach saw.jpeg`, 'machine-kaltenbach', 2000],
  [`${MACHINES}/Pilous bandsaw.jpeg`, 'machine-pilous', 2000],
  [`${MACHINES}/Forklifts 1.JPG`, 'forklifts-yard', 2000],
  [`${MACHINES}/Forklifts 2.JPG`, 'forklifts-yard-2', 2000],
];

// Fail before writing anything, so a moved source is caught here rather than
// leaving src/assets/img half rebuilt.
const absent = SELECTION.filter(([src]) => !existsSync(src));
if (absent.length) {
  console.error(`${absent.length} source file(s) missing:`);
  for (const [src, slug] of absent) console.error(`  ${slug} <- ${src}`);
  process.exit(1);
}

await mkdir(OUT, { recursive: true });

let done = 0;
await Promise.all(
  SELECTION.map(async ([src, slug, width]) => {
    const dest = path.join(OUT, `${slug}.jpg`);
    await sharp(src)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(dest);
    done++;
  })
);

console.log(`prepared ${done} images -> ${OUT}`);

const orphans = Object.entries(KNOWN_MISSING).filter(
  ([slug]) => !existsSync(path.join(OUT, `${slug}.jpg`))
);
if (orphans.length) {
  console.error(
    `\n${orphans.length} slug(s) have neither a source nor a processed file:`
  );
  for (const [slug, src] of orphans) console.error(`  ${slug} <- ${src}`);
  process.exit(1);
}
console.log(
  `${Object.keys(KNOWN_MISSING).length} slug(s) kept from a lost source — see KNOWN_MISSING`
);
