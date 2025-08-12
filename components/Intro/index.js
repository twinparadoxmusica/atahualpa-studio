import PropTypes from "prop-types";
import "./styles.css";

const Intro = ({ hideText }) => (
  <section id="about" className="section margin-bottom-lg">
    <h2 className="margin-bottom-sm">À propos</h2>
    <div className="intro-container">
      <p className="intro-text">
        <b>Atahualpa Music Studio</b>, situé à Genève en Suisse, face au lac
        Léman, propose deux salles d’enregistrement équipées et un cadre
        inspirant. Le lieu offre des cours individuels ou collectifs pour tous
        âges et instruments, ainsi que des ateliers de production musicale. Des
        stages sont organisés pendant les vacances dans une ambiance
        professionnelle et conviviale.
      </p>
    </div>
  </section>
);

Intro.propTypes = {
  hideText: PropTypes.bool,
};

export default Intro;
