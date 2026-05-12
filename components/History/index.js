'use client';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const historyTextByLocale = {
  fr: (
    <p className="history-text">
      Depuis sa création, <b>Atahualpa Music Studio</b> est né du désir
      de partager la musique dans un cadre professionnel, chaleureux et
      créatif. Fondé par <b>Ezequiel Cappellano</b>, musicien
      italo-argentin formé à la <b>Haute École des Arts de Berne</b>, le
      studio réunit <b>enseignement</b>, <b>création</b>,{' '}
      <b>enregistrement</b> et <b>accompagnement artistique</b>.
    </p>
  ),
  en: (
    <p className="history-text">
      Since its beginnings, <b>Atahualpa Music Studio</b> was born from
      the desire to share music in a professional, warm and creative
      setting. Founded by <b>Ezequiel Cappellano</b>, an
      Italian-Argentinian musician trained at the{' '}
      <b>Bern University of the Arts</b>, the studio brings together{' '}
      <b>teaching</b>, <b>creation</b>, <b>recording</b> and{' '}
      <b>artistic support</b>.
    </p>
  ),
  es: (
    <p className="history-text">
      Desde sus inicios, <b>Atahualpa Music Studio</b> nació del deseo
      de compartir la música en un entorno profesional, cálido y
      creativo. Fundado por <b>Ezequiel Cappellano</b>, músico
      ítalo-argentino formado en la{' '}
      <b>Escuela Superior de Artes de Berna</b>, el estudio reúne{' '}
      <b>enseñanza</b>, <b>creación</b>, <b>grabación</b> y{' '}
      <b>acompañamiento artístico</b>.
    </p>
  ),
  it: (
    <p className="history-text">
      Sin dagli inizi, <b>Atahualpa Music Studio</b> è nato dal
      desiderio di condividere la musica in un contesto professionale,
      accogliente e creativo. Fondato da <b>Ezequiel Cappellano</b>,
      musicista italo-argentino formato alla{' '}
      <b>Scuola Superiore d’Arte di Berna</b>, lo studio riunisce{' '}
      <b>insegnamento</b>, <b>creazione</b>, <b>registrazione</b> e{' '}
      <b>accompagnamento artistico</b>.
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
