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
      { href: '/capabilities', label: 'Mogućnosti', blurb: 'Rezanje, oblikovanje, zavarivanje, montaža' },
      { href: '/industries', label: 'Djelatnosti', blurb: 'Brodogradnja, offshore, infrastruktura' },
      { href: '/facility', label: 'Pogon', blurb: 'Hale, mašine, kapacitet' },
      { href: '/projects', label: 'Projekti', blurb: 'Odabrani radovi' },
      { href: '/about', label: 'O nama', blurb: 'Ko smo i kako radimo' },
    ],
    quote: 'Zatražite ponudu',
    toggleMenu: 'Otvori meni',
    siteSections: 'Sekcije stranice',
    primary: 'Glavna navigacija',
    mobile: 'Mobilna navigacija',
    skipToContent: 'Pređi na sadržaj',
    language: 'Jezik',
    theme: { toLight: 'Prebaci na svijetli prikaz', toDark: 'Prebaci na tamni prikaz' },
  },

  footer: {
    groups: [
      {
        title: 'Kompanija',
        items: [
          { href: '/about', label: 'O Metal Hollandu' },
          { href: '/facility', label: 'Pogon i oprema' },
          { href: '/projects', label: 'Projekti' },
          { href: '/careers', label: 'Posao' },
          { href: '/contact', label: 'Kontakt' },
        ],
      },
      {
        title: 'Šta radimo',
        items: [
          { href: '/capabilities#cutting', label: 'CNC plazma rezanje' },
          { href: '/capabilities#forming', label: 'Oblikovanje i obrada' },
          { href: '/capabilities#welding', label: 'Certificirano zavarivanje' },
          { href: '/capabilities#assembly', label: 'Montaža i završna obrada' },
        ],
      },
      {
        title: 'Sektori',
        items: [
          { href: '/industries#shipbuilding', label: 'Brodogradnja i jahte' },
          { href: '/industries#offshore', label: 'Offshore i energetika' },
          { href: '/industries#infrastructure', label: 'Infrastruktura i mostovi' },
          { href: '/industries#industrial', label: 'Industrija i mašinogradnja' },
        ],
      },
    ],
    rights: 'Sva prava zadržana.',
    cookiePolicy: 'Politika kolačića',
    cookieSettings: 'Postavke kolačića',
    country: 'Bosna i Hercegovina',

    officeLabel: 'Pogon i sjedište',
  },

  common: {
    requestQuote: 'Zatražite ponudu',
    ourCapabilities: 'Naše mogućnosti',
    allCapabilities: 'Sve mogućnosti',
    moreAbout: 'Više o Metal Hollandu',
    facilityEquipment: 'Pogon i oprema',
    whatWeBuild: 'Šta gradimo',
    seeWhatWeBuild: 'Pogledajte šta možemo izgraditi',
    backToHome: 'Nazad na početnu',
    contactUs: 'Kontaktirajte nas',
    sector: 'Sektor',
  },

  home: {
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

    capabilitiesEyebrow: 'Mogućnosti',
    capabilitiesTitle: 'Sve od lima do zaštićene sekcije, pod jednim krovom.',

    facilityEyebrow: 'Pogon',
    facilityTitle: 'Kapacitet oko kojeg možete planirati program.',
    facilityLede:
      'Četiri hale, portalni stolovi za rezanje, linije za bušenje, valjci i mjesta za zavarivanje — dimenzionirani za sekcije koje odlaze na labudici, a ne u sanduku.',
    facilityAlt: 'Snimak iz zraka proizvodnog pogona i kruga Metal Hollanda',
    facilityInset: 'proizvodne površine, sa mosnim dizalicama u svakoj hali',
    facilityRows: [
      { label: 'Natkrivene hale', value: 'Rezanje, oblikovanje, sklapanje, zavarivanje, završna obrada' },
      { label: 'Mosne dizalice', value: 'Do [XX] tona po hali' },
      { label: 'Vanjski krug', value: 'Pjeskarenje, temeljni premaz, skladištenje i utovar' },
      { label: 'Transport', value: 'Vangabaritni tereti do brodogradilišta i gradilišta širom Evrope' },
    ],

    industriesEyebrow: 'Djelatnosti',
    industriesTitle: 'Četiri sektora. Jedan set standarda.',
    industriesLede:
      'Tolerancije i papirologija se razlikuju. Disciplina iza njih ne.',

    energyEyebrow: 'Energija',
    energyTitle: 'Krov pokreće dobar dio pogona.',
    energyLede:
      'Svaki krov hale na koji su paneli mogli stati sada ih nosi. Proizvodnja čeličnih konstrukcija troši mnogo energije — proizvodnja vlastite je dio na koji možemo uticati.',
    energyBody:
      'Elektrana napaja pogon direktno. Dok ima sunca, na njoj rade stolovi za rezanje, odsis, dizalice i rasvjeta. To je ujedno razlog zašto naš certifikat EN ISO 14001 opisuje nešto više od fascikle u ormaru.',
    energyFigures: [
      { value: '[XXX] kWp', label: 'Instalisana snaga' },
      { value: '[XX]%', label: 'Godišnje potrošnje' },
      { value: '[X]', label: 'Krovova hala pod panelima' },
    ],
    energyImages: [
      { slug: 'solar-roof', alt: 'Solarni paneli na krovu hale Metal Hollanda' },
      { slug: 'solar-array', alt: 'Solarna elektrana na krovovima pogona, snimljena iz zraka' },
      { slug: 'solar-overhead', alt: 'Krovovi hala i paneli snimljeni okomito odozgo' },
    ],

    qualityEyebrow: 'Kvalitet',
    qualityTitle: 'Certifikat je samo sažetak.',
    qualityLede:
      'Kvalificirani postupci, certificirani zavarivači, evidentirane kontrole. Dokumentacija o isporuci nastaje dok posao traje, a ne rekonstrukcijom poslije.',
    qualityNote: 'Certifikati i izjave o obimu dostupni su na zahtjev.',
  },

  capabilitiesPage: {
    title: 'Mogućnosti',
    description:
      'CNC plazma rezanje, oblikovanje i savijanje, certificirano zavarivanje, montaža i završna obrada — proizvodne mogućnosti Metal Hollanda od lima do zaštićene sekcije.',
    eyebrow: 'Mogućnosti',
    heroTitle: 'Od lima do zaštićene sekcije.',
    heroLede:
      'Rezanje, oblikovanje, zavarivanje, završna obrada i isporuka odvijaju se u jednoj zgradi, po jednom rasporedu, pod jednom odgovornošću.',
    heroAlt: 'Glava za plazma rezanje pri radu na debelom čeličnom limu',
    processEyebrow: 'Kako teče projekat',
    processTitle: 'Pet faza, i u svakoj se javljamo.',
    processLede:
      'Teška proizvodnja krene po zlu tiho, sedmicama prije nego iko primijeti. Naš odgovor je utvrđen ritam izvještavanja, a ne obećanje da ćemo se javiti ako nešto iskrsne.',
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
    ctaTitle: 'Niste sigurni može li se izraditi?',
    ctaBody:
      'Pošaljite crtež svejedno. Pola našeg posla počinje pitanjem klijenta može li se sekcija napraviti iz jednog komada — i obično može.',
  },

  industriesPage: {
    title: 'Djelatnosti',
    description:
      'Metal Holland proizvodi za brodogradnju i gradnju jahti, offshore i energetiku, infrastrukturu i mostove, te industrijsku mašinogradnju.',
    eyebrow: 'Djelatnosti',
    heroTitle: 'Gdje naš čelik završi.',
    heroLede:
      'Trupovi, platforme, mostovi i mašine. Različita pravila, različita papirologija, a iza svega ista disciplina pogona.',
    heroAlt: 'Plovilo na moru u zalazak sunca',
    workingEyebrow: 'Saradnja s nama',
    workingTitle: 'Čemu proizvodni partner zapravo služi.',
    working: [
      {
        title: 'Kapacitet koji prihvata vrhunac',
        body: 'Brodogradilišta i OEM-ovi koriste nas da preuzmemo višak koji njihov pogon ne može progutati bez odgađanja svega ostalog.',
      },
      {
        title: 'Jedan partner, cijeli obim',
        body: 'Rezanje, zavarivanje, zaštita i transport dolaze od nas. Nema procjepa među dobavljačima u koji bi problem mogao propasti.',
      },
      {
        title: 'Dokumentacija koja preživi reviziju',
        body: 'Atesti, postupci i zapisi o kontroli prikupljaju se dok posao traje, pa primopredaja nije arheološki poduhvat.',
      },
    ],
    ctaTitle: 'Vaš sektor nije naveden?',
    ctaBody:
      'Ako je teško, zavareno i od čelika, vjerovatno je posao koji poznajemo. Recite nam šta gradite.',
  },

  facilityPage: {
    title: 'Pogon i oprema',
    description:
      'Proizvodni pogon Metal Hollanda: natkrivene hale, CNC stolovi za rezanje, linije za bušenje, valjci, mjesta za zavarivanje, pjeskarenje i temeljni premaz, te utovar za vangabaritni transport.',
    eyebrow: 'Pogon',
    heroTitle: 'Proizvodna hala.',
    heroLede:
      'Četiri natkrivene hale, portalno rezanje, dizalice u svakom polju i krug dimenzioniran za sekcije koje odlaze na labudici.',
    heroAlt: 'Unutrašnjost proizvodne hale Metal Hollanda',
    worksEyebrow: 'Pogon',
    worksTitle: 'Jedna lokacija, od početka do kraja.',
    worksLede:
      'Lim ulazi na jednom kraju kruga, a na drugom izlazi kao zaštićena, izmjerena i dokumentovana sekcija. Ništa se ne prevozi preko grada između operacija.',
    worksAlt: 'Snimak pogona Metal Hollanda iz zraka',
    figures: [
      { value: '32,000 m²+', label: 'Površina lokacije' },
      { value: '[4]', label: 'Proizvodne hale' },
      { value: '[XX] t', label: 'Najveća nosivost dizalice' },
      { value: '13 m', label: 'Najduža obrađena sekcija' },
    ],
    equipmentEyebrow: 'Oprema',
    equipmentTitle: 'Šta je u pogonu.',
    equipmentLede:
      'Okvirni spisak. Pitajte za konkretnu dimenziju, debljinu ili toleranciju i dobit ćete jasan odgovor da li se uklapa.',
    machinesEyebrow: 'Mašine',
    machinesTitle: 'One koje vrijedi imenovati.',
    machinesLede:
      'Dva tridesetmetarska plazma stola, presa od 320 tona, linija za bušenje i mašina za obradu ivica. Zajedno pokrivaju najveći dio onoga što stigne kao crtež.',
    galleryEyebrow: 'U halama',
    galleryTitle: 'Posao u toku.',
    gallery: [
      { slug: 'cnc-gantry', alt: 'CNC portalni sto za rezanje u hali za lim' },
      { slug: 'welding-hall', alt: 'Zavarivači rade na sekcijama u proizvodnoj hali' },
      { slug: 'nested-plate', alt: 'Dijelovi izrezani iz jednog lima' },
      { slug: 'machine-hall', alt: 'Mašinska hala sa mosnom dizalicom' },
      { slug: 'drilling-detail', alt: 'Bušenje profila na liniji za nosače' },
      { slug: 'pipe-fabrication', alt: 'Izrada cijevnih sklopova u toku' },
      { slug: 'steel-sections', alt: 'Zaštićene čelične sekcije spremne za otpremu' },
    ],
    logisticsEyebrow: 'Dostava do vas',
    logisticsTitle: 'Sekcije odlaze cijele.',
    logisticsLede:
      'Radije ćemo riješiti transportni problem nego podijeliti konstrukciju na dijelove koji se moraju ponovo zavarivati na gradilištu. Vangabaritni tereti, pratnja i dozvole dio su posla, a ne naknadna misao.',
    logisticsBody:
      'Unutar ograde vrijedi isti argument. Vlastiti vozni park viljuškara premješta lim i gotove sekcije između hala i kruga, pa konstrukcija čeka na sljedeću operaciju, a ne na iznajmljenu mašinu.',
    forkliftsAlt: 'Vozni park viljuškara Metal Hollanda poredan u krugu, snimljen iz zraka',
    ctaTitle: 'Dođite i pogledajte.',
    ctaBody:
      'Posjete su dobrodošle. Prođite kroz hale, upoznajte ljude koji bi gradili vaš posao i sami procijenite pogon.',
  },

  projectsPage: {
    title: 'Projekti',
    description:
      'Odabrani radovi Metal Hollanda — sekcije mostova, sekcije trupa, cijevni sklopovi, zavareni nosači i serijski mašinski okviri.',
    eyebrow: 'Projekti',
    heroTitle: 'Odabrani radovi.',
    heroLede:
      'Presjek onoga što napušta krug. Imena klijenata i brojke dijelimo na zahtjev, gdje povjerljivost to dopušta.',
    heroAlt: 'Zavareni rešetkasti sklop na podupiračima u proizvodnoj hali',
    filter: 'Filter',
    all: 'Sve',
    empty: 'U ovom sektoru još nema navedenih projekata.',
    ctaTitle: 'Reference za vaš sektor.',
    ctaBody:
      'Pitajte i povezat ćemo vas s klijentima koji rade poslove poput vašeg — najkorisnija referenca uvijek je ona koja odgovara vašim crtežima.',
  },

  aboutPage: {
    title: 'O nama',
    description:
      'Metal Holland spaja holandsko inženjerstvo i vođenje projekata sa kompletnim pogonom za čelične konstrukcije — rezanje, oblikovanje, zavarivanje i završnu obradu teških konstrukcija u vlastitoj režiji.',
    eyebrow: 'O nama',
    heroTitle: 'Holandski standard, stvarni kapacitet.',
    heroLede:
      'Proizvodna kompanija napravljena onako kako bi klijenti željeli da je više dobavljača napravljeno: jedan pogon, jedan odgovoran partner i jasan odgovor o tome šta je moguće.',
    heroAlt: 'Operater Metal Hollanda za komandnim pultom mašine',
    storyEyebrow: 'Naša priča',
    storyTitle: 'Građeno oko proizvodne hale, a ne oko prodajnog stola.',
    storyLede:
      'Metal Holland postoji jer su klijentima iz holandskog pomorskog i infrastrukturnog svijeta stalno trebale dvije stvari odjednom: inženjerstvo s kojim mogu razgovarati na svom jeziku i proizvodni kapacitet dovoljno velik da nešto znači.',
    storyBody1:
      'Zato smo napravili oboje pod jednim krovom u Šamcu. Vođenje projekata, priprema rada i kontakt s klijentom sjede uz samu halu, a rezanje, oblikovanje, zavarivanje, završna obrada i utovar odvijaju se u našim halama, na našoj opremi, s našim ljudima. Između upita i čelika nema niza podizvođača.',
    storyBody2:
      'Rezultat je neupadljiv i teško ga je glumiti: sekcije koje stignu na dogovoreni datum, u dogovorenoj mjeri, s dokumentacijom koja dokazuje kako su nastale. Najveći dio našeg posla danas dolazi od klijenata koji su nam već jednom nešto poslali.',
    valuesEyebrow: 'Kako radimo',
    valuesTitle: 'Četiri stvari koje ne mijenjamo ni za šta.',
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
      'Zatražite ponudu od Metal Hollanda — pošaljite crteže, obim i traženi rok isporuke, a mi ćemo se javiti s realnom cijenom i rokom.',
    eyebrow: 'Kontakt',
    heroTitle: 'Pošaljite nam crteže.',
    heroLede:
      'Recite nam šta treba izgraditi i do kada. Dobit ćete realnu cijenu, realan datum i sva pitanja koja crteži otvaraju.',
    heroAlt: 'Električni luk osvjetljava mrak proizvodne hale',
    formTitle: 'Zatražite ponudu',
    formNote:
      'Polja označena zvjezdicom su obavezna. Crteži mogu stići naknadno e-poštom — javit ćemo vam adresu na koju ih pošaljete.',
    fields: {
      name: 'Ime i prezime',
      namePlaceholder: 'Vaše ime',
      company: 'Firma',
      companyPlaceholder: 'Naziv firme',
      email: 'E-pošta',
      emailPlaceholder: 'ime@firma.com',
      phone: 'Telefon',
      phonePlaceholder: 'Opcionalno',
      sector: 'Sektor',
      sectorPlaceholder: 'Odaberite sektor',
      sectorOther: 'Ostalo',
      message: 'Šta treba izgraditi?',
      messagePlaceholder:
        'Obim, materijal, okvirna tonaža ili količina i datum do kojeg vam treba isporuka.',
      honeypot: 'Ostavite ovo polje prazno',
    },
    submit: 'Pošalji upit',
    sending: 'Šaljem…',
    success: 'Hvala — javit ćemo vam se ubrzo.',
    error: 'Nešto nije prošlo kako treba. Pišite nam direktno:',
    subject: 'Upit za ponudu',
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
    heroLede:
      'Većina ljudi ovdje živi od toga što nešto pravi. Ako je to posao koji želite, javite nam se.',
    heroAlt: 'Radnici Metal Hollanda pri poslu u hali',
    introEyebrow: 'Rad kod nas',
    introTitle: 'Siguran posao, prave mašine.',
    introBody1:
      'Mi smo proizvodni pogon, a ne agencija. Ljudi koje zaposlimo ostaju na našem platnom spisku, rade u našim halama i obučavaju se na našoj opremi. Zavarivače kvalifikujemo sami i njihove kvalifikacije držimo važećim.',
    introBody2:
      'Prijave primamo bez obzira na to je li konkurs raspisan. Dobre montere i zavarivače teško je naći, pa je dosje uvijek otvoren.',
    points: [
      {
        title: 'Obučeni, a ne samo primljeni',
        body: 'Kvalifikacije za zavarivanje obnavljamo o svom trošku, a novi radnici uče na mašinama na kojima će raditi.',
      },
      {
        title: 'Jedna lokacija, bez putovanja',
        body: 'Posao je ovdje u Šamcu. Nakon smjene idete kući, a ne u hotel u drugoj državi.',
      },
      {
        title: 'Plata na vrijeme',
        body: 'Plata stiže na dogovoreni datum. Ne bi to trebalo biti prednost, a ipak jeste.',
      },
    ],
    formTitle: 'Prijava',
    formNote:
      'Polja označena zvjezdicom su obavezna. Ne prilažite ništa ovdje — ako nam zatreba CV ili certifikati, javit ćemo vam adresu na koju ih pošaljete.',
    fields: {
      name: 'Ime i prezime',
      namePlaceholder: 'Vaše ime',
      email: 'E-pošta',
      emailPlaceholder: 'ime@primjer.com',
      phone: 'Telefon',
      phonePlaceholder: 'Da vas možemo nazvati',
      role: 'Koji posao',
      rolePlaceholder: 'Odaberite zanimanje',
      experience: 'Godina iskustva',
      experiencePlaceholder: 'Na primjer: 6',
      availability: 'Slobodni od',
      availabilityPlaceholder: 'Datum ili što prije',
      message: 'Recite nam o svom iskustvu',
      messagePlaceholder:
        'Na čemu ste radili, koje mašine ili postupke poznajete i koje certifikate imate.',
    },
    submit: 'Pošalji prijavu',
    sending: 'Šaljem…',
    success: 'Hvala — primili smo vašu prijavu i javit ćemo se.',
    error: 'Nešto nije prošlo kako treba. Pišite nam direktno:',
    subject: 'Prijava za posao',
    asideTitle: 'Radije biste nazvali?',
    asideBody:
      'Nazovite pogon u toku radnog vremena i tražite halu. Ako vas taj dan nema ko provesti, dogovorit ćemo drugi termin.',
    ctaTitle: 'Želite prvo vidjeti pogon?',
    ctaBody:
      'Posjete su dobrodošle i prije prijave. Prođite kroz hale, pogledajte mašine i odlučite je li to pogon u kojem želite raditi.',
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
    /** Trades offered in the careers form's select. */
    roles: [
      'Zavarivač',
      'Monter / bravar',
      'Rukovalac mašinom',
      'Pripremač rada',
      'Projektni inženjer',
      'Pjeskarenje i zaštita',
      'Nešto drugo',
    ],

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
        title: 'Brodogradnja i gradnja jahti',
        summary:
          'Sekcije trupa, temelji i opremni čelik izrađeni prema crtežima brodogradilišta i isporučeni po njegovom rasporedu.',
        bullets: [
          'Sekcije trupa i nadgrađa',
          'Pregrade, nosači i okvirna rebra',
          'Temelji za motore i opremu',
          'Opremni čelik i detalji od nerđajućeg čelika',
        ],
        image: 'industry-shipbuilding',
      },
      {
        id: 'offshore',
        title: 'Offshore i energetika',
        summary:
          'Teške zavarene konstrukcije za offshore i energetiku, gdje dokumentacija znači koliko i sam čelik.',
        bullets: [
          'Okviri, skidovi i noseće konstrukcije',
          'Palubne sekcije i pristupni čelik',
          'Cijevni sklopovi i oslonci cjevovoda',
          'Potpuna sljedivost i dokumentacija zavarivanja',
        ],
        image: 'industry-offshore',
      },
      {
        id: 'infrastructure',
        title: 'Infrastruktura i mostovi',
        summary:
          'Mostovski nosači i modularni elementi mostova, izrađeni u sekcijama dimenzioniranim za cestovni transport.',
        bullets: [
          'Zavareni mostovski i kutijasti nosači',
          'Modularni i privremeni elementi mostova',
          'Čelične konstrukcije za ustave, brane i hidrotehniku',
          'Ograde, rešetke i pristupne konstrukcije',
        ],
        image: 'industry-infrastructure',
      },
      {
        id: 'industrial',
        title: 'Industrija i mašinogradnja',
        summary:
          'Okviri, lijevci i mašinska postolja za OEM-ove kojima treba proizvodni kapacitet na koji mogu računati.',
        bullets: [
          'Mašinski okviri i zavarena postolja',
          'Lijevci, žljebovi i transportne konstrukcije',
          'Rezervoari i posude bez pritiska',
          'Serijska i ponavljajuća proizvodnja',
        ],
        image: 'steel-frame',
      },
    ],

    stats: [
      { value: '20+', label: 'Godina u teškim konstrukcijama', sub: 'Za evropske klijente' },
      { value: '32,000 m²+', label: 'Proizvodna površina', sub: 'U [4] proizvodne hale' },
      { value: '1,000 t+', label: 'Čelika obrađeno godišnje', sub: 'Lim, profili i kutijasti profili' },
      { value: '50+', label: 'Ljudi u pogonu', sub: 'Zavarivači, monteri, rukovaoci, inženjeri' },
    ],

    processSteps: [
      {
        step: '01',
        title: 'Upit i inženjerski pregled',
        body: 'Crteže čitamo prije nego damo ponudu. Gdje se projekat i pogon ne slažu, čut ćete to u fazi upita — a ne tokom proizvodnje.',
      },
      {
        step: '02',
        title: 'Priprema rada',
        body: 'Raspored rezanja, datoteke za rezanje, postupci zavarivanja i redoslijed montaže pripremaju se po projektu, pa pogon radi po jednom dogovorenom planu.',
      },
      {
        step: '03',
        title: 'Proizvodnja',
        body: 'Rezanje, oblikovanje, sklapanje i zavarivanje odvijaju se pod jednim krovom. Napredak i kontrolne tačke javljaju se po dogovorenom ritmu.',
      },
      {
        step: '04',
        title: 'Kontrola i završna obrada',
        body: 'Dimenzionalna kontrola, kontrola zavara i površinska zaštita, uz ateste i izvještaje prikupljene u dokumentaciju o isporuci.',
      },
      {
        step: '05',
        title: 'Isporuka',
        body: 'Sekcije se utovaruju, osiguravaju i prevoze do vašeg brodogradilišta ili gradilišta — uključujući vangabaritne terete kada sekcija to traži.',
      },
    ],

    certifications: [
      { code: 'EN 1090-2', label: 'Izvođenje čeličnih konstrukcija' },
      { code: 'EN ISO 3834-2', label: 'Sveobuhvatni zahtjevi kvaliteta za zavarivanje taljenjem' },
      { code: 'EN ISO 9001', label: 'Upravljanje kvalitetom' },
      { code: 'EN ISO 14001', label: 'Upravljanje zaštitom okoliša' },
      { code: 'EN ISO 45001', label: 'Zaštita zdravlja i sigurnost na radu' },
    ],

    projects: [
      {
        title: 'Modularne sekcije mostova',
        sector: 'Infrastruktura',
        meta: '[Klijent] · [Godina] · [XXX] tona',
        body: 'Zavarene rešetkaste sekcije izrađene, probno sklopljene i otpremljene kao cjeline u granicama cestovnog transporta, za montažu na licu mjesta.',
        image: 'bridge-transport',
      },
      {
        title: 'Sekcije trupa i temelji',
        sector: 'Brodogradnja',
        meta: '[Klijent] · [Godina] · [XXX] tona',
        body: 'Pregrade, okvirna rebra i temelji opreme izrađeni prema crtežima brodogradilišta i isporučeni na navoz po redoslijedu.',
        image: 'welding-hall',
      },
      {
        title: 'Cijevni sklopovi i noseći čelik',
        sector: 'Offshore i energetika',
        meta: '[Klijent] · [Godina] · [XXX] sklopova',
        body: 'Izrada cijevnih sklopova s potpunom sljedivošću zavara, isporučenih uz dokumentaciju kontrole koju traži offshore primopredaja.',
        image: 'pipe-fabrication',
      },
      {
        title: 'Teški zavareni nosači',
        sector: 'Infrastruktura',
        meta: '[Klijent] · [Godina] · [XXX] tona',
        body: 'Limeni nosači izrezani, sklopljeni i zavareni postupkom EPP, zatim pjeskareni i temeljno premazani prije transporta.',
        image: 'truss-assembly',
      },
      {
        title: 'Mašinski okviri, serijska proizvodnja',
        sector: 'Industrija',
        meta: '[Klijent] · [Godina] · [XXX] komada',
        body: 'Ponavljajuća proizvodnja zavarenih okvira iz fiksnog pripremka, uz dimenzionalnu kontrolu svakog komada.',
        image: 'steel-frame',
      },
      {
        title: 'Opremni čelik od nerđajućeg čelika',
        sector: 'Gradnja jahti',
        meta: '[Klijent] · [Godina] · [XXX] dijelova',
        body: 'Oblikovani i polirani detalji od nerđajućeg čelika za unutrašnje i palubno opremanje, dovršeni do standarda vidljive površine.',
        image: 'formed-plate',
      },
    ],

    values: [
      {
        title: 'Kažemo šta je moguće',
        body: 'Realan datum oko kojeg možete planirati vrijedi više od optimističnog koji ne možete ispoštovati. Ako je rok tijesan, kažemo to prije nego ga prihvatimo.',
      },
      {
        title: 'Dokumentacija je dio proizvoda',
        body: 'Atesti materijala, postupci zavarivanja, zapisi kontrole. Konstrukcija koja stigne bez dokumentacije nije završena.',
      },
      {
        title: 'Jedan pogon, jedna odgovornost',
        body: 'Od rezanja do zaštite sve se odvija pod našim krovom, pa u lancu nema šava na kojem bi se odgovornost mogla izgubiti.',
      },
      {
        title: 'Grade ga ljudi koji zavaruju',
        body: 'Naše inženjerstvo sjedi uz proizvodnu halu. Odluke na papiru provjeravaju se kod ljudi koji ih moraju izvesti u čeliku.',
      },
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
