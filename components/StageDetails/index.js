'use client';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const leconsBodyByLocale = {
  fr: (
    <>
      Ton enfant aime la <b>musique</b>, mais il s’ennuie en cours ou il ne sait
      pas quel <b>instrument</b> choisir? Tu voudrais te plonger dans la{' '}
      <b>production musicale</b> ou le <b>DJing</b>?
      <br />
      <br />
      Découvre une <b>pédagogie 100 % moderne</b> et <b>efficace</b>, où la{' '}
      <b>créativité</b> et le <b>plaisir d’apprendre</b> sont au cœur, pour que
      chacun trouve son <b>rythme</b> et sa <b>voix</b>.
    </>
  ),
  en: (
    <>
      Does your child love <b>music</b>, but get bored in class or struggle to
      pick an <b>instrument</b>? Want to dive into <b>music production</b> or{' '}
      <b>DJing</b>?
      <br />
      <br />
      Discover a <b>fully modern</b>, <b>effective</b> approach where{' '}
      <b>creativity</b> and the <b>joy of learning</b> come first — so everyone
      finds their <b>rhythm</b> and their <b>voice</b>.
    </>
  ),
};

const priseBodyByLocale = {
  fr: (
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
  en: (
    <>
      A <b>memorable concert</b> you want to keep as a <b>memory</b> and{' '}
      <b>share</b> with the <b>world</b>? Tired of poor <b>captures</b> and{' '}
      <b>overblown pricing</b>?
      <br />
      <br />
      Get a <b>professional</b>, <b>faithful</b> and <b>accessible</b> service
      that does justice to your <b>music</b> and your <b>image</b>.
    </>
  ),
};

export default function StageDetails() {
  const { locale, t } = useLanguage();

  const details = [
    {
      icon: '🎸',
      title: t('home.stage.lecons.title'),
      description: leconsBodyByLocale[locale] || leconsBodyByLocale.fr,
      link: '/lecons-musique',
      linkText: t('common.discoverProgram'),
    },
    {
      icon: '🎶',
      title: t('home.stage.prise.title'),
      description: priseBodyByLocale[locale] || priseBodyByLocale.fr,
      link: '/prise-son-video',
      linkText: t('common.moreInfo'),
    },
  ];

  return (
    <section className="stage-section">
      <Container variant="default">
        <SectionHeader
          eyebrow={t('home.stage.eyebrow')}
          title={t('home.stage.title')}
          lede={t('home.stage.lede')}
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
