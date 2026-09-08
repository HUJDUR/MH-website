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
    tagline: 'Zware staalconstructies, Nederlandse maatstaf.',
    description:
      'Metal Holland vervaardigt zware gelaste staalconstructies — plaatwerk, secties en complete samenstellingen — voor scheepsbouw, offshore en infrastructuur in heel Europa.',
  },

  nav: {
    items: [
      { href: '/#about', label: 'Over ons', blurb: 'Wie we zijn en hoe we werken' },
      { href: '/#capabilities', label: 'Mogelijkheden', blurb: 'Snijden, vormen, lassen, samenbouw' },
      { href: '/#industries', label: 'Sectoren', blurb: 'Ships, steelwork, ironwork, offshore' },
      { href: '/#facility', label: 'Bedrijf', blurb: 'Hallen, machines, capaciteit' },
      { href: '/media', label: 'Media', blurb: 'Photographs of the works' },
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
    contactForm: 'Contact form',
    ourCapabilities: 'Onze mogelijkheden',
    backToHome: 'Terug naar home',
    contactUs: 'Neem contact op',
    sector: 'Sector',
  },

  home: {
    title: 'Home',
    heroEyebrow: '20+ jaar staalconstructie',
    heroTitleA: 'Wij bouwen het staal',
    heroTitleB: 'waarop anderen bouwen.',
    heroLede:
      'Van losse onderdelen tot complete staalconstructies — snijden, vormen, lassen en afwerken onder één dak.',
    heroAlt: 'Een operator van Metal Holland aan de besturing van een snijmachine',

    whoEyebrow: 'Wie we zijn',
    whoTitle: 'Een constructiebedrijf, geen tussenhandel.',
    whoBody1:
      'Metal Holland snijdt, vormt, last en werkt zware staalconstructies af in eigen hallen. Er wordt niets stilletjes doorgeschoven naar een keten van onderaannemers — de plaat die op ons terrein aankomt, verlaat het als afgewerkte sectie, met de documentatie erbij.',
    whoBody2:
      'Dat is het hele voorstel. Nederlandse projectleiding en engineeringdiscipline, gecombineerd met de capaciteit, de kraanbaan en de vakmensen van een volwaardig productiebedrijf. Opdrachtgevers in scheepsbouw, offshore en infrastructuur werken met ons omdat één verantwoordelijke partij eenvoudiger te plannen is dan vijf.',

    energyEyebrow: 'Energie',
    energyTitle: 'Het dak draait een flink deel van de werkplaats.',
    energyLede:
      'Elk haldak waar panelen op pasten, ligt er inmiddels vol mee. Staalconstructie is een energieslurpend vak — zelf opwekken is het deel waar we iets aan kunnen doen.',
    energyBody:
      'De installatie voedt het bedrijf rechtstreeks. Zolang de zon schijnt, draaien de snijtafels, de afzuiging, de kranen en de verlichting erop. Het is ook de reden dat ons EN ISO 14001-certificaat over meer gaat dan een ordner in de kast.',
    energyFigures: [
      { value: '240 kWp', label: 'Opgesteld vermogen' },
      { value: '2 / 4', label: 'Haldaken voorzien' },
    ],
    energyImages: [
      { slug: 'solar-roof', alt: 'Zonnepanelen op het dak van een hal van Metal Holland' },
      { slug: 'solar-array', alt: 'Zonnepanelen over de daken van het bedrijf, vanuit de lucht' },
      { slug: 'solar-overhead', alt: 'De haldaken en hun panelen recht van boven gezien' },
    ],

  },

  capabilitiesPage: {
    materialsEyebrow: 'Materialen',
    materialsTitle: 'Koolstofstaal, rvs, aluminium.',
    materialsLede:
      'Materiaal wordt op certificaat besteld en blijft traceerbaar door snijden, passen en lassen, zodat het smeltnummer in het dossier het smeltnummer in de constructie is.',
    materials: [
      { term: 'Constructiestaal', detail: 'S235 · S275 · S355 · hogere kwaliteiten op aanvraag' },
      { term: 'Scheepsbouwkwaliteiten', detail: 'Klassegekeurde plaat en profielen' },
      { term: 'Roestvast staal', detail: '304 · 316 en duplex, in een gescheiden werkruimte' },
      { term: 'Aluminium', detail: 'Maritieme kwaliteiten, gelast volgens gekwalificeerde procedure' },
      { term: 'Plaat', detail: 'Tot [200] mm dikte' },
      { term: 'Profielen', detail: 'Liggers, kokerprofielen, buis en staf' },
    ],
  },

  industriesPage: {
    eyebrow: 'Sectoren',
    heroTitle: 'Waar ons staal terechtkomt.',
  },

  facilityPage: {
    equipmentEyebrow: 'Machinepark',
    equipmentTitle: 'Wat er op de vloer staat.',
    equipmentLede:
      'Een indicatieve lijst. Vraag naar een specifieke maat, dikte of tolerantie en u krijgt een recht antwoord of het past.',
    machinesEyebrow: 'Machines',
    machinesTitle: 'Die het noemen waard zijn.',
    machinesLede:
      'Twee plasmatafels van dertig meter, een kantbank van 320 ton, een boorlijn en een ontbraammachine. Samen dekken ze het meeste van wat als tekening binnenkomt.',
  },

  mediaPage: {
    title: 'Media',
    description:
      'Photographs from the Metal Holland works — the shop floor, finished work leaving the yard, and the machines it is made on.',
    eyebrow: 'Media',
    heroTitle: 'The works, photographed.',
    heroAlt: 'A welded beam on trestles in the fabrication hall',
    filter: 'Filter',
    all: 'Alles',
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
    eyebrow: 'Over ons',
    heroTitle: 'Nederlandse maatstaf, echte capaciteit.',
    heroLede:
      'Een constructiebedrijf gebouwd zoals opdrachtgevers wensen dat meer leveranciers gebouwd waren: één werkplaats, één verantwoordelijke partij, en een recht antwoord over wat er mogelijk is.',
    storyLede:
      'Metal Holland bestaat omdat opdrachtgevers in de Nederlandse maritieme en infrastructuurwereld steeds twee dingen tegelijk nodig hadden: engineering waarmee ze in hun eigen taal konden overleggen, en productiecapaciteit die groot genoeg was om iets te betekenen.',
    storyBody1:
      'Dus bouwden we beide onder één dak in Šamac. Projectleiding, werkvoorbereiding en klantcontact zitten naast de vloer, en snijden, vormen, lassen, afwerken en beladen gebeuren in onze eigen hallen, op onze eigen machines, met onze eigen mensen. Tussen een aanvraag en het staal zit geen keten van onderaannemers.',
    storyBody2:
      'Het resultaat is onopvallend en moeilijk te veinzen: secties die op de afgesproken datum aankomen, op de afgesproken maat, met het dossier dat aantoont hoe ze gemaakt zijn. Het meeste van ons werk komt inmiddels van opdrachtgevers die ons al eens iets gestuurd hebben.',
    peopleEyebrow: 'Mensen',
    peopleTitle: '50+ mensen, de meesten met een toorts in de hand.',
    peopleLede:
      'Lassers, monteurs, machineoperators, werkvoorbereiders en projectingenieurs. De verhouding telt: dit is een bedrijf waar de meerderheid van het personeel daadwerkelijk dingen maakt.',
    peopleBody:
      'We leiden onze lassers zelf op en houden hun kwalificaties actueel, want het alternatief — certificering inhuren wanneer een project erom vraagt — levert precies de verrassing op die niemand drie weken voor levering wil.',
    peopleAlt: 'Constructiewerkers van Metal Holland aan het werk in de hal',
    certEyebrow: 'Certificering',
    certTitle: 'Geaudit, niet beweerd.',
    ctaTitle: 'Werk met ons.',
    ctaBody:
      'Of u nu één sectie nodig hebt of een jaar capaciteit, het gesprek begint hetzelfde — stuur de tekeningen en noem de datum.',
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
    openingsEyebrow: 'Vacancies',
    openingsTitle: 'Available positions.',
    openingsBody: 'There are no open positions at the moment.',
    formTitle: 'Solliciteren',
    formNote:
      'Even when nothing is posted, we are glad to meet people who might fit a job later in the future — reach out!',
    fields: {
      name: 'Naam',
      namePlaceholder: 'Uw naam',
      email: 'E-mail',
      emailPlaceholder: 'naam@voorbeeld.nl',
      phone: 'Telefoon',
      phonePlaceholder: '+387',
      city: 'City',
      cityPlaceholder: 'Where you live',
      message: 'Tell us about yourself',
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
    capabilities: [
      {
        id: 'cutting',
        title: 'CNC plasma- & autogeen snijden',
        summary:
          'Plaat wordt genest en gesneden op onze eigen portaaltafels, zodat elk vervolgdeel begint met een nauwkeurig, herhaalbaar profiel.',
        detail:
          'Bij het snijden wordt tolerantie gewonnen of verloren. We nesten op materiaalrendement, snijden de afschuining in dezelfde gang waar de lasnaadvoorbereiding erom vraagt, en merken delen hard aan zodat ze al geïdentificeerd op de passbank aankomen.',
        points: [
          'Portaal plasma- en autogeen snijden van zware plaat',
          'Afschuinen voor lasnaadvoorbereiding',
          'Nesten geoptimaliseerd op materiaalrendement',
          'Merken en identificatie van delen bij de bron',
        ],
        image: 'plasma-cutting',
      },
      {
        id: 'forming',
        title: 'Vormen, walsen & verspanen',
        summary:
          'Gewalste schaaldelen, gezette beugels, geboorde en gezaagde profielen — het vormwerk dat vlak materiaal tot constructie maakt.',
        detail:
          'Gebogen huidplaat, knikken en conussecties worden gewalst en tegen mallen gecontroleerd. Boorlijnen en zagen brengen liggers en kokerprofielen op lengte en gatpatroon voordat ze ooit bij de samenbouw komen.',
        points: [
          'Plaatwalsen en kantbankwerk',
          'Boorlijnen voor liggers en lintzagen',
          'Gebogen en conische secties, tegen mal gecontroleerd',
          'Verspanen van verbindings- en oplegvlakken',
        ],
        image: 'formed-plate',
      },
      {
        id: 'welding',
        title: 'Gecertificeerd lassen',
        summary:
          'Gekwalificeerde lassers werken volgens goedgekeurde procedures, met de documentatie die dat aantoont.',
        detail:
          'Lassen is de discipline waar de rest van de werkplaats omheen is gebouwd. Procedures zijn gekwalificeerd voor het betreffende materiaal en de dikte, lassers zijn daarop gecertificeerd, en het werk wordt vastgelegd zodat het dossier bij de constructie een controle doorstaat.',
        points: [
          'MAG-, MIG- en onderpoederdeklassen',
          'Gekwalificeerde procedures (WPS/WPQR) per project',
          'Gecertificeerde lassers met actuele kwalificaties',
          'Visuele, dimensionale en NDO-keuring op aanvraag',
        ],
        image: 'welding-arc',
      },
      {
        id: 'assembly',
        title: 'Samenbouw, afwerking & levering',
        summary:
          'Secties worden opgebouwd, ingemeten, geconserveerd en als complete eenheden verzonden, klaar om te plaatsen.',
        detail:
          'We leveren liever een sectie die past dan een pallet delen die zouden kunnen passen. Samenstellingen worden in mallen opgebouwd en ingemeten, gestraald en gegrond of volledig geconserveerd volgens specificatie, en daarna beladen en naar de werf of locatie vervoerd.',
        points: [
          'Samenstellingen in mal en complete secties',
          'Maatcontrole vóór vrijgave',
          'Stralen, gronden en conserveren volgens specificatie',
          'Transport naar werf of locatie in heel Europa',
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
      { value: '20+', label: 'Jaar in zware constructie', sub: 'Voor Europese opdrachtgevers' },
      { value: '32,000 m²+', label: 'Productieoppervlak', sub: 'Verdeeld over [4] productiehallen' },
      { value: '1,000 t+', label: 'Staal per jaar verwerkt', sub: 'Plaat, profielen en kokerprofielen' },
      { value: '50+', label: 'Mensen op de vloer', sub: 'Lassers, monteurs, operators, ingenieurs' },
    ],

    certifications: [
      { code: 'EN 1090-2 EXC2', label: 'Execution of steel structures, execution class 2' },
      { code: 'EN ISO 3834-2', label: 'Uitgebreide kwaliteitseisen voor smeltlassen' },
      { code: 'EN ISO 9001', label: 'Kwaliteitsmanagement' },
      { code: 'EN ISO 14001', label: 'Milieumanagement' },
      { code: 'EN ISO 45001', label: 'Gezond en veilig werken' },
    ],

    machines: [
      {
        name: 'ESAB CNC plasma',
        spec: 'Tafel 30.000 × 3.000 mm',
        body: 'Portaal plasmasnijden op een bed van dertig meter, zodat lange plaat in één opspanning wordt gesneden in plaats van halverwege doorgeschoven en opnieuw uitgelijnd.',
        image: 'machine-esab',
        imageAlt: 'ESAB CNC-plasmaportaal boven zijn tafel van dertig meter',
      },
      {
        name: 'Messer MultiTherm',
        spec: 'Tafel 30.000 × 3.000 mm · Kjellberg Q3000 plus',
        body: 'Onze tweede tafel van dertig meter, met een Kjellberg Q3000 plus-bron — de snijkwaliteit die lasnaadvoorbereiding van de slijpmachine afhoudt.',
        image: 'machine-messer',
        imageAlt: 'Messer MultiTherm snijdt een staalplaat, verlicht door de boog',
      },
      {
        name: 'Durma AD-S 40320',
        spec: '4.050 mm · 320 ton',
        body: 'CNC-kantbank voor het zware vormwerk: vier meter buiglengte bij driehonderdtwintig ton.',
        image: 'machine-durma',
        imageAlt: 'Durma AD-S 40320 CNC-kantbank in de vormafdeling',
      },
      {
        name: 'Vernet Behringer FP 400',
        spec: '',
        body: 'CNC-lijn voor strippen en plaat — boren, merken en tappen in één gang, met een Behringer-zaag ernaast om op lengte te zagen.',
        image: 'machine-vernet',
        imageAlt: 'Boorlijn Vernet Behringer FP 400 met bedieningsstation',
      },
      {
        name: 'QFIN SER 600',
        spec: '',
        body: 'Ontbramen en kantenafronding van gesneden delen, zodat wat de snijhal verlaat klaar is om te hanteren, te conserveren en te lassen.',
        image: 'machine-qfin',
        imageAlt: 'QFIN SER 600 ontbraam- en kantenafrondmachine',
      },
    ],

    equipment: [
      {
        group: 'Snijden',
        items: [
          'Twee CNC-portaalplasmatafels, elk 30.000 × 3.000 mm',
          'Autogeen snijden van zware plaat tot [200] mm',
          'Afschuinkop voor lasnaadvoorbereiding',
          'Lintzagen voor profielen en kokerprofielen',
        ],
      },
      {
        group: 'Vormen & verspanen',
        items: [
          'Plaatwalsen, capaciteit tot [XX] mm × [X,XXX] mm',
          'CNC-kantbank, 4.050 mm bij 320 ton',
          'CNC-boor- en merklijn voor strippen en plaat',
          'Conventioneel draaien en frezen',
        ],
      },
      {
        group: 'Lassen',
        items: [
          'MAG/MIG-lasplaatsen in alle hallen',
          'Onderpoederdeklassen voor liggers en lange naden',
          'Laspositioneerders en draaistellen',
          'Aparte ruimte voor rvs-laswerk',
        ],
      },
      {
        group: 'Intern transport & afwerking',
        items: [
          'Bovenloopkranen tot [XX] ton per hal',
          'Heftruckpark voor verplaatsing tussen hallen en terrein',
          'Ontbramen en kantenafronding van gesneden delen',
          'Straal- en grondinstallatie',
          'Belading voor exceptioneel en te groot transport',
        ],
      },
    ],
  },
};
