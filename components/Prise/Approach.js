import { Container } from '../ui';

const STEPS = [
  {
    n: '01',
    title: 'Brief',
    body: 'On échange sur votre projet, vos contraintes et le rendu souhaité.',
  },
  {
    n: '02',
    title: 'Captation',
    body: 'Installation studio ou sur site, son et image synchronisés au cordeau.',
  },
  {
    n: '03',
    title: 'Post-production',
    body: 'Montage, mixage et mastering pour un rendu prêt à diffuser.',
  },
  {
    n: '04',
    title: 'Diffusion',
    body: 'Livraison des fichiers ou stream YouTube en direct, prêt pour le public.',
  },
];

const Approach = () => (
  <section id="approche" className="prise-approach">
    <Container variant="default">
      <div className="prise-approach__head">
        <span className="prise-approach__eyebrow">Notre méthode</span>
        <h2 className="prise-approach__title">
          Une équipe, quatre étapes — du brief à la diffusion.
        </h2>
      </div>

      <ol className="prise-approach__steps">
        {STEPS.map(({ n, title, body }) => (
          <li key={n} className="prise-approach__step">
            <span className="prise-approach__num">{n}</span>
            <h3 className="prise-approach__step-title">{title}</h3>
            <p className="prise-approach__step-body">{body}</p>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

export default Approach;
