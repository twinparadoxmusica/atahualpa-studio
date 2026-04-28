import './styles.css';

const youtubeVictoriaHall = [
  'https://www.youtube.com/embed/AeeZRHdVg1Y?si=VXYUE5mu0qlUaqE_',
  'https://www.youtube.com/embed/zfthF6SijCk?si=j26bENdNl8xj8NpI',
  'https://www.youtube.com/embed/vGNcRp0I57M?si=lSGhoWwMssXhW-MW',
];

const youtubeGeneveMusicale2025 = [
  'https://www.youtube.com/embed/NRSyVVW0Mbw',
  'https://www.youtube.com/embed/HVG7Z7TopcI',
  'https://www.youtube.com/embed/c3kxbYpxtMw',
  'https://www.youtube.com/embed/TbV8EHTxuUY',
  'https://www.youtube.com/embed/MtHQ0eFCHig',
  'https://www.youtube.com/embed/5xGa3WL6REc',
  'https://www.youtube.com/embed/noOfEmiVzYU',
];

const youtubeGeneveMusicale2026 = [
  'https://www.youtube.com/embed/9FjnZwsYOuA',
  'https://www.youtube.com/embed/8CG0ePU7oDU',
];

const Projects = () => (
  <>
    {/* ================= PROJECTS ================= */}
    <section className="travaux-container margin-bottom-lg">
      <h2>Projets réalisés</h2>

      <p className="travaux-description margin-bottom-lg">
        Captations live, enregistrements d’orchestres et streaming YouTube
        réalisés par notre équipe.
      </p>

      {/* ===== Genève Musicale 2026 ===== */}
      <div className="project-block">
        <h3 className="project-title">
          Festival International Genève Musicale 2026 – Concert d’ouverture (26
          Avril 2026)
        </h3>

        <p className="project-description">
          Dimanche 26 avril 2026 à 18h30 <br />
          Grande Salle de l’Espace Culturel de Genthod <br />
          <br />
          Concert à deux pianos avec les Maîtres du Festival et les musiciens
          invités.
          <br />
          <br />
          Au programme : Lutoslawski, Guastavino, Poulenc, Frank Martin,
          Borodine, Piazzolla et Michel Runtz. <br />
          <br />
          Le Festival International Genève Musicale réunit jeunes lauréats,
          maîtres du piano et artistes invités autour de concerts, master
          classes et moments de transmission musicale. <br />
          <br />
          Plus d’informations : <b>www.genevemusicale.com</b>
        </p>

        <div className="video-grid">
          {youtubeGeneveMusicale2026.map((videoUrl) => (
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
      </div>

      {/* ===== Genève Musicale 2025 ===== */}
      <div className="project-block">
        <h3 className="project-title">
          Concours International “Genève Musicale” (Juin 2025)
        </h3>

        <p className="project-description">
          🎹 2e Concours International pour Jeunes Pianistes “Genève Musicale”{' '}
          <br />
          📍 Organisé par l’Association “Genève Musicale” <br />
          <br />
          📺 Programme de l’épreuve demi-finale <br />
          Une compétition internationale où de jeunes pianistes talentueux venus
          du monde entier se produisent devant un jury international.
        </p>

        <div className="video-grid">
          {youtubeGeneveMusicale2025.map((videoUrl) => (
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
      </div>

      {/* ===== Victoria Hall 2024 ===== */}
      <div className="project-block">
        <h3 className="project-title">
          Victoria Hall – Orquestre CMGO Musimax (23 Juin 2024)
        </h3>

        <p className="project-description">
          Conservatoire de Genève – Victoria Hall <br />
          <b>Pieter-Jelle de BOER</b>, direction <br />
          <b>Lucas CHICHE</b>, piano (III mvt) <br />
          <br />
          <b>Atahualpa Music Studio</b> <br />
          Ezequiel Cappellano & Mirko Hrubik : recording, mixing and mastering{' '}
          <br />
          Louis Hans-Moevi & Nelson Iso : cameraman and video editing <br />
          <br />
          Ludwig van Beethoven – Piano Concerto op.19 N°2 in B flat Major
        </p>

        <div className="video-grid">
          {youtubeVictoriaHall.map((videoUrl) => (
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
      </div>
    </section>
  </>
);

export default Projects;
