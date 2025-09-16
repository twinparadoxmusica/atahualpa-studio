import PropTypes from 'prop-types';
import './styles.css';

const Intro = ({ hideText }) => (
  <div id="about" className="section margin-bottom-lg">
    <section>
      <article className="margin-bottom-xs">
        <h2>Notre Histoire</h2>
        <p>
          Fondé il y a <strong>cinq ans</strong> par un musicien argentin
          passionné,
          <strong> Atahualpa Music Studio</strong> est un lieu où la musique
          prend vie.
        </p>
        <p>
          Dès son enfance, le fondateur a grandi avec la{' '}
          <strong>guitare</strong> entre les mains et a formé ses{' '}
          <strong>premiers groupes</strong>. Sa curiosité l’a conduit à élargir
          son horizon musical, étudiant la{' '}
          <strong>composition de musique contemporaine</strong> à{' '}
          <strong>la Haute École d'Arts de Berne (HKB)</strong>.
        </p>
        <p>
          Depuis plus de <strong>neuf ans</strong>, il partage son savoir-faire
          en <strong>enseignant</strong> la <strong>guitare</strong>, la{' '}
          <strong>basse</strong> et d’autres <strong>instruments</strong>. Son{' '}
          parcours mêle scène, enseignement et recherche musicale.
        </p>
        <p>
          <strong>Atahualpa Music Studio</strong> est un lieu où l’on{' '}
          <strong>apprend</strong>, <strong>joue</strong> et{' '}
          <strong>crée</strong> dans un cadre professionnel et chaleureux.
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
