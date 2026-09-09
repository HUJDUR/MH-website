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
      { href: '/', label: 'Početna', blurb: 'Ko smo i kako radimo' },
      { href: '/media', label: 'Media', blurb: 'Fotografije iz pogona' },
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
    contactForm: 'Obrazac za kontakt',
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

    investmentTitle: 'Ulažemo u sebe',
    investmentNote:
      'Najveći dio sredstava vraćamo u unapređenje načina na koji radimo — nove mašine, bolji alati, brži procesi u proizvodnim halama.',
    investmentImages: [
      { slug: 'machine-messer', alt: 'Messer MultiTherm reže čeličnu ploču plazmom' },
      { slug: 'machine-durma', alt: 'Durma AD-S 40320 CNC apkant preša u pogonu za oblikovanje' },
      { slug: 'machine-qfin', alt: 'QFIN SER 600 mašina za skidanje srha i zaobljavanje ivica' },
      { slug: 'machine-kaltenbach', alt: 'Kaltenbach pila' },
      { slug: 'machine-bp40', alt: 'Horizontalna preša BP 40' },
      { slug: 'machine-fp80', alt: 'Horizontalna preša FP 80' },
      { slug: 'machine-jaespa', alt: 'Jaespa tračna pila na valjkastom dodavaču' },
      { slug: 'forklifts-yard', alt: 'Vozni park viljuškara poredan u krugu pogona' },
      { slug: 'flatbed-trailer', alt: 'Transportna prikolica s ravnom platformom u hali' },
    ],

  },

  industriesPage: {
    eyebrow: 'Djelatnosti',
    heroTitle: 'Gdje naš čelik završi.',
  },

  mediaPage: {
    title: 'Media',
    description:
      'Fotografije iz pogona Metal Hollanda — proizvodne hale, gotovi radovi koji napuštaju krug i mašine na kojima nastaju.',
    eyebrow: 'Media',
    heroTitle: 'Pogon, u fotografijama.',
    heroAlt: 'Zavareni nosač na nogarima u proizvodnoj hali',
    filter: 'Filter',
    all: 'Sve',
    groups: [
      { id: 'workshop', label: 'Radionica' },
      { id: 'projects', label: 'Projekti' },
      { id: 'machines', label: 'Mašine' },
    ],
    videoAlt: 'Viljuškari Metal Hollanda poredani u krugu pogona, snimljeni odozgo',
    album: [
      { slug: 'arc-plume', alt: 'Električni luk osvjetljava oblak dima u mraku hale', group: 'workshop' },
      { slug: 'welding-dark', alt: 'Zavarivač iza luka, hala utonula u mrak', group: 'workshop' },
      { slug: 'girder-welding', alt: 'Zavarivanje ukrute u temeljno obojenu sekciju nosača', group: 'workshop' },
      { slug: 'arc-dark', alt: 'Luk u trenutku paljenja', group: 'workshop' },
      { slug: 'beam-welding', alt: 'Zavarivač radi uzduž dugog temeljno obojenog nosača', group: 'workshop' },
      { slug: 'tube-grinding', alt: 'Iskre brušenja lete s reda cijevi na stolu', group: 'workshop' },
      { slug: 'girder-sparks', alt: 'Obrada zavara na sekciji nosača', group: 'workshop' },
      { slug: 'welder-beam', alt: 'Zavarivač vodi šav uzduž nosača', group: 'workshop' },
      { slug: 'hall-long-section', alt: 'Duga izrađena sekcija ispunjava dužinu hale', group: 'workshop' },
      { slug: 'welder-hall-dark', alt: 'Zavarivač radi u zamračenoj hali, luk je jedino svjetlo', group: 'workshop' },
      { slug: 'operator-console', alt: 'Operater za komandnim pultom mašine', group: 'workshop' },
      { slug: 'team-workshop', alt: 'Dva bravara pripremaju rad na stolu', group: 'workshop' },
      { slug: 'control-station', alt: 'Rukovalac mašinom za komandnim pultom linije za rezanje', group: 'workshop' },
      { slug: 'steel-stock', alt: 'Čelične flahe složene i spremne za rezanje', group: 'workshop' },
      { slug: 'workshop-hall', alt: 'Stolovi i nogari uzduž radionice', group: 'workshop' },
      { slug: 'drill-detail', alt: 'Burgija ulazi u čelični profil', group: 'workshop' },
      { slug: 'roller-detail', alt: 'Valjci za dodavanje na liniji za bušenje', group: 'workshop' },
      { slug: 'steel-sections', alt: 'Temeljno obojene sekcije nosača poredane u hali', group: 'workshop' },
      { slug: 'girder-line', alt: 'Zavarivači rade uzduž niza temeljno obojenih sekcija nosača', group: 'workshop' },
      { slug: 'pipe-spools', alt: 'Cijevni sklopovi razmješteni na nogarima', group: 'workshop' },
      { slug: 'pipe-fabrication', alt: 'Zavarena ograda i ljestve s korpom u izradi', group: 'workshop' },
      { slug: 'welding-arc', alt: 'Električni luk uz kutijasti nosač', group: 'workshop' },
      { slug: 'welded-frame', alt: 'Dugi zavareni ram postavljen na nogare', group: 'workshop' },
      { slug: 'beam-sparks', alt: 'Iskre pri rezanju nosača na mjeru', group: 'workshop' },
      { slug: 'hall-beams', alt: 'Nosači razmješteni po hali, luk gori za udaljenim stolom', group: 'workshop' },
      { slug: 'truss-assembly', alt: 'Obrada zavara na dugom izrađenom nosaču', group: 'workshop' },
      { slug: 'long-beam', alt: 'Gotov nosač pruža se cijelom dužinom poda hale', group: 'workshop' },
      { slug: 'marked-parts', alt: 'Izrezani dijelovi lima, trajno označeni brojevima pozicija', group: 'workshop' },
      { slug: 'hall-sparks', alt: 'Iskre brušenja lete preko poda hale', group: 'workshop' },
      { slug: 'plasma-head-cut', alt: 'Plazma glava reže lim', group: 'workshop' },
      { slug: 'plasma-gantry', alt: 'Portal plazme putuje uzduž cijelog lima', group: 'workshop' },
      { slug: 'nested-parts', alt: 'Operater vadi gotove dijelove iz izrezanog rasporeda', group: 'workshop' },
      { slug: 'cutting-bed', alt: 'Sto za rezanje s postavljenim limom', group: 'workshop' },
      { slug: 'plasma-sparks', alt: 'Iskre iz plazma reza slijevaju se preko stola', group: 'workshop' },
      { slug: 'project-marked-plate', alt: 'Označeni i izrezani dijelovi lima na stolu', group: 'projects' },
      { slug: 'bridge-transport', alt: 'Zavareni rešetkasti nosač utovaren na niskonoseću prikolicu u krugu pogona', group: 'projects' },
      { slug: 'girder-transport-2', alt: 'Rešetkasti nosač napušta pogon na prikolici', group: 'projects' },
      { slug: 'girder-transport-3', alt: 'Rešetkasti nosač na cesti ispred pogona', group: 'projects' },
      { slug: 'steel-frame', alt: 'Veliki temeljno obojeni zavareni ram u hali', group: 'projects' },
      { slug: 'stainless-trough', alt: 'Korito od nerđajućeg čelika, zavari obrađeni', group: 'projects' },
      { slug: 'stainless-trough-2', alt: 'Gotovo korito od nerđajućeg čelika, snimljeno po dužini', group: 'projects' },
      { slug: 'frame-assembly', alt: 'Teški zavareni ram sastavljen u hali', group: 'projects' },
      { slug: 'frame-loaded', alt: 'Izrađeni ram utovaren na prikolicu u pogonu', group: 'projects' },
      { slug: 'frame-transport', alt: 'Dva izrađena rama osigurana na prikolici s ravnom platformom', group: 'projects' },
      { slug: 'frame-transport-2', alt: 'Natovarena prikolica napušta krug pogona', group: 'projects' },
      { slug: 'crane-lift', alt: 'Auto-dizalica podiže posudu od nerđajućeg čelika', group: 'projects' },
      { slug: 'crane-lift-2', alt: 'Dizalica spušta teret', group: 'projects' },
      { slug: 'access-platform', alt: 'Prilazna platforma s rešetkastim podom i cijevnom ogradom, sastavljena u hali', group: 'projects' },
      { slug: 'machine-esab', alt: 'ESAB CNC portal za rezanje plazmom nad stolom od trideset metara', group: 'machines' },
      { slug: 'machine-messer', alt: 'Messer MultiTherm reže čeličnu ploču plazmom', group: 'machines' },
      { slug: 'machine-durma', alt: 'Durma AD-S 40320 CNC apkant preša u pogonu za oblikovanje', group: 'machines' },
      { slug: 'machine-vernet', alt: 'Linija Vernet Behringer FP 400 s komandnim pultom', group: 'machines' },
      { slug: 'machine-qfin', alt: 'QFIN SER 600 mašina za skidanje srha i zaobljavanje ivica', group: 'machines' },
      { slug: 'machine-bp40', alt: 'Horizontalna preša BP 40', group: 'machines' },
      { slug: 'machine-fp80', alt: 'Horizontalna preša FP 80', group: 'machines' },
      { slug: 'machine-jaespa', alt: 'Jaespa tračna pila na valjkastom dodavaču', group: 'machines' },
      { slug: 'machine-kaltenbach', alt: 'Kaltenbach pila', group: 'machines' },
      { slug: 'machine-pilous', alt: 'Pilous tračna pila', group: 'machines' },
      { slug: 'forklifts-yard', alt: 'Vozni park viljuškara poredan u krugu pogona', group: 'machines' },
      { slug: 'forklifts-yard-2', alt: 'Viljuškari parkirani uz rub kruga pogona', group: 'machines' },
    ],
    ctaTitle: 'Želite vidjeti pogon uživo?',
    ctaBody:
      'Fotografija ima svoje granice.\n\nPosjete su dobrodošle — prođite kroz hale i vidite proizvodnju svojim očima!',
  },

  aboutPage: {
    peopleEyebrow: 'Ljudi',
    peopleTitle: '50+ ljudi, većina s gorionikom u ruci.',
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
    openingsEyebrow: 'Slobodna mjesta',
    openingsTitle: 'Otvorene pozicije.',
    openingsBody: 'Trenutno nema otvorenih pozicija.',
    formTitle: 'Prijava',
    formNote:
      'I kada ništa nije objavljeno, rado ćemo upoznati ljude koji bi kasnije mogli odgovarati nekom poslu — javite se!',
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
    industries: [
      {
        id: 'shipbuilding',
        title: 'Brodogradnja i gradnja jahti',
        bullets: [
          'Rezanje i oblikovanje sekcija trupa',
          'Prefabrikacija manjih sekcija i podsklopova',
          'Potpuna sljedivost lima, od certifikata valjaonice do gotove sekcije',
          'Sav materijal isporučen s certifikatima 3.2',
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
        title: 'Sitna bravarija u nerđajućem čeliku, aluminijumu i čeliku',
        bullets: [
          'Temelji za opremu i mašine',
          'Teški kanali i ventilacijska konstrukcija',
          'Tave za skupljanje i zaštitne kade',
          'Nerđajući čelik, aluminijum i ugljični čelik',
        ],
        image: 'stainless-trough',
      },
      {
        id: 'offshore',
        title: 'Pribor i dijelovi za offshore tržište čelika',
        bullets: [
          'Radne platforme i konstrukcija za pristup palubi',
          'Ograde, rukohvati i stupovi ograde',
          'Ljestve s korpom i stepenišni tornjevi',
          'Sve izrađeno prema offshore zahtjevima kvaliteta',
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
      { code: 'EN 1090-2 EXC2', label: 'Izvedba čeličnih konstrukcija, klasa izvedbe 2' },
      { code: 'EN ISO 3834-2', label: 'Sveobuhvatni zahtjevi kvaliteta za zavarivanje taljenjem' },
      { code: 'EN ISO 9001', label: 'Upravljanje kvalitetom' },
      { code: 'EN ISO 14001', label: 'Upravljanje zaštitom okoliša' },
      { code: 'EN ISO 45001', label: 'Zaštita zdravlja i sigurnost na radu' },
    ],

  },
};
