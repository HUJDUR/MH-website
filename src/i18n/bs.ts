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
    tagline: 'Teške čelične konstrukcije, holandski standard.',
    description:
      'Metal Holland proizvodi teške zavarene čelične konstrukcije — obradu lima, sekcije i kompletne sklopove — za brodogradnju, offshore i infrastrukturu širom Evrope.',
  },

  nav: {
    items: [
      { href: '/#about', label: 'O nama', blurb: 'Ko smo i kako radimo' },
      { href: '/#capabilities', label: 'Mogućnosti', blurb: 'Rezanje, oblikovanje, zavarivanje, montaža' },
      { href: '/#industries', label: 'Djelatnosti', blurb: 'Ships, steelwork, ironwork, offshore' },
      { href: '/#facility', label: 'Pogon', blurb: 'Hale, mašine, kapacitet' },
      { href: '/media', label: 'Media', blurb: 'Photographs of the works' },
      { href: '/careers', label: 'Posao', blurb: 'Zavarivači, bravari, inženjeri' },
      { href: '/contact', label: 'Kontakt', blurb: 'Adresa, telefon, obrazac za upit' },
    ],
    toggleMenu: 'Otvori meni',
    siteSections: 'Sekcije stranice',
    primary: 'Glavna navigacija',
    mobile: 'Mobilna navigacija',
    skipToContent: 'Pređi na sadržaj',
    language: 'Jezik',
    theme: { toLight: 'Prebaci na svijetli prikaz', toDark: 'Prebaci na tamni prikaz' },
  },

  footer: {
    rights: 'Sva prava zadržana.',
    cookiePolicy: 'Politika kolačića',
    cookieSettings: 'Postavke kolačića',
    country: 'Bosna i Hercegovina',

    officeLabel: 'Lokacija firme',
  },

  common: {
    requestQuote: 'Javite nam se',
    contactForm: 'Contact form',
    ourCapabilities: 'Naše mogućnosti',
    backToHome: 'Nazad na početnu',
    contactUs: 'Kontaktirajte nas',
    sector: 'Sektor',
  },

  home: {
    title: 'Početna',
    heroEyebrow: '20+ godina u čeličnim konstrukcijama',
    heroTitleA: 'Gradimo čelik',
    heroTitleB: 'na kojem drugi grade.',
    heroLede:
      'Od pojedinačnih dijelova do kompletnih čeličnih konstrukcija — rezanje, oblikovanje, zavarivanje i završna obrada pod jednim krovom.',
    heroAlt: 'Operater Metal Hollanda za komandama mašine za rezanje',

    whoEyebrow: 'Ko smo',
    whoTitle: 'Proizvodni pogon, a ne posrednik.',
    whoBody1:
      'Metal Holland reže, oblikuje, zavaruje i završno obrađuje teške čelične konstrukcije u vlastitim halama. Ništa se tiho ne prosljeđuje nizu podizvođača — lim koji stigne u naš krug iz njega izlazi kao gotova sekcija, sa pripadajućom dokumentacijom.',
    whoBody2:
      'To je cijela ponuda. Holandsko vođenje projekata i inženjerska disciplina, spojeni sa kapacitetom, dizalicama i školovanim majstorima punog proizvodnog pogona. Klijenti iz brodogradnje, offshorea i infrastrukture rade s nama jer je jedan odgovoran partner jednostavniji za planiranje nego pet.',

    energyEyebrow: 'Energija',
    energyTitle: 'Krov pokreće dobar dio pogona.',
    energyLede:
      'Svaki krov hale na koji su paneli mogli stati sada ih nosi. Proizvodnja čeličnih konstrukcija troši mnogo energije — proizvodnja vlastite je dio na koji možemo uticati.',
    energyBody:
      'Elektrana napaja pogon direktno. Dok ima sunca, na njoj rade stolovi za rezanje, odsis, dizalice i rasvjeta. To je ujedno razlog zašto naš certifikat EN ISO 14001 opisuje nešto više od fascikle u ormaru.',
    energyFigures: [
      { value: '240 kWp', label: 'Instalisana snaga' },
      { value: '2 / 4', label: 'Krovova hala pod panelima' },
    ],
    energyImages: [
      { slug: 'solar-roof', alt: 'Solarni paneli na krovu hale Metal Hollanda' },
      { slug: 'solar-array', alt: 'Solarna elektrana na krovovima pogona, snimljena iz zraka' },
      { slug: 'solar-overhead', alt: 'Krovovi hala i paneli snimljeni okomito odozgo' },
    ],

  },

  capabilitiesPage: {
    materialsEyebrow: 'Materijali',
    materialsTitle: 'Ugljični čelik, nerđajući čelik, aluminij.',
    materialsLede:
      'Materijal se naručuje uz atest i ostaje sljediv kroz rezanje, sklapanje i zavarivanje, tako da je broj šarže u dokumentaciji isti onaj koji je u konstrukciji.',
    materials: [
      { term: 'Konstrukcijski čelik', detail: 'S235 · S275 · S355 · viši kvaliteti na zahtjev' },
      { term: 'Brodograđevni kvaliteti', detail: 'Lim i profili odobreni od klasifikacionog društva' },
      { term: 'Nerđajući čelik', detail: '304 · 316 i dupleks, u odvojenom radnom prostoru' },
      { term: 'Aluminij', detail: 'Pomorski kvaliteti, zavaren po kvalificiranom postupku' },
      { term: 'Lim', detail: 'Debljine do [200] mm' },
      { term: 'Profili', detail: 'Nosači, kutijasti profili, cijevi i šipke' },
    ],
  },

  industriesPage: {
    eyebrow: 'Djelatnosti',
    heroTitle: 'Gdje naš čelik završi.',
  },

  facilityPage: {
    equipmentEyebrow: 'Oprema',
    equipmentTitle: 'Šta je u pogonu.',
    equipmentLede:
      'Okvirni spisak. Pitajte za konkretnu dimenziju, debljinu ili toleranciju i dobit ćete jasan odgovor da li se uklapa.',
    machinesEyebrow: 'Mašine',
    machinesTitle: 'One koje vrijedi imenovati.',
    machinesLede:
      'Dva tridesetmetarska plazma stola, presa od 320 tona, linija za bušenje i mašina za obradu ivica. Zajedno pokrivaju najveći dio onoga što stigne kao crtež.',
  },

  mediaPage: {
    title: 'Media',
    description:
      'Photographs from the Metal Holland works — the shop floor, finished work leaving the yard, and the machines it is made on.',
    eyebrow: 'Media',
    heroTitle: 'The works, photographed.',
    heroAlt: 'A welded beam on trestles in the fabrication hall',
    filter: 'Filter',
    all: 'Sve',
    groups: [
      { id: 'workshop', label: 'Workshop' },
      { id: 'projects', label: 'Projects' },
      { id: 'machines', label: 'Machines' },
    ],
    videoAlt: "Metal Holland's forklift fleet lined up in the yard, filmed from above",
    album: [
      { slug: 'arc-plume', alt: 'Welding arc lighting a plume of smoke in the dark of the hall', group: 'workshop' },
      { slug: 'welding-dark', alt: 'A welder behind the arc, the hall lost in darkness around it', group: 'workshop' },
      { slug: 'girder-welding', alt: 'Welding a stiffener into a primed girder section', group: 'workshop' },
      { slug: 'arc-dark', alt: 'The arc at the moment of striking', group: 'workshop' },
      { slug: 'beam-welding', alt: 'A welder working along a long primed beam', group: 'workshop' },
      { slug: 'tube-grinding', alt: 'Grinding sparks running off a row of tubes on the bench', group: 'workshop' },
      { slug: 'girder-sparks', alt: 'Dressing back the welds on a girder section', group: 'workshop' },
      { slug: 'welder-beam', alt: 'A welder running a seam along a beam', group: 'workshop' },
      { slug: 'hall-long-section', alt: 'A long fabricated section filling the length of the hall', group: 'workshop' },
      { slug: 'welder-hall-dark', alt: 'Welder at work in the darkened hall, the arc the only light', group: 'workshop' },
      { slug: 'operator-console', alt: 'An operator at a machine control panel', group: 'workshop' },
      { slug: 'team-workshop', alt: 'Two fabricators setting up work on the bench', group: 'workshop' },
      { slug: 'control-station', alt: 'Machine operator at the control station of the sawing line', group: 'workshop' },
      { slug: 'steel-stock', alt: 'Steel flats stacked ready for cutting', group: 'workshop' },
      { slug: 'workshop-hall', alt: 'Benches and trestles down the length of the workshop', group: 'workshop' },
      { slug: 'drill-detail', alt: 'A drill working into a steel section', group: 'workshop' },
      { slug: 'roller-detail', alt: 'Feed rollers on the drilling line', group: 'workshop' },
      { slug: 'steel-sections', alt: 'Primed girder sections lined up in the hall', group: 'workshop' },
      { slug: 'girder-line', alt: 'Welders working along a line of primed girder sections', group: 'workshop' },
      { slug: 'pipe-spools', alt: 'Pipe spools laid out on trestles', group: 'workshop' },
      { slug: 'pipe-fabrication', alt: 'A welded railing and cage ladder under construction', group: 'workshop' },
      { slug: 'welding-arc', alt: 'Welding arc against a box girder', group: 'workshop' },
      { slug: 'welded-frame', alt: 'A long welded frame set up on trestles', group: 'workshop' },
      { slug: 'beam-sparks', alt: 'Sparks flying as a beam is cut to length', group: 'workshop' },
      { slug: 'hall-beams', alt: 'Beams laid out across the hall, an arc burning at the far bench', group: 'workshop' },
      { slug: 'truss-assembly', alt: 'Dressing back the welds on a long fabricated beam', group: 'workshop' },
      { slug: 'long-beam', alt: 'A finished beam running the length of the hall floor', group: 'workshop' },
      { slug: 'marked-parts', alt: 'Cut plate parts, hard-marked with their part numbers', group: 'workshop' },
      { slug: 'hall-sparks', alt: 'Grinding sparks arcing across the hall floor', group: 'workshop' },
      { slug: 'plasma-head-cut', alt: 'The plasma head cutting into plate', group: 'workshop' },
      { slug: 'plasma-gantry', alt: 'The plasma gantry travelling along a full plate', group: 'workshop' },
      { slug: 'nested-parts', alt: 'An operator lifting finished parts out of the cut nest', group: 'workshop' },
      { slug: 'cutting-bed', alt: 'The cutting bed with a plate loaded', group: 'workshop' },
      { slug: 'plasma-sparks', alt: 'Sparks streaming from the plasma cut across the bed', group: 'workshop' },
      { slug: 'project-marked-plate', alt: 'Marked and cut plate parts on the bench', group: 'projects' },
      { slug: 'bridge-transport', alt: 'A welded lattice girder loaded on a low-loader in the yard', group: 'projects' },
      { slug: 'girder-transport-2', alt: 'The lattice girder leaving the works on its trailer', group: 'projects' },
      { slug: 'girder-transport-3', alt: 'The lattice girder on the road outside the works', group: 'projects' },
      { slug: 'steel-frame', alt: 'A large primed welded frame standing in the hall', group: 'projects' },
      { slug: 'stainless-trough', alt: 'A stainless steel trough, welds dressed back', group: 'projects' },
      { slug: 'stainless-trough-2', alt: 'The finished stainless trough seen along its length', group: 'projects' },
      { slug: 'frame-assembly', alt: 'A heavy welded frame assembled on the shop floor', group: 'projects' },
      { slug: 'frame-loaded', alt: 'A fabricated frame loaded on a trailer at the works', group: 'projects' },
      { slug: 'frame-transport', alt: 'Two fabricated frames secured on a flatbed trailer', group: 'projects' },
      { slug: 'frame-transport-2', alt: 'The loaded trailer leaving the yard', group: 'projects' },
      { slug: 'crane-lift', alt: 'A mobile crane lifting a stainless vessel', group: 'projects' },
      { slug: 'crane-lift-2', alt: 'The crane setting the load down', group: 'projects' },
      { slug: 'access-platform', alt: 'An access platform with grating deck and tubular railings, assembled in the hall', group: 'projects' },
      { slug: 'machine-esab', alt: 'ESAB CNC plasma cutting gantry over its thirty-metre table', group: 'machines' },
      { slug: 'machine-messer', alt: 'Messer MultiTherm plasma cutting a steel plate', group: 'machines' },
      { slug: 'machine-durma', alt: 'Durma AD-S 40320 CNC press brake in the forming bay', group: 'machines' },
      { slug: 'machine-vernet', alt: 'Vernet Behringer FP 400 line with its control station', group: 'machines' },
      { slug: 'machine-qfin', alt: 'QFIN SER 600 deburring and edge-rounding machine', group: 'machines' },
      { slug: 'machine-bp40', alt: 'BP 40 horizontal press', group: 'machines' },
      { slug: 'machine-fp80', alt: 'FP 80 horizontal press', group: 'machines' },
      { slug: 'machine-jaespa', alt: 'Jaespa bandsaw on its roller feed', group: 'machines' },
      { slug: 'machine-kaltenbach', alt: 'Kaltenbach saw', group: 'machines' },
      { slug: 'machine-pilous', alt: 'Pilous bandsaw', group: 'machines' },
      { slug: 'forklifts-yard', alt: 'The forklift fleet lined up in the yard', group: 'machines' },
      { slug: 'forklifts-yard-2', alt: 'Forklifts parked along the edge of the yard', group: 'machines' },
    ],
    ctaTitle: 'Want to see the place itself?',
    ctaBody:
      'Photographs only go so far.\n\nVisits are welcome — walk the halls and see the production yourself!',
  },

  aboutPage: {
    eyebrow: 'O nama',
    heroTitle: 'Holandski standard, stvarni kapacitet.',
    heroLede:
      'Proizvodna kompanija napravljena onako kako bi klijenti željeli da je više dobavljača napravljeno: jedan pogon, jedan odgovoran partner i jasan odgovor o tome šta je moguće.',
    storyLede:
      'Metal Holland postoji jer su klijentima iz holandskog pomorskog i infrastrukturnog svijeta stalno trebale dvije stvari odjednom: inženjerstvo s kojim mogu razgovarati na svom jeziku i proizvodni kapacitet dovoljno velik da nešto znači.',
    storyBody1:
      'Zato smo napravili oboje pod jednim krovom u Šamcu. Vođenje projekata, priprema rada i kontakt s klijentom sjede uz samu halu, a rezanje, oblikovanje, zavarivanje, završna obrada i utovar odvijaju se u našim halama, na našoj opremi, s našim ljudima. Između upita i čelika nema niza podizvođača.',
    storyBody2:
      'Rezultat je neupadljiv i teško ga je glumiti: sekcije koje stignu na dogovoreni datum, u dogovorenoj mjeri, s dokumentacijom koja dokazuje kako su nastale. Najveći dio našeg posla danas dolazi od klijenata koji su nam već jednom nešto poslali.',
    peopleEyebrow: 'Ljudi',
    peopleTitle: '50+ ljudi, većina s gorionikom u ruci.',
    peopleLede:
      'Zavarivači, monteri, rukovaoci mašinama, pripremači rada i projektni inženjeri. Omjer je bitan: ovo je firma u kojoj većina zaposlenih zaista nešto pravi.',
    peopleBody:
      'Sami školujemo svoje zavarivače i održavamo njihove kvalifikacije važećim, jer alternativa — dovoditi certifikat sa strane kad projekat to zatraži — proizvodi upravo onu vrstu iznenađenja koju niko ne želi tri sedmice prije isporuke.',
    peopleAlt: 'Radnici Metal Hollanda pri poslu u hali',
    certEyebrow: 'Certifikacija',
    certTitle: 'Provjereno, a ne samo tvrđeno.',
    ctaTitle: 'Radite s nama.',
    ctaBody:
      'Bilo da vam treba jedna sekcija ili godina kapaciteta, razgovor počinje isto — pošaljite crteže i recite datum.',
  },

  contactPage: {
    title: 'Kontakt',
    description:
      'Javite se Metal Hollandu — pošaljite crteže i traženi rok isporuke za cijenu i rok, ili pitajte o kapacitetu, materijalima i transportu prije nego ih imate.',
    eyebrow: 'Kontakt',
    heroTitle: 'Stupite u kontakt.',
    heroLede:
      'Pošaljite crteže i traženi rok pa ćete dobiti realnu cijenu, realan datum i sva pitanja koja crteži otvaraju. Ako ste ranije od toga — provjeravate kapacitet, materijal ili može li sekcija napustiti naš krug — pišite svejedno i reći ćemo vam šta znamo.',
    heroAlt: 'Električni luk osvjetljava mrak proizvodne hale',
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
      honeypot: 'Ostavite ovo polje prazno',
    },
    submit: 'Pošalji poruku',
    sending: 'Šaljem…',
    success: 'Hvala — javit ćemo vam se ubrzo.',
    error: 'Nešto nije prošlo kako treba. Pišite nam direktno:',
    subject: 'Upit',
    directTitle: 'Direktno',
    emailLabel: 'E-pošta',
    phoneLabel: 'Telefon',
    hours: 'Ponedjeljak – petak, 07:00 – 15:45',
    hoursLabel: 'Radno vrijeme',
    directions: 'Upute za dolazak',
    mapEyebrow: 'Gdje smo',
    openInMaps: 'Otvori u Google Mapama',
    mapConsent:
      'Mapu učitava Google Maps, koji postavlja vlastite kolačiće. Učitajte je da vidite pogon na karti ili otvorite lokaciju direktno u Google Mapama.',
    loadMap: 'Učitaj mapu',
    mapTitle: 'Mapa s lokacijom Metal Hollanda na adresi',
  },

  careersPage: {
    title: 'Posao',
    description:
      'Posao u Metal Hollandu: zavarivači, monteri, rukovaoci mašinama, pripremači rada i projektni inženjeri u našem pogonu u Šamcu.',
    eyebrow: 'Posao',
    heroTitle: 'Dođite da gradite s nama.',
    heroAlt: 'Radnici Metal Hollanda pri poslu u hali',
    openingsEyebrow: 'Vacancies',
    openingsTitle: 'Available positions.',
    openingsBody: 'There are no open positions at the moment.',
    formTitle: 'Prijava',
    formNote:
      'Even when nothing is posted, we are glad to meet people who might fit a job later in the future — reach out!',
    fields: {
      name: 'Ime i prezime',
      namePlaceholder: 'Vaše ime',
      email: 'E-pošta',
      emailPlaceholder: 'ime@primjer.com',
      phone: 'Telefon',
      phonePlaceholder: '+387',
      city: 'City',
      cityPlaceholder: 'Where you live',
      message: 'Tell us about yourself',
      messagePlaceholder:
        'Na čemu ste radili, koje mašine ili postupke poznajete i koje certifikate imate.',
    },
    submit: 'Pošalji prijavu',
    sending: 'Šaljem…',
    success: 'Hvala — primili smo vašu prijavu i javit ćemo se.',
    error: 'Nešto nije prošlo kako treba. Pišite nam direktno:',
    subject: 'Prijava za posao',
    asideTitle: 'Radije biste nazvali?',
  },

  cookiesPage: {
    title: 'Politika kolačića',
    description:
      'Kako Metal Holland koristi kolačiće: jedan neophodan kolačić koji pamti vaš izbor i opcionalni kolačići trećih strana samo ako učitate Google mapu.',
    eyebrow: 'Pravno',
    heroTitle: 'Politika kolačića.',
    heroLede:
      'Kratka politika, jer je i spisak kratak. Postavljamo jedan vlastiti kolačić i nijedan kolačić za praćenje.',
    heroAlt: 'Komandni pult operatera u proizvodnoj hali',
    whatTitle: 'Šta su kolačići',
    whatBody:
      'Kolačić je mala tekstualna datoteka koju stranica traži od vašeg preglednika da sačuva. Omogućava stranici da zapamti nešto između učitavanja — postavku, sesiju ili, na mnogim stranicama, vaše ponašanje širom interneta. Slične tehnologije, poput lokalne pohrane, u praksi rade isto i obuhvaćene su ovom politikom.',
    useTitle: 'Šta koristimo',
    useBody1:
      'Ova stranica postavlja jedan vlastiti kolačić. On bilježi da li ste prihvatili ili odbili opcionalne kolačiće, kako se traka ne bi ponavljala na svakoj stranici. Ne sadrži ništa drugo — nijedan identifikator, profil ni istoriju.',
    useBody2:
      'Još jedna postavka — jeste li prebacili stranicu na svijetli prikaz i koji jezik čitate — čuva se u lokalnoj pohrani vašeg preglednika. To nije kolačić, nikada nam se ne šalje i ne radi ništa osim što vraća izgled koji ste odabrali.',
    useBody3:
      'Ne koristimo analitiku, oglasne piksele ni pratioce društvenih mreža. Ništa vas s ove stranice ne prati na drugu.',
    thirdTitle: 'Jedina treća strana',
    thirdBody1:
      'Naša kontakt stranica može prikazati našu lokaciju na ugrađenoj Google mapi. Google postavlja vlastite kolačiće kada se ta mapa učita, i zato mapa ostaje isključena dok ne prihvatite opcionalne kolačiće ili ne pritisnete Učitaj mapu. Ako odbijete, mapa se nikada ne traži i Google se nikada ne kontaktira — a istu lokaciju i dalje možete otvoriti direktno u Google Mapama, pod Googleovim uslovima, putem linka pored.',
    thirdBody2:
      'Šta Google radi s tim kolačićima uređuje njegova politika privatnosti, a ne naša.',
    changeTitle: 'Ako se predomislite',
    changeBody1:
      'Vaš izbor nije konačan. Dugmetom ispod ponovo otvorite traku i odlučite iznova — odbijanje nakon prihvatanja takođe uklanja mapu sa stranice.',
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
        name: 'mh-theme, mh-lang (lokalna pohrana)',
        provider: 'Metal Holland (ova stranica)',
        purpose:
          'Pamte jeste li prebacili stranicu na svijetli prikaz i koji ste jezik posljednji čitali. Nisu kolačići i nikada nam se ne šalju — ostaju u vašem pregledniku.',
        duration: 'Dok ne obrišete podatke preglednika',
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
    policy: 'Politika kolačića',
    label: 'Saglasnost za kolačiće',
  },

  notFound: {
    title: 'Stranica nije pronađena',
    description: 'Stranica koju ste tražili nije ovdje.',
    eyebrow: 'Greška 404',
    heading: 'Ova nije izašla s lima.',
    body: 'Stranica koju ste tražili premještena je ili nikada nije postojala. Ostatak stranice je čitav.',
  },

  content: {
    capabilities: [
      {
        id: 'cutting',
        title: 'CNC plazma i autogeno rezanje',
        summary:
          'Lim se raspoređuje i reže na našim portalnim stolovima, pa svaki dio nizvodno kreće od tačnog i ponovljivog profila.',
        detail:
          'Rezanje je mjesto gdje se tolerancija dobija ili gubi. Raspoređujemo dijelove radi iskorištenja materijala, u istom prolazu režemo zakošenja gdje priprema spoja to traži, i trajno označavamo dijelove kako bi na montažni sto stigli već identifikovani.',
        points: [
          'Portalno plazma i autogeno rezanje debelog lima',
          'Rezanje zakošenja za pripremu zavarenog spoja',
          'Raspoređivanje optimizovano za iskorištenje materijala',
          'Označavanje i identifikacija dijelova na izvoru',
        ],
        image: 'plasma-cutting',
      },
      {
        id: 'forming',
        title: 'Oblikovanje, savijanje i obrada',
        summary:
          'Savijeni oplatni limovi, presovani nosači, bušeni i rezani profili — obrada koja od ravnog materijala pravi konstrukciju.',
        detail:
          'Zakrivljeni oplatni lim, koljena i konusne sekcije savijaju se i provjeravaju prema šablonima. Linije za bušenje i pile dovode nosače i kutijaste profile na mjeru i raspored rupa prije nego uopšte stignu na montažu.',
        points: [
          'Savijanje lima i rad na apkant presi',
          'Linije za bušenje nosača i tračne pile',
          'Zakrivljene i konusne sekcije provjerene šablonom',
          'Obrada spojnih i naliježućih površina',
        ],
        image: 'formed-plate',
      },
      {
        id: 'welding',
        title: 'Certificirano zavarivanje',
        summary:
          'Kvalificirani zavarivači rade po odobrenim postupcima, uz dokumentaciju koja to potvrđuje.',
        detail:
          'Zavarivanje je disciplina oko koje je izgrađen ostatak pogona. Postupci su kvalificirani za konkretan materijal i debljinu, zavarivači su certificirani prema njima, a rad se evidentira kako bi dokumentacija koja ide uz konstrukciju izdržala provjeru.',
        points: [
          'MAG, MIG i EPP zavarivanje',
          'Kvalificirani postupci (WPS/WPQR) po projektu',
          'Certificirani zavarivači s važećim kvalifikacijama',
          'Vizuelna, dimenzionalna i NDT kontrola na zahtjev',
        ],
        image: 'welding-arc',
      },
      {
        id: 'assembly',
        title: 'Montaža, završna obrada i isporuka',
        summary:
          'Sekcije se sklapaju, mjere, površinski zaštićuju i otpremaju kao kompletne cjeline spremne za ugradnju.',
        detail:
          'Radije predajemo sekciju koja se uklapa nego paletu dijelova koji bi se možda uklopili. Podsklopovi se sklapaju u pripremcima i mjere, pjeskare i temeljno premazuju ili potpuno zaštićuju prema specifikaciji, zatim utovaruju i prevoze do brodogradilišta ili gradilišta.',
        points: [
          'Podsklopovi u pripremcima i kompletne sekcije',
          'Dimenzionalna kontrola prije otpreme',
          'Pjeskarenje, temeljni premaz i zaštita prema specifikaciji',
          'Transport do brodogradilišta ili gradilišta širom Evrope',
        ],
        image: 'steel-sections',
      },
    ],

    industries: [
      {
        id: 'shipbuilding',
        title: 'Shipbuilding & yacht building',
        bullets: [
          'Cutting and forming of hull sections',
          'Prefabrication of smaller sections and sub-assemblies',
          'Full plate traceability, from the mill certificate to the finished section',
          'All material supplied with 3.2 certificates',
        ],
        image: 'industry-shipbuilding',
      },
      {
        id: 'steelwork',
        title: 'Classic steel construction',
        bullets: [
          'Access platforms and walkways',
          'Stairs, landings and railings',
          'Welded frames and supporting structures',
          'Executed to EN 1090-2, execution class EXC2',
        ],
        image: 'pipe-fabrication',
      },
      {
        id: 'ironwork',
        title: 'Small ironwork in stainless, aluminium and steel',
        bullets: [
          'Equipment and machine foundations',
          'Heavy ducting and ventilation steel',
          'Drip trays and containment pans',
          'Stainless, aluminium and carbon steel',
        ],
        image: 'stainless-trough',
      },
      {
        id: 'offshore',
        title: 'Accessories and parts for the offshore steel market',
        bullets: [
          'Working platforms and deck access steel',
          'Railings, handrails and stanchions',
          'Cage ladders and stair towers',
          'Made throughout to offshore quality requirements',
        ],
        image: 'industry-offshore',
      },
    ],

    stats: [
      { value: '20+', label: 'Godina u teškim konstrukcijama', sub: 'Za evropske klijente' },
      { value: '32,000 m²+', label: 'Proizvodna površina', sub: 'U [4] proizvodne hale' },
      { value: '1,000 t+', label: 'Čelika obrađeno godišnje', sub: 'Lim, profili i kutijasti profili' },
      { value: '50+', label: 'Ljudi u pogonu', sub: 'Zavarivači, monteri, rukovaoci, inženjeri' },
    ],

    certifications: [
      { code: 'EN 1090-2 EXC2', label: 'Execution of steel structures, execution class 2' },
      { code: 'EN ISO 3834-2', label: 'Sveobuhvatni zahtjevi kvaliteta za zavarivanje taljenjem' },
      { code: 'EN ISO 9001', label: 'Upravljanje kvalitetom' },
      { code: 'EN ISO 14001', label: 'Upravljanje zaštitom okoliša' },
      { code: 'EN ISO 45001', label: 'Zaštita zdravlja i sigurnost na radu' },
    ],

    machines: [
      {
        name: 'ESAB CNC plazma',
        spec: 'Sto 30.000 × 3.000 mm',
        body: 'Portalno plazma rezanje na tridesetmetarskom stolu, pa se dugi lim reže u jednom postavljanju umjesto da se pomjera i ponovo pozicionira na pola posla.',
        image: 'machine-esab',
        imageAlt: 'ESAB CNC plazma portal iznad tridesetmetarskog stola',
      },
      {
        name: 'Messer MultiTherm',
        spec: 'Sto 30.000 × 3.000 mm · Kjellberg Q3000 plus',
        body: 'Naš drugi tridesetmetarski sto, s izvorom Kjellberg Q3000 plus — kvalitet reza koji pripremu zavara sklanja s brusilice.',
        image: 'machine-messer',
        imageAlt: 'Messer MultiTherm reže čelični lim, osvijetljen lukom',
      },
      {
        name: 'Durma AD-S 40320',
        spec: '4.050 mm · 320 tona',
        body: 'CNC apkant presa za teško oblikovanje: četiri metra dužine savijanja pri tristo dvadeset tona.',
        image: 'machine-durma',
        imageAlt: 'Durma AD-S 40320 CNC apkant presa u pogonu za oblikovanje',
      },
      {
        name: 'Vernet Behringer FP 400',
        spec: '',
        body: 'CNC linija za trake i lim — bušenje, označavanje i narezivanje navoja u jednom prolazu, uz Behringer pilu za rezanje na mjeru.',
        image: 'machine-vernet',
        imageAlt: 'Linija za bušenje Vernet Behringer FP 400 sa komandnim pultom',
      },
      {
        name: 'QFIN SER 600',
        spec: '',
        body: 'Uklanjanje srha i zaobljavanje ivica izrezanih dijelova, pa je ono što izlazi iz hale za rezanje spremno za rukovanje, zaštitu i zavarivanje.',
        image: 'machine-qfin',
        imageAlt: 'QFIN SER 600 mašina za uklanjanje srha i zaobljavanje ivica',
      },
    ],

    equipment: [
      {
        group: 'Rezanje',
        items: [
          'Dva CNC portalna plazma stola, svaki 30.000 × 3.000 mm',
          'Autogeno rezanje debelog lima do [200] mm',
          'Glava za rezanje zakošenja pri pripremi zavara',
          'Tračne pile za profile i kutijaste profile',
        ],
      },
      {
        group: 'Oblikovanje i obrada',
        items: [
          'Valjci za lim, kapacitet do [XX] mm × [X,XXX] mm',
          'CNC apkant presa, 4.050 mm pri 320 tona',
          'CNC linija za bušenje i označavanje traka i lima',
          'Klasično struganje i glodanje',
        ],
      },
      {
        group: 'Zavarivanje',
        items: [
          'MAG/MIG radna mjesta u svim halama',
          'EPP zavarivanje za nosače i duge šavove',
          'Pozicioneri i okretaljke za zavarivanje',
          'Izdvojen prostor za zavarivanje nerđajućeg čelika',
        ],
      },
      {
        group: 'Manipulacija i završna obrada',
        items: [
          'Mosne dizalice do [XX] tona po hali',
          'Vozni park viljuškara za prijevoz između hala i kruga',
          'Uklanjanje srha i zaobljavanje ivica izrezanih dijelova',
          'Pogon za pjeskarenje i temeljni premaz',
          'Utovar za vangabaritni i prekomjerni transport',
        ],
      },
    ],
  },
};
