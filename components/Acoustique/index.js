'use client';

import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const WHATSAPP_HREF = 'https://wa.me/41772792514';

const copy = {
  fr: {
    eyebrow: 'Acoustique & insonorisation · Genève',
    title: 'Insonorisation & traitement acoustique sur mesure',
    lede:
      'Pour cabinets, restaurants, bureaux, commerces, studios, home cinémas, salles d’écoute hi-fi et habitations. Diagnostic sur site, mesures acoustiques, conception et réalisation des travaux.',
    chips: ['Diagnostic', 'Insonorisation', 'Réalisation sur site', 'Mesures avant / après'],
    servicesEyebrow: 'Nos services',
    servicesTitle: 'Comprendre le problème avant de le traiter',
    servicesLede:
      'Chaque intervention commence par l’analyse du lieu, de son usage réel et des voies possibles de transmission. Nous définissons ensuite les mesures utiles et la solution adaptée.',
    services: [
      {
        icon: '📐',
        title: 'Diagnostic & mesures',
        body:
          'Mesures sur site, temps de réverbération, niveaux sonores, fréquences problématiques et identification des points ou chemins de transmission selon les besoins du projet.',
      },
      {
        icon: '🔇',
        title: 'Insonorisation',
        body:
          'Conception et réalisation de solutions pour murs, plafonds, sols, portes, vitrages et autres points faibles : doublages, obturations, renforcement de portes, joints acoustiques et solutions sur mesure pour limiter la transmission du bruit.',
      },
      {
        icon: '〽️',
        title: 'Traitement acoustique',
        body:
          'Conception, fabrication et installation de solutions destinées à améliorer l’acoustique intérieure : absorption, contrôle de la réverbération, panneaux et éléments sur mesure intégrés à l’esthétique du lieu.',
      },
      {
        icon: '📊',
        title: 'Analyse du bruit',
        body:
          'Recherche des sources de nuisance, analyse des chemins de propagation et recommandations concrètes avant travaux.',
      },
    ],
    differenceEyebrow: 'Deux objectifs différents',
    differenceTitle: 'Insonorisation ou traitement acoustique ?',
    differenceSoundproofingTitle: 'Insonorisation',
    differenceSoundproofing:
      'Limiter la transmission du bruit entre deux espaces en agissant sur les parois, ouvertures, portes, joints et autres points faibles.',
    differenceTreatmentTitle: 'Traitement acoustique',
    differenceTreatment:
      'Améliorer le comportement sonore à l’intérieur d’une pièce en contrôlant notamment la réverbération et les réflexions.',
    onsiteEyebrow: 'De l’étude aux travaux',
    onsiteTitle: 'Une intervention directement sur le bâtiment',
    onsiteBody:
      'Nous intervenons sur les murs, portes, plafonds, sols, vitrages, ouvertures et autres points de transmission. Le projet peut inclure construction, adaptation, renforcement, étanchéité acoustique, menuiserie et fabrication sur mesure.',
    teamEyebrow: 'L’équipe',
    teamTitle: 'Une expertise complémentaire',
    teamLede:
      'Chaque projet réunit trois compétences complémentaires : acoustique architecturale, réalisation technique sur mesure et expérience professionnelle du son.',
    team: [
      {
        initials: 'MH',
        name: 'Mirko Hrubik',
        role: 'Acoustique architecturale & analyse technique',
        body:
          'Ingénieur informaticien, titulaire d’un Master en acoustique architecturale et technicien du son. Il prend en charge l’analyse acoustique, les mesures, l’étude de la transmission et la conception technique des solutions.',
      },
      {
        initials: 'GT',
        name: 'Gaspar Tornaroli',
        role: 'Construction sur mesure & menuiserie de précision',
        body:
          'Menuisier de précision spécialisé dans la fabrication sur mesure et les finitions soignées. Il réalise les adaptations, renforcements, structures, cadres et éléments constructifs nécessaires directement sur site.',
      },
      {
        initials: 'EC',
        name: 'Ezequiel Cappellano',
        role: 'Coordination de projet & expérience professionnelle du son',
        body:
          'Fondateur d’Atahualpa Music Studio, musicien et professionnel de l’audio, avec une expérience pratique de projets d’insonorisation avec Gaspar Tornaroli. Il assure la coordination, la relation client et le suivi du projet en français, anglais, espagnol, italien et portugais.',
      },
    ],
    methodEyebrow: 'Notre méthode',
    methodTitle: 'Une méthode adaptée à chaque projet',
    methodLede: 'Chaque projet est différent. Les étapes et les mesures nécessaires sont définies en fonction du lieu, de l’usage et de la problématique rencontrée.',
    steps: [
      ['01', 'Visite', 'Observation du lieu, de son usage, des contraintes constructives, des nuisances et des voies possibles de transmission.'],
      ['02', 'Mesures & diagnostic', 'Lorsque le projet le nécessite, nous réalisons des relevés acoustiques adaptés : niveaux sonores, réverbération, fréquences, points faibles ou chemins de transmission. Ces mesures peuvent intervenir à différentes étapes du projet.'],
      ['03', 'Proposition', 'Solution technique, matériaux, méthode constructive, niveau d’intervention et intégration esthétique clairement définis.'],
      ['04', 'Réalisation', 'Réalisation des travaux sur site : construction, adaptation, renforcement, étanchéité acoustique et fabrication sur mesure selon les besoins du projet.'],
      ['05', 'Contrôle', 'Mesures après intervention pour comparer les résultats, vérifier l’amélioration obtenue et ajuster si nécessaire.'],
    ],
    situationsEyebrow: 'Pour quels lieux ?',
    situationsTitle: 'Des solutions pensées pour l’usage réel du lieu',
    situations:
      'Studios, salles de répétition, cabinets médicaux ou de bien-être, bureaux, commerces, restaurants et bars, espaces événementiels, home cinémas, salles d’écoute hi-fi et habitations privées.',
    residentialTitle: 'Home cinéma & haute fidélité',
    residentialBody:
      'Pour les installations home cinéma et hi-fi, nous pouvons combiner insonorisation — pour limiter la transmission vers les pièces voisines — et traitement acoustique afin d’optimiser l’écoute, la clarté et le confort sonore.',
    ctaEyebrow: 'Un problème acoustique ?',
    ctaTitle: 'Commençons par une visite du lieu',
    ctaLede:
      'Expliquez-nous la situation, le type de bruit ou l’objectif acoustique. Nous inspectons le lieu, identifions les voies de transmission pertinentes, définissons les mesures utiles puis proposons l’intervention adaptée.',
    ctaWhatsapp: 'Écrire sur WhatsApp',
    ctaEmail: 'Envoyer un e-mail',
  },
  en: {
    eyebrow: 'Acoustics & soundproofing · Geneva',
    title: 'Soundproofing & custom acoustic treatment',
    lede:
      'For clinics, restaurants, offices, shops, studios, home cinemas, hi-fi listening rooms and private homes. On-site diagnostics, acoustic measurements, design and implementation of the work.',
    chips: ['Diagnostics', 'Soundproofing', 'On-site implementation', 'Before / after measurements'],
    servicesEyebrow: 'Our services',
    servicesTitle: 'Understand the problem before treating it',
    servicesLede:
      'Every project starts with the space, how it is actually used and the possible sound-transmission paths. We then define the relevant measurements and the right solution.',
    services: [
      {
        icon: '📐',
        title: 'Diagnostics & measurements',
        body:
          'On-site measurements, reverberation time, sound levels, problematic frequencies and identification of weak points or transmission paths as required by the project.',
      },
      {
        icon: '🔇',
        title: 'Soundproofing',
        body:
          'Design and implementation of solutions for walls, ceilings, floors, doors, glazing and other weak points: wall linings, closures, door reinforcement, acoustic seals and custom-built solutions to reduce sound transmission.',
      },
      {
        icon: '〽️',
        title: 'Acoustic treatment',
        body:
          'Design, fabrication and installation of solutions that improve room acoustics: absorption, reverberation control, custom panels and elements integrated into the aesthetics of the space.',
      },
      {
        icon: '📊',
        title: 'Noise analysis',
        body:
          'Identify noise sources, propagation paths and practical recommendations before work begins.',
      },
    ],
    differenceEyebrow: 'Two different goals',
    differenceTitle: 'Soundproofing or acoustic treatment?',
    differenceSoundproofingTitle: 'Soundproofing',
    differenceSoundproofing:
      'Reduce sound transmission between spaces by working on partitions, openings, doors, seals and other weak points.',
    differenceTreatmentTitle: 'Acoustic treatment',
    differenceTreatment:
      'Improve the sound behaviour inside a room by controlling factors such as reverberation and reflections.',
    onsiteEyebrow: 'From study to construction',
    onsiteTitle: 'We work directly on the building',
    onsiteBody:
      'We intervene on walls, doors, ceilings, floors, glazing, openings and other transmission points. A project may involve construction, adaptation, reinforcement, acoustic sealing, carpentry and bespoke fabrication.',
    teamEyebrow: 'The team',
    teamTitle: 'Complementary expertise',
    teamLede:
      'Each project combines three complementary skills: architectural acoustics, bespoke technical construction and professional sound experience.',
    team: [
      {
        initials: 'MH',
        name: 'Mirko Hrubik',
        role: 'Architectural acoustics & technical analysis',
        body:
          'Computer engineer, holder of a Master’s degree in Architectural Acoustics and sound technician. He handles acoustic analysis, measurements, sound-transmission assessment and technical design of the solutions.',
      },
      {
        initials: 'GT',
        name: 'Gaspar Tornaroli',
        role: 'Bespoke construction & precision carpentry',
        body:
          'Precision carpenter specialising in custom fabrication and detailed finishing. He carries out the adaptations, reinforcement, structures, frames and construction elements required directly on site.',
      },
      {
        initials: 'EC',
        name: 'Ezequiel Cappellano',
        role: 'Project coordination & professional audio',
        body:
          'Founder of Atahualpa Music Studio, professional musician and audio specialist, with practical soundproofing-project experience alongside Gaspar Tornaroli. He coordinates projects, client communication and follow-up in French, English, Spanish, Italian and Portuguese.',
      },
    ],
    methodEyebrow: 'Our method',
    methodTitle: 'A method adapted to each project',
    methodLede: 'Every project is different. The necessary steps and measurements are defined according to the space, its use and the issue being addressed.',
    steps: [
      ['01', 'Site visit', 'Review the space, its use, construction constraints, noise issues and possible transmission paths.'],
      ['02', 'Measurements & diagnosis', 'When the project requires it, we carry out appropriate acoustic measurements: sound levels, reverberation, frequencies, weak points or transmission paths. These measurements may take place at different stages of the project.'],
      ['03', 'Proposal', 'Clearly defined technical solution, materials, construction method, scope of work and aesthetic integration.'],
      ['04', 'Implementation', 'On-site work including construction, adaptation, reinforcement, acoustic sealing and bespoke fabrication according to the project.'],
      ['05', 'Control', 'Post-work measurements to compare results, verify the improvement achieved and fine-tune where necessary.'],
    ],
    situationsEyebrow: 'Where?',
    situationsTitle: 'Solutions designed around how the space is actually used',
    situations:
      'Studios, rehearsal rooms, medical and wellness practices, offices, shops, restaurants and bars, event spaces, home cinemas, hi-fi listening rooms and private homes.',
    residentialTitle: 'Home cinema & high-fidelity audio',
    residentialBody:
      'For home cinema and hi-fi installations, we can combine soundproofing — to limit transmission to neighbouring rooms — with acoustic treatment to optimise listening quality, clarity and comfort.',
    ctaEyebrow: 'Acoustic problem?',
    ctaTitle: 'Start with a visit to the space',
    ctaLede:
      'Tell us about the noise issue or acoustic goal. We inspect the site, identify the relevant transmission paths, define the useful measurements and then propose the appropriate intervention.',
    ctaWhatsapp: 'Message us on WhatsApp',
    ctaEmail: 'Send an email',
  },
  es: {
    eyebrow: 'Acústica e insonorización · Ginebra',
    title: 'Insonorización y tratamiento acústico a medida',
    lede:
      'Para gabinetes, restaurantes, oficinas, comercios, estudios, home cinemas, salas de escucha hi-fi y viviendas. Diagnóstico in situ, mediciones acústicas, diseño y realización de los trabajos.',
    chips: ['Diagnóstico', 'Insonorización', 'Realización in situ', 'Mediciones antes / después'],
    servicesEyebrow: 'Nuestros servicios',
    servicesTitle: 'Entender el problema antes de tratarlo',
    servicesLede:
      'Cada intervención empieza por analizar el lugar, su uso real y las posibles vías de transmisión. Después definimos las mediciones útiles y la solución adecuada.',
    services: [
      {
        icon: '📐',
        title: 'Diagnóstico y mediciones',
        body:
          'Mediciones in situ, tiempo de reverberación, niveles sonoros, frecuencias problemáticas e identificación de puntos débiles o vías de transmisión según las necesidades del proyecto.',
      },
      {
        icon: '🔇',
        title: 'Insonorización',
        body:
          'Diseño y realización de soluciones para paredes, techos, suelos, puertas, vidrios y otros puntos débiles: trasdosados, cierres, refuerzo de puertas, juntas acústicas y soluciones a medida para reducir la transmisión sonora.',
      },
      {
        icon: '〽️',
        title: 'Tratamiento acústico',
        body:
          'Diseño, fabricación e instalación de soluciones para mejorar la acústica interior: absorción, control de reverberación, paneles y elementos a medida integrados en la estética del espacio.',
      },
      {
        icon: '📊',
        title: 'Análisis de ruido',
        body:
          'Detección de fuentes de molestia, análisis de vías de propagación y recomendaciones concretas antes de la obra.',
      },
    ],
    differenceEyebrow: 'Dos objetivos diferentes',
    differenceTitle: '¿Insonorización o tratamiento acústico?',
    differenceSoundproofingTitle: 'Insonorización',
    differenceSoundproofing:
      'Reducir la transmisión del ruido entre dos espacios actuando sobre cerramientos, aberturas, puertas, juntas y otros puntos débiles.',
    differenceTreatmentTitle: 'Tratamiento acústico',
    differenceTreatment:
      'Mejorar el comportamiento sonoro dentro de una sala controlando, entre otras cosas, la reverberación y las reflexiones.',
    onsiteEyebrow: 'Del estudio a la obra',
    onsiteTitle: 'Intervenimos directamente sobre el espacio',
    onsiteBody:
      'Trabajamos sobre paredes, puertas, techos, suelos, vidrios, aberturas y otros puntos de transmisión. El proyecto puede incluir construcción, adaptación, refuerzo, sellado acústico, carpintería y fabricación a medida.',
    teamEyebrow: 'El equipo',
    teamTitle: 'Experiencia complementaria',
    teamLede:
      'Cada proyecto reúne tres competencias complementarias: acústica arquitectónica, realización técnica a medida y experiencia profesional del sonido.',
    team: [
      {
        initials: 'MH',
        name: 'Mirko Hrubik',
        role: 'Acústica arquitectónica y análisis técnico',
        body:
          'Ingeniero informático, con un Máster en Acústica Arquitectónica y técnico de sonido. Se ocupa del análisis acústico, las mediciones, el estudio de la transmisión y el diseño técnico de las soluciones.',
      },
      {
        initials: 'GT',
        name: 'Gaspar Tornaroli',
        role: 'Construcción a medida y carpintería de precisión',
        body:
          'Carpintero de precisión especializado en fabricación a medida y terminaciones cuidadas. Realiza in situ las adaptaciones, refuerzos, estructuras, bastidores y elementos constructivos que requiere cada proyecto.',
      },
      {
        initials: 'EC',
        name: 'Ezequiel Cappellano',
        role: 'Coordinación de proyectos y audio profesional',
        body:
          'Fundador de Atahualpa Music Studio, músico y profesional del audio, con experiencia práctica en proyectos de insonorización junto a Gaspar Tornaroli. Coordina los proyectos, la comunicación con el cliente y el seguimiento en francés, inglés, español, italiano y portugués.',
      },
    ],
    methodEyebrow: 'Nuestro método',
    methodTitle: 'Un método adaptado a cada proyecto',
    methodLede: 'Cada proyecto es diferente. Las etapas y las mediciones necesarias se definen según el espacio, su uso y la problemática encontrada.',
    steps: [
      ['01', 'Visita', 'Observación del espacio, su uso, las restricciones constructivas, las molestias y las posibles vías de transmisión.'],
      ['02', 'Mediciones y diagnóstico', 'Cuando el proyecto lo requiere, realizamos mediciones acústicas adaptadas: niveles sonoros, reverberación, frecuencias, puntos débiles o vías de transmisión. Estas mediciones pueden realizarse en distintas etapas del proyecto.'],
      ['03', 'Propuesta', 'Solución técnica, materiales, método constructivo, alcance e integración estética claramente definidos.'],
      ['04', 'Realización', 'Ejecución de los trabajos in situ: construcción, adaptación, refuerzo, sellado acústico y fabricación a medida según las necesidades del proyecto.'],
      ['05', 'Control', 'Mediciones posteriores para comparar resultados, verificar la mejora obtenida y ajustar si es necesario.'],
    ],
    situationsEyebrow: '¿Para qué espacios?',
    situationsTitle: 'Soluciones pensadas para el uso real del lugar',
    situations:
      'Estudios, salas de ensayo, gabinetes médicos y de bienestar, oficinas, comercios, restaurantes y bares, espacios de eventos, home cinemas, salas de escucha hi-fi y viviendas.',
    residentialTitle: 'Home cinema y alta fidelidad',
    residentialBody:
      'Para instalaciones de home cinema y hi-fi podemos combinar insonorización — para limitar la transmisión hacia los espacios vecinos — con tratamiento acústico para optimizar la escucha, la claridad y el confort sonoro.',
    ctaEyebrow: '¿Un problema acústico?',
    ctaTitle: 'Empecemos por una visita al lugar',
    ctaLede:
      'Contanos qué ruido molesta o cuál es el objetivo acústico. Inspeccionamos el espacio, identificamos las vías de transmisión relevantes, definimos qué conviene medir y luego proponemos la intervención adecuada.',
    ctaWhatsapp: 'Escribir por WhatsApp',
    ctaEmail: 'Enviar un e-mail',
  },
  it: {
    eyebrow: 'Acustica e insonorizzazione · Ginevra',
    title: 'Insonorizzazione e trattamento acustico su misura',
    lede:
      'Per studi professionali, ristoranti, uffici, negozi, studi musicali, home cinema, sale d’ascolto hi-fi e abitazioni. Diagnosi in situ, misure acustiche, progettazione e realizzazione dei lavori.',
    chips: ['Diagnosi', 'Insonorizzazione', 'Realizzazione in situ', 'Misure prima / dopo'],
    servicesEyebrow: 'I nostri servizi',
    servicesTitle: 'Capire il problema prima di intervenire',
    servicesLede:
      'Ogni intervento parte dall’analisi dello spazio, dal suo uso reale e dalle possibili vie di trasmissione. Definiamo poi le misure utili e la soluzione più adatta.',
    services: [
      {
        icon: '📐',
        title: 'Diagnosi e misure',
        body:
          'Misure in situ, tempo di riverbero, livelli sonori, frequenze problematiche e identificazione dei punti deboli o delle vie di trasmissione secondo le esigenze del progetto.',
      },
      {
        icon: '🔇',
        title: 'Insonorizzazione',
        body:
          'Progettazione e realizzazione di soluzioni per pareti, soffitti, pavimenti, porte, vetrate e altri punti deboli: contropareti, chiusure, rinforzo porte, guarnizioni acustiche e soluzioni su misura per ridurre la trasmissione sonora.',
      },
      {
        icon: '〽️',
        title: 'Trattamento acustico',
        body:
          'Progettazione, fabbricazione e installazione di soluzioni per migliorare l’acustica interna: assorbimento, controllo del riverbero, pannelli ed elementi su misura integrati nell’estetica dello spazio.',
      },
      {
        icon: '📊',
        title: 'Analisi del rumore',
        body:
          'Individuazione delle sorgenti di disturbo, analisi delle vie di propagazione e raccomandazioni concrete prima dei lavori.',
      },
    ],
    differenceEyebrow: 'Due obiettivi diversi',
    differenceTitle: 'Insonorizzazione o trattamento acustico?',
    differenceSoundproofingTitle: 'Insonorizzazione',
    differenceSoundproofing:
      'Limitare la trasmissione del rumore tra due spazi intervenendo su pareti, aperture, porte, guarnizioni e altri punti deboli.',
    differenceTreatmentTitle: 'Trattamento acustico',
    differenceTreatment:
      'Migliorare il comportamento sonoro all’interno di un ambiente controllando, tra gli altri aspetti, riverbero e riflessioni.',
    onsiteEyebrow: 'Dallo studio ai lavori',
    onsiteTitle: 'Interveniamo direttamente sull’edificio',
    onsiteBody:
      'Lavoriamo su pareti, porte, soffitti, pavimenti, vetrate, aperture e altri punti di trasmissione. Il progetto può includere costruzione, adattamento, rinforzo, sigillatura acustica, falegnameria e fabbricazione su misura.',
    teamEyebrow: 'Il team',
    teamTitle: 'Competenze complementari',
    teamLede:
      'Ogni progetto unisce tre competenze complementari: acustica architettonica, realizzazione tecnica su misura ed esperienza professionale del suono.',
    team: [
      {
        initials: 'MH',
        name: 'Mirko Hrubik',
        role: 'Acustica architettonica e analisi tecnica',
        body:
          'Ingegnere informatico, titolare di un Master in Acustica Architettonica e tecnico del suono. Si occupa di analisi acustica, misure, studio della trasmissione e progettazione tecnica delle soluzioni.',
      },
      {
        initials: 'GT',
        name: 'Gaspar Tornaroli',
        role: 'Costruzione su misura e falegnameria di precisione',
        body:
          'Falegname di precisione specializzato nella fabbricazione su misura e nelle finiture curate. Realizza in situ adattamenti, rinforzi, strutture, telai ed elementi costruttivi necessari al progetto.',
      },
      {
        initials: 'EC',
        name: 'Ezequiel Cappellano',
        role: 'Coordinamento del progetto e audio professionale',
        body:
          'Fondatore di Atahualpa Music Studio, musicista e professionista dell’audio, con esperienza pratica in progetti di insonorizzazione insieme a Gaspar Tornaroli. Coordina i progetti, la comunicazione con il cliente e il follow-up in francese, inglese, spagnolo, italiano e portoghese.',
      },
    ],
    methodEyebrow: 'Il nostro metodo',
    methodTitle: 'Un metodo adattato a ogni progetto',
    methodLede: 'Ogni progetto è diverso. Le fasi e le misure necessarie vengono definite in funzione dello spazio, del suo utilizzo e della problematica riscontrata.',
    steps: [
      ['01', 'Sopralluogo', 'Osservazione dello spazio, del suo uso, dei vincoli costruttivi, dei disturbi e delle possibili vie di trasmissione.'],
      ['02', 'Misure e diagnosi', 'Quando il progetto lo richiede, realizziamo misure acustiche adeguate: livelli sonori, riverbero, frequenze, punti deboli o vie di trasmissione. Queste misure possono essere effettuate in diverse fasi del progetto.'],
      ['03', 'Proposta', 'Soluzione tecnica, materiali, metodo costruttivo, livello di intervento e integrazione estetica chiaramente definiti.'],
      ['04', 'Realizzazione', 'Esecuzione dei lavori in situ: costruzione, adattamento, rinforzo, sigillatura acustica e fabbricazione su misura secondo le esigenze del progetto.'],
      ['05', 'Controllo', 'Misure dopo l’intervento per confrontare i risultati, verificare il miglioramento ottenuto e regolare se necessario.'],
    ],
    situationsEyebrow: 'Per quali spazi?',
    situationsTitle: 'Soluzioni pensate per l’uso reale dello spazio',
    situations:
      'Studi, sale prove, studi medici e benessere, uffici, negozi, ristoranti e bar, spazi per eventi, home cinema, sale d’ascolto hi-fi e abitazioni private.',
    residentialTitle: 'Home cinema & alta fedeltà',
    residentialBody:
      'Per installazioni home cinema e hi-fi possiamo combinare insonorizzazione — per limitare la trasmissione verso gli ambienti vicini — e trattamento acustico per ottimizzare ascolto, chiarezza e comfort sonoro.',
    ctaEyebrow: 'Un problema acustico?',
    ctaTitle: 'Cominciamo con un sopralluogo',
    ctaLede:
      'Raccontaci il problema di rumore o l’obiettivo acustico. Ispezioniamo lo spazio, individuiamo le vie di trasmissione rilevanti, definiamo le misure utili e poi proponiamo l’intervento adatto.',
    ctaWhatsapp: 'Scrivi su WhatsApp',
    ctaEmail: 'Invia un’e-mail',
  },
};

const Acoustique = () => {
  const { locale } = useLanguage();
  const t = copy[locale] || copy.fr;

  return (
    <>
      <section className="acoustique-hero">
        <div className="acoustique-hero__overlay" aria-hidden="true" />
        <Container className="acoustique-hero__inner">
          <span className="acoustique-eyebrow acoustique-eyebrow--light">{t.eyebrow}</span>
          <h1 className="acoustique-hero__title">{t.title}</h1>
          <p className="acoustique-hero__lede">{t.lede}</p>
          <div className="acoustique-hero__actions">
            <a className="acoustique-btn acoustique-btn--primary" href="#services">
              {t.servicesEyebrow}
            </a>
            <a className="acoustique-btn acoustique-btn--ghost" href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
              {t.ctaWhatsapp}
            </a>
          </div>
          <ul className="acoustique-chips">
            {t.chips.map((chip) => <li key={chip}>{chip}</li>)}
          </ul>
        </Container>
      </section>

      <section id="services" className="acoustique-section">
        <Container>
          <div className="acoustique-head">
            <span className="acoustique-eyebrow">{t.servicesEyebrow}</span>
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesLede}</p>
          </div>

          <ul className="acoustique-services">
            {t.services.map((service) => (
              <li className="acoustique-card" key={service.title}>
                <span className="acoustique-card__icon" aria-hidden="true">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </li>
            ))}
          </ul>

          <div className="acoustique-difference">
            <div className="acoustique-difference__head">
              <span className="acoustique-eyebrow">{t.differenceEyebrow}</span>
              <h2>{t.differenceTitle}</h2>
            </div>
            <div className="acoustique-difference__grid">
              <article>
                <h3>{t.differenceSoundproofingTitle}</h3>
                <p>{t.differenceSoundproofing}</p>
              </article>
              <article>
                <h3>{t.differenceTreatmentTitle}</h3>
                <p>{t.differenceTreatment}</p>
              </article>
            </div>
          </div>

          <div className="acoustique-onsite">
            <span className="acoustique-eyebrow acoustique-eyebrow--light">{t.onsiteEyebrow}</span>
            <h2>{t.onsiteTitle}</h2>
            <p>{t.onsiteBody}</p>
          </div>
        </Container>
      </section>

      <section className="acoustique-team">
        <Container>
          <div className="acoustique-head">
            <span className="acoustique-eyebrow">{t.teamEyebrow}</span>
            <h2>{t.teamTitle}</h2>
            <p>{t.teamLede}</p>
          </div>
          <ul className="acoustique-team__grid">
            {t.team.map((member) => (
              <li className="acoustique-team__card" key={member.name}>
                <span className="acoustique-team__initials" aria-hidden="true">{member.initials}</span>
                <h3>{member.name}</h3>
                <p className="acoustique-team__role">{member.role}</p>
                <p>{member.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="acoustique-method">
        <Container variant="wide">
          <div className="acoustique-head">
            <span className="acoustique-eyebrow">{t.methodEyebrow}</span>
            <h2>{t.methodTitle}</h2>
            <p>{t.methodLede}</p>
          </div>
          <ol className="acoustique-steps">
            {t.steps.map(([number, title, body]) => (
              <li key={number}>
                <span className="acoustique-step__num">{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="acoustique-situations">
        <Container>
          <span className="acoustique-eyebrow">{t.situationsEyebrow}</span>
          <h2>{t.situationsTitle}</h2>
          <p>{t.situations}</p>
          <div className="acoustique-residential">
            <h3>{t.residentialTitle}</h3>
            <p>{t.residentialBody}</p>
          </div>
        </Container>
      </section>

      <section className="acoustique-cta">
        <Container className="acoustique-cta__inner">
          <div>
            <span className="acoustique-eyebrow">{t.ctaEyebrow}</span>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaLede}</p>
          </div>
          <div className="acoustique-cta__actions">
            <a className="acoustique-btn acoustique-btn--dark" href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
              {t.ctaWhatsapp}
            </a>
            <a className="acoustique-btn acoustique-btn--outline" href="mailto:contact@atahualpamusicstudio.com">
              {t.ctaEmail}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Acoustique;
