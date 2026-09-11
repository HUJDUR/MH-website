import type { Dictionary } from './en';

/**
 * Nederlands.
 *
 * DRAFT — written alongside the English source, not by a native reviewer.
 * This is the language of the market the company sells into, so have a Dutch
 * speaker read it before launch; the terminology is correct trade vocabulary
 * (kantbank, onderpoederdek, exceptioneel transport) but tone carries weight.
 *
 * Image slugs, ids, figures, machine models and certification codes are shared
 * with `en.ts` and must not be translated.
 */
export const nl: Dictionary = {
  site: {
    tagline: 'Zware gelaste staalconstructies',
    description:
      'Metal Holland vervaardigt zware gelaste staalconstructies — plaatwerk, secties en complete samenstellingen — voor scheepsbouw, offshore en infrastructuur in heel Europa.',
  },

  nav: {
    items: [
      { href: '/', label: 'Home', blurb: 'Wie we zijn en wat we bouwen' },
      { href: '/media', label: 'Media', blurb: "Foto's van het bedrijf" },
      { href: '/careers', label: 'Vacatures', blurb: 'Lassers, bankwerkers, engineers' },
      { href: '/contact', label: 'Contact', blurb: 'Adres, telefoon, aanvraagformulier' },
    ],
    toggleMenu: 'Menu openen',
    siteSections: 'Onderdelen van de site',
    primary: 'Hoofdnavigatie',
    mobile: 'Mobiele navigatie',
    skipToContent: 'Naar de inhoud',
    language: 'Taal',
    theme: { toLight: 'Naar lichte weergave', toDark: 'Naar donkere weergave' },
  },

  footer: {
    rights: 'Alle rechten voorbehouden.',
    cookiePolicy: 'Cookiebeleid',
    cookieSettings: 'Cookie-instellingen',
    country: 'Bosnië en Herzegovina',

    officeLabel: 'Bedrijfslocatie',
  },

  common: {
    requestQuote: 'Neem contact op',
    contactForm: 'Contactformulier',
    backToHome: 'Terug naar home',
    contactUs: 'Neem contact op',
    sector: 'Sector',
    vatLabel: 'btw',
    jibLabel: 'JIB',
  },

  home: {
    title: 'Home',
    heroEyebrow: '20+ jaar staalconstructie',
    heroTitleA: 'Staalconstructies,',
    heroTitleB: 'gebouwd volgens uw specificatie.',
    heroLede:
      'Van losse onderdelen tot complete staalconstructies — snijden, vormen, lassen en afwerken onder één dak.',
    heroAlt: 'Een operator van Metal Holland aan de besturing van een snijmachine',

    whoEyebrow: 'Wie we zijn',
    whoTitle: 'Familiebedrijf. Wereldwijd bereik.',
    whoBody1:
      'Metal Holland is een familiebedrijf, in 2005 opgericht in een kleine stad aan de grens van de Europese Unie. We begonnen met een handvol werknemers die kassen bouwden voor de streek, en vandaag maken we producten voor enkele van de meest exclusieve industrieën ter wereld. We werken aan superjachten, offshoreprojecten en algemene staalbouw, voornamelijk voor opdrachtgevers in de Benelux.',
    whoBody2:
      'Hoewel we het afgelopen decennium flink zijn gegroeid, blijven we in de kern een familiebedrijf — een bedrijf dat verbonden blijft met zijn werknemers, hun gezinnen en de lokale gemeenschap.',

    energyEyebrow: 'Energie',
    energyTitle: 'We zoeken altijd naar verbeteringen.',
    energyLede:
      'Staalbouw is een energie-intensief vak. Zonnepanelen op onze haldaken vangen een deel van die belasting op.',
    energyBody:
      'Dit is één stap in een lopende overgang naar schoner energiegebruik in het hele bedrijf.',
    energyFigures: [
      { value: '240 kWp', label: 'Opgesteld vermogen' },
      { value: '2 / 4', label: 'Haldaken voorzien' },
    ],
    energyImages: [
      { slug: 'solar-roof', alt: 'Zonnepanelen op het dak van een hal van Metal Holland' },
      { slug: 'solar-array', alt: 'Zonnepanelen over de daken van het bedrijf, vanuit de lucht' },
      { slug: 'solar-overhead', alt: 'De haldaken en hun panelen recht van boven gezien' },
    ],

    investmentTitle: 'Investeren in onszelf',
    investmentNote:
      'Het grootste deel van onze middelen gaat terug naar het verbeteren van de manier waarop we werken — nieuwe machines, beter gereedschap, snellere processen in de productiehallen.',
    investmentImages: [
      { slug: 'machine-messer', alt: 'Messer MultiTherm snijdt een stalen plaat met plasma' },
      { slug: 'machine-durma', alt: 'Durma AD-S 40320 CNC-kantpers in de zetafdeling' },
      { slug: 'machine-qfin', alt: 'QFIN SER 600 ontbraam- en kantenafrondmachine' },
      { slug: 'machine-kaltenbach', alt: 'Kaltenbach-zaag' },
      { slug: 'machine-bp40', alt: 'Horizontale pers BP 40' },
      { slug: 'machine-fp80', alt: 'Horizontale pers FP 80' },
      { slug: 'machine-jaespa', alt: 'Jaespa-lintzaag op de rollenbaan' },
      { slug: 'forklifts-yard', alt: 'Het heftruckpark opgesteld op het terrein' },
      { slug: 'flatbed-trailer', alt: 'Een open oplegger in de hal' },
    ],

  },

  industriesPage: {
    eyebrow: 'Sectoren',
    heroTitle: 'Waar ons staal terechtkomt.',
  },

  mediaPage: {
    title: 'Media',
    description:
      "Foto's uit het bedrijf van Metal Holland — de werkvloer, afgewerkt werk dat het terrein verlaat, en de machines waarop het gemaakt wordt.",
    eyebrow: 'Media',
    heroTitle: 'Het bedrijf, gefotografeerd.',
    heroAlt: 'Een gelaste ligger op bokken in de productiehal',
    filter: 'Filter',
    all: 'Alles',
    groups: [
      { id: 'workshop', label: 'Werkplaats' },
      { id: 'projects', label: 'Projecten' },
      { id: 'machines', label: 'Machines' },
    ],
    videoAlt: 'Het heftruckpark van Metal Holland opgesteld op het terrein, van bovenaf gefilmd',
    album: [
      { slug: 'arc-plume', alt: 'Een lasboog die een rookpluim verlicht in het donker van de hal', group: 'workshop' },
      { slug: 'welding-dark', alt: 'Een lasser achter de boog, de hal eromheen in duisternis', group: 'workshop' },
      { slug: 'girder-welding', alt: 'Een verstijver wordt in een gegronde liggersectie gelast', group: 'workshop' },
      { slug: 'arc-dark', alt: 'De boog op het moment van ontsteken', group: 'workshop' },
      { slug: 'beam-welding', alt: 'Een lasser werkt langs een lange gegronde ligger', group: 'workshop' },
      { slug: 'tube-grinding', alt: 'Slijpvonken langs een rij buizen op de werkbank', group: 'workshop' },
      { slug: 'girder-sparks', alt: 'Het vlakslijpen van de lassen op een liggersectie', group: 'workshop' },
      { slug: 'welder-beam', alt: 'Een lasser legt een naad langs een ligger', group: 'workshop' },
      { slug: 'hall-long-section', alt: 'Een lange gefabriceerde sectie over de volle lengte van de hal', group: 'workshop' },
      { slug: 'welder-hall-dark', alt: 'Een lasser aan het werk in de verduisterde hal, de boog als enige licht', group: 'workshop' },
      { slug: 'operator-console', alt: 'Een operator aan het bedieningspaneel van een machine', group: 'workshop' },
      { slug: 'team-workshop', alt: 'Twee bankwerkers stellen werk op de bank op', group: 'workshop' },
      { slug: 'control-station', alt: 'Machineoperator aan de bedieningspost van de zaaglijn', group: 'workshop' },
      { slug: 'steel-stock', alt: 'Staalstrippen gestapeld, klaar om te snijden', group: 'workshop' },
      { slug: 'workshop-hall', alt: 'Werkbanken en bokken over de lengte van de werkplaats', group: 'workshop' },
      { slug: 'drill-detail', alt: 'Een boor die zich in een stalen profiel werkt', group: 'workshop' },
      { slug: 'roller-detail', alt: 'Aanvoerrollen op de boorlijn', group: 'workshop' },
      { slug: 'steel-sections', alt: 'Gegronde liggersecties op een rij in de hal', group: 'workshop' },
      { slug: 'girder-line', alt: 'Lassers aan het werk langs een rij gegronde liggersecties', group: 'workshop' },
      { slug: 'pipe-spools', alt: 'Pijpspoelstukken uitgelegd op bokken', group: 'workshop' },
      { slug: 'pipe-fabrication', alt: 'Een gelaste leuning en kooiladder in aanbouw', group: 'workshop' },
      { slug: 'welding-arc', alt: 'Een lasboog tegen een kokerligger', group: 'workshop' },
      { slug: 'welded-frame', alt: 'Een lang gelast frame opgesteld op bokken', group: 'workshop' },
      { slug: 'beam-sparks', alt: 'Vonken terwijl een ligger op lengte wordt gezaagd', group: 'workshop' },
      { slug: 'hall-beams', alt: 'Liggers verspreid over de hal, aan de verste bank brandt een boog', group: 'workshop' },
      { slug: 'truss-assembly', alt: 'Het vlakslijpen van de lassen op een lange gefabriceerde ligger', group: 'workshop' },
      { slug: 'long-beam', alt: 'Een afgewerkte ligger over de volle lengte van de halvloer', group: 'workshop' },
      { slug: 'marked-parts', alt: 'Gesneden plaatdelen, hard gemerkt met hun onderdeelnummers', group: 'workshop' },
      { slug: 'hall-sparks', alt: 'Slijpvonken die over de halvloer schieten', group: 'workshop' },
      { slug: 'plasma-head-cut', alt: 'De plasmakop die zich in de plaat snijdt', group: 'workshop' },
      { slug: 'plasma-gantry', alt: 'Het plasmaportaal dat langs een volle plaat beweegt', group: 'workshop' },
      { slug: 'nested-parts', alt: 'Een operator tilt afgewerkte delen uit de gesneden nesting', group: 'workshop' },
      { slug: 'cutting-bed', alt: 'De snijtafel met een plaat erop', group: 'workshop' },
      { slug: 'plasma-sparks', alt: 'Vonken die van de plasmasnede over de tafel stromen', group: 'workshop' },
      { slug: 'project-marked-plate', alt: 'Gemerkte en gesneden plaatdelen op de werkbank', group: 'projects' },
      { slug: 'bridge-transport', alt: 'Een gelaste vakwerkligger geladen op een dieplader op het terrein', group: 'projects' },
      { slug: 'girder-transport-2', alt: 'De vakwerkligger verlaat het bedrijf op de oplegger', group: 'projects' },
      { slug: 'girder-transport-3', alt: 'De vakwerkligger op de weg buiten het bedrijf', group: 'projects' },
      { slug: 'steel-frame', alt: 'Een groot gegrond gelast frame in de hal', group: 'projects' },
      { slug: 'stainless-trough', alt: 'Een roestvaststalen goot, lassen vlakgeslepen', group: 'projects' },
      { slug: 'stainless-trough-2', alt: 'De afgewerkte roestvaststalen goot in de lengte gezien', group: 'projects' },
      { slug: 'frame-assembly', alt: 'Een zwaar gelast frame samengesteld op de werkvloer', group: 'projects' },
      { slug: 'frame-loaded', alt: 'Een gefabriceerd frame geladen op een oplegger bij het bedrijf', group: 'projects' },
      { slug: 'frame-transport', alt: 'Twee gefabriceerde frames vastgezet op een open oplegger', group: 'projects' },
      { slug: 'frame-transport-2', alt: 'De beladen oplegger verlaat het terrein', group: 'projects' },
      { slug: 'crane-lift', alt: 'Een mobiele kraan hijst een roestvaststalen vat', group: 'projects' },
      { slug: 'crane-lift-2', alt: 'De kraan zet de last neer', group: 'projects' },
      { slug: 'access-platform', alt: 'Een bordes met roosterdek en buisleuningen, samengesteld in de hal', group: 'projects' },
      { slug: 'crawler-frame', alt: 'Een gelast machineframe, oranje gelakt, op zijn rupsonderstel op een dieplader op het terrein', group: 'projects' },
      { slug: 'crawler-frame-2', alt: 'Hetzelfde frame vanaf de achterzijde, vastgeketend op de opleggervloer', group: 'projects' },
      { slug: 'crawler-frame-3', alt: 'Het frame vanaf de andere kant, klaar om het terrein te verlaten', group: 'projects' },
      { slug: 'machine-esab', alt: 'ESAB CNC-plasmasnijportaal boven zijn tafel van dertig meter', group: 'machines' },
      { slug: 'machine-messer', alt: 'Messer MultiTherm snijdt een stalen plaat met plasma', group: 'machines' },
      { slug: 'machine-durma', alt: 'Durma AD-S 40320 CNC-kantpers in de zetafdeling', group: 'machines' },
      { slug: 'machine-vernet', alt: 'Vernet Behringer FP 400-lijn met bedieningspost', group: 'machines' },
      { slug: 'machine-qfin', alt: 'QFIN SER 600 ontbraam- en kantenafrondmachine', group: 'machines' },
      { slug: 'machine-bp40', alt: 'Horizontale pers BP 40', group: 'machines' },
      { slug: 'machine-fp80', alt: 'Horizontale pers FP 80', group: 'machines' },
      { slug: 'machine-jaespa', alt: 'Jaespa-lintzaag op de rollenbaan', group: 'machines' },
      { slug: 'machine-kaltenbach', alt: 'Kaltenbach-zaag', group: 'machines' },
      { slug: 'machine-pilous', alt: 'Pilous-lintzaag', group: 'machines' },
      { slug: 'forklifts-yard', alt: 'Het heftruckpark opgesteld op het terrein', group: 'machines' },
      { slug: 'forklifts-yard-2', alt: 'Heftrucks geparkeerd langs de rand van het terrein', group: 'machines' },
    ],
    ctaTitle: 'Wilt u het bedrijf zelf zien?',
    ctaBody:
      "Foto's laten maar een deel zien.\n\nBezoek is welkom — loop door de hallen en zie de productie zelf!",
  },

  aboutPage: {
    peopleEyebrow: 'Mensen',
    peopleTitle: '50+ mensen,\nSommigen zijn er vanaf dag één,\nDe meesten blijven jaren',
    peopleAlt: 'Constructiewerkers van Metal Holland aan het werk in de hal',
    certEyebrow: 'Certificering',
    certTitle: 'Gecertificeerd en geaudit.',
    ctaTitle: 'Neem contact met ons op.',
    ctaBody:
      'We zijn altijd op zoek naar nieuwe en stabiele leveranciers en geïnteresseerde opdrachtgevers.',
  },

  contactPage: {
    title: 'Contact',
    description:
      'Neem contact op met Metal Holland — stuur tekeningen en een leverdatum voor een prijs en een levertijd, of vraag naar capaciteit, materialen en transport voordat u die heeft.',
    eyebrow: 'Contact',
    heroTitle: 'Laat van u horen.',
    heroLede:
      'Stuur tekeningen en een gewenste datum en u krijgt een reële prijs, een reële datum, en alle vragen die de tekeningen oproepen. Bent u eerder dan dat — capaciteit, een materiaal, of de vraag of een sectie ons terrein af kan — schrijf dan toch en wij vertellen u wat we weten.',
    heroAlt: 'Een lasboog die het donker van de productiehal verlicht',
    fields: {
      name: 'Naam',
      namePlaceholder: 'Uw naam',
      company: 'Bedrijf',
      companyPlaceholder: 'Bedrijfsnaam',
      email: 'E-mail',
      emailPlaceholder: 'naam@bedrijf.nl',
      phone: 'Telefoon',
      phonePlaceholder: 'Inclusief landcode',
      message: 'Bericht',
      messagePlaceholder: 'Vertel ons wat u nodig heeft.',
      honeypot: 'Laat dit veld leeg',
    },
    submit: 'Bericht versturen',
    sending: 'Versturen…',
    success: 'Dank u — we komen snel bij u terug.',
    error: 'Er ging iets mis. Mail ons rechtstreeks:',
    subject: 'Aanvraag',
    directTitle: 'Direct',
    emailLabel: 'E-mail',
    phoneLabel: 'Telefoon',
    hours: 'Maandag – vrijdag, 07:00 – 15:45',
    hoursLabel: 'Werktijden',
    directions: 'Routebeschrijving',
    mapEyebrow: 'Waar u ons vindt',
    openInMaps: 'Openen in Google Maps',
    mapConsent:
      'De kaart wordt geladen vanaf Google Maps, dat eigen cookies plaatst. Laad hem om het bedrijf op de kaart te zien, of open de locatie rechtstreeks in Google Maps.',
    loadMap: 'Kaart laden',
    mapTitle: 'Kaart met Metal Holland aan',
  },

  careersPage: {
    title: 'Werken bij ons',
    description:
      'Werken bij Metal Holland: lassers, monteurs, machineoperators, werkvoorbereiders en projectingenieurs in ons bedrijf in Šamac.',
    eyebrow: 'Vacatures',
    heroTitle: 'Kom met ons bouwen.',
    heroAlt: 'Constructiewerkers van Metal Holland aan het werk in de hal',
    openingsEyebrow: 'Vacatures',
    openingsTitle: 'Openstaande functies.',
    openingsBody: 'Op dit moment zijn er geen openstaande functies.',
    formTitle: 'Solliciteren',
    formNote:
      'Ook als er niets openstaat, ontmoeten we graag mensen die later bij een functie kunnen passen — laat van u horen!',
    fields: {
      name: 'Naam',
      namePlaceholder: 'Uw naam',
      email: 'E-mail',
      emailPlaceholder: 'naam@voorbeeld.nl',
      phone: 'Telefoon',
      phonePlaceholder: '+387',
      city: 'Woonplaats',
      cityPlaceholder: 'Waar u woont',
      message: 'Vertel iets over uzelf',
      messagePlaceholder:
        'Waaraan u hebt gewerkt, welke machines of processen u kent, en welke certificaten u hebt.',
    },
    submit: 'Sollicitatie versturen',
    sending: 'Versturen…',
    success: 'Dank u — we hebben uw sollicitatie en nemen contact op.',
    error: 'Er ging iets mis. Mail ons rechtstreeks:',
    subject: 'Sollicitatie',
    asideTitle: 'Liever bellen?',
  },

  cookiesPage: {
    title: 'Cookiebeleid',
    description:
      'Hoe Metal Holland cookies gebruikt: één noodzakelijke cookie die uw keuze onthoudt, en cookies van derden alleen als u de Google Maps-kaart laadt.',
    eyebrow: 'Juridisch',
    heroTitle: 'Cookiebeleid.',
    heroLede:
      'Een kort beleid, want het is een korte lijst. We plaatsen één eigen cookie en geen enkele trackingcookie.',
    heroAlt: 'Het bedieningspaneel van een operator in de productiehal',
    whatTitle: 'Wat cookies zijn',
    whatBody:
      'Een cookie is een klein tekstbestand dat een website uw browser vraagt te bewaren. Daarmee kan een site iets onthouden tussen paginaweergaven — een voorkeur, een sessie, of, op veel sites, uw gedrag over het hele web. Vergelijkbare technieken zoals local storage werken in de praktijk hetzelfde en vallen onder dit beleid.',
    useTitle: 'Wat wij gebruiken',
    useBody1:
      'Deze website plaatst één eigen cookie. Die legt vast of u optionele cookies hebt geaccepteerd of geweigerd, zodat de balk niet op elke pagina terugkomt. Meer staat er niet in — geen identificatie, geen profiel, geen geschiedenis.',
    useBody2:
      'Nog één voorkeur — of u de site op lichte weergave hebt gezet en welke taal u leest — wordt bewaard in de local storage van uw browser. Dat is geen cookie, het wordt nooit naar ons verstuurd, en het doet niets anders dan de weergave herstellen die u koos.',
    useBody3:
      'We gebruiken geen analytics, geen advertentiepixels en geen social-mediatrackers. Niets op deze site volgt u naar een andere.',
    thirdTitle: 'De enige derde partij',
    thirdBody1:
      'Onze contactpagina kan onze locatie tonen op een ingesloten Google-kaart. Google plaatst eigen cookies zodra die kaart laadt, en daarom blijft de kaart uit tot u optionele cookies accepteert of op Kaart laden drukt. Weigert u, dan wordt de kaart nooit opgevraagd en wordt Google nooit benaderd — en u kunt dezelfde locatie nog steeds rechtstreeks in Google Maps openen, op Googles eigen voorwaarden, via de link ernaast.',
    thirdBody2:
      'Wat Google met die cookies doet, valt onder zijn eigen privacybeleid, niet onder het onze.',
    changeTitle: 'Als u zich bedenkt',
    changeBody1:
      'Uw keuze ligt niet vast. Open de balk opnieuw met de knop hieronder en beslis opnieuw — weigeren na eerder accepteren haalt ook de kaart van de pagina.',
    changeBody2:
      'U kunt cookies altijd verwijderen in uw browserinstellingen, of ze helemaal blokkeren. De toestemmingscookie blokkeren betekent alleen dat we het bij uw volgende bezoek opnieuw vragen; verder werkt niets op deze site op cookies.',
    settingsButton: 'Cookie-instellingen',
    contactTitle: 'Contact',
    contactBody: 'Vragen over dit beleid kunt u sturen naar',
    contactBodyOr: ', of naar',
    lastUpdatedLabel: 'Laatst bijgewerkt',
    lastUpdated: '3 september 2026',
    tableTitle: 'Elke cookie, op een rij',
    setBy: 'Geplaatst door',
    keptFor: 'Bewaartermijn',
    essential: 'Noodzakelijk',
    optional: 'Optioneel',
    table: [
      {
        name: 'mh_cookie_consent',
        provider: 'Metal Holland (deze website)',
        purpose:
          'Legt vast of u optionele cookies hebt geaccepteerd of geweigerd, zodat het u niet op elke pagina opnieuw gevraagd wordt.',
        duration: '1 jaar',
        category: 'essential',
      },
      {
        name: 'mh-theme, mh-lang (local storage)',
        provider: 'Metal Holland (deze website)',
        purpose:
          'Onthouden of u de site op lichte weergave hebt gezet en welke taal u het laatst las. Het zijn geen cookies en ze worden nooit naar ons verstuurd — ze blijven in uw browser.',
        duration: 'Tot u uw browsergegevens wist',
        category: 'essential',
      },
      {
        name: 'NID, SOCS, CONSENT en vergelijkbare',
        provider: 'Google Maps (Google Ireland Ltd.)',
        purpose:
          'Geplaatst door de ingesloten Google-kaart op onze contactpagina, en alleen als u die laadt. Google gebruikt ze om kaartvoorkeuren te onthouden en voor beveiliging en misbruikpreventie. Wij hebben er geen toegang toe.',
        duration: 'Tot 24 maanden, bepaald door Google',
        category: 'optional',
      },
    ],
  },

  cookieBanner: {
    heading: 'Cookies',
    body: 'We gebruiken één noodzakelijke cookie om deze keuze te onthouden. Optionele cookies worden alleen geplaatst door de ingesloten Google-kaart op onze contactpagina — weiger ze en de kaart wordt simpelweg niet geladen. We doen niet aan advertenties of analytics.',
    accept: 'Alles accepteren',
    reject: 'Optionele weigeren',
    policy: 'Cookiebeleid',
    label: 'Cookietoestemming',
  },

  notFound: {
    title: 'Pagina niet gevonden',
    description: 'De pagina die u zocht staat hier niet.',
    eyebrow: 'Fout 404',
    heading: 'Deze is niet van de plaat gekomen.',
    body: 'De pagina die u zocht is verplaatst of heeft nooit bestaan. De rest van de site is intact.',
  },

  content: {
    industries: [
      {
        id: 'shipbuilding',
        title: 'Scheepsbouw en jachtbouw',
        bullets: [
          'Snijden en vormen van rompsecties',
          'Prefabricage van kleinere secties en samenstellingen',
          'Volledige traceerbaarheid van plaat, van walscertificaat tot afgewerkte sectie',
          'Al het materiaal geleverd met 3.2-certificaten',
        ],
        image: 'industry-shipbuilding',
      },
      {
        id: 'steelwork',
        title: 'Klassieke staalconstructie',
        bullets: [
          'Bordessen en looppaden',
          'Trappen, tussenbordessen en leuningen',
          'Gelaste frames en draagconstructies',
          'Uitgevoerd volgens EN 1090-2, uitvoeringsklasse EXC2',
        ],
        image: 'pipe-fabrication',
      },
      {
        id: 'ironwork',
        title: 'Klein constructiewerk in rvs, aluminium en staal',
        bullets: [
          'Fundaties voor apparatuur en machines',
          'Zwaar kanaalwerk en ventilatiestaal',
          'Lekbakken en opvangbakken',
          'Rvs, aluminium en koolstofstaal',
        ],
        image: 'stainless-trough',
      },
      {
        id: 'offshore',
        title: 'Toebehoren en onderdelen voor de offshore staalmarkt',
        bullets: [
          'Werkplatforms en staal voor dektoegang',
          'Relingen, handlijsten en scepters',
          'Kooiladders en trappentorens',
          'Overal gemaakt volgens offshore kwaliteitseisen',
        ],
        image: 'industry-offshore',
      },
    ],

    stats: [
      { value: '20+', label: 'Jaar in zware constructie', sub: 'Voor Europese opdrachtgevers' },
      { value: '32,000 m²+', label: 'Productieoppervlak', sub: 'Verdeeld over [4] productiehallen' },
      { value: '1,000 t+', label: 'Staal per jaar verwerkt', sub: 'Plaat, profielen en kokerprofielen' },
      { value: '50+', label: 'Mensen op de vloer', sub: 'Lassers, monteurs, operators, ingenieurs' },
    ],

    certifications: [
      { code: 'EN 1090-2 EXC2', label: 'Uitvoering van staalconstructies, uitvoeringsklasse 2' },
      { code: 'EN ISO 3834-2', label: 'Uitgebreide kwaliteitseisen voor smeltlassen' },
      { code: 'EN ISO 9001', label: 'Kwaliteitsmanagement' },
      { code: 'EN ISO 14001', label: 'Milieumanagement' },
      { code: 'EN ISO 45001', label: 'Gezond en veilig werken' },
    ],

  },
};
