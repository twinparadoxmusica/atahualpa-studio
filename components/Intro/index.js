'use client';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const introTextByLocale = {
  fr: (
    <p className="intro-text">
      Le studio réunit <b>deux espaces équipés</b> pour l’apprentissage, la
      création musicale, l’enregistrement et la production audio-visuelle.
      Le lieu propose des <b>cours individuels</b>, des{' '}
      <b>ateliers multi-instrumentaux en petit groupe</b> et des{' '}
      <b>services de prise de son, vidéo et captation</b>.
    </p>
  ),
  en: (
    <p className="intro-text">
      The studio brings together <b>two fully equipped spaces</b> for
      learning, musical creation, recording and audio-visual production.
      It hosts <b>private lessons</b>, <b>small-group multi-instrument
      workshops</b> and <b>audio, video and live-capture services</b>.
    </p>
  ),
  es: (
    <p className="intro-text">
      El estudio reúne <b>dos espacios equipados</b> para el aprendizaje,
      la creación musical, la grabación y la producción audiovisual. El
      lugar ofrece <b>clases individuales</b>,{' '}
      <b>talleres multi-instrumentales en grupo reducido</b> y{' '}
      <b>servicios de sonido, video y captura</b>.
    </p>
  ),
  it: (
    <p className="intro-text">
      Lo studio riunisce <b>due spazi attrezzati</b> per l’apprendimento,
      la creazione musicale, la registrazione e la produzione
      audiovisiva. Il luogo offre <b>lezioni individuali</b>,{' '}
      <b>laboratori multi-strumentali in piccolo gruppo</b> e{' '}
      <b>servizi di presa diretta, video e riprese</b>.
    </p>
  ),
};

const Intro = () => {
  const { locale, t } = useLanguage();

  return (
    <section id="about" className="intro-section">
      <Container variant="narrow">
        <SectionHeader
          eyebrow={t('home.intro.eyebrow')}
          title={t('home.intro.title')}
          lede={t('home.intro.lede')}
        />
        {introTextByLocale[locale] || introTextByLocale.fr}
      </Container>
    </section>
  );
};

export default Intro;
