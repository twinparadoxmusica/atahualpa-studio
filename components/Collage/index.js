import './styles.css';

const Collage = () => {
  return (
    <div className="collage-container">
      <div className="image-container">
        <img
          src="/assets/studio-cover-wide.jpeg"
          alt="Atahualpa Studio Cover"
        />
        <div className="overlay"></div>
        <div className="cover-title">
          <h1>Un studio, deux passions</h1>
          <h2>Enseigner et capturer la musique</h2>
        </div>
      </div>
    </div>
  );
};

export default Collage;
