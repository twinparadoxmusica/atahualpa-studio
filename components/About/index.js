import { Container } from '../ui';
import './styles.css';

const About = () => (
  <section id="about" className="about-section">
    <Container variant="default">
      <div className="about-top">
        <div className="about-top__head">
          <span className="about-top__eyebrow">À propos</span>
          <h2 className="about-top__title">Une petite équipe, un grand studio</h2>
          <p className="about-top__lede">
            Atahualpa Music Studio, c’est avant tout une équipe de musiciens
            passionnés qui travaillent ensemble, face au lac Léman.
          </p>
        </div>
        <img
          className="about-top__image"
          src="/assets/atahualpa-studio-image.png"
          alt="L’équipe d’Atahualpa Music Studio"
        />
      </div>

      <div className="about-body">
        <p>
          Nous sommes une <b>petite équipe soudée</b> qui collabore au
          quotidien autour d’un même studio : <b>professeurs</b>,{' '}
          <b>ingénieurs du son</b> et <b>techniciens vidéo</b>, tous actifs
          comme musiciens et habitués à travailler ensemble sur les cours
          comme sur les projets de captation.
        </p>
        <p>
          Le lieu dispose de <b>deux salles d’enregistrement entièrement
          équipées</b> et d’un cadre inspirant pour les musiciens de tous
          niveaux. On y propose des <b>leçons individuelles et en groupe</b>{' '}
          pour tous les âges (guitare, basse, batterie, piano, synthétiseur,
          DJing), des <b>ateliers de production musicale</b> et des{' '}
          <b>captations audio &amp; vidéo</b> professionnelles.
        </p>
        <p>
          Des <b>activités spéciales</b> sont aussi organisées pendant les
          vacances, dans une atmosphère <b>professionnelle et chaleureuse</b>
          {' '}où chacun trouve sa place — qu’il vienne apprendre un instrument
          ou enregistrer un projet.
        </p>
      </div>
    </Container>
  </section>
);

export default About;
