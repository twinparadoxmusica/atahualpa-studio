import PropTypes from 'prop-types';
import './styles.css';

const Intro = ({ hideText }) => (
  <div id="about" className="section margin-bottom-lg">
    <section>
      <article>
        <h2>Notre Histoire</h2>
        <p>
          Fondé il y a <strong>cinq ans</strong> par un{' '}
          <strong>musicien argentin passionné</strong>,
          <strong> Atahualpa Music Studio</strong> est un lieu où la{' '}
          <strong>musique</strong> prend vie.
        </p>
        <p>
          Dès son <strong>enfance</strong>, le fondateur a grandi avec la{' '}
          <strong>guitare</strong> entre les mains et a formé ses{' '}
          <strong>premiers groupes</strong>. Sa <strong>curiosité</strong> l’a
          conduit à élargir son <strong>horizon musical</strong>, étudiant la{' '}
          <strong>direction d’orchestre</strong> et la{' '}
          <strong>composition de musique contemporaine</strong> à{' '}
          <strong>Berne</strong>.
        </p>
        <p>
          Depuis plus de <strong>neuf ans</strong>, il partage son{' '}
          <strong>savoir-faire</strong> en <strong>enseignant</strong> la{' '}
          <strong>guitare</strong>, la <strong>basse</strong> et d’autres{' '}
          <strong>instruments</strong>. Son <strong>parcours</strong> mêle{' '}
          <strong>scène</strong>, <strong>enseignement</strong> et{' '}
          <strong>recherche musicale</strong>.
        </p>
        <p>
          <strong>Atahualpa Music Studio</strong> est un <strong>lieu</strong>{' '}
          où l’on <strong>apprend</strong>, <strong>joue</strong> et{' '}
          <strong>crée</strong> dans un{' '}
          <strong>cadre professionnel et chaleureux</strong>.
        </p>
      </article>
    </section>
  </div>
);

Intro.propTypes = {
  hideText: PropTypes.bool,
};

export default Intro;
