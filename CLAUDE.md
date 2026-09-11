# CLAUDE.md

Working notes for Claude Code on this repository. Read this before changing
anything; the conventions here exist because breaking them is silent — the
build rarely complains.

## What this is

The corporate website for **Metal Holland**, a heavy steel fabrication works in
Šamac, Bosnia and Herzegovina, selling mainly into the Dutch and wider European
market (shipbuilding, offshore, infrastructure, industrial).

Astro 7 + Tailwind CSS v4, compiled to static HTML. No server runtime, no
database, no CMS. `npm run build` produces `dist/`.

```bash
npm run dev           # localhost:4321
npm run build         # static build into dist/
npm run preview       # serve the built site
npm run check:i18n    # locale dictionaries must match — run before any release
npm run prepare:media # re-run the image pipeline (only when source photos change)
```

There is no test suite. Verify changes by building and driving the built site
in a browser (playwright-core is a devDependency; see "Verifying" below).

---

## Tone of voice — read this before writing any copy

The client's own words: *"I want our clients to feel in safe hands when they see
our website, and not overwhelmed with how great we are. I don't want them to
think we just have bold words."*

This is a supplier being evaluated by procurement people and project managers at
shipyards and engineering firms. They are looking for evidence that a delivery
will arrive on the agreed date, at the agreed size, with the paperwork. They are
not looking to be impressed.

**Write like this:**

- State facts and let them do the work. "Two plasma tables, 30,000 × 3,000 mm"
  beats "cutting capability second to none."
- Prefer the concrete noun to the adjective. Sizes, tonnages, standards,
  document names, process steps.
- Admit constraints. Saying a schedule is tight, or that a figure is not yet
  confirmed, builds more trust than smoothing it over.
- Plain declaratives. Short sentences are fine; so are longer ones that carry
  real information.

**Avoid:**

- Superlatives and claims of being best, leading, premier, world-class.
- Clever antithesis as a headline ("X, not Y") — it was overused here and has
  been deliberately reduced. One or two on the whole site is the ceiling.
- Headlines that assert character ("Four things we will not trade away").
  Describe what happens instead.
- Marketing abstractions: solutions, excellence, passion, commitment, synergy.
- Numbers that are not verified. Placeholders in `[square brackets]` are the
  convention for anything unconfirmed — leave them rather than inventing.

**Never publish an unverified figure.** Capacities, tonnages, certifications and
percentages come from the client. If a number is wanted and not supplied, use a
bracketed placeholder and say so in the summary.

---

## Languages

Three locales: **English at the root** (`/contact`), Bosnian and Dutch prefixed
(`/bs/contact`, `/nl/contact`). Every page is generated once per locale from
`src/pages/[...lang]/`, so there is one component per page, not three.

- All copy lives in `src/i18n/{en,bs,nl}.ts`. Nothing user-visible belongs in
  markup.
- `en.ts` is the source language. Its shape becomes the `Dictionary` type that
  `bs.ts` and `nl.ts` must satisfy.
- **The build only strips types, it never checks them.** A missing key renders
  as nothing rather than failing. `npm run check:i18n` is the real guard — it
  walks all three shapes and verifies shared identifiers. Run it after every
  dictionary edit.
- Figures, machine models, certification codes, image slugs and `href` values
  are **shared, not translated**. The checker enforces this.

### Current working arrangement (2026-09)

The client settles the **English** copy first; Bosnian and Dutch follow it. So:

- Copy changes go into `en.ts` first.
- If a change **adds or removes a key**, the same key must be added to `bs.ts`
  and `nl.ts` or the build breaks.
- When a revision is still in flux, put the English string in as a placeholder
  and list it under "Pending translation" below rather than translating twice.

### Pending translation

Nothing. All three dictionaries were brought level on 2026-09-09. To check
this claim rather than trust it, walk the three shapes and report every leaf
string where `bs` or `nl` still equals `en` — ignoring `slug`, `href`, `id`,
`group`, `image`, `code`, `value` and `category`, which are shared by design.
About eighteen legitimate matches remain: words that are the same in the target
language (Dutch *Home*, *Contact*, *Sector*, *Machines*, *Cookies*; *Media* and
*Filter* in both) and identifiers such as `mh_cookie_consent` and `+387`.

Also note: the Bosnian and Dutch throughout were written by Claude alongside
the English and have **not** been reviewed by a native speaker. Both
dictionaries carry a header saying so. Flag this whenever the client discusses
launch — the trade vocabulary in particular (`apkant preša`, `zetafdeling`,
`bordessen`, `scepters`) deserves a working shop's eye, not a dictionary's.

### Watch for mixed scripts

Bosnian is written in Latin script here. Cyrillic look-alikes (`а е о р с х`)
have crept in twice and are invisible on screen. After editing `bs.ts`, scan for
codepoints in U+0400–U+04FF.

---

## Theme

Dark is the default and the design's native state. A visitor who has never
touched the toggle gets dark **whatever their OS prefers** — this is deliberate,
do not "fix" it to respect `prefers-color-scheme`.

Light mode mostly re-points the design tokens rather than duplicating styles,
so existing utility classes flip on their own. See the theme block in
`src/styles/global.css`. Four rules:

1. Sections sitting on a photograph carry `data-theme="dark"`, which re-asserts
   the dark tokens for their subtree. They stay dark islands on a light page —
   white text on a dark image is correct in both themes. The media lightbox is
   one of these: a photograph wants a dark surround, and a near-white scrim
   over a near-white page would not read as a layer at all.
2. `text-heading` and `border-line` are the semantic pair that inverts. Literal
   `text-white` is reserved for text on orange, which never flips. **Do not
   introduce new `text-white` on a surface.**
3. Accents are darkened in light mode until small text clears WCAG AA against
   the page ground. Check contrast before changing any accent value. Note that
   a colour's ratio against white is the same number whichever way round it is
   read, so an accent that clears AA as text also clears it as a button fill
   under white text — one value covers both, which is why there is only one.
4. **Token re-pointing is not sufficient on its own**, and the "Light mode
   structure" block in `global.css` is where it stops. Alphas are baked into
   the utility class rather than the colour — `border-line/8` is a `color-mix`
   at 8% whatever `--color-line` says — and 8% black on paper is a smudge where
   8% white on steel is a hairline. That block restates the faint `line` alphas
   at roughly 1.7x, gives rounded panels a shadow, and lifts photographs. Only
   the alphas the site uses are listed; a new one degrades softly rather than
   breaking. Depth effects reach it through `--mh-*` custom properties, which
   are declared three times: `:root`, the light block, and the dark-island
   block, so an island on a light page gets dark shadows back.

Photographs are lifted in light mode with a CSS filter
(`brightness(1.05) contrast(0.90)`) because the shop is dark and lit by an arc,
and unaltered these images read as holes punched in the page. The lift is
scoped away from dark islands, so the same photograph is graded one way inside
the hero and another in the media grid. It is deliberately small — it has to
survive being seen next to the dark-mode version. If a genuinely lighter set is
ever wanted, that is a re-grade in `prepare-media.mjs`, not a bigger filter,
and it would need a second set of files so dark mode keeps the originals.

The choice is stored in `localStorage` as `mh-theme` and applied by an inline
script in `Base.astro` before first paint.

## Page loader

`PageLoader.astro` is the first element in `<body>` and holds a full-screen
curtain over the page until `load` fires. Four things about it are load-bearing:

- **It is gated on `html.js`**, the same class the reveal animations use. With
  scripting off nothing would ever take it away, so it must stay `display:none`
  there. Do not move that rule.
- **It has a floor and a ceiling.** 1000 ms minimum, so it is never a flicker
  on a warm cache — that was the point of asking for it. 8000 ms maximum,
  because `load` waits on every image in the viewport and one stalled request
  would otherwise strand the visitor behind it.
- **Every exit runs through one idempotent `finish()`**, which is also what
  restores `overflow` on `<html>`. A second path to hiding it is a second way
  to leave the page unscrollable.
- **The mark is inlined**, not linked. An external file is one more request
  that could itself be the slow one, and the whole SVG is under half a
  kilobyte. On a light ground the whole mark goes to the wordmark's `#232830`,
  because the brand cyan sits near 2:1 there.
- **It depends on `scrollbar-gutter: stable`** in the base layer of
  `global.css`. Locking `overflow` takes the classic scrollbar away with it, so
  without the reserved gutter the document is 15px wider behind the curtain and
  snaps back the moment it lifts — measured at an 8px jump of every centred
  element. Remove that line and the stutter returns.

The theme is already settled by the inline script in `Base.astro` before first
paint, so the curtain is just `--color-ink-950` and follows the stored choice
without doing anything itself.

**Once per visit, not once per navigation.** This is a multi-page site, so a
nav click is a fresh document and would otherwise be a fresh curtain. A
`sessionStorage` flag, `mh-loader-seen`, is read *and written* in the head of
`Base.astro` — in the head because the decision has to precede the first paint
the same way the theme does, and written on read rather than when the loader
finishes so that navigating away mid-load does not earn a second curtain. The
flag adds `html.mh-loader-seen`, which the component hides on, and the
component's script bails on the same class. Both halves are needed: the CSS
alone would leave the scroll lock taken out behind a curtain nobody can see.

`sessionStorage` clears with the tab, which is the definition of "once per
visit" wanted here. If it throws — some private modes — nothing is added and
the loader simply shows every time, which is the old behaviour rather than a
break.

## Prefetch

`prefetch: { prefetchAll: true, defaultStrategy: 'hover' }` in
`astro.config.mjs`. Every internal link is fetched 80ms after the pointer
settles on it, so the next page's HTML is usually in cache before the click
lands — measured at ~140ms saved per navigation on an emulated slow 4G, which
is the round trip, so a real host with real TTFB saves more.

It is cheap: all five pages of a locale are ~52 KB gzipped, less than one of
the font files, and the prefetch runtime is 1.1 KB gzipped. Astro drops the
hover strategy on `saveData` and any 2g connection and falls back to fetching
on mousedown/touchstart, by which point the visitor has committed anyway
(`astro/dist/prefetch/index.js`). Nothing needs doing per link; `prefetchAll`
opts them all in and `data-astro-prefetch="false"` opts one out.

## Forms

Two, both posting to [Web3Forms](https://web3forms.com), which relays to
`info@metalholland.com` and stores nothing:

| Page | Subject prefix |
| --- | --- |
| `/contact` | `Enquiry — <company>` |
| `/careers` | `Job application — <name>` |

Submit logic is shared in `src/scripts/web3form.ts`. Everything page- or
language-specific reaches it as a `data-` attribute on the `<form>`, so that
file holds no copy.

- The access key is **public by design** — a static site cannot hide a
  credential the browser sends. The protection that matters is the domain
  allowlist in the Web3Forms dashboard. Do not treat the key as a secret, and do
  not propose "hiding" it.
- **No attachments.** Web3Forms does not relay them on this plan, and neither
  form has a file field. Neither form says so any more either — the careers note
  used to, and the client asked for it out (2026-09-07). So a CV or a drawing
  reaches us only by email, and nothing on the page tells the sender that.
  Raise it if a form is being reworked.
- Do not add reCAPTCHA or hCaptcha. Both set third-party cookies, which would
  put the form behind the cookie consent gate. The `botcheck` honeypot plus the
  domain allowlist is the agreed approach.

## Cookies and privacy

One first-party cookie, `mh_cookie_consent`, records the visitor's choice for a
year. The **only** consent-relevant thing on the site is the Google Maps embed
on `/contact`: its iframe is absent from the HTML and injected by
`src/components/CookieConsent.astro` only after consent, so Google is never
contacted by a visitor who declines.

Any future embed reuses that mechanism: give the wrapper `data-consent-embed`
plus `data-embed-src`, `data-embed-title`, `data-embed-class`, and put the
opt-in placeholder inside as `data-embed-placeholder`.

If you add anything that sets a cookie or uses local storage, it must also be
added to the table on `/cookies`. **There is still no privacy policy page** —
the contact and careers forms both collect personal data, so one is likely
required. Raise it, do not quietly write one.

## Media pipeline

`media/` holds camera originals and is git-ignored and never deployed.
`scripts/prepare-media.mjs` selects, downscales and writes to `src/assets/img/`;
Astro generates responsive WebP from there.

- `SELECTION` names each source file explicitly, so renaming anything under
  `media/` breaks the pipeline — the build keeps working from already-processed
  files, so the break only surfaces on the next `prepare:media`. It now checks
  every source before writing anything and exits with the list, rather than
  failing halfway. This has happened twice.
- **`KNOWN_MISSING` is not decoration.** The 2026-09-08 reorganisation moved most
  originals from `media/Projects` into `media/Album` and dropped ten of them
  altogether. Those ten slugs are still rendered by the site and survive **only**
  as processed JPEGs in `src/assets/img/` — deleting that directory loses the
  photographs for good. Repointing one at a surviving shot changes what a page
  shows, so it waits for a person rather than a guess.
- Only images actually referenced by a page belong in `src/assets/img/`;
  anything else is emitted into the build regardless.
- **`steel-sections.jpg` was replaced by hand (2026-09-08)** and no longer
  matches what `SELECTION` would produce from `media/Album/Z62_2317.JPG`. The
  next `prepare:media` run silently overwrites it. Either point that line at the
  new original or accept losing the swap. The replacement also arrived as
  `.JPG`; the glob in `src/data/images.ts` is `*.jpg` and case-sensitive, so the
  slug vanished and `/media` failed to build until it was renamed.
- Video (`public/video/`) is encoded by hand with ffmpeg, 1080p and 720p H.264,
  ~2.2 Mbit/s ceiling, no audio, plus a poster frame. `AmbientVideo.astro`
  handles lazy loading; clips are skipped entirely for reduced-motion, metered
  and slow connections, so **the poster must work as a still image on its own**.

## Structure

```
src/
  pages/[...lang]/   one file per page, generated per locale
  pages/404.astro    outside the locale route; answers in the default language
  i18n/              all copy + locale plumbing
  layouts/Base.astro head, JSON-LD, hreflang, theme bootstrap
  components/        presentation only, no copy
  data/site.ts       language-independent facts: address, phone, VAT, map URLs
  scripts/           browser modules shared between pages
  styles/global.css  design tokens, theme, base layer, utilities
```

Five routes: home, media, careers, contact, cookies. `/projects` became `/media`
(2026-09-08): a filterable photo album of the whole shoot — `media/Album`,
`media/Projects`, `media/Machines` — plus the forklift clip, in place of the six
invented project cards. **About, Capabilities,
Industries and Facility used to be pages and are now sections of the home page**
(client's call, 2026-09-08). The nav points at fragments — `/#about`,
`/#industries`, `/#shipbuilding` and so on — which `href()` prefixes per locale
into `/bs/#about`. The footer used to carry three link
columns doing the same; the client had them out (2026-09-08), so it is now
contact details, location and hours only, and `footer.groups` is gone from the
dictionaries and from `check-i18n.mjs`. Two consequences:

- Those `id`s live in `index.astro`; three are written there by hand and the
  rest come from `content.industries[].id`. Nothing resolves an anchor at build
  time, so a renamed id breaks the nav in silence. `npm run build` will not
  tell you.
- The old URLs now 404. Nothing on the site links to them, but anything the
  client has sent out, and anything Google has indexed, still points there —
  worth redirects at the host if that matters.

The home page was cut down hard on 2026-09-08 at the client's request. Gone:
the "Engineering and capacity in one place" story, the per-process capability
blocks, the materials table, the equipment list, the machines grid, and the
people section's two paragraphs. With them went `content.capabilities`,
`content.equipment`, `content.machines`, the whole `capabilitiesPage` and
`facilityPage` objects, and `aboutPage`'s hero, story, `peopleLede` and
`peopleBody` keys — plus their rules in `check-i18n.mjs`.

`#about` was re-homed onto the "Who we are" intro rather than left dangling.
`#capabilities` and `#facility` had no successor, so **the Capabilities and
Facility items were removed from the nav**; it is now About, Industries, Media,
Careers, Contact. The order is intro, industries, people, energy,
certification, CTA — industries before people is the client's call.

`industriesPage` still carries the heading that opens its section, left over
from when it was a page of its own.

Design tokens live in the `@theme` block of `global.css` and derive from the
logo: orange `#F16139`, cyan `#5DBEE4`, silver `#D2DCE2`, over a cold near-black
steel base. `ink-*` backgrounds, `steel-*` body text, `flame-*` primary accent,
`arc-*` secondary.

## Conventions

- **Comments explain why, not what.** The existing comments are load-bearing
  documentation of non-obvious decisions; match that register and do not strip
  them.
- Reveal animations are opt-in via `data-reveal`; the hiding rule is scoped to
  `html.js`, so no-JS visitors get visible content rather than a blank page.
- Prefer editing a dictionary or a data file over editing markup.
- `[square brackets]` mark unconfirmed data awaiting the client. Grep for `[`
  in `src/i18n/` and `src/data/` to find them.

## Verifying

There is no test runner. For anything behavioural — forms, consent gating, the
theme toggle, language switching, video — build, serve, and drive it:

```bash
npm run build && npm run preview     # then a short playwright-core script
```

Playwright is a devDependency and Chrome is installed (`channel: 'chrome'`).
Intercept outbound form posts with `page.route` rather than sending real mail to
the client's inbox. Note that `astro dev` injects a toolbar whose elements can
match loose selectors — scope queries to `main`.

Do not claim something works without having run it.

## Known gaps

- No privacy policy page (see above).
- `typescript` and `@astrojs/check` are not installed, so `astro check` cannot
  run and nothing typechecks at build time.
- Unconfirmed placeholders remain: number of halls, crane capacity, plate
  thickness, roll and press-brake figures, the solar array's share of annual
  consumption, and all project client names, years and tonnages. The array is
  confirmed at 240 kWp over 2 of 4 hall roofs (client, 2026-09-08).
- Only one drone aerial exists; `facility-aerial` and `facility-aerial-2`
  currently resolve to the same photo.
