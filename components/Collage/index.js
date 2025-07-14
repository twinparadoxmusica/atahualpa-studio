import './styles.css';

const Collage = () => {
  return (
    <div className="collage-container">
      <div className="collage-vertical">
        <div className="collage-top">
          <img src="/assets/collage/twin-paradox-dj-set.jpg" alt="Horizontal" />
        </div>
        <div className="collage-bottom">
          <img
            src="/assets/collage/twin-paradox-ezequiel-guitar.jpg"
            alt="Vertical 1"
          />
          <img
            src="/assets/collage/twin-paradox-mirko-synthesizer.jpg"
            alt="Vertical 2"
          />
        </div>
        <div className="collage-footer">
          <img
            src="/assets/collage/twin-paradox-live-set.jpg"
            alt="Bottom Horizontal"
          />
        </div>
      </div>
      See more photos on our{' '}
      <a target="_blank" href="https://www.instagram.com/_twinparadox/">
        instagram page
      </a>
      !
    </div>
  );
};

export default Collage;
