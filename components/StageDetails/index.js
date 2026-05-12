'use client';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const LeconsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M9 18V6l11-2v12" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="17" cy="16" r="3" />
  </svg>
);

const PriseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
    <path d="M9 21h6" />
  </svg>
);

const leconsBodyByLocale = {
  fr: (
    <>
      <p>
        Des cours pratiques et personnalisés pour <b>enfants</b>,{' '}
        <b>adolescents</b> et <b>adultes</b> : atelier multi-instrumental
        en petit groupe, cours individuels de <b>guitare</b>,{' '}
        <b>basse</b>, <b>DJing</b> et <b>production musicale</b>.
      </p>
      <p>
        Une approche moderne, bienveillante et adaptée à chaque élève,
        pour apprendre en jouant la musique que vous aimez vraiment.
      </p>
    </>
  ),
  en: (
    <>
      <p>
        Hands-on, personalized lessons for <b>children</b>,{' '}
        <b>teenagers</b> and <b>adults</b>: a multi-instrument workshop
        in small groups and private lessons in <b>guitar</b>,{' '}
        <b>bass</b>, <b>DJing</b> and <b>music production</b>.
      </p>
      <p>
        A modern, welcoming approach tailored to every student — learn
        by playing the music you genuinely love.
      </p>
    </>
  ),
  es: (
    <>
      <p>
        Clases prácticas y personalizadas para <b>niños</b>,{' '}
        <b>adolescentes</b> y <b>adultos</b>: taller multi-instrumental
        en grupo reducido y clases individuales de <b>guitarra</b>,{' '}
        <b>bajo</b>, <b>DJ</b> y <b>producción musical</b>.
      </p>
      <p>
        Un enfoque moderno y cercano, adaptado a cada alumno, para
        aprender tocando la música que realmente te apasiona.
      </p>
    </>
  ),
  it: (
    <>
      <p>
        Lezioni pratiche e personalizzate per <b>bambini</b>,{' '}
        <b>ragazzi</b> e <b>adulti</b>: laboratorio multi-strumentale in
        piccolo gruppo e lezioni individuali di <b>chitarra</b>,{' '}
        <b>basso</b>, <b>DJ</b> e <b>produzione musicale</b>.
      </p>
      <p>
        Un approccio moderno e accogliente, su misura per ogni allievo,
        per imparare suonando la musica che ami davvero.
      </p>
    </>
  ),
};

const priseBodyByLocale = {
  fr: (
    <p>
      <b>Enregistrement</b>, <b>prise de son</b>, <b>captation vidéo</b>{' '}
      et <b>live streaming</b> pour musiciens, ensembles et institutions.
      Un service professionnel pour mettre en valeur vos concerts,
      projets et créations.
    </p>
  ),
  en: (
    <p>
      <b>Recording</b>, <b>audio capture</b>, <b>video production</b>{' '}
      and <b>live streaming</b> for musicians, ensembles and
      institutions. A professional service to showcase your concerts,
      projects and creations.
    </p>
  ),
  es: (
    <p>
      <b>Grabación</b>, <b>captura de sonido</b>,{' '}
      <b>producción de video</b> y <b>live streaming</b> para músicos,
      conjuntos e instituciones. Un servicio profesional para realzar
      tus conciertos, proyectos y creaciones.
    </p>
  ),
  it: (
    <p>
      <b>Registrazione</b>, <b>presa diretta</b>, <b>riprese video</b>{' '}
      e <b>live streaming</b> per musicisti, ensemble e istituzioni. Un
      servizio professionale per valorizzare i tuoi concerti, progetti
      e creazioni.
    </p>
  ),
};

export default function StageDetails() {
  const { locale, t } = useLanguage();

  const details = [
    {
      Icon: LeconsIcon,
      title: t('home.stage.lecons.title'),
      description: leconsBodyByLocale[locale] || leconsBodyByLocale.fr,
      link: '/lecons-musique',
      linkText: t('home.stage.lecons.cta'),
    },
    {
      Icon: PriseIcon,
      title: t('home.stage.prise.title'),
      description: priseBodyByLocale[locale] || priseBodyByLocale.fr,
      link: '/prise-son-video',
      linkText: t('home.stage.prise.cta'),
    },
  ];

  return (
    <section className="stage-section">
      <Container variant="default">
        <SectionHeader
          eyebrow={t('home.stage.eyebrow')}
          title={t('home.stage.title')}
          lede={t('home.stage.lede')}
        />
        <ul className="stage-grid">
          {details.map((item) => (
            <li className="stage-card" key={item.title}>
              <span className="stage-card__icon" aria-hidden="true">
                <item.Icon />
              </span>
              <h3 className="stage-card__title">{item.title}</h3>
              <div className="stage-card__body">{item.description}</div>
              <a className="stage-card__cta" href={item.link}>
                {item.linkText}
                <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
