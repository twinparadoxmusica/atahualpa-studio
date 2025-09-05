import './styles.css';
import Promos from './promos';
import FAQ from '../FAQ';
import VideosEleves from './videos-eleves';
import Hero from './hero';
import GuitarBassCraft from '../GuitarBassCraft';

const Lecons = () => (
  <>
    <Hero />
    <div id="groupes" className="groupes margin-bottom-lg">
      <div className="lecons-container">
        <h2>Atelier Multi-Instrumental en petits groupes</h2>
        <p>
          Atelier hebdomadaire dès 5 ans, en petits groupes : guitare, basse,
          piano, batterie et synthétiseur. Une approche ludique, pratique et
          multilingue (FR/EN/ES/IT), sans solfège imposé. Les enfants jouent
          ensemble et enregistrent une chanson en studio ! Réservation flexible
          du lundi au vendredi (15h-20h). Cours d’essai gratuit.
        </p>
        {/*<h3>Online lessons </h3>
        <p>
          A well-balanced combination of webcam lessons, audio recordings,
          videos, and personalized exercises—along with the numerous benefits of
          learning from the comfort of home—makes this approach increasingly
          popular and in high demand. Here are a few testimonials from my
          students:
        </p>
        */}
      </div>
    </div>
    <Promos />
    <GuitarBassCraft />
    <VideosEleves />
    <FAQ />
  </>
);

export default Lecons;
