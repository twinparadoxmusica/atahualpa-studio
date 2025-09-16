import './styles.css';

const details = [
  {
    icon: '🎸',
    title: 'Cours de musique innovants & ateliers créatifs',
    description: (
      <>
        Découvre un <strong>stage musical unique</strong>, ouvert à tous, où tu
        explores la <strong>guitare</strong>, les{' '}
        <strong>multi-instruments</strong>, la <strong>production</strong> et le{' '}
        <strong>DJing</strong>. Ici, la <strong>créativité</strong> et le{' '}
        <strong>plaisir d’apprendre </strong>
        sont au cœur, pour que chacun trouve son rythme et sa voix.
        <ul>
          <li>
            <strong>Ateliers</strong> de découverte instrumentale
          </li>
          <li>
            <strong>Initiation</strong> aux bases de plusieurs instruments
          </li>
          <li>
            <strong>Pratique collective</strong> en groupe pour partager
            l’énergie
          </li>
        </ul>
      </>
    ),
    link: '/lecons-musique',
  },
  {
    icon: '🎶✨',
    title: 'Prises de son & vidéo professionnelles',
    description: (
      <>
        Participe à une expérience où la <strong>musique</strong> rencontre la{' '}
        <strong>technologie</strong> : découvre la magie de la
        <strong> captation professionnelle</strong> à travers des{' '}
        <strong>concerts</strong>, des <strong>enregistrements studio</strong>{' '}
        et des <strong>projets audiovisuels</strong>.
        <ul>
          <li>
            <strong>Enregistrement audio</strong> : voix, instruments et sons
            créatifs
          </li>
          <li>
            <strong>Mixage et édition</strong> : améliore et assemble tes
            enregistrements
          </li>
          <li>
            <strong>Prise et édition de vidéo</strong> : capte tes performances
            avec caméras et angles variés
          </li>
        </ul>
      </>
    ),
    link: '/prise-son-video',
  },
];

export default function StageDetails() {
  return (
    <div className="stage-section margin-bottom-lg">
      <div className="section stage-section-content">
        <h2 className="section-title margin-bottom-lg">
          Découvrez notre univers musical et audiovisuel
        </h2>
        <div className="stage-grid">
          {details.map((item, index) => (
            <div className="stage-box" key={index}>
              <h3 className="stage-title">
                {item.title} {item.icon}
              </h3>
              <div className="stage-description">{item.description}</div>
              <button>
                <a href={item.link}>Découvrir le programme</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
