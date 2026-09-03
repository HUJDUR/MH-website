/// <reference types="astro/client" />

/** Set by src/components/CookieConsent.astro; used by the footer and embeds. */
declare interface Window {
  mhCookieConsent?: {
    get: () => 'all' | 'essential' | null;
    set: (value: 'all' | 'essential') => void;
    open: () => void;
  };
}
