import PropTypes from "prop-types";
import "./styles.css";

const Bio = ({ hideText }) => (
  <div id="bio" className="bio margin-bottom-lg">
    <div className="bio-container">
      <img
        className="bio-image"
        src="/assets/ezequiel-cappellano-professeur.jpg"
        alt="Ezequiel Cappellano"
      />
      <div className="bio-description">
        <h3>Fondateur d’Atahualpa Music Studio</h3>

        <p>
          Je suis Ezequiel Cappellano, musicien argentin installé à Genève.
          Multi-instrumentiste et compositeur formé en musique contemporaine à
          Genève et Berne, je me passionne aussi bien pour la scène que pour la
          production sonore. Mon univers musical est riche et éclectique, allant
          du rock progressif aux musiques traditionnelles, en passant par
          l&apos;électro, le jazz et la musique classique indienne.
          Aujourd&apos;hui, je partage mon activité entre l&apos;enseignement,
          la création, et la prise de son au sein de mon propre studio à
          Cologny.
        </p>
      </div>
    </div>
  </div>
);

Bio.propTypes = {
  hideText: PropTypes.bool,
};

export default Bio;
