import './styles.css';
import Services from './services';
import Projects from './projects';
import StickyButton from '../StickyButton';

const Prise = () => (
  <>
    {/* ================= HERO SECTION ================= */}
    <section className="prise-hero">
      <div className="hero-content">
        <h2>Prise de Son, Vidéo & Streaming</h2>

        <p>
          Atahualpa Studio dispose de deux salles dédiées à la production audio
          et vidéo, dans un environnement inspirant face au lac Léman.
        </p>

        <p>
          Nous sommes une petite équipe spécialisée dans l’enregistrement, la
          captation vidéo, le mixage et la diffusion en direct. Nous
          accompagnons des artistes, orchestres et musiciens à chaque étape de
          leur production.
        </p>
      </div>
    </section>

    <Services />
    <Projects />
    <StickyButton />
  </>
);

export default Prise;
