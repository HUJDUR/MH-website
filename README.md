# Metal Holland — website

Corporate website for Metal Holland: heavy steel fabrication for shipbuilding,
offshore and infrastructure.

Built with [Astro](https://astro.build) and Tailwind CSS v4. It compiles to
static HTML — no server runtime required.

---

## Before launch

Everything that needs real data is marked with `[square brackets]`. Find them
with:

```bash
grep -rn "\[" src/data/
```

| What | Where |
| --- | --- |
| Phone, email, addresses, KvK/VAT, LinkedIn | `src/data/site.ts` |
| Production domain (canonical URLs, sitemap) | `astro.config.mjs` → `site`, and `site.url` in `src/data/site.ts` |
| Company stats, tonnage, headcount, founding year | `src/data/content.ts` → `stats`, and the hero eyebrow in `src/components/HomeHero.astro` |
| Equipment sizes and capacities | `src/data/content.ts` → `equipment` |
| Project references and client names | `src/data/content.ts` → `projects` |
| Contact form endpoint | `FORM_ENDPOINT` in `src/pages/contact.astro` |

**Two items need verification, not just filling in:**

1. **Certifications** (`src/data/content.ts` → `certifications`). The listed
   schemes — ISO 9001, EN 1090, ISO 3834, ISO 45001 — are the ones typical of a
   fabricator of this kind, but they are placeholders. Publish only what a
   current certificate actually covers.
2. **Project descriptions** (`projects`) are written as plausible examples of the
   work visible in the photography. Replace them with real references.

Until `FORM_ENDPOINT` is set, the contact form opens a pre-filled email instead
of submitting, and the page shows a setup notice. Both disappear once the
endpoint is configured.

---

## Commands

```bash
npm install
npm run dev        # dev server at localhost:4321
npm run build      # static build into dist/
npm run preview    # serve the built site
```

`npm run prepare:media` re-runs the image pipeline (see below). It is not part
of `build` — run it only when the source photography changes.

## Deploying

`npm run build` produces a fully static `dist/`. Point any static host at it —
Netlify, Vercel, Cloudflare Pages, S3, or plain nginx. No Node runtime is
needed in production.

Set the production domain in `astro.config.mjs` first, or canonical URLs and
`sitemap-index.xml` will point at the placeholder domain.

---

## Structure

```
src/
  data/
    site.ts        Company details, navigation, SEO defaults
    content.ts     All editorial copy — capabilities, industries, projects…
    images.ts      Resolves image slugs to imported assets
  layouts/Base.astro     Head, header, footer, scroll-reveal observer
  components/            Header, Footer, hero variants, CTA, cards
  pages/                 One file per route
  styles/global.css      Design tokens and shared component classes
public/
  logo/          Brand SVGs
  video/         Encoded hero video + poster
scripts/
  prepare-media.mjs  Curates and downscales /media into src/assets/img
  shoot.mjs          Dev-only screenshots via local Chrome
media/             Original photography (not deployed)
```

Copy lives in `src/data/`, not in markup, so text can be edited or translated
without touching layout.

### Media pipeline

`media/` holds the full camera originals (5–11 MB each) and is never deployed.
`scripts/prepare-media.mjs` selects the shots the site uses, downscales them and
writes them to `src/assets/img/`. Astro then generates responsive WebP variants
at build time.

To add a photograph: add a line to `SELECTION` in `prepare-media.mjs`, run
`npm run prepare:media`, and reference it by slug.

Only images actually referenced by a page should stay in `src/assets/img/` —
anything sitting there is emitted into the build whether it is rendered or not.

The hero video was encoded from the drone footage in `media/` with ffmpeg
(1080p and 720p H.264, no audio). It is fetched only after the page has loaded,
and is skipped entirely for visitors on a metered connection or with reduced
motion enabled — the poster frame stands in.

## Design system

Tokens are defined in the `@theme` block of `src/styles/global.css` and derive
from the logo: orange `#F16139`, cyan `#5DBEE4`, silver `#D2DCE2`, over a cold
near-black steel base.

- `ink-*` — backgrounds, darkest to lightest
- `steel-*` — body text and muted UI
- `flame-*` — primary accent (heat)
- `arc-*` — secondary accent (the weld arc)

Type is Archivo (display) and Inter (body), self-hosted via Fontsource — no
external font requests.

Scroll reveals are handled by one `IntersectionObserver` in `Base.astro`. The
hiding rule is scoped to `html.js`, so without JavaScript all content renders
visible rather than blank. `prefers-reduced-motion` disables reveals, the
background drift and the hero video.
