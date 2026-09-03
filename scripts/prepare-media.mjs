/**
 * Curates and downscales source photography from /media into src/assets/img.
 * Astro's image pipeline handles responsive variants from there; this step only
 * strips the 5-11MB camera originals down to a sane working size.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const PHOTOS = 'media/Photos for website';
const INDUSTRIES = 'media/Industries present';
const OUT = 'src/assets/img';

/**
 * [source file, output slug, max width]
 *
 * Only images actually referenced by a page belong here — anything left in
 * src/assets/img is emitted into the build whether it is rendered or not.
 * The full shoot stays in /media; add a line here to bring one in.
 */
const SELECTION = [
  // Process — cutting, welding, forming
  [`${PHOTOS}/Z62_2438.JPG`, 'plasma-head', 2400],
  [`${PHOTOS}/Z62_2444.JPG`, 'plasma-cutting', 2400],
  [`${PHOTOS}/Z62_2459.JPG`, 'cnc-gantry', 2400],
  [`${PHOTOS}/Z62_2484.JPG`, 'nested-plate', 2400],
  [`${PHOTOS}/Z62_2331.JPG`, 'welding-arc', 2400],
  [`${PHOTOS}/Z62_2270.JPG`, 'welder-beam', 2400],
  [`${PHOTOS}/Z62_2242.JPG`, 'welding-hall', 2400],
  [`${PHOTOS}/Z62_2257.JPG`, 'grinding-sparks', 2400],
  [`${PHOTOS}/Z62_2295.JPG`, 'drilling-detail', 2400],
  [`${PHOTOS}/Z62_2416.JPG`, 'formed-plate', 2400],
  [`${PHOTOS}/E12.jpg`, 'welding-dark', 2000],

  // Product — assemblies and sections
  [`${PHOTOS}/Z62_2317.JPG`, 'steel-sections', 2400],
  [`${PHOTOS}/Z62_2325.JPG`, 'pipe-fabrication', 2400],
  [`${PHOTOS}/Z62_2347.JPG`, 'truss-assembly', 2400],
  [`${PHOTOS}/IMG_0056.JPG`, 'steel-frame', 2400],
  [`${PHOTOS}/IMG-0069a83f7cf1fe2be9562aff3d30d790-V.jpg`, 'bridge-transport', 2000],

  // Facility
  [`${PHOTOS}/Z62_2292.JPG`, 'workshop-hall', 2400],
  [`${PHOTOS}/Z62_2276.JPG`, 'hall-overview', 2400],
  [`${PHOTOS}/IMG_1069.JPG`, 'machine-hall', 2400],
  ['media/dji_fly_20260819_132552_0015_1787140299227_photo.jpg', 'facility-aerial', 2600],
  ['media/dji_fly_20260819_132744_0017_1787140298854_photo.jpg', 'facility-aerial-2', 2600],

  // People
  [`${PHOTOS}/Z62_2283.JPG`, 'operator-console', 2400],
  [`${PHOTOS}/Z62_2285.JPG`, 'team-workshop', 2400],

  // Industries served
  [`${INDUSTRIES}/Sjipbuilding.jpg`, 'industry-shipbuilding', 2400],
  [`${INDUSTRIES}/Offshore sector.jpg`, 'industry-offshore', 2400],
  [`${INDUSTRIES}/Infrastructure.jpg`, 'industry-infrastructure', 2400],
];

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
