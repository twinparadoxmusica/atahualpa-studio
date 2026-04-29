'use client';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

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
        {locale === 'fr' ? (
          <p className="intro-text">
            Le studio propose <b>deux salles d’enregistrement équipées</b> et un
            cadre inspirant. Le lieu offre des{' '}
            <b>cours individuels ou collectifs</b> pour tous âges et instruments,
            ainsi que des <b>ateliers de production musicale</b>.
          </p>
        ) : (
          <p className="intro-text">
            The studio offers <b>two fully equipped recording rooms</b> and an
            inspiring setting. We host <b>private and group lessons</b> for all
            ages and instruments, plus <b>music-production workshops</b>.
          </p>
        )}
      </Container>
    </section>
  );
};

export default Intro;
