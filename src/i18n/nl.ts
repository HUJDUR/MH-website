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
      { href: '/about', label: 'Over ons', blurb: 'Wie we zijn en hoe we werken' },
      { href: '/capabilities', label: 'Mogelijkheden', blurb: 'Snijden, vormen, lassen, samenbouw' },
      { href: '/industries', label: 'Sectoren', blurb: 'Scheepsbouw, offshore, infrastructuur' },
      { href: '/facility', label: 'Bedrijf', blurb: 'Hallen, machines, capaciteit' },
      { href: '/projects', label: 'Projecten', blurb: 'Geselecteerd werk' },
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
    groups: [
      {
        title: 'Bedrijf',
        items: [
          { href: '/about', label: 'Over Metal Holland' },
          { href: '/facility', label: 'Bedrijf & machinepark' },
          { href: '/projects', label: 'Projecten' },
          { href: '/careers', label: 'Werken bij ons' },
          { href: '/contact', label: 'Contact' },
        ],
      },
      {
        title: 'Wat we doen',
        items: [
          { href: '/capabilities#cutting', label: 'CNC plasmasnijden' },
          { href: '/capabilities#forming', label: 'Vormen & verspanen' },
          { href: '/capabilities#welding', label: 'Gecertificeerd lassen' },
          { href: '/capabilities#assembly', label: 'Samenbouw & afwerking' },
        ],
      },
      {
        title: 'Sectoren',
        items: [
          { href: '/industries#shipbuilding', label: 'Scheepsbouw & jachtbouw' },
          { href: '/industries#offshore', label: 'Offshore & energie' },
          { href: '/industries#infrastructure', label: 'Infrastructuur & bruggen' },
          { href: '/industries#industrial', label: 'Industrie & machinebouw' },
        ],
      },
    ],
    rights: 'Alle rechten voorbehouden.',
    cookiePolicy: 'Cookiebeleid',
    cookieSettings: 'Cookie-instellingen',
    country: 'Bosnië en Herzegovina',

    officeLabel: 'Bedrijfslocatie',
  },

  common: {
    requestQuote: 'Neem contact op',
    ourCapabilities: 'Onze mogelijkheden',
    allCapabilities: 'Alle mogelijkheden',
    moreAbout: 'Meer over Metal Holland',
    facilityEquipment: 'Bedrijf & machinepark',
    whatWeBuild: 'Wat we bouwen',
    seeWhatWeBuild: 'Bekijk wat we kunnen bouwen',
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

    capabilitiesEyebrow: 'Mogelijkheden',
    capabilitiesTitle: 'Alles van plaat tot geconserveerde sectie, onder één dak.',

    facilityEyebrow: 'Het bedrijf',
    facilityTitle: 'Capaciteit waar u een programma omheen plant.',
    facilityLede:
      'Vier hallen, portaalsnijtafels, boorlijnen, walsen en lasplaatsen — op maat van secties die op een dieplader vertrekken, niet in een kist.',
    facilityAlt: 'Luchtfoto van het productiebedrijf en terrein van Metal Holland',
    facilityInset: 'productieoppervlak, met bovenloopkranen in elke hal',
    facilityRows: [
      { label: 'Overdekte hallen', value: 'Snijden, vormen, passen, lassen, afwerken' },
      { label: 'Bovenloopkranen', value: 'Tot [XX] ton per hal' },
      { label: 'Buitenterrein', value: 'Stralen, gronden, opslag en belading' },
      { label: 'Transport', value: 'Exceptioneel transport naar werven en locaties in heel Europa' },
    ],

    industriesEyebrow: 'Sectoren',
    industriesTitle: 'Vier sectoren. Eén set normen.',
    industriesLede:
      'De toleranties en de papieren verschillen. De discipline erachter niet.',

    assuranceEyebrow: 'What you get',
    assuranceTitle: 'Every delivery arrives with its file.',
    assuranceLede:
      'The documentation is assembled while the work runs, not reconstructed afterwards. Unless your specification asks for more, this is what comes with the steel.',
    assurance: [
      {
        title: 'Material certificates',
        body: 'Mill certificates for the plate and sections used, traceable to the heat number in the finished construction.',
      },
      {
        title: 'Welding procedures',
        body: 'The qualified WPS for each joint type in the job, with the WPQR that supports it.',
      },
      {
        title: 'Welder qualifications',
        body: 'Certificates for every welder who worked on it, valid on the dates the work was actually done.',
      },
      {
        title: 'Dimensional report',
        body: 'Measured against the drawing before release. Where something deviates, it is recorded and reported rather than quietly absorbed.',
      },
      {
        title: 'Inspection records',
        body: 'Visual inspection throughout, and NDT reports where the specification calls for them, with method and operator named.',
      },
      {
        title: 'Surface treatment',
        body: 'Preparation grade, the product used, and measured dry film thickness.',
      },
    ],
    assuranceNote:
      'Ask and we will send a sample delivery file from recent work, with the client details removed, so you can judge the standard before you commit to anything.',

    energyEyebrow: 'Energie',
    energyTitle: 'Het dak draait een flink deel van de werkplaats.',
    energyLede:
      'Elk haldak waar panelen op pasten, ligt er inmiddels vol mee. Staalconstructie is een energieslurpend vak — zelf opwekken is het deel waar we iets aan kunnen doen.',
    energyBody:
      'De installatie voedt het bedrijf rechtstreeks. Zolang de zon schijnt, draaien de snijtafels, de afzuiging, de kranen en de verlichting erop. Het is ook de reden dat ons EN ISO 14001-certificaat over meer gaat dan een ordner in de kast.',
    energyFigures: [
      { value: '[XXX] kWp', label: 'Opgesteld vermogen' },
      { value: '[XX]%', label: 'Van het jaarverbruik' },
      { value: '[X]', label: 'Haldaken voorzien' },
    ],
    energyImages: [
      { slug: 'solar-roof', alt: 'Zonnepanelen op het dak van een hal van Metal Holland' },
      { slug: 'solar-array', alt: 'Zonnepanelen over de daken van het bedrijf, vanuit de lucht' },
      { slug: 'solar-overhead', alt: 'De haldaken en hun panelen recht van boven gezien' },
    ],

    qualityEyebrow: 'Kwaliteit',
    qualityTitle: 'Het certificaat is slechts de samenvatting.',
    qualityLede:
      'Gekwalificeerde procedures, gecertificeerde lassers, vastgelegde keuringen. Het opleverdossier ontstaat tijdens het werk, het wordt achteraf niet gereconstrueerd.',
    qualityNote: 'Certificaten en scopeverklaringen zijn op aanvraag beschikbaar.',
  },

  capabilitiesPage: {
    title: 'Mogelijkheden',
    description:
      'CNC plasmasnijden, vormen en walsen, gecertificeerd lassen, samenbouw en afwerking — de mogelijkheden van Metal Holland van plaat tot geconserveerde sectie.',
    eyebrow: 'Mogelijkheden',
    heroTitle: 'Van plaat tot geconserveerde sectie.',
    heroLede:
      'Snijden, vormen, lassen, afwerken en leveren gebeuren in één gebouw, op één planning, onder één verantwoordelijkheid.',
    heroAlt: 'Plasmasnijkop aan het werk over zware staalplaat',
    processEyebrow: 'Hoe een project loopt',
    processTitle: 'Vijf fasen, en bij elke hoort u van ons.',
    processLede:
      'Zware constructie gaat stilletjes mis, weken voordat iemand het merkt. Ons antwoord is een vast ritme van rapporteren, niet de belofte te bellen als er iets opduikt.',
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
    ctaTitle: 'Twijfelt u of het te maken is?',
    ctaBody:
      'Stuur de tekening toch. De helft van ons werk begint met de vraag of een sectie uit één stuk kan — en dat kan meestal.',
  },

  industriesPage: {
    title: 'Sectoren',
    description:
      'Metal Holland produceert voor scheepsbouw en jachtbouw, offshore en energie, infrastructuur en bruggen, en industriële machinebouw.',
    eyebrow: 'Sectoren',
    heroTitle: 'Waar ons staal terechtkomt.',
    heroLede:
      'Rompen, platforms, bruggen en machines. Andere regels, andere papieren, dezelfde discipline op de werkvloer.',
    heroAlt: 'Een schip op zee bij zonsondergang',
    workingEyebrow: 'Samenwerken',
    workingTitle: 'Waar een constructiepartner eigenlijk voor is.',
    working: [
      {
        title: 'Capaciteit die een piek opvangt',
        body: 'Werven en OEM’s zetten ons in voor het werk dat hun eigen hal niet kan opnemen zonder al het andere op te schuiven.',
      },
      {
        title: 'Eén partij, hele scope',
        body: 'Snijden, lassen, conserveren en transport komen bij ons vandaan. Er zit geen naad tussen leveranciers waar een probleem in kan vallen.',
      },
      {
        title: 'Documentatie die een audit doorstaat',
        body: 'Certificaten, procedures en keuringsrapporten worden tijdens het werk verzameld, zodat oplevering geen opgraving wordt.',
      },
    ],
    ctaTitle: 'Uw sector er niet bij?',
    ctaBody:
      'Als het zwaar is, gelast en van staal, kennen we het werk waarschijnlijk. Vertel ons wat u bouwt.',
  },

  facilityPage: {
    title: 'Bedrijf & machinepark',
    description:
      'Het productiebedrijf van Metal Holland: overdekte hallen, CNC-snijtafels, boorlijnen, walsen, lasplaatsen, stralen en gronden, en belading voor exceptioneel transport.',
    eyebrow: 'Bedrijf',
    heroTitle: 'De werkvloer.',
    heroLede:
      'Vier overdekte hallen, portaalsnijden, kranen in elke beuk en een terrein op maat van secties die op een dieplader vertrekken.',
    heroAlt: 'Interieur van een productiehal van Metal Holland',
    worksEyebrow: 'Het bedrijf',
    worksTitle: 'Eén locatie, van begin tot eind.',
    worksLede:
      'Plaat komt aan de ene kant van het terrein binnen en verlaat de andere kant als geconserveerde, ingemeten en gedocumenteerde sectie. Er wordt tussen bewerkingen niets door de stad gereden.',
    worksAlt: 'Luchtfoto van het bedrijf van Metal Holland',
    figures: [
      { value: '32,000 m²+', label: 'Terreinoppervlak' },
      { value: '[4]', label: 'Productiehallen' },
      { value: '[XX] t', label: 'Max. kraancapaciteit' },
      { value: '13 m', label: 'Langste verwerkte sectie' },
    ],
    equipmentEyebrow: 'Machinepark',
    equipmentTitle: 'Wat er op de vloer staat.',
    equipmentLede:
      'Een indicatieve lijst. Vraag naar een specifieke maat, dikte of tolerantie en u krijgt een recht antwoord of het past.',
    machinesEyebrow: 'Machines',
    machinesTitle: 'Die het noemen waard zijn.',
    machinesLede:
      'Twee plasmatafels van dertig meter, een kantbank van 320 ton, een boorlijn en een ontbraammachine. Samen dekken ze het meeste van wat als tekening binnenkomt.',
    galleryEyebrow: 'In de hallen',
    galleryTitle: 'Werk in uitvoering.',
    gallery: [
      { slug: 'cnc-gantry', alt: 'CNC-portaalsnijtafel in de plaathal' },
      { slug: 'welding-hall', alt: 'Lassers werken aan secties in de productiehal' },
      { slug: 'nested-plate', alt: 'Genest uitgesneden delen uit één plaat' },
      { slug: 'machine-hall', alt: 'Machinehal met bovenloopkraan' },
      { slug: 'drilling-detail', alt: 'Boren van een profiel op de boorlijn' },
      { slug: 'pipe-fabrication', alt: 'Productie van pijpspools in uitvoering' },
      { slug: 'steel-sections', alt: 'Gegronde staalsecties gereed voor verzending' },
    ],
    logisticsEyebrow: 'Bij u afgeleverd',
    logisticsTitle: 'Secties vertrekken in één stuk.',
    logisticsLede:
      'Wij lossen liever een transportprobleem op dan een constructie op te delen in stukken die op locatie opnieuw gelast moeten worden. Exceptioneel transport, begeleiding en vergunningen horen bij het werk, ze zijn geen bijzaak.',
    logisticsBody:
      'Binnen het hek geldt hetzelfde. Ons eigen heftruckpark verplaatst plaat en afgewerkte secties tussen de hallen en het terrein, zodat een constructie wacht op de volgende bewerking en niet op een gehuurde machine.',
    forkliftsAlt: 'Het heftruckpark van Metal Holland op een rij op het terrein, van bovenaf gefilmd',
    ctaTitle: 'Kom het bekijken.',
    ctaBody:
      'Bezoek is welkom. Loop door de hallen, ontmoet de mensen die uw werk zouden bouwen, en beoordeel het bedrijf zelf.',
  },

  projectsPage: {
    title: 'Projecten',
    description:
      'Geselecteerd werk van Metal Holland — brugsecties, rompsecties, pijpspools, gelaste liggers en machineframes in serie.',
    eyebrow: 'Projecten',
    heroTitle: 'Geselecteerd werk.',
    heroLede:
      'Een dwarsdoorsnede van wat het terrein verlaat. Namen van opdrachtgevers en cijfers delen we op aanvraag, waar vertrouwelijkheid dat toelaat.',
    heroAlt: 'Een gelaste vakwerkconstructie op bokken in de productiehal',
    filter: 'Filter',
    all: 'Alles',
    empty: 'Nog geen projecten vermeld in deze sector.',
    ctaTitle: 'Referenties voor uw sector.',
    ctaBody:
      'Vraag ernaar en we brengen u in contact met opdrachtgevers met werk zoals dat van u — de nuttigste referentie is altijd die bij uw eigen tekeningen past.',
  },

  aboutPage: {
    title: 'Over ons',
    description:
      'Metal Holland combineert Nederlandse engineering en projectleiding met een volledig productiebedrijf — snijden, vormen, lassen en afwerken van zware constructies in eigen huis.',
    eyebrow: 'Over ons',
    heroTitle: 'Nederlandse maatstaf, echte capaciteit.',
    heroLede:
      'Een constructiebedrijf gebouwd zoals opdrachtgevers wensen dat meer leveranciers gebouwd waren: één werkplaats, één verantwoordelijke partij, en een recht antwoord over wat er mogelijk is.',
    heroAlt: 'Een operator van Metal Holland aan een bedieningspaneel',
    storyEyebrow: 'Ons verhaal',
    storyTitle: 'Gebouwd rond een werkvloer, niet rond een verkoopbalie.',
    storyLede:
      'Metal Holland bestaat omdat opdrachtgevers in de Nederlandse maritieme en infrastructuurwereld steeds twee dingen tegelijk nodig hadden: engineering waarmee ze in hun eigen taal konden overleggen, en productiecapaciteit die groot genoeg was om iets te betekenen.',
    storyBody1:
      'Dus bouwden we beide onder één dak in Šamac. Projectleiding, werkvoorbereiding en klantcontact zitten naast de vloer, en snijden, vormen, lassen, afwerken en beladen gebeuren in onze eigen hallen, op onze eigen machines, met onze eigen mensen. Tussen een aanvraag en het staal zit geen keten van onderaannemers.',
    storyBody2:
      'Het resultaat is onopvallend en moeilijk te veinzen: secties die op de afgesproken datum aankomen, op de afgesproken maat, met het dossier dat aantoont hoe ze gemaakt zijn. Het meeste van ons werk komt inmiddels van opdrachtgevers die ons al eens iets gestuurd hebben.',
    valuesEyebrow: 'Hoe we werken',
    valuesTitle: 'Vier dingen waar we niet aan tornen.',
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
    formTitle: 'Neem contact op',
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
    heroLede:
      'De meeste mensen hier maken dingen voor de kost. Is dat het werk dat u zoekt, dan horen we graag van u.',
    heroAlt: 'Constructiewerkers van Metal Holland aan het werk in de hal',
    introEyebrow: 'Werken hier',
    introTitle: 'Vast werk, echte machines.',
    introBody1:
      'Wij zijn een constructiebedrijf, geen uitzendbureau. Wie we aannemen blijft bij ons in dienst, werkt in onze hallen en wordt opgeleid op onze eigen machines. Onze lassers kwalificeren we zelf en die kwalificaties houden we actueel.',
    introBody2:
      'We nemen sollicitaties aan of er nu een vacature openstaat of niet. Goede monteurs en lassers zijn schaars, dus het dossier blijft open.',
    points: [
      {
        title: 'Opgeleid, niet alleen aangenomen',
        body: 'Laskwalificaties worden op onze rekening verlengd, en nieuwe mensen leren op de machines die ze gaan draaien.',
      },
      {
        title: 'Eén locatie, geen reizen',
        body: 'Het werk is hier in Šamac. Na de dienst gaat u naar huis, niet naar een hotel in een ander land.',
      },
      {
        title: 'Op tijd betaald',
        body: 'Het loon staat op de afgesproken datum op de rekening. Dat zou geen argument moeten zijn, en toch.',
      },
    ],
    formTitle: 'Solliciteren',
    formNote:
      'Velden met een sterretje zijn verplicht. Voeg hier niets toe als bijlage — willen we een cv of certificaten, dan sturen we u een adres om ze heen te sturen.',
    fields: {
      name: 'Naam',
      namePlaceholder: 'Uw naam',
      email: 'E-mail',
      emailPlaceholder: 'naam@voorbeeld.nl',
      phone: 'Telefoon',
      phonePlaceholder: 'Zodat we u kunnen bellen',
      role: 'Welk werk',
      rolePlaceholder: 'Kies een vak',
      experience: 'Jaren ervaring',
      experiencePlaceholder: 'Bijvoorbeeld: 6',
      availability: 'Beschikbaar vanaf',
      availabilityPlaceholder: 'Een datum, of zo snel mogelijk',
      message: 'Vertel ons over uw ervaring',
      messagePlaceholder:
        'Waaraan u hebt gewerkt, welke machines of processen u kent, en welke certificaten u hebt.',
    },
    submit: 'Sollicitatie versturen',
    sending: 'Versturen…',
    success: 'Dank u — we hebben uw sollicitatie en nemen contact op.',
    error: 'Er ging iets mis. Mail ons rechtstreeks:',
    subject: 'Sollicitatie',
    asideTitle: 'Liever bellen?',
    asideBody:
      'Bel het bedrijf tijdens openingstijden en vraag naar de werkplaats. Kan niemand u die dag rondleiden, dan spreken we een andere keer af.',
    ctaTitle: 'Eerst de werkplaats zien?',
    ctaBody:
      'Bezoek is welkom, ook voordat u solliciteert. Loop door de hallen, bekijk de machines, en beslis of dit de werkplaats is waar u wilt werken.',
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
    /** Trades offered in the careers form's select. */
    roles: [
      'Lasser',
      'Monteur / samenbouwer',
      'Machineoperator',
      'Werkvoorbereider',
      'Projectingenieur',
      'Stralen & conserveren',
      'Iets anders',
    ],

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
        title: 'Scheepsbouw & jachtbouw',
        summary:
          'Rompsecties, fundaties en outfittingstaal, gebouwd volgens werftekeningen en geleverd op de planning van de werf.',
        bullets: [
          'Romp- en bovenbouwsecties',
          'Schotten, liggers en webframes',
          'Motor- en apparatuurfundaties',
          'Outfittingstaal en rvs-detailwerk',
        ],
        image: 'industry-shipbuilding',
      },
      {
        id: 'offshore',
        title: 'Offshore & energie',
        summary:
          'Zware gelaste constructies voor offshore en energie, waar documentatie net zo telt als het staal.',
        bullets: [
          'Frames, skids en draagconstructies',
          'Deksecties en toegangsstaal',
          'Pijpspools en leidingondersteuningen',
          'Volledige traceerbaarheid en lasdocumentatie',
        ],
        image: 'industry-offshore',
      },
      {
        id: 'infrastructure',
        title: 'Infrastructuur & bruggen',
        summary:
          'Bruggenliggers en modulaire brugonderdelen, gefabriceerd in secties op maat van wegtransport.',
        bullets: [
          'Gelaste bruggenliggers en kokerliggers',
          'Modulaire en tijdelijke brugonderdelen',
          'Sluis-, stuw- en waterbouwkundig staal',
          'Leuningen, roosters en toegangsconstructies',
        ],
        image: 'industry-infrastructure',
      },
      {
        id: 'industrial',
        title: 'Industrie & machinebouw',
        summary:
          'Frames, trechters en machinebedden voor OEM’s die productiecapaciteit nodig hebben waar ze op kunnen plannen.',
        bullets: [
          'Machineframes en gelaste bedden',
          'Trechters, stortkokers en transportconstructies',
          'Opslagtanks en drukloze vaten',
          'Serie- en herhaalproductie',
        ],
        image: 'steel-frame',
      },
    ],

    stats: [
      { value: '20+', label: 'Jaar in zware constructie', sub: 'Voor Europese opdrachtgevers' },
      { value: '32,000 m²+', label: 'Productieoppervlak', sub: 'Verdeeld over [4] productiehallen' },
      { value: '1,000 t+', label: 'Staal per jaar verwerkt', sub: 'Plaat, profielen en kokerprofielen' },
      { value: '50+', label: 'Mensen op de vloer', sub: 'Lassers, monteurs, operators, ingenieurs' },
    ],

    processSteps: [
      {
        step: '01',
        title: 'Aanvraag & engineeringtoets',
        body: 'We lezen de tekeningen voordat we offreren. Waar ontwerp en werkplaats elkaar tegenspreken, hoort u dat in de aanvraagfase — niet tijdens de productie.',
      },
      {
        step: '02',
        title: 'Werkvoorbereiding',
        body: 'Nesting, snijbestanden, lasprocedures en een bouwvolgorde worden per project opgesteld, zodat de vloer vanuit één afgesproken plan werkt.',
      },
      {
        step: '03',
        title: 'Productie',
        body: 'Snijden, vormen, passen en lassen gebeuren onder één dak. Voortgang en keuringspunten worden in een afgesproken ritme gerapporteerd.',
      },
      {
        step: '04',
        title: 'Keuring & afwerking',
        body: 'Maatcontrole, laskeuring en oppervlaktebehandeling, met de certificaten en rapporten verzameld in het opleverdossier.',
      },
      {
        step: '05',
        title: 'Levering',
        body: 'Secties worden beladen, gezekerd en naar uw werf of locatie vervoerd — inclusief exceptioneel transport waar de sectie daarom vraagt.',
      },
    ],

    certifications: [
      { code: 'EN 1090-2', label: 'Uitvoering van staalconstructies' },
      { code: 'EN ISO 3834-2', label: 'Uitgebreide kwaliteitseisen voor smeltlassen' },
      { code: 'EN ISO 9001', label: 'Kwaliteitsmanagement' },
      { code: 'EN ISO 14001', label: 'Milieumanagement' },
      { code: 'EN ISO 45001', label: 'Gezond en veilig werken' },
    ],

    projects: [
      {
        title: 'Modulaire brugsecties',
        sector: 'Infrastructuur',
        meta: '[Opdrachtgever] · [Jaar] · [XXX] ton',
        body: 'Gelaste vakwerksecties gefabriceerd, proefgemonteerd en verzonden als transporteerbare eenheden voor montage op locatie.',
        image: 'bridge-transport',
      },
      {
        title: 'Rompsecties & fundaties',
        sector: 'Scheepsbouw',
        meta: '[Opdrachtgever] · [Jaar] · [XXX] ton',
        body: 'Schotten, webframes en apparatuurfundaties gebouwd volgens werftekeningen en op volgorde aan de bouwdok geleverd.',
        image: 'welding-hall',
      },
      {
        title: 'Pijpspools & draagstaal',
        sector: 'Offshore & energie',
        meta: '[Opdrachtgever] · [Jaar] · [XXX] spools',
        body: 'Spoolproductie met volledige lastraceerbaarheid, geleverd met de keuringsdocumentatie die offshore-oplevering vereist.',
        image: 'pipe-fabrication',
      },
      {
        title: 'Zware gelaste liggers',
        sector: 'Infrastructuur',
        meta: '[Opdrachtgever] · [Jaar] · [XXX] ton',
        body: 'Plaatliggers gesneden, samengebouwd en onderpoederdek gelast, daarna gestraald en gegrond vóór transport.',
        image: 'truss-assembly',
      },
      {
        title: 'Machineframes, serieproductie',
        sector: 'Industrie',
        meta: '[Opdrachtgever] · [Jaar] · [XXX] stuks',
        body: 'Herhaalproductie van gelaste frames uit een vaste mal, met maatcontrole op elk stuk.',
        image: 'steel-frame',
      },
      {
        title: 'Rvs outfittingstaal',
        sector: 'Jachtbouw',
        meta: '[Opdrachtgever] · [Jaar] · [XXX] delen',
        body: 'Gevormd en gepolijst rvs-detailwerk voor interieur- en dekoutfitting, afgewerkt tot zichtvlakkwaliteit.',
        image: 'formed-plate',
      },
    ],

    values: [
      {
        title: 'We zeggen wat mogelijk is',
        body: 'Een reële datum waar u omheen kunt plannen is meer waard dan een optimistische die u niet haalt. Is een planning krap, dan zeggen we dat voordat we hem aannemen.',
      },
      {
        title: 'Het dossier hoort bij het product',
        body: 'Materiaalcertificaten, lasprocedures, keuringsrapporten. Een constructie die zonder documentatie aankomt, is niet af.',
      },
      {
        title: 'Eén werkplaats, één verantwoordelijkheid',
        body: 'Van snijden tot conserveren gebeurt onder ons eigen dak, zodat er geen naad in de keten zit waar verantwoordelijkheid kan wegvallen.',
      },
      {
        title: 'Gebouwd door mensen die lassen',
        body: 'Onze engineering zit naast de werkvloer. Beslissingen op papier worden getoetst bij de mensen die ze in staal moeten laten werken.',
      },
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
