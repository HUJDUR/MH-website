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
 * Turns a canonical path ("/contact") into the one for this locale. A path that
 * is only a fragment ("/#facility", for the sections merged into the home page)
 * comes back locale-prefixed too, as "/bs/#facility".
 */
export function href(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path.replace(/^\/+|\/+$/g, '');

  if (locale === defaultLocale) return clean ? `/${clean}` : '/';
  return clean ? `/${locale}/${clean}` : `/${locale}/`;
}

/**
 * Strips the locale prefix off the current URL, giving the canonical path —
 * what the language switcher needs to point at the same page elsewhere.
 */
export function canonicalPath(pathname: string): string {
  const stripped = pathname.replace(
    new RegExp(`^/(${locales.filter((l) => l !== defaultLocale).join('|')})(?=/|$)`),
    ''
  );
  const trimmed = stripped.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export type { Dictionary };
