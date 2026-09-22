import { en } from './en';
import { bs } from './bs';
import { nl } from './nl';
import type { Dictionary } from './types';

/**
 * Locale plumbing.
 *
 * English is the source language and lives at the root (`/contact`); the others
 * are prefixed (`/bs/contact`, `/nl/contact`). Pages are generated once per
 * locale from `src/pages/[...lang]/`, so there is one component per page, not
 * three.
 */
export const locales = ['en', 'bs', 'nl'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Shown in the language switcher, and used for `lang` / `hreflang`. */
export const localeMeta: Record<
  Locale,
  { label: string; short: string; htmlLang: string; hreflang: string }
> = {
  en: { label: 'English', short: 'EN', htmlLang: 'en', hreflang: 'en' },
  bs: { label: 'Bosanski', short: 'BS', htmlLang: 'bs', hreflang: 'bs-BA' },
  nl: { label: 'Nederlands', short: 'NL', htmlLang: 'nl', hreflang: 'nl-NL' },
};

const dictionaries: Record<Locale, Dictionary> = { en, bs, nl };

export function t(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

/**
 * The route params for one page across every locale. The default locale gets
 * `undefined`, which the rest parameter renders as the bare path.
 */
export function localePaths() {
  return locales.map((locale) => ({
    params: { lang: locale === defaultLocale ? undefined : locale },
    props: { locale },
  }));
}

/**
 * GitHub Pages serves this repo from a subdirectory (/MH-website/) rather than
 * a domain root, so every path the site emits has to carry that prefix or it
 * 404s. Astro exposes it as BASE_URL, which is "/" on a root deploy and
 * "/MH-website/" here; trimming the trailing slash gives a bare prefix ("" or
 * "/MH-website") that the helpers below can concatenate either way. Move to a
 * custom domain later and only `base` in astro.config.mjs has to change — this
 * collapses back to the root behaviour on its own.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/**
 * Prefixes a file served from public/ — logos, video, the poster frames.
 * Astro rewrites the assets it processes itself, but anything referenced by a
 * literal path in markup is left alone and needs this.
 */
export function asset(path: string): string {
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Turns a canonical path ("/contact") into the one for this locale. A path that
 * is only a fragment ("/#facility", for the sections merged into the home page)
 * comes back locale-prefixed too, as "/bs/#facility".
 */
export function href(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path.replace(/^\/+|\/+$/g, '');

  if (locale === defaultLocale) return clean ? `${BASE}/${clean}` : `${BASE}/`;
  return clean ? `${BASE}/${locale}/${clean}` : `${BASE}/${locale}/`;
}

/**
 * Strips the locale prefix off the current URL, giving the canonical path —
 * what the language switcher needs to point at the same page elsewhere.
 */
export function canonicalPath(pathname: string): string {
  // The base comes off first. `Astro.url.pathname` carries it, and a locale
  // sitting behind "/MH-website" would otherwise never match the prefix below,
  // leaving the language switcher pointing every locale at the home page.
  const unbased =
    BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname;
  const stripped = unbased.replace(
    new RegExp(`^/(${locales.filter((l) => l !== defaultLocale).join('|')})(?=/|$)`),
    ''
  );
  const trimmed = stripped.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export type { Dictionary };
