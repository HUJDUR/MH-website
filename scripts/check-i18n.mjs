/**
 * Structural check on the locale dictionaries.
 *
 * `Dictionary` (in en.ts) types bs.ts and nl.ts, but the build only strips
 * types — it never checks them — so a missing key would render as `undefined`
 * rather than fail. This walks the shapes instead. Run it before a release.
 */
import { en } from '../src/i18n/en.ts';
import { bs } from '../src/i18n/bs.ts';
import { nl } from '../src/i18n/nl.ts';

const problems = [];

const walk = (ref, got, locale, path = '') => {
  for (const [key, value] of Object.entries(ref)) {
    const here = path ? `${path}.${key}` : key;
    if (!(key in got)) { problems.push(`${locale}: missing ${here}`); continue; }
    const other = got[key];
    if (Array.isArray(value)) {
      if (!Array.isArray(other)) { problems.push(`${locale}: ${here} should be an array`); continue; }
      if (value.length !== other.length)
        problems.push(`${locale}: ${here} has ${other.length} entries, English has ${value.length}`);
      value.forEach((item, i) => {
        if (item && typeof item === 'object' && other[i]) walk(item, other[i], locale, `${here}[${i}]`);
      });
    } else if (value && typeof value === 'object') {
      walk(value, other, locale, here);
    } else if (typeof other !== typeof value) {
      problems.push(`${locale}: ${here} is ${typeof other}, expected ${typeof value}`);
    } else if (typeof other === 'string' && other.trim() === '' && value.trim() !== '') {
      problems.push(`${locale}: ${here} is empty`);
    }
  }
  for (const key of Object.keys(got)) {
    const here = path ? `${path}.${key}` : key;
    if (!(key in ref)) problems.push(`${locale}: unexpected key ${here}`);
  }
};

walk(en, bs, 'bs');
walk(en, nl, 'nl');

// Identifiers that must stay identical across languages. Machine `name` is
// deliberately absent: it carries a descriptor ("ESAB CNC plasma") that does
// translate, while the model designations inside it are already fixed text.
const shared = [
  ['content.capabilities', 'id'], ['content.capabilities', 'image'],
  ['content.industries', 'id'], ['content.industries', 'image'],
  ['content.machines', 'image'],
  ['content.certifications', 'code'],
  ['content.stats', 'value'],
  ['mediaPage.album', 'slug'], ['mediaPage.album', 'group'],
  ['mediaPage.groups', 'id'],
  ['nav.items', 'href'], ['cookiesPage.table', 'category'],
];
const at = (obj, p) => p.split('.').reduce((o, k) => o[k], obj);
for (const [listPath, field] of shared) {
  for (const [name, dict] of [['bs', bs], ['nl', nl]]) {
    at(en, listPath).forEach((item, i) => {
      const mine = at(dict, listPath)[i];
      if (mine && mine[field] !== item[field])
        problems.push(`${name}: ${listPath}[${i}].${field} is "${mine[field]}", must match English "${item[field]}"`);
    });
  }
}

if (problems.length) {
  console.error(`${problems.length} problem(s):`);
  for (const p of problems) console.error('  ' + p);
  process.exit(1);
}
console.log('i18n dictionaries match: en, bs, nl');
