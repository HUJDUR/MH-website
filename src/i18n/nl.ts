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
    theme: { toLight: 'Naar lichte weergave', toDark: 'Naar donkere weergave' },
  },

  footer: {
    rights: 'Alle rechten voorbehouden.',
    cookiePolicy: 'Privacy- en cookiebeleid',
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
    policyLink: 'Bekijk ons privacy- en cookiebeleid',
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
    heroAlt: '',

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
      { slug: 'solar-roof', alt: '' },
      { slug: 'solar-array', alt: '' },
      { slug: 'solar-overhead', alt: '' },
    ],

    investmentTitle: 'Investeren in onszelf',
    investmentNote:
      'Het grootste deel van onze middelen gaat terug naar het verbeteren van de manier waarop we werken — nieuwe machines, beter gereedschap, snellere processen in de productiehallen.',
    investmentImages: [
      { slug: 'facility-aerial', alt: '' },
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
    heroAlt: '',
    filter: 'Filter',
    all: 'Alles',
    groups: [
      { id: 'workshop', label: 'Werkplaats' },
      { id: 'projects', label: 'Projecten' },
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
    ctaTitle: 'Wilt u het bedrijf zelf zien?',
    ctaBody:
      "Foto's laten maar een deel zien.\n\nBezoek is welkom — loop door de hallen en zie de productie zelf!",
  },

  aboutPage: {
    peopleEyebrow: 'Mensen',
    peopleTitle: '50+ mensen,\nSommigen zijn er vanaf dag één,\nDe meesten blijven jaren',
    peopleAlt: '',
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
    heroAlt: '',
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
    heroAlt: '',
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
    title: 'Privacy- en cookiebeleid',
    description:
      'Welke persoonsgegevens Metal Holland verzamelt, wie ze ziet en hoe lang we ze bewaren — en de cookies die we plaatsen: één noodzakelijke, en cookies van derden alleen als u de Google Maps-kaart laadt.',
    eyebrow: 'Juridisch',
    heroTitle: 'Privacy- en cookiebeleid.',
    heroLede:
      'Wat we met uw gegevens doen, en wat we in uw browser bewaren. Beide lijsten zijn kort: we plaatsen één eigen cookie en geen enkele trackingcookie.',
    heroAlt: '',
    privacyTitle: 'Privacy',
    whoWeAreTitle: 'Wie wij zijn',
    whoWeAreLede:
      'Verantwoordelijk voor de persoonsgegevens die op deze pagina worden beschreven is:',
    whoWeAreContact: 'Contact',
    collectTitle: 'Wat we verzamelen',
    collectBody1:
      'Wanneer u ons contactformulier gebruikt, ontvangen wij uw naam, bedrijf, e-mailadres, telefoonnummer en bericht, en gebruiken die alleen om te antwoorden.',
    collectBody2:
      'Wanneer u naar een baan solliciteert, ontvangen wij uw naam, e-mailadres, telefoonnummer, woonplaats en wat u ons over uw ervaring vertelt, en gebruiken die alleen om u voor werk in overweging te nemen.',
    collectBody3:
      'Onze hostingpartij bewaart korte technische logbestanden, met inbegrip van IP-adressen, voor de beveiliging.',
    shareTitle: 'Wie het verder ziet',
    shareBody1:
      'Alleen onze hosting- en e-mailproviders, die gegevens namens ons verwerken, en Google als u ervoor kiest de kaart op onze contactpagina te laden.',
    shareBody2:
      'We verkopen of delen uw gegevens nooit voor marketingdoeleinden.',
    retentionTitle: 'Hoe lang',
    retentionInquiries: 'Aanvragen',
    retentionInquiriesValue: '2 jaar',
    retentionApplications: 'Sollicitaties',
    retentionApplicationsValue: '6 maanden',
    retentionLogs: 'Logbestanden',
    retentionLogsValue: '30 dagen',
    retentionBody:
      'We bewaren gegevens alleen langer waar de wet dat vereist, bijvoorbeeld contracten en facturen.',
    rightsTitle: 'Uw rechten',
    rightsBody1:
      'U kunt ons vragen uw gegevens in te zien, te corrigeren of te verwijderen, of uw toestemming intrekken, door te schrijven naar',
    rightsBody2:
      'U kunt ook een klacht indienen bij een toezichthoudende autoriteit voor gegevensbescherming.',
    whatTitle: 'Wat cookies zijn',
    whatBody:
      'Een cookie is een klein tekstbestand dat een website uw browser vraagt te bewaren. Daarmee kan een site iets onthouden tussen paginaweergaven — een voorkeur, een sessie, of, op veel sites, uw gedrag over het hele web. Vergelijkbare technieken zoals local storage werken in de praktijk hetzelfde en vallen onder dit beleid.',
    useTitle: 'Wat wij gebruiken',
    useBody1:
      'Deze website plaatst één eigen cookie. Die legt vast of u optionele cookies hebt geaccepteerd of geweigerd, zodat de balk niet op elke pagina terugkomt. Meer staat er niet in — geen identificatie, geen profiel, geen geschiedenis.',
    useBody2:
      'Twee voorkeuren worden in de browser zelf bewaard, niet in een cookie: of u de site op lichte weergave hebt gezet, en of de openingsanimatie dit bezoek al gespeeld heeft. Geen van beide wordt ooit naar ons verstuurd, en geen van beide doet iets anders dan herstellen wat u koos.',
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
        name: 'mh-theme (local storage)',
        provider: 'Metal Holland (deze website)',
        purpose:
          'Onthoudt of u de site op lichte weergave hebt gezet. Geen cookie en wordt nooit naar ons verstuurd — het blijft in uw browser.',
        duration: 'Tot u uw browsergegevens wist',
        category: 'essential',
      },
      {
        name: 'mh-loader-seen (session storage)',
        provider: 'Metal Holland (deze website)',
        purpose:
          'Registreert dat de openingsanimatie al gespeeld heeft, zodat die één keer per bezoek draait en niet op elke pagina. Geen cookie en wordt nooit naar ons verstuurd.',
        duration: 'Tot u het tabblad sluit',
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
    policy: 'Privacy- en cookiebeleid',
    label: 'Cookietoestemming',
  },

  /**
   * Never rendered. 404.astro sits outside the locale route and always builds
   * with `defaultLocale`, so a static host's single /404.html answers every
   * unmatched path in English — including /nl/anything. Kept because
   * `Dictionary` is `typeof en` and check-i18n walks all three shapes, so the
   * keys cannot simply be dropped here. Decided deliberately (2026-09-16):
   * English-only 404. Do not spend time polishing this copy, and do not treat
   * it as drift — it is unreachable either way.
   */
  notFound: {
    title: 'Pagina niet gevonden',
    description: 'De pagina die u zocht staat hier niet.',
    heading: 'Pagina niet gevonden',
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
