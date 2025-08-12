import "./styles.css";

const details = [
  {
    icon: "🎸",
    title: "Instruments",
    description: (
      <>
        Découverte et pratique de plusieurs instruments :{" "}
        <strong>guitare, batterie, piano/synthé, basse, percussions</strong>
        <br />
        <strong>Pas de solfège imposé.</strong> On apprend en jouant et en
        s’amusant
      </>
    ),
  },
  {
    icon: "🎶✨",
    title: "100 % pratique et ludique",
    description: (
      <>
        Ateliers 100 % pratiques, axés sur la{" "}
        <strong>création musicale en groupe</strong>
        <br />
        Activités ludiques :<br />
        <strong>jeux rythmiques, improvisation, mini-compositions</strong>
      </>
    ),
  },
  {
    icon: "👧👦",
    title: "Âge des participants",
    description: (
      <>
        Enfants et ados de <strong>7 à 18 ans</strong>
        <br />
        <strong>Aucun niveau requis</strong> (débutants bienvenus)
        <br />
        Groupes formés par tranches d’âge et affinités musicales
      </>
    ),
  },
  {
    icon: "👥",
    title: "Taille du groupe",
    description: (
      <>
        <strong>Maximum 4 enfants</strong> par groupe
        <br />
        pour garantir un suivi personnalisé et une ambiance bienveillante
      </>
    ),
  },
];

export default function StageDetails() {
  return (
    <div className="stage-section margin-bottom-lg">
      <div className="stage-section-content">
      <h2 className="section-title">Contenu pédagogique et détails du stage</h2>
      <div className="stage-grid">
        {details.map((item, index) => (
          <div className="stage-box" key={index}>
            <h3 className="stage-title">
              {item.title} {item.icon}
            </h3>
            <p className="stage-description">{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
