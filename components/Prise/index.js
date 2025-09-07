import './styles.css';
import PhotoCarousel from '../PhotoCarousel';

const imagesCarousel = [
  '/assets/atahualpa-studio-computer.jpg',
  '/assets/atahualpa-studio-recording.jpg',
  '/assets/atahualpa-studio-lecons.jpg',
  '/assets/atahualpa-studio-guitarist.jpg',
  '/assets/atahualpa-studio-microphone.jpg',
  '/assets/atahualpa-studio-synthesizer.jpg',
  '/assets/atahualpa-studio-pro-tools.jpg',
  '/assets/atahualpa-studio-guitars.jpg',
];

const Prise = () => (
  <>
    <div className="prise-container">
      <div className="prise-top">
        <div className="prise-text">
          <h2>Prise de Son et Vidéo</h2>
          <p>
            Atahualpa Studio has two rooms for recording music and is fully
            equipped for producing and learning music in a wonderful and
            inspiring atmosphere, just in front of the Lake Geneva. ​​
          </p>
          <ul className="prise-list">
            <li>
              <b>Production musicale:</b> Nous donnons vie à vos idées avec un
              accompagnement créatif et du matériel professionnel, de la
              première note jusqu’au produit final prêt à être diffusé.
            </li>
            <li>
              <b>Enregistrement:</b> Deux salles traitées acoustiquement pour
              capturer vos performances avec clarté et caractère, dans un cadre
              inspirant face au lac Léman.
            </li>
            <li>
              <b>Mixage & Mastering:</b> Nous équilibrons, dynamisons et
              sublimons vos morceaux pour qu’ils sonnent parfaitement sur toutes
              les plateformes et systèmes audio.
            </li>
            <li>
              <b>Arrangements & Compositions:</b> Création et arrangement sur
              mesure pour artistes, groupes ou projets multimédia, mêlant
              musique populaire, électronique et classique.​
            </li>
          </ul>
        </div>
      </div>
      <div className="carousel-container">
        <PhotoCarousel images={imagesCarousel} />
      </div>
    </div>
    <div className="travaux-container margin-bottom-lg">
      <h2>Projets réaliséss</h2>

      <div className="video-container margin-bottom-sm">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AeeZRHdVg1Y?si=VXYUE5mu0qlUaqE_"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="video-container margin-bottom-sm">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zfthF6SijCk?si=j26bENdNl8xj8NpI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="video-container margin-bottom-sm">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vGNcRp0I57M?si=lSGhoWwMssXhW-MW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </>
);

export default Prise;
