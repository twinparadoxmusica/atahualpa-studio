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
  es: (
    <>
      A tu hijo le encanta la <b>música</b>, pero se aburre en clase o no sabe
      qué <b>instrumento</b> elegir? ¿Te gustaría sumergirte en la{' '}
      <b>producción musical</b> o el <b>DJing</b>?
      <br />
      <br />
      Descubre una <b>pedagogía 100 % moderna</b> y <b>eficaz</b>, donde la{' '}
      <b>creatividad</b> y el <b>placer de aprender</b> son lo más importante,
      para que cada quien encuentre su <b>ritmo</b> y su <b>voz</b>.
    </>
  ),
  it: (
    <>
      Tuo figlio ama la <b>musica</b>, ma si annoia in classe o non sa quale{' '}
      <b>strumento</b> scegliere? Vorresti immergerti nella{' '}
      <b>produzione musicale</b> o nel <b>DJing</b>?
      <br />
      <br />
      Scopri una <b>pedagogia 100 % moderna</b> ed <b>efficace</b>, in cui la{' '}
      <b>creatività</b> e il <b>piacere di imparare</b> sono al centro, perché
      ognuno trovi il proprio <b>ritmo</b> e la propria <b>voce</b>.
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
  es: (
    <>
      ¿Un <b>concierto inolvidable</b> que querrías guardar como{' '}
      <b>recuerdo</b> y <b>compartir</b> con el <b>mundo</b>? ¿Cansado de{' '}
      <b>grabaciones</b> mediocres y de <b>tarifas desorbitadas</b>?
      <br />
      <br />
      Aprovecha un servicio <b>profesional</b>, <b>fiel</b> y{' '}
      <b>accesible</b> para realzar tu <b>música</b> y tu <b>imagen</b>.
    </>
  ),
  it: (
    <>
      Un <b>concerto memorabile</b> che vorresti conservare come{' '}
      <b>ricordo</b> e <b>condividere</b> con il <b>mondo</b>? Stanco di{' '}
      <b>riprese</b> mediocri e di <b>tariffe esagerate</b>?
      <br />
      <br />
      Approfitta di un servizio <b>professionale</b>, <b>fedele</b> e{' '}
      <b>accessibile</b> per valorizzare la tua <b>musica</b> e la tua{' '}
      <b>immagine</b>.
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
