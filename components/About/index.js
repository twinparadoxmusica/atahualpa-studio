'use client';
import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const bodyByLocale = {
  fr: (
    <>
      <p>
        <b>Atahualpa Music Studio</b> est un espace dédié à la musique, à la
        production et à l’acoustique, basé à Cologny. Nous y réunissons
        enseignement musical, création, captation audio &amp; vidéo et
        interventions d’acoustique et d’insonorisation.
      </p>
      <p>
        Le noyau de l’équipe réunit <b>Ezequiel Cappellano</b>,{' '}
        <b>Mirko Hrubik</b>, <b>Gaspar Tornaroli</b> et{' '}
        <b>Astor Schiantarelli</b> : des profils complémentaires qui associent
        musique et audio, réalisation audiovisuelle, acoustique architecturale,
        coordination de projet, construction sur mesure et menuiserie de
        précision.
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
        <b>Atahualpa Music Studio</b> is a space dedicated to music,
        production and acoustics, based in Cologny. We bring together music
        education, creation, audio &amp; video production, and acoustic and
        soundproofing work.
      </p>
      <p>
        The core team brings together <b>Ezequiel Cappellano</b>,{' '}
        <b>Mirko Hrubik</b>, <b>Gaspar Tornaroli</b> and{' '}
        <b>Astor Schiantarelli</b>: complementary profiles combining music
        and audio, audiovisual direction, architectural acoustics, project
        coordination, bespoke construction and precision carpentry.
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
        <b>Atahualpa Music Studio</b> es un espacio dedicado a la música, la
        producción y la acústica, con sede en Cologny. Reunimos enseñanza
        musical, creación, producción de audio y vídeo, e intervenciones de
        acústica e insonorización.
      </p>
      <p>
        El núcleo del equipo reúne a <b>Ezequiel Cappellano</b>,{' '}
        <b>Mirko Hrubik</b>, <b>Gaspar Tornaroli</b> y{' '}
        <b>Astor Schiantarelli</b>: perfiles complementarios que combinan
        música y audio, realización audiovisual, acústica arquitectónica,
        coordinación de proyectos, construcción a medida y carpintería de
        precisión.
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
        <b>Atahualpa Music Studio</b> è uno spazio dedicato alla musica, alla
        produzione e all’acustica, con sede a Cologny. Riuniamo formazione
        musicale, creazione, produzione audio &amp; video e interventi di
        acustica e insonorizzazione.
      </p>
      <p>
        Il nucleo del team riunisce <b>Ezequiel Cappellano</b>,{' '}
        <b>Mirko Hrubik</b>, <b>Gaspar Tornaroli</b> e{' '}
        <b>Astor Schiantarelli</b>: profili complementari che uniscono musica
        e audio, regia audiovisiva, acustica architettonica, coordinamento di
        progetto, costruzione su misura e falegnameria di precisione.
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
