'use client';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const historyTextByLocale = {
  fr: (
    <p className="history-text">
      Fondé il y a cinq ans par <b>Ezequiel Cappellano</b>, musicien
      italo-argentin passionné, <b>Atahualpa Music Studio</b> est né du désir
      de partager la musique dans un cadre professionnel et chaleureux. Depuis
      son enfance avec la guitare à la main jusqu’à ses études de composition à
      la <b>Haute École des Arts de Berne (HKB)</b>, son parcours mêle scène,
      enseignement et recherche musicale. Aujourd’hui, le studio est un lieu où
      l’on apprend, joue et crée, en faisant dialoguer tradition et modernité.
    </p>
  ),
  en: (
    <p className="history-text">
      Founded five years ago by <b>Ezequiel Cappellano</b>, a passionate
      Italian-Argentinian musician, <b>Atahualpa Music Studio</b> was born from
      the desire to share music in a professional and welcoming setting. From
      his childhood with a guitar in hand to his composition studies at the{' '}
      <b>Bern University of the Arts (HKB)</b>, his path weaves stage work,
      teaching and musical research. Today the studio is a place where you
      learn, play and create — bridging tradition and modernity.
    </p>
  ),
  es: (
    <p className="history-text">
      Fundado hace cinco años por <b>Ezequiel Cappellano</b>, músico
      ítalo-argentino apasionado, <b>Atahualpa Music Studio</b> nació del
      deseo de compartir la música en un entorno profesional y acogedor. Desde
      su infancia con la guitarra en la mano hasta sus estudios de composición
      en la <b>Escuela Superior de Artes de Berna (HKB)</b>, su trayectoria
      combina escena, enseñanza e investigación musical. Hoy, el estudio es un
      lugar donde se aprende, se toca y se crea, haciendo dialogar tradición y
      modernidad.
    </p>
  ),
  it: (
    <p className="history-text">
      Fondato cinque anni fa da <b>Ezequiel Cappellano</b>, musicista
      italo-argentino appassionato, <b>Atahualpa Music Studio</b> è nato dal
      desiderio di condividere la musica in un contesto professionale e
      accogliente. Dall’infanzia con la chitarra in mano fino agli studi di
      composizione alla <b>Scuola Superiore d’Arte di Berna (HKB)</b>, il suo
      percorso intreccia palco, insegnamento e ricerca musicale. Oggi, lo
      studio è un luogo in cui si impara, si suona e si crea, facendo dialogare
      tradizione e modernità.
    </p>
  ),
};

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
          {historyTextByLocale[locale] || historyTextByLocale.fr}
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
