import { Container, SectionHeader } from '../ui';
import './styles.css';

const details = [
  {
    icon: '🎸',
    title: 'Cours de musique innovants & ateliers créatifs',
    description: (
      <>
        Ton enfant aime la <b>musique</b>, mais il s’ennuie en cours ou il ne
        sait pas quel <b>instrument</b> choisir? Tu voudrais te plonger dans la{' '}
        <b>production musicale</b> ou le <b>DJing</b>?
        <br />
        <br />
        Découvre une <b>pédagogie 100 % moderne</b> et <b>efficace</b>, où la{' '}
        <b>créativité</b> et le <b>plaisir d’apprendre</b> sont au cœur, pour
        que chacun trouve son <b>rythme</b> et sa <b>voix</b>.
      </>
    ),
    link: '/lecons-musique',
    linkText: 'Découvrir le programme',
  },
  {
    icon: '🎶',
    title: 'Prises de son & vidéo professionnelles',
    description: (
      <>
        Un <b>concert marquant</b> que tu voudrais garder en <b>souvenir</b> et{' '}
        <b>partager</b> avec le <b>monde</b> ? Marre des <b>captations</b> mal
        faites et des <b>tarifs démesurés</b> ?
        <br />
        <br />
        Profite d’un <b>service professionnel</b>, <b>fidèle</b> et{' '}
        <b>accessible</b>, pour mettre en valeur ta <b>musique</b> et ton{' '}
        <b>image</b>.
      </>
    ),
    link: '/prise-son-video',
    linkText: 'Plus d’informations',
  },
];

export default function StageDetails() {
  return (
    <section className="stage-section">
      <Container variant="default">
        <SectionHeader
          eyebrow="Notre univers"
          title="Découvrez notre univers musical et audiovisuel"
          lede="Deux activités complémentaires sous le même toit, pour apprendre, créer et capturer la musique."
        />
        <ul className="stage-grid">
          {details.map((item) => (
            <li className="stage-card" key={item.title}>
              <span className="stage-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="stage-card__title">{item.title}</h3>
              <div className="stage-card__body">{item.description}</div>
              <a className="stage-card__cta" href={item.link}>
                {item.linkText}
                <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
