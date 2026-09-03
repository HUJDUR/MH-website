import type { ImageMetadata } from 'astro';

/**
 * Content files reference photography by slug ("plasma-cutting") rather than by
 * import, so copy stays free of build-tool concerns. This resolves those slugs
 * to the imported assets Astro's <Image> needs.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/img/*.jpg',
  { eager: true }
);

const bySlug = new Map<string, ImageMetadata>(
  Object.entries(modules).map(([path, mod]) => [
    path.split('/').pop()!.replace(/\.jpg$/, ''),
    mod.default,
  ])
);

export function img(slug: string): ImageMetadata {
  const found = bySlug.get(slug);
  if (!found) {
    throw new Error(
      `Unknown image slug "${slug}". Available: ${[...bySlug.keys()].sort().join(', ')}`
    );
  }
  return found;
}

export const imageSlugs = [...bySlug.keys()].sort();
