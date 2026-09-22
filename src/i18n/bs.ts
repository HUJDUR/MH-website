import type { Dictionary } from './en';

/**
 * Bosanski.
 *
 * DRAFT — written alongside the English source, not by a native reviewer.
 * Read it through before launch: the terminology is industry-standard
 * (ijekavica), but tone and word choice deserve a local eye.
 *
 * Image slugs, ids, figures, machine models and certification codes are shared
 * with `en.ts` and must not be translated.
 */
export const bs: Dictionary = {
  site: {
    description:
      'Metal Holland proizvodi teške zavarene čelične konstrukcije — obradu lima, sekcije i kompletne sklopove — za brodogradnju, offshore i infrastrukturu širom Evrope.',
  },

  nav: {
    items: [
      { href: '/', label: 'Početna', blurb: 'Ko smo i šta gradimo' },
      { href: '/media', label: 'Media', blurb: 'Fotografije iz pogona' },
      { href: '/careers', label: 'Posao', blurb: 'Zavarivači, bravari, inženjeri' },
      { href: '/contact', label: 'Kontakt', blurb: 'Adresa, telefon, obrazac za upit' },
    ],
    toggleMenu: 'Otvori meni',
    siteSections: 'Sekcije stranice',
    primary: 'Glavna navigacija',
    mobile: 'Mobilna navigacija',
    skipToContent: 'Pređi na sadržaj',
    theme: { toLight: 'Prebaci na svijetli prikaz', toDark: 'Prebaci na tamni prikaz' },
  },

  footer: {
    rights: 'Sva prava zadržana.',
    cookiePolicy: 'Politika privatnosti i kolačića',
    cookieSettings: 'Postavke kolačića',
    country: 'Bosna i Hercegovina',

    officeLabel: 'Lokacija firme',
  },

  common: {
    requestQuote: 'Javite nam se',
    contactForm: 'Kontakt forma',
    backToHome: 'Nazad na početnu',
    contactUs: 'Kontaktirajte nas',
    sector: 'Sektor',
    policyLink: 'Pogledajte našu politiku privatnosti i kolačića',
    vatLabel: 'PDV',
    jibLabel: 'JIB',
  },

  home: {
    title: 'Početna',
    heroEyebrow: '20+ godina u čeličnim konstrukcijama',
    heroTitleA: 'Čelične konstrukcije,',
    heroTitleB: 'izrađene prema vašoj specifikaciji.',
    heroLede:
      'Od pojedinačnih dijelova do kompletnih čeličnih konstrukcija — rezanje, oblikovanje, zavarivanje i završna obrada, sve na jednome mjestu.',
    heroAlt: '',

    whoEyebrow: 'O nama',
    whoTitle: 'Porodična firma. Globalni doseg.',
    whoBody1:
      'Metal Holland je porodična firma osnovana 2005. godine u malom gradu na granici Evropske unije. Počeli smo sa nekolicinom radnika koji su u početku pravili plastenike za lokalno stanovništvo, a danas izrađujemo proizvode za neke od najekskluzivnijih industrija na svijetu. Radimo na superjahtama, offshore projektima i općim čeličnim konstrukcijama, uglavnom za klijente iz regije Beneluksa.',
    whoBody2:
      'Iako smo u posljednjih deset godina znatno napredovali, u srži ostajemo porodična firma — ona koja ostaje povezana sa svojim radnicima, njihovim porodicama i lokalnom zajednicom.',

    energyEyebrow: 'Energija',
    energyTitle: 'Uvijek tražimo poboljšanja.',
    energyLede:
      'Proizvodnja čeličnih konstrukcija troši mnogo energije. Solarni paneli na krovovima naših hala pokrivaju dio tog opterećenja.',
    energyBody:
      'To je jedan korak u kontinuiranom prelasku na čistiju potrošnju energije u cijelom pogonu.',
    energyFigures: [
      { value: '240 kWp', label: 'Instalisana snaga' },
      { value: '2 / 4', label: 'Krova pod panelima' },
    ],
    energyImages: [
      { slug: 'solar-roof', alt: '' },
      { slug: 'solar-array', alt: '' },
      { slug: 'solar-overhead', alt: '' },
    ],

    investmentTitle: 'Ulažemo u sebe',
    investmentNote:
      'Najveći dio sredstava vraćamo u unapređenje načina na koji radimo — nove mašine, bolji alati, brži procesi u proizvodnim halama.',
    investmentImages: [
      { slug: 'facility-aerial', alt: '' },
    ],

  },

  industriesPage: {
    eyebrow: 'Industrije',
    heroTitle: 'Gdje naš čelik završi.',
  },

  mediaPage: {
    title: 'Media',
    description:
      'Fotografije iz pogona Metal Hollanda — proizvodne hale, gotovi radovi koji napuštaju krug i mašine na kojima nastaju.',
    eyebrow: 'Media',
    heroTitle: 'Pogon, u fotografijama.',
    heroAlt: '',
    filter: 'Filter',
    all: 'Sve',
    groups: [
      { id: 'workshop', label: 'Pogon' },
      { id: 'projects', label: 'Projekti' },
    ],
    videoAlt: '',
    album: [
      { slug: 'arc-plume', alt: '', group: 'workshop' },
      { slug: 'welding-dark', alt: '', group: 'workshop' },
      { slug: 'girder-welding', alt: '', group: 'workshop' },
      { slug: 'arc-dark', alt: '', group: 'workshop' },
      { slug: 'beam-welding', alt: '', group: 'workshop' },
      { slug: 'tube-grinding', alt: '', group: 'workshop' },
      { slug: 'girder-sparks', alt: '', group: 'workshop' },
      { slug: 'welder-beam', alt: '', group: 'workshop' },
      { slug: 'hall-long-section', alt: '', group: 'workshop' },
      { slug: 'welder-hall-dark', alt: '', group: 'workshop' },
      { slug: 'operator-console', alt: '', group: 'workshop' },
      { slug: 'team-workshop', alt: '', group: 'workshop' },
      { slug: 'control-station', alt: '', group: 'workshop' },
      { slug: 'steel-stock', alt: '', group: 'workshop' },
      { slug: 'workshop-hall', alt: '', group: 'workshop' },
      { slug: 'drill-detail', alt: '', group: 'workshop' },
      { slug: 'roller-detail', alt: '', group: 'workshop' },
      { slug: 'steel-sections', alt: '', group: 'workshop' },
      { slug: 'girder-line', alt: '', group: 'workshop' },
      { slug: 'pipe-spools', alt: '', group: 'workshop' },
      { slug: 'pipe-fabrication', alt: '', group: 'workshop' },
      { slug: 'welding-arc', alt: '', group: 'workshop' },
      { slug: 'welded-frame', alt: '', group: 'workshop' },
      { slug: 'beam-sparks', alt: '', group: 'workshop' },
      { slug: 'hall-beams', alt: '', group: 'workshop' },
      { slug: 'truss-assembly', alt: '', group: 'workshop' },
      { slug: 'long-beam', alt: '', group: 'workshop' },
      { slug: 'marked-parts', alt: '', group: 'workshop' },
      { slug: 'hall-sparks', alt: '', group: 'workshop' },
      { slug: 'plasma-head-cut', alt: '', group: 'workshop' },
      { slug: 'plasma-gantry', alt: '', group: 'workshop' },
      { slug: 'nested-parts', alt: '', group: 'workshop' },
      { slug: 'cutting-bed', alt: '', group: 'workshop' },
      { slug: 'plasma-sparks', alt: '', group: 'workshop' },
      { slug: 'forklifts-yard', alt: '', group: 'workshop' },
      { slug: 'forklifts-yard-2', alt: '', group: 'workshop' },
      { slug: 'facility-aerial', alt: '', group: 'workshop' },
      { slug: 'project-marked-plate', alt: '', group: 'projects' },
      { slug: 'bridge-transport', alt: '', group: 'projects' },
      { slug: 'girder-transport-2', alt: '', group: 'projects' },
      { slug: 'girder-transport-3', alt: '', group: 'projects' },
      { slug: 'steel-frame', alt: '', group: 'projects' },
      { slug: 'stainless-trough', alt: '', group: 'projects' },
      { slug: 'stainless-trough-2', alt: '', group: 'projects' },
      { slug: 'frame-assembly', alt: '', group: 'projects' },
      { slug: 'frame-loaded', alt: '', group: 'projects' },
      { slug: 'frame-transport', alt: '', group: 'projects' },
      { slug: 'frame-transport-2', alt: '', group: 'projects' },
      { slug: 'crane-lift', alt: '', group: 'projects' },
      { slug: 'crane-lift-2', alt: '', group: 'projects' },
      { slug: 'access-platform', alt: '', group: 'projects' },
      { slug: 'crawler-frame', alt: '', group: 'projects' },
      { slug: 'crawler-frame-2', alt: '', group: 'projects' },
      { slug: 'crawler-frame-3', alt: '', group: 'projects' },
    ],
    ctaTitle: 'Želite vidjeti pogon uživo?',
    ctaBody:
      'Fotografije mogu pružiti samo ograničen uvid.\n\nPosjete su dobrodošle — prođite kroz hale i vidite proizvodnju svojim očima!',
  },

  aboutPage: {
    peopleEyebrow: 'Ljudi',
    peopleTitle: '50+ ljudi,\nNeki su s nama od prvog dana,\nVećina ostaje godinama',
    peopleAlt: '',
    certEyebrow: 'Certifikacija',
    certTitle: 'Certificirani i provjereni.',
    ctaTitle: 'Javite nam se.',
    ctaBody:
      'Uvijek smo u potrazi za novim i stabilnim dobavljačima i zainteresovanim klijentima.',
  },

  contactPage: {
    title: 'Kontakt',
    description:
      'Javite se Metal Hollandu — pošaljite crteže i traženi rok isporuke za cijenu i rok, ili pitajte o kapacitetu, materijalima i transportu prije nego ih imate.',
    eyebrow: 'Kontakt',
    heroTitle: 'Stupite u kontakt.',
    heroLede:
      'Pošaljite crteže i traženi rok pa ćete dobiti realnu cijenu, realan datum i sva pitanja koja crteži otvaraju. Ako ste ranije od toga — provjeravate kapacitet, materijal ili može li sekcija napustiti naš krug — pišite svejedno i reći ćemo vam šta znamo.',
    heroAlt: '',
    fields: {
      name: 'Ime i prezime',
      namePlaceholder: 'Vaše ime',
      company: 'Firma',
      companyPlaceholder: 'Naziv firme',
      email: 'E-pošta',
      emailPlaceholder: 'ime@firma.com',
      phone: 'Telefon',
      phonePlaceholder: 'S pozivnim brojem države',
      message: 'Poruka',
      messagePlaceholder: 'Recite nam šta vam treba.',
    },
    submit: 'Pošalji poruku',
    sending: 'Šaljem…',
    success: 'Hvala — javiti ćemo vam se ubrzo.',
    error: 'Nešto nije prošlo kako treba. Pišite nam direktno:',
    subject: 'Upit',
    directTitle: 'Direktno',
    emailLabel: 'E-pošta',
    phoneLabel: 'Telefon',
    hours: 'Ponedjeljak – petak, 07:00 – 15:45',
    hoursLabel: 'Radno vrijeme',
    directions: 'Upute za dolazak',
    mapEyebrow: 'Gdje se nalazimo',
    openInMaps: 'Otvori u Google Mapama',
    mapConsent:
      'Mapu učitava Google Maps, koji postavlja vlastite kolačiće. Učitajte je da vidite pogon na karti ili otvorite lokaciju direktno u Google Mapama.',
    loadMap: 'Učitaj mapu',
    mapTitle: 'Mapa s lokacijom Metal Hollanda na adresi',
  },

  careersPage: {
    title: 'Posao',
    description:
      'Posao u Metal Hollandu: zavarivači, monteri, operateri mašina, pripremači rada i projektni inženjeri u našem pogonu u Šamcu.',
    eyebrow: 'Posao',
    heroTitle: 'Dođite da gradite s nama.',
    heroAlt: '',
    openingsEyebrow: 'Slobodna mjesta',
    openingsTitle: 'Otvorene pozicije.',
    openingsBody: 'Trenutno nema otvorenih pozicija.',
    formTitle: 'Prijava',
    formNote:
      'I kada nema otvorenih pozicija, rado upoznajemo nove ljude koji će se moći uklopiti u firmu kasnije u budućnosti — javite nam se!',
    fields: {
      name: 'Ime i prezime',
      namePlaceholder: 'Vaše ime',
      email: 'E-pošta',
      emailPlaceholder: 'ime@primjer.com',
      phone: 'Telefon',
      phonePlaceholder: '+387',
      city: 'Grad',
      cityPlaceholder: 'Gdje živite',
      message: 'Recite nam nešto o sebi',
      messagePlaceholder:
        'Na čemu ste radili, koje mašine ili postupke poznajete i koje certifikate imate.',
    },
    submit: 'Pošalji prijavu',
    sending: 'Šaljem…',
    success: 'Hvala — primili smo vašu prijavu i javiti ćemo se.',
    error: 'Nešto nije prošlo kako treba. Pišite nam direktno:',
    subject: 'Prijava za posao',
    asideTitle: 'Radije biste nazvali?',
  },

  cookiesPage: {
    title: 'Politika privatnosti i kolačića',
    description:
      'Koje lične podatke Metal Holland prikuplja, ko ih vidi i koliko dugo ih čuvamo — te kolačići koje postavljamo: jedan neophodan, a kolačići trećih strana samo ako učitate Google mapu.',
    eyebrow: 'Pravno',
    heroTitle: 'Politika privatnosti i kolačića.',
    heroLede:
      'Šta radimo s vašim podacima i šta čuvamo u vašem pregledniku. Oba spiska su kratka: postavljamo jedan vlastiti kolačić i niti jedan kolačić za praćenje.',
    heroAlt: '',
    privacyTitle: 'Privatnost',
    whoWeAreTitle: 'Ko smo mi',
    whoWeAreLede:
      'Za lične podatke opisane na ovoj stranici odgovorna je firma:',
    whoWeAreContact: 'Kontakt',
    collectTitle: 'Šta prikupljamo',
    collectBody1:
      'Kada koristite našu kontakt formu, primamo vaše ime, firmu, e-poštu, telefon i poruku, i koristimo ih samo da vam odgovorimo.',
    collectBody2:
      'Kada se prijavite za posao, primamo vaše ime, e-poštu, telefon, grad i ono što nam kažete o svom iskustvu, i koristimo ih samo da vas razmotrimo za posao.',
    collectBody3:
      'Naš hosting čuva kratke tehničke zapise, uključujući IP adrese, radi sigurnosti.',
    shareTitle: 'Ko ih još vidi',
    shareBody1:
      'Samo naši pružaoci hostinga i e-pošte, koji podatke obrađuju u naše ime, i Google ako odaberete da učitate mapu na našoj kontakt stranici.',
    shareBody2:
      'Vaše podatke nikada ne prodajemo niti dijelimo u marketinške svrhe.',
    retentionTitle: 'Koliko dugo',
    retentionInquiries: 'Upiti',
    retentionInquiriesValue: '2 godine',
    retentionApplications: 'Prijave za posao',
    retentionApplicationsValue: '6 mjeseci',
    retentionLogs: 'Tehnički zapisi',
    retentionLogsValue: '30 dana',
    retentionBody:
      'Podatke čuvamo duže samo tamo gdje to zakon zahtijeva, naprimjer ugovore i fakture.',
    rightsTitle: 'Vaša prava',
    rightsBody1:
      'Možete od nas tražiti da vam pokažemo, ispravimo ili obrišemo vaše podatke, ili povući svoju saglasnost, slanjem maila na',
    rightsBody2:
      'Također se možete obratiti nadležnom organu za zaštitu ličnih podataka.',
    whatTitle: 'Šta su kolačići',
    whatBody:
      'Kolačić je mala tekstualna datoteka koju stranica traži od vašeg preglednika da sačuva. Omogućava stranici da zapamti nešto između učitavanja — postavku, sesiju ili, na mnogim stranicama, vaše ponašanje širom interneta. Slične tehnologije, poput lokalne pohrane, u praksi rade isto i obuhvaćene su ovom politikom.',
    useTitle: 'Šta koristimo',
    useBody1:
      'Ova stranica postavlja jedan vlastiti kolačić. On bilježi da li ste prihvatili ili odbili opcionalne kolačiće, kako se notifikacija ne bi ponavljala na svakoj stranici. Ne sadrži ništa drugo — niti jedan identifikator, profil ni historiju.',
    useBody2:
      'Dvije postavke čuvaju se u samom pregledniku, a ne u kolačiću: jeste li prebacili stranicu na svijetli prikaz i da li se uvodna animacija već prikazala u ovoj posjeti. Nijedna nam se nikada ne šalje i nijedna ne radi ništa osim što vraća ono što ste odabrali.',
    useBody3:
      'Ne koristimo analitiku, oglase ni pratioce društvenih mreža. Ništa vas s ove stranice ne prati na drugu.',
    thirdTitle: 'Jedina treća strana',
    thirdBody1:
      'Naša kontakt stranica može prikazati našu lokaciju na ugrađenoj Google mapi. Google postavlja vlastite kolačiće kada se ta mapa učita, i zato mapa ostaje isključena dok ne prihvatite opcionalne kolačiće ili ne pritisnete Učitaj mapu. Ako odbijete, mapa se nikada ne traži i Google se nikada ne kontaktira — a istu lokaciju i dalje možete otvoriti direktno u Google Mapama, pod Googleovim uvjetima, putem linka pored.',
    thirdBody2:
      'Šta Google radi s tim kolačićima uređuje njihova politika privatnosti, a ne naša.',
    changeTitle: 'Ako se predomislite',
    changeBody1:
      'Vaš izbor nije konačan. Dugmetom ispod ponovo otvorite traku i odlučite ponovo — odbijanje nakon prihvatanja također uklanja mapu sa stranice.',
    changeBody2:
      'Kolačiće možete obrisati u bilo kojem trenutku u postavkama preglednika ili ih potpuno blokirati. Blokiranje kolačića o saglasnosti znači samo da ćemo vas pitati ponovo pri sljedećoj posjeti; ništa drugo na ovoj stranici ne ovisi o kolačićima.',
    settingsButton: 'Postavke kolačića',
    contactTitle: 'Kontakt',
    contactBody: 'Pitanja o ovoj politici šaljite na',
    contactBodyOr: ', ili na adresu',
    lastUpdatedLabel: 'Posljednja izmjena',
    lastUpdated: '3. septembar 2026.',
    tableTitle: 'Svi kolačići, popisani',
    setBy: 'Postavlja',
    keptFor: 'Traje',
    essential: 'Neophodan',
    optional: 'Opcionalan',
    table: [
      {
        name: 'mh_cookie_consent',
        provider: 'Metal Holland (ova stranica)',
        purpose:
          'Bilježi da li ste prihvatili ili odbili opcionalne kolačiće, kako vas ne bismo pitali na svakoj stranici.',
        duration: '1 godina',
        category: 'essential',
      },
      {
        name: 'mh-theme (lokalna pohrana)',
        provider: 'Metal Holland (ova stranica)',
        purpose:
          'Pamti jeste li prebacili stranicu na svijetli prikaz. Nije kolačić i nikada nam se ne šalje — ostaje u vašem pregledniku.',
        duration: 'Dok ne obrišete podatke preglednika',
        category: 'essential',
      },
      {
        name: 'mh-loader-seen (sesijska pohrana)',
        provider: 'Metal Holland (ova stranica)',
        purpose:
          'Bilježi da se uvodna animacija već prikazala, kako bi se prikazala jednom po posjeti, a ne na svakoj stranici. Nije kolačić i nikada nam se ne šalje.',
        duration: 'Dok ne zatvorite karticu',
        category: 'essential',
      },
      {
        name: 'NID, SOCS, CONSENT i slični',
        provider: 'Google Maps (Google Ireland Ltd.)',
        purpose:
          'Postavlja ih ugrađena Google mapa na našoj kontakt stranici, i to samo ako je vi odlučite učitati. Google ih koristi za pamćenje postavki mape te radi sigurnosti i sprječavanja zloupotrebe. Mi im nemamo pristup.',
        duration: 'Do 24 mjeseca, prema Googleu',
        category: 'optional',
      },
    ],
  },

  cookieBanner: {
    heading: 'Kolačići',
    body: 'Koristimo jedan neophodan kolačić da zapamtimo ovaj izbor. Opcionalne kolačiće postavlja samo ugrađena Google mapa na kontakt stranici — odbijte ih i mapa se jednostavno neće učitati. Ne koristimo oglašavanje ni analitičko praćenje.',
    accept: 'Prihvati sve',
    reject: 'Odbij opcionalne',
    policy: 'Politika privatnosti i kolačića',
    label: 'Saglasnost za kolačiće',
  },

  /**
   * Never rendered. 404.astro sits outside the locale route and always builds
   * with `defaultLocale`, so a static host's single /404.html answers every
   * unmatched path in English — including /bs/anything. Kept because
   * `Dictionary` is `typeof en` and check-i18n walks all three shapes, so the
   * keys cannot simply be dropped here. Decided deliberately (2026-09-16):
   * English-only 404. Do not spend time polishing this copy, and do not treat
   * it as drift — it is unreachable either way.
   */
  notFound: {
    title: 'Stranica nije pronađena',
    description: 'Stranica koju ste tražili nije ovdje.',
    heading: 'Stranica nije pronađena',
    body: 'Stranica koju ste tražili premještena je ili nikada nije postojala. Ostatak stranice je čitav.',
  },

  content: {
    industries: [
      {
        id: 'shipbuilding',
        title: 'Brodogradnja i gradnja jahti',
        bullets: [
          'Rezanje i oblikovanje sekcija trupa',
          'Izrada manjih sekcija i podsklopova',
          'Potpuna sljedivost lima, od certifikata iz željezare do gotove sekcije',
          'Sav materijal isporučen sa 3.2 certifikatima',
        ],
        image: 'industry-shipbuilding',
      },
      {
        id: 'steelwork',
        title: 'Klasične čelične konstrukcije',
        bullets: [
          'Prilazne platforme i pješačke staze',
          'Stepeništa, podesti i ograde',
          'Zavareni ramovi i noseće konstrukcije',
          'Izvedeno prema EN 1090-2, klasa izvedbe EXC2',
        ],
        image: 'pipe-fabrication',
      },
      {
        id: 'ironwork',
        title: 'Sitna bravarija u nehrđajućem čeliku, aluminiju i čeliku',
        bullets: [
          'Temelji za opremu i mašine',
          'Masivni kanali i ventilacijska konstrukcija',
          'Posude za kapanje i skupljanje',
          'Nehrđajući čelik, aluminij i ugljični čelik',
        ],
        image: 'stainless-trough',
      },
      {
        id: 'offshore',
        title: 'Dodatna oprema i dijelovi za offshore tržište',
        bullets: [
          'Radne platforme i konstrukcija za pristup palubi',
          'Ograde, rukohvati i stubovi',
          'Kavezne ljestve i stepenišni tornjevi',
          'Sve izrađeno prema offshore zahtjevima kvaliteta',
        ],
        image: 'industry-offshore',
      },
    ],

    stats: [
      { value: '20+', label: 'Godina u teškim konstrukcijama', sub: 'Za evropske klijente' },
      { value: '32,000 m²+', label: 'Proizvodna površina', sub: 'U [4] proizvodne hale' },
      { value: '1,000 t+', label: 'Čelika obrađeno godišnje', sub: 'Lim, profili i cijevi' },
      { value: '50+', label: 'Ljudi u pogonu', sub: 'Zavarivači, monteri, operateri, inženjeri' },
    ],

    certifications: [
      { code: 'EN 1090-2 EXC2', label: 'Izvedba čeličnih konstrukcija, klasa izvedbe 2' },
      { code: 'EN ISO 3834-2', label: 'Sveobuhvatni zahtjevi kvaliteta za zavarivanje topljenjem' },
      { code: 'EN ISO 9001', label: 'Upravljanje kvalitetom' },
      { code: 'EN ISO 14001', label: 'Upravljanje zaštitom okoliša' },
      { code: 'EN ISO 45001', label: 'Zaštita zdravlja i sigurnost na radu' },
    ],

  },
};
