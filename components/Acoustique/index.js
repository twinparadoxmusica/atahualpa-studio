'use client';

import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const WHATSAPP_HREF = 'https://wa.me/41772792514';

const copy = {
  fr: {
    eyebrow: 'Acoustique · Genève',
    title: 'Des espaces qui sonnent juste',
    lede:
      'Diagnostic sur site, mesures acoustiques, analyse du bruit, insonorisation et traitement acoustique sur mesure.',
    chips: ['Mesures sur site', 'Insonorisation', 'Panneaux sur mesure', 'Avant / après'],
    servicesEyebrow: 'Nos services',
    servicesTitle: 'Comprendre le problème avant de le traiter',
    servicesLede:
      'Chaque intervention commence par l’écoute du lieu, son usage réel et des mesures adaptées.',
    services: [
      {
        icon: '📐',
        title: 'Diagnostic & mesures',
        body:
          'Mesures sur site, temps de réverbération, identification des fréquences problématiques et des points de transmission.',
      },
      {
        icon: '🔇',
        title: 'Insonorisation',
        body:
          'Solutions pour murs, plafonds, sols, portes et points faibles afin de réduire la transmission du bruit.',
      },
      {
        icon: '〽️',
        title: 'Traitement acoustique sur mesure',
        body:
          'Panneaux et dispositifs adaptés au volume, à l’esthétique et à l’usage du lieu : studio, cabinet, bureau, salle ou habitation.',
      },
      {
        icon: '📊',
        title: 'Analyse du bruit',
        body:
          'Recherche des sources de nuisance, analyse des chemins de propagation et recommandations concrètes avant travaux.',
      },
    ],
    methodEyebrow: 'Notre méthode',
    methodTitle: 'Une intervention mesurable, du diagnostic au contrôle final',
    steps: [
      ['01', 'Visite', 'Observation du lieu, échange sur les usages, contraintes et nuisances.'],
      ['02', 'Mesures', 'Relevés acoustiques et analyse des points faibles ou des résonances.'],
      ['03', 'Proposition', 'Solutions techniques, matériaux et niveau d’intervention clairement définis.'],
      ['04', 'Réalisation', 'Travail in situ et fabrication sur mesure lorsque le projet le demande.'],
      ['05', 'Contrôle', 'Mesures après intervention pour comparer les résultats et ajuster si nécessaire.'],
    ],
    situationsEyebrow: 'Pour quels lieux ?',
    situationsTitle: 'Des solutions pensées pour l’usage réel du lieu',
    situations:
      'Studios, salles de répétition, cabinets, bureaux, commerces, bars, espaces événementiels et habitations privées.',
    ctaEyebrow: 'Un problème acoustique ?',
    ctaTitle: 'Commençons par une visite du lieu',
    ctaLede:
      'Expliquez-nous la situation, le type de bruit ou l’objectif acoustique. Nous vous dirons quelles mesures sont pertinentes avant de proposer une solution.',
    ctaWhatsapp: 'Écrire sur WhatsApp',
    ctaEmail: 'Envoyer un e-mail',
  },
  en: {
    eyebrow: 'Acoustics · Geneva',
    title: 'Spaces designed to sound right',
    lede:
      'On-site diagnostics, acoustic measurements, noise analysis, soundproofing and custom acoustic treatment.',
    chips: ['On-site measurements', 'Soundproofing', 'Custom panels', 'Before / after'],
    servicesEyebrow: 'Our services',
    servicesTitle: 'Understand the problem before treating it',
    servicesLede:
      'Every project starts with the room, its real use and measurements suited to the situation.',
    services: [
      { icon: '📐', title: 'Diagnostics & measurements', body: 'On-site measurements, reverberation time, problematic frequencies and sound-transmission paths.' },
      { icon: '🔇', title: 'Soundproofing', body: 'Solutions for walls, ceilings, floors, doors and weak points to reduce sound transmission.' },
      { icon: '〽️', title: 'Custom acoustic treatment', body: 'Panels and devices adapted to the room, aesthetics and use: studio, clinic, office, venue or home.' },
      { icon: '📊', title: 'Noise analysis', body: 'Identify noise sources, propagation paths and practical recommendations before work begins.' },
    ],
    methodEyebrow: 'Our method',
    methodTitle: 'A measurable process from diagnosis to final control',
    steps: [
      ['01', 'Site visit', 'Review the space, its use, constraints and noise issues.'],
      ['02', 'Measurements', 'Acoustic readings and analysis of weak points or resonances.'],
      ['03', 'Proposal', 'Clear technical solutions, materials and scope of work.'],
      ['04', 'Implementation', 'On-site work and custom fabrication when required.'],
      ['05', 'Control', 'Post-work measurements to compare results and fine-tune if needed.'],
    ],
    situationsEyebrow: 'Where?',
    situationsTitle: 'Solutions designed around how the space is actually used',
    situations: 'Studios, rehearsal rooms, clinics, offices, shops, bars, event spaces and private homes.',
    ctaEyebrow: 'Acoustic problem?',
    ctaTitle: 'Start with a visit to the space',
    ctaLede: 'Tell us about the noise issue or acoustic goal. We will identify the useful measurements before proposing a solution.',
    ctaWhatsapp: 'Message us on WhatsApp',
    ctaEmail: 'Send an email',
  },
  es: {
    eyebrow: 'Acústica · Ginebra',
    title: 'Espacios que suenan como deben',
    lede:
      'Diagnóstico in situ, mediciones acústicas, análisis de ruido, insonorización y tratamiento acústico a medida.',
    chips: ['Mediciones in situ', 'Insonorización', 'Paneles a medida', 'Antes / después'],
    servicesEyebrow: 'Nuestros servicios',
    servicesTitle: 'Entender el problema antes de tratarlo',
    servicesLede: 'Cada intervención comienza por el uso real del lugar y por mediciones adaptadas a la situación.',
    services: [
      { icon: '📐', title: 'Diagnóstico y mediciones', body: 'Mediciones in situ, tiempo de reverberación, frecuencias problemáticas y puntos de transmisión.' },
      { icon: '🔇', title: 'Insonorización', body: 'Soluciones para paredes, techos, suelos, puertas y puntos débiles para reducir la transmisión sonora.' },
      { icon: '〽️', title: 'Tratamiento acústico a medida', body: 'Paneles y soluciones adaptadas al volumen, la estética y el uso: estudio, gabinete, oficina, sala o vivienda.' },
      { icon: '📊', title: 'Análisis de ruido', body: 'Detección de fuentes, vías de propagación y recomendaciones concretas antes de la obra.' },
    ],
    methodEyebrow: 'Nuestro método',
    methodTitle: 'Un proceso medible, del diagnóstico al control final',
    steps: [
      ['01', 'Visita', 'Observación del espacio, usos, restricciones y molestias.'],
      ['02', 'Mediciones', 'Relevamientos acústicos y análisis de puntos débiles o resonancias.'],
      ['03', 'Propuesta', 'Soluciones técnicas, materiales y alcance claramente definidos.'],
      ['04', 'Realización', 'Trabajo in situ y fabricación a medida cuando el proyecto lo requiere.'],
      ['05', 'Control', 'Mediciones posteriores para comparar resultados y ajustar si hace falta.'],
    ],
    situationsEyebrow: '¿Para qué espacios?',
    situationsTitle: 'Soluciones pensadas para el uso real del lugar',
    situations: 'Estudios, salas de ensayo, gabinetes, oficinas, comercios, bares, espacios de eventos y viviendas.',
    ctaEyebrow: '¿Un problema acústico?',
    ctaTitle: 'Empecemos por una visita al lugar',
    ctaLede: 'Contanos qué ruido te molesta o qué objetivo acústico tenés. Definimos primero qué conviene medir y luego proponemos una solución.',
    ctaWhatsapp: 'Escribir por WhatsApp',
    ctaEmail: 'Enviar un e-mail',
  },
  it: {
    eyebrow: 'Acustica · Ginevra',
    title: 'Spazi che suonano come dovrebbero',
    lede:
      'Diagnosi in situ, misure acustiche, analisi del rumore, insonorizzazione e trattamento acustico su misura.',
    chips: ['Misure in situ', 'Insonorizzazione', 'Pannelli su misura', 'Prima / dopo'],
    servicesEyebrow: 'I nostri servizi',
    servicesTitle: 'Capire il problema prima di intervenire',
    servicesLede: 'Ogni intervento parte dall’uso reale dello spazio e da misure adatte alla situazione.',
    services: [
      { icon: '📐', title: 'Diagnosi e misure', body: 'Misure in situ, tempo di riverbero, frequenze problematiche e punti di trasmissione.' },
      { icon: '🔇', title: 'Insonorizzazione', body: 'Soluzioni per pareti, soffitti, pavimenti, porte e punti deboli per ridurre la trasmissione sonora.' },
      { icon: '〽️', title: 'Trattamento acustico su misura', body: 'Pannelli e soluzioni adatti al volume, all’estetica e all’uso: studio, ambulatorio, ufficio, sala o abitazione.' },
      { icon: '📊', title: 'Analisi del rumore', body: 'Ricerca delle sorgenti, vie di propagazione e raccomandazioni concrete prima dei lavori.' },
    ],
    methodEyebrow: 'Il nostro metodo',
    methodTitle: 'Un processo misurabile, dalla diagnosi al controllo finale',
    steps: [
      ['01', 'Sopralluogo', 'Osservazione dello spazio, degli usi, dei vincoli e dei disturbi.'],
      ['02', 'Misure', 'Rilievi acustici e analisi dei punti deboli o delle risonanze.'],
      ['03', 'Proposta', 'Soluzioni tecniche, materiali e livello di intervento chiaramente definiti.'],
      ['04', 'Realizzazione', 'Lavoro in situ e fabbricazione su misura quando necessario.'],
      ['05', 'Controllo', 'Misure dopo l’intervento per confrontare i risultati e regolare se necessario.'],
    ],
    situationsEyebrow: 'Per quali spazi?',
    situationsTitle: 'Soluzioni pensate per l’uso reale dello spazio',
    situations: 'Studi, sale prove, ambulatori, uffici, negozi, bar, spazi per eventi e abitazioni private.',
    ctaEyebrow: 'Un problema acustico?',
    ctaTitle: 'Cominciamo con un sopralluogo',
    ctaLede: 'Raccontaci il problema di rumore o l’obiettivo acustico. Definiamo prima le misure utili e poi la soluzione.',
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
        </Container>
      </section>

      <section className="acoustique-method">
        <Container>
          <div className="acoustique-head">
            <span className="acoustique-eyebrow">{t.methodEyebrow}</span>
            <h2>{t.methodTitle}</h2>
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
