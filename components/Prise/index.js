import './styles.css';
import StickyButton from '../StickyButton';

const youtubeVideos = [
  'https://www.youtube.com/embed/AeeZRHdVg1Y?si=VXYUE5mu0qlUaqE_',
  'https://www.youtube.com/embed/zfthF6SijCk?si=j26bENdNl8xj8NpI',
  'https://www.youtube.com/embed/vGNcRp0I57M?si=lSGhoWwMssXhW-MW',
  'https://www.youtube.com/embed/NRSyVVW0Mbw',
  'https://www.youtube.com/embed/HVG7Z7TopcI',
  'https://www.youtube.com/embed/c3kxbYpxtMw',
  'https://www.youtube.com/embed/TbV8EHTxuUY',
  'https://www.youtube.com/embed/MtHQ0eFCHig',
  'https://www.youtube.com/embed/5xGa3WL6REc',
  'https://www.youtube.com/embed/noOfEmiVzYU',
];

const Prise = () => (
  <>
    {/* ================= HERO SECTION ================= */}
    <section className="prise-hero">
      <div className="hero-content">
        <h2>Prise de Son, Vidéo & Streaming</h2>

        <p>
          Atahualpa Studio dispose de deux salles dédiées à la production audio
          et vidéo, dans un environnement inspirant face au lac Léman.
        </p>

        <p>
          Nous sommes une petite équipe spécialisée dans l’enregistrement, la
          captation vidéo, le mixage et la diffusion en direct. Nous
          accompagnons des artistes, orchestres et musiciens à chaque étape de
          leur production.
        </p>
      </div>
    </section>

    {/* ================= SERVICES + CAROUSEL ================= */}
    <section className="prise-container">
      <div className="prise-top">
        <div className="prise-text">
          <ul className="prise-list">
            <li>
              <b>Enregistrement orchestral & live:</b> captation d’orchestres,
              ensembles et musiciens avec une qualité studio.
            </li>

            <li>
              <b>Captation vidéo:</b> réalisation multicam pour concerts,
              sessions live et contenus artistiques.
            </li>

            <li>
              <b>Streaming YouTube:</b> gestion complète de la diffusion live
              avec audio synchronisé et image professionnelle.
            </li>

            <li>
              <b>Mixage & Mastering:</b> finalisation sonore pour un rendu clair
              et puissant sur toutes les plateformes.
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* ================= PROJECTS ================= */}
    <section className="travaux-container margin-bottom-lg">
      <h2>Projets réalisés</h2>

      <p className="travaux-description margin-bottom-md">
        Captations live, enregistrements d’orchestres et streaming YouTube
        réalisés par notre équipe.
      </p>

      <div className="video-grid">
        {youtubeVideos.map((videoUrl) => (
          <div key={videoUrl} className="video-card">
            <iframe
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
    <StickyButton />
  </>
);

export default Prise;
