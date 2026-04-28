import { Container } from '../ui';

const PriseHero = () => (
  <section className="prise-hero" aria-labelledby="prise-hero-title">
    <div className="prise-hero__overlay" aria-hidden="true" />
    <Container variant="default" className="prise-hero__inner">
      <span className="prise-hero__eyebrow">Atahualpa Studio · Genève</span>
      <h1 id="prise-hero-title" className="prise-hero__title">
        Prise de son, vidéo &amp; streaming
      </h1>
      <p className="prise-hero__lede">
        Deux salles dédiées à la production audio et vidéo, face au lac Léman.
        Une équipe spécialisée dans l&apos;enregistrement, la captation
        multicam, le mixage et la diffusion en direct — au service des
        artistes, orchestres et musiciens.
      </p>

      <div className="prise-hero__cta">
        <a className="prise-hero__btn prise-hero__btn--primary" href="#projets">
          Voir nos projets
        </a>
        <a
          className="prise-hero__btn prise-hero__btn--ghost"
          href="https://wa.me/41786917441"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discuter de votre projet
        </a>
      </div>

      <ul className="prise-hero__chips" aria-label="Spécialités">
        <li>Studio</li>
        <li>Multicam</li>
        <li>Live YouTube</li>
        <li>Mixage &amp; mastering</li>
      </ul>
    </Container>
  </section>
);

export default PriseHero;
