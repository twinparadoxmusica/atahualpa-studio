import PropTypes from "prop-types";
import "./styles.css";

const About = ({ hideText }) => (
  <section id="about" className="about section margin-bottom-lg">
    <h2 className="margin-bottom-sm">À propos</h2>
    <div className="about-container">
      <p className="description-text">
        <b>Atahualpa Music Studio</b> est un espace dédié à la création, à la
        production et à l&rsquo;enseignement musical, situé face au lac Léman.
        Il dispose de deux salles d&rsquo;enregistrement entièrement équipées et
        d&rsquo;un cadre inspirant pour les musiciens de tous niveaux.
        C&rsquo;est un lieu où sont proposées des leçons individuelles et en
        groupe pour des personnes de tout âge, incluant la guitare, la basse et
        d'autres instruments, ainsi que des ateliers de formation musicale et de
        production. Des activités spéciales sont également organisées pendant
        les périodes de vacances, favorisant l&rsquo;exploration et le
        développement artistique dans une atmosphère professionnelle et
        chaleureuse.
      </p>
      <img
        className="about-image"
        src="/assets/atahualpa-studio-image.png"
        alt="Atahualpa Music Studio"
      />
    </div>
  </section>
);

About.propTypes = {
  hideText: PropTypes.bool,
};

export default About;
