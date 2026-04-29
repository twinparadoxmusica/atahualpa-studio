'use client';
import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const bodyByLocale = {
  fr: (
    <>
      <p>
        Nous sommes une <b>petite équipe soudée</b> qui collabore au
        quotidien autour d’un même studio : <b>professeurs</b>,{' '}
        <b>ingénieurs du son</b> et <b>techniciens vidéo</b>, tous actifs
        comme musiciens et habitués à travailler ensemble sur les cours
        comme sur les projets de captation.
      </p>
      <p>
        Le lieu dispose de{' '}
        <b>deux salles d’enregistrement entièrement équipées</b> et d’un
        cadre inspirant pour les musiciens de tous niveaux. On y propose
        des <b>leçons individuelles et en groupe</b> pour tous les âges
        (guitare, basse, batterie, piano, synthétiseur, DJing), des{' '}
        <b>ateliers de production musicale</b> et des{' '}
        <b>captations audio &amp; vidéo</b> professionnelles.
      </p>
      <p>
        Des <b>activités spéciales</b> sont aussi organisées pendant les
        vacances, dans une atmosphère{' '}
        <b>professionnelle et chaleureuse</b> où chacun trouve sa place
        — qu’il vienne apprendre un instrument ou enregistrer un projet.
      </p>
    </>
  ),
  en: (
    <>
      <p>
        We are a <b>tight-knit small team</b> working day-to-day around the
        same studio: <b>teachers</b>, <b>sound engineers</b> and{' '}
        <b>video technicians</b>, all active as musicians and used to
        collaborating on lessons as well as recording projects.
      </p>
      <p>
        The place has{' '}
        <b>two fully equipped recording rooms</b> and an inspiring setting
        for musicians of every level. We offer{' '}
        <b>private and group lessons</b> for every age (guitar, bass, drums,
        piano, synth, DJing), <b>music production workshops</b> and
        professional <b>audio &amp; video captures</b>.
      </p>
      <p>
        We also run <b>special activities</b> during the holidays, in a{' '}
        <b>professional and welcoming atmosphere</b> where everyone finds
        their place — whether they come to learn an instrument or to record
        a project.
      </p>
    </>
  ),
  es: (
    <>
      <p>
        Somos un <b>pequeño equipo unido</b> que colabora a diario en torno
        al mismo estudio: <b>profesores</b>, <b>ingenieros de sonido</b> y{' '}
        <b>técnicos de vídeo</b>, todos activos como músicos y acostumbrados
        a trabajar juntos tanto en las clases como en los proyectos de
        grabación.
      </p>
      <p>
        El lugar dispone de{' '}
        <b>dos salas de grabación totalmente equipadas</b> y de un entorno
        inspirador para músicos de todos los niveles. Ofrecemos{' '}
        <b>clases individuales y en grupo</b> para todas las edades
        (guitarra, bajo, batería, piano, sintetizador, DJing),{' '}
        <b>talleres de producción musical</b> y{' '}
        <b>grabaciones de audio y vídeo</b> profesionales.
      </p>
      <p>
        También organizamos <b>actividades especiales</b> durante las
        vacaciones, en un ambiente{' '}
        <b>profesional y acogedor</b> en el que cada persona encuentra su
        lugar — venga a aprender un instrumento o a grabar un proyecto.
      </p>
    </>
  ),
  it: (
    <>
      <p>
        Siamo un <b>piccolo team affiatato</b> che collabora ogni giorno
        attorno allo stesso studio: <b>insegnanti</b>, <b>ingegneri del suono</b>{' '}
        e <b>tecnici video</b>, tutti attivi come musicisti e abituati a
        lavorare insieme sia sulle lezioni sia sui progetti di registrazione.
      </p>
      <p>
        Il luogo dispone di{' '}
        <b>due sale di registrazione completamente attrezzate</b> e di una
        cornice ispirante per musicisti di ogni livello. Proponiamo{' '}
        <b>lezioni individuali e di gruppo</b> per tutte le età (chitarra,
        basso, batteria, pianoforte, sintetizzatore, DJing),{' '}
        <b>laboratori di produzione musicale</b> e{' '}
        <b>riprese audio e video</b> professionali.
      </p>
      <p>
        Organizziamo anche <b>attività speciali</b> durante le vacanze, in
        un’atmosfera <b>professionale e accogliente</b> in cui ognuno trova
        il proprio posto — sia che venga per imparare uno strumento sia per
        registrare un progetto.
      </p>
    </>
  ),
};

const About = () => {
  const { locale, t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <Container variant="default">
        <div className="about-top">
          <div className="about-top__head">
            <span className="about-top__eyebrow">{t('about.eyebrow')}</span>
            <h2 className="about-top__title">{t('about.title')}</h2>
            <p className="about-top__lede">{t('about.lede')}</p>
          </div>
          <img
            className="about-top__image"
            src="/assets/atahualpa-studio-image.png"
            alt={t('about.image.alt')}
          />
        </div>

        <div className="about-body">
          {bodyByLocale[locale] || bodyByLocale.fr}
        </div>
      </Container>
    </section>
  );
};

export default About;
