'use client';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const introTextByLocale = {
  fr: (
    <p className="intro-text">
      Le studio propose <b>deux salles d’enregistrement équipées</b> et un
      cadre inspirant. Le lieu offre des{' '}
      <b>cours individuels ou collectifs</b> pour tous âges et instruments,
      ainsi que des <b>ateliers de production musicale</b>.
    </p>
  ),
  en: (
    <p className="intro-text">
      The studio offers <b>two fully equipped recording rooms</b> and an
      inspiring setting. We host <b>private and group lessons</b> for all
      ages and instruments, plus <b>music-production workshops</b>.
    </p>
  ),
  es: (
    <p className="intro-text">
      El estudio cuenta con <b>dos salas de grabación equipadas</b> y un
      entorno inspirador. Ofrecemos <b>clases individuales o colectivas</b>{' '}
      para todas las edades e instrumentos, así como{' '}
      <b>talleres de producción musical</b>.
    </p>
  ),
  it: (
    <p className="intro-text">
      Lo studio dispone di <b>due sale di registrazione attrezzate</b> e di una
      cornice ispirante. Proponiamo <b>lezioni individuali e collettive</b>{' '}
      per tutte le età e per ogni strumento, oltre a{' '}
      <b>laboratori di produzione musicale</b>.
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
