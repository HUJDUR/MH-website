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

Contact details, company figures and certifications are real. What is left:

| What | Where |
| --- | --- |
| Opening hours, LinkedIn URL | `src/data/site.ts` |
| Number of halls, crane capacity | `src/data/content.ts` → `stats`, `src/pages/facility.astro`, `src/pages/index.astro` |
| Equipment sizes and capacities | `src/data/content.ts` → `equipment` |
| Project references and client names | `src/data/content.ts` → `projects` |

**Project descriptions** (`projects`) are still written as plausible examples of
the work visible in the photography. Replace them with real references before
launch.

## Languages

Three locales: English at the root (`/about`), Bosnian and Dutch prefixed
(`/bs/about`, `/nl/about`). Every page is generated once per locale from
`src/pages/[...lang]/`, so there is one component per page, not three.

All copy lives in `src/i18n/{en,bs,nl}.ts`. `en.ts` is the source language and
its shape becomes the `Dictionary` type the other two must satisfy. Figures,
machine models, certification codes and image slugs are shared, not translated.

```bash
npm run check:i18n    # keys, array lengths and shared identifiers across locales
```

Run that before a release. The build only strips types, it never checks them,
so a missing key would otherwise render as nothing rather than fail. (Installing
`typescript` and `@astrojs/check` would make `astro check` catch it at build
time too — neither is currently a dependency.)

> **The Bosnian and Dutch copy is a first draft written alongside the English,
> not by a native reviewer.** Read both through before launch — especially the
> Dutch, which is the market the company sells into. Corrections are one file
> per language.

To add a locale: add it to `locales` in `src/i18n/index.ts` and to `i18n` in
`astro.config.mjs`, create the dictionary, and the routes generate themselves.

## Theme

Dark is the default and the design's native state; a visitor who has never
touched the toggle gets dark whatever their OS prefers. The choice is kept in
`localStorage` under `mh-theme` and applied by an inline script in `Base.astro`
before first paint.

Light mode re-points the same design tokens rather than duplicating any styles,
so every existing utility class flips on its own — see the theme block in
`src/styles/global.css`. Two rules keep it honest:

- Sections sitting on a photograph carry `data-theme="dark"`, which re-asserts
  the dark tokens for their subtree. They stay dark islands on a light page.
- `text-heading` and `border-line` are the semantic pair that inverts. Literal
  `text-white` is reserved for text on orange, which never flips.

Accent colours are darkened in light mode until small text clears WCAG AA
against the page ground; the untouched brand orange sits near 3:1 on white.

## Forms

Two forms, both posting to [Web3Forms](https://web3forms.com), which relays to
`info@metalholland.com` and stores nothing:

| Page | Subject prefix |
| --- | --- |
| `/contact` — quote requests | `Quote request — <company>` |
| `/careers` — job applications | `Job application — <name>` |

The prefixes differ so applications and enquiries are told apart in one inbox.
Submit logic is shared in `src/scripts/web3form.ts`; everything page- or
language-specific reaches it as a `data-` attribute on the `<form>`, so that
file holds no copy. Endpoint and key sit at the top of each page.

Neither form takes attachments — Web3Forms does not relay them on this plan, so
both say to send CVs, certificates or drawings by email once we reply.

The access key there is submit-only and public by design — a static site cannot
hide a credential the browser has to send. **Restrict the key to
`metalholland.com` in the Web3Forms dashboard**; that domain allowlist, not the
key's secrecy, is what stops anyone else posting to your inbox. A hidden
`botcheck` honeypot handles the rest.

Deliberately avoided: reCAPTCHA and hCaptcha both set third-party cookies, which
would put the captcha behind the cookie consent gate and leave visitors unable
to send an enquiry until they accept cookies.

## Cookies

One first-party cookie, `mh_cookie_consent`, records the visitor's choice for a
year. The only consent-relevant thing on the site is the Google Maps embed on
`/contact`: its iframe is absent from the HTML and injected by
`src/components/CookieConsent.astro` only after consent, so Google is never
contacted by a visitor who declines. The policy page is `/cookies`.

Any future embed can reuse the mechanism — give the wrapper `data-consent-embed`
plus `data-embed-src`, `data-embed-title` and `data-embed-class`, and put the
opt-in placeholder inside it as `data-embed-placeholder`.

There is **no privacy policy page yet**. The contact form collects personal data,
so one is likely required alongside the cookie policy.

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

Source folders: `media/Projects` (the shoot), `media/Industries present`,
`media/Machines`. `SELECTION` names each source file explicitly, so **renaming
or moving anything under `media/` breaks the pipeline** — the build keeps
working from the already-processed files in `src/assets/img/`, and the break
only shows up the next time `prepare:media` runs.

To add a photograph: add a line to `SELECTION` in `prepare-media.mjs`, run
`npm run prepare:media`, and reference it by slug.

Only images actually referenced by a page should stay in `src/assets/img/` —
anything sitting there is emitted into the build whether it is rendered or not.

Two clips live in `public/video/`, both encoded from the drone footage in
`media/` with ffmpeg (1080p and 720p H.264, ~2.2 Mbit/s ceiling, no audio, plus
a poster frame):

- `facility-*` — the homepage hero, from `media/Landing page video.mp4`
- `forklifts-*` — the fleet on the facility page, from
  `media/Machines/Forklifts video.mp4`

Both are fetched only after the page has loaded, and skipped entirely for
visitors on a metered or slow connection or with reduced motion enabled — the
poster frame stands in, so it has to work as a still image on its own. The
forklift clip additionally waits until it is scrolled near.

`src/components/AmbientVideo.astro` wraps that behaviour for any clip that
behaves like a photograph. The hero keeps its own copy: it layers filters, a
colour cast and gradients that only make sense there.

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
