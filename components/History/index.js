'use client';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const History = () => {
  const { locale, t } = useLanguage();

  return (
    <section id="history" className="history-section">
      <Container variant="narrow">
        <SectionHeader
          eyebrow={t('home.history.eyebrow')}
          title={t('home.history.title')}
        />
        <div className="history-card">
          {locale === 'fr' ? (
            <p className="history-text">
              Fondé il y a cinq ans par <b>Ezequiel Cappellano</b>, musicien
              italo-argentin passionné, <b>Atahualpa Music Studio</b> est né du
              désir de partager la musique dans un cadre professionnel et
              chaleureux. Depuis son enfance avec la guitare à la main jusqu’à
              ses études de composition à la{' '}
              <b>Haute École des Arts de Berne (HKB)</b>, son parcours mêle
              scène, enseignement et recherche musicale. Aujourd’hui, le studio
              est un lieu où l’on apprend, joue et crée, en faisant dialoguer
              tradition et modernité.
            </p>
          ) : (
            <p className="history-text">
              Founded five years ago by <b>Ezequiel Cappellano</b>, a passionate
              Italian-Argentinian musician, <b>Atahualpa Music Studio</b> was
              born from the desire to share music in a professional and welcoming
              setting. From his childhood with a guitar in hand to his
              composition studies at the{' '}
              <b>Bern University of the Arts (HKB)</b>, his path weaves stage
              work, teaching and musical research. Today the studio is a place
              where you learn, play and create — bridging tradition and
              modernity.
            </p>
          )}
          <a className="history-cta" href="/apropos">
            {t('common.learnMore')}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default History;
