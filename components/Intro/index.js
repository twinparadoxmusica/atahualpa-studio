import { Container, SectionHeader } from '../ui';
import './styles.css';

const Intro = () => (
  <section id="about" className="intro-section">
    <Container variant="narrow">
      <SectionHeader
        eyebrow="À propos"
        title="Un lieu pensé pour la musique"
        lede="Atahualpa Music Studio, à Genève en Suisse, face au lac Léman."
      />
      <p className="intro-text">
        Le studio propose <b>deux salles d’enregistrement équipées</b> et un
        cadre inspirant. Le lieu offre des <b>cours individuels ou collectifs</b>{' '}
        pour tous âges et instruments, ainsi que des <b>ateliers de production
        musicale</b>.
      </p>
    </Container>
  </section>
);

export default Intro;
