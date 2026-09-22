'use client';
import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const bodyByLocale = {
  fr: (
    <>
      <p>
        <b>Atahualpa Music Studio</b> est avant tout un lieu d’enseignement
        musical à Cologny. Nous proposons des <b>cours individuels</b> et des{' '}
        <b>ateliers en petit groupe</b> pour enfants, adolescents et adultes,
        avec une approche pratique centrée sur le jeu, l’écoute, la création
        et le développement de l’autonomie musicale.
      </p>
      <p>
        Autour de cette activité principale, le studio développe également des
        projets de <b>production musicale</b>, de{' '}
        <b>captation audio &amp; vidéo</b>, ainsi que des interventions en{' '}
        <b>acoustique et insonorisation</b>. Le noyau de l’équipe réunit{' '}
        <b>Ezequiel Cappellano</b>, <b>Mirko Hrubik</b>,{' '}
        <b>Gaspar Tornaroli</b> et <b>Astor Schiantarelli</b> : des profils
        complémentaires qui associent pédagogie, musique et audio, réalisation
        audiovisuelle, acoustique architecturale, coordination de projet,
        construction sur mesure et menuiserie de précision.
      </p>
      <p>
        Pour les projets audiovisuels, cette équipe s’élargit régulièrement
        avec des <b>collaborateurs externes de confiance</b>, mobilisés selon
        la taille et les besoins de chaque production. Cette organisation nous
        permet de constituer une équipe adaptée à chaque projet tout en
        gardant une structure souple et proche de nos clients.
      </p>
    </>
  ),
  en: (
    <>
      <p>
        <b>Atahualpa Music Studio</b> is first and foremost a place for music
        education in Cologny. We offer <b>private lessons</b> and{' '}
        <b>small-group workshops</b> for children, teenagers and adults, with a
        practical approach focused on playing, listening, creativity and
        developing musical independence.
      </p>
      <p>
        Around this core activity, the studio also develops{' '}
        <b>music production</b>, <b>audio &amp; video recording</b>, as well as{' '}
        <b>acoustic and soundproofing</b> projects. The core team brings
        together <b>Ezequiel Cappellano</b>, <b>Mirko Hrubik</b>,{' '}
        <b>Gaspar Tornaroli</b> and <b>Astor Schiantarelli</b>: complementary
        profiles combining teaching, music and audio, audiovisual direction,
        architectural acoustics, project coordination, bespoke construction
        and precision carpentry.
      </p>
      <p>
        For audiovisual projects, the team regularly expands with{' '}
        <b>trusted external collaborators</b>, brought in according to the
        scale and needs of each production. This lets us build the right team
        for each project while keeping a flexible, close-knit structure.
      </p>
    </>
  ),
  es: (
    <>
      <p>
        <b>Atahualpa Music Studio</b> es, ante todo, un espacio de enseñanza
        musical en Cologny. Ofrecemos <b>clases individuales</b> y{' '}
        <b>talleres en grupos reducidos</b> para niños, adolescentes y adultos,
        con un enfoque práctico centrado en tocar, escuchar, crear y desarrollar
        autonomía musical.
      </p>
      <p>
        Alrededor de esta actividad principal, el estudio también desarrolla
        proyectos de <b>producción musical</b>, de{' '}
        <b>grabación de audio y vídeo</b>, así como trabajos de{' '}
        <b>acústica e insonorización</b>. El núcleo del equipo reúne a{' '}
        <b>Ezequiel Cappellano</b>, <b>Mirko Hrubik</b>,{' '}
        <b>Gaspar Tornaroli</b> y <b>Astor Schiantarelli</b>: perfiles
        complementarios que combinan pedagogía, música y audio, realización
        audiovisual, acústica arquitectónica, coordinación de proyectos,
        construcción a medida y carpintería de precisión.
      </p>
      <p>
        Para los proyectos audiovisuales, el equipo se amplía regularmente con{' '}
        <b>colaboradores externos de confianza</b>, convocados según la
        dimensión y las necesidades de cada producción. Así podemos formar el
        equipo adecuado para cada proyecto manteniendo una estructura flexible
        y cercana.
      </p>
    </>
  ),
  it: (
    <>
      <p>
        <b>Atahualpa Music Studio</b> è prima di tutto uno spazio dedicato
        all’insegnamento musicale a Cologny. Proponiamo{' '}
        <b>lezioni individuali</b> e <b>laboratori in piccoli gruppi</b> per
        bambini, ragazzi e adulti, con un approccio pratico centrato sul suonare,
        sull’ascolto, sulla creatività e sullo sviluppo dell’autonomia musicale.
      </p>
      <p>
        Attorno a questa attività principale, lo studio sviluppa anche progetti
        di <b>produzione musicale</b>, <b>registrazione audio &amp; video</b> e
        interventi di <b>acustica e insonorizzazione</b>. Il nucleo del team
        riunisce <b>Ezequiel Cappellano</b>, <b>Mirko Hrubik</b>,{' '}
        <b>Gaspar Tornaroli</b> e <b>Astor Schiantarelli</b>: profili
        complementari che uniscono pedagogia, musica e audio, regia
        audiovisiva, acustica architettonica, coordinamento di progetto,
        costruzione su misura e falegnameria di precisione.
      </p>
      <p>
        Per i progetti audiovisivi, il team si amplia regolarmente con{' '}
        <b>professionisti esterni di fiducia</b>, coinvolti in base alle
        dimensioni e alle esigenze di ogni produzione. In questo modo possiamo
        creare il team più adatto a ogni progetto mantenendo una struttura
        flessibile e vicina ai clienti.
      </p>
    </>
  ),
};

const About = () => {
  const { locale, t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <Container variant="default">
        <div className="about-top">
          <div className="about-top__head">
            <span className="about-top__eyebrow">{t('about.eyebrow')}</span>
            <h2 className="about-top__title">{t('about.title')}</h2>
            <p className="about-top__lede">{t('about.lede')}</p>
          </div>
          <img
            className="about-top__image"
            src="/assets/atahualpa-studio-image.png"
            alt={t('about.image.alt')}
          />
        </div>

        <div className="about-body">
          {bodyByLocale[locale] || bodyByLocale.fr}
        </div>
      </Container>
    </section>
  );
};

export default About;
