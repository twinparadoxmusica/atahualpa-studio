import { Container, SectionHeader } from '../ui';
import './styles.css';

const History = () => (
  <section id="history" className="history-section">
    <Container variant="narrow">
      <SectionHeader
        eyebrow="Notre histoire"
        title="Cinq ans à faire vivre la musique"
      />
      <div className="history-card">
        <p className="history-text">
          Fondé il y a cinq ans par <b>Ezequiel Cappellano</b>, musicien
          italo-argentin passionné, <b>Atahualpa Music Studio</b> est né du
          désir de partager la musique dans un cadre professionnel et
          chaleureux. Depuis son enfance avec la guitare à la main jusqu’à ses
          études de composition à la <b>Haute École des Arts de Berne (HKB)</b>,
          son parcours mêle scène, enseignement et recherche musicale.
          Aujourd’hui, le studio est un lieu où l’on apprend, joue et crée, en
          faisant dialoguer tradition et modernité.
        </p>
        <a className="history-cta" href="/apropos">
          En savoir plus
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </Container>
  </section>
);

export default History;
