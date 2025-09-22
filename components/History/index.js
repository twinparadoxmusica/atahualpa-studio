import PropTypes from 'prop-types';
import './styles.css';

const Intro = ({ hideText }) => (
  <div id="about" className="section margin-bottom-lg">
    <section>
      <article className="margin-bottom-xs">
        <h2>Notre Histoire</h2>
        <p>
          Fondé il y a cinq ans par <b>Ezequiel Cappellano</b>, musicien
          italo-argentin passionné, <b>Atahualpa Music Studio</b> est né du
          désir de partager la musique dans un cadre professionnel et
          chaleureux. Depuis son enfance avec la guitare à la main jusqu’à ses
          études de composition à la <b>Haute École des Arts de Berne (HKB)</b>,
          son parcours mêle scène, enseignement et recherche musicale.
          Aujourd’hui, le studio est un lieu où l’on apprend, joue et crée, en
          faisant dialoguer tradition et modernité.
        </p>
      </article>
      <button>
        <a href="/apropos">En savoir plus</a>
      </button>
    </section>
  </div>
);

Intro.propTypes = {
  hideText: PropTypes.bool,
};

export default Intro;
