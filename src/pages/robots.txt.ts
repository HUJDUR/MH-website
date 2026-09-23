import type { APIRoute } from 'astro';
import { site } from '../data/site';

/**
 * robots.txt, generated rather than kept in public/.
 *
 * A file that says `Disallow: /` is exactly right on staging and catastrophic
 * in production, and a static one has no way of telling the two apart — it
 * ships whatever was last committed. Deriving it from `site` in
 * astro.config.mjs means the rule follows the host: point `site` at the live
 * domain and the block lifts on its own, the same way the `noindex` in
 * Base.astro does.
 *
 * Note that `Disallow: /` and a `noindex` tag are not additive. A crawler that
 * obeys this file never fetches the page, so it never reads the tag — which is
 * why a URL blocked here can still surface in results if something links to it.
 * Both are set because staging should be unreachable by either route, but the
 * tag is the one that actually removes a page, and it only works where
 * crawling is allowed. If a staging URL ever does get indexed, the fix is to
 * lift this block so the tag can be seen.
 */
const PRODUCTION_HOST = 'www.metalholland.com';

export const GET: APIRoute = (context) => {
  const origin = context.site ?? new URL(site.url);
  const isStaging = origin.hostname !== PRODUCTION_HOST;

  const body = isStaging
    ? [
        '# Staging. Not for indexing — see src/pages/robots.txt.ts.',
        'User-agent: *',
        'Disallow: /',
        '',
      ].join('\n')
    : [
        'User-agent: *',
        'Allow: /',
        '',
        `Sitemap: ${new URL('sitemap-index.xml', origin).href}`,
        '',
      ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
