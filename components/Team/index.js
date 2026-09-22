'use client';

import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const copy = {
  fr: {
    eyebrow: 'L’équipe',
    title: 'Quatre profils complémentaires',
    lede:
      'Le studio s’appuie sur un noyau pluridisciplinaire qui relie musique, audio, réalisation audiovisuelle, acoustique architecturale et réalisation technique.',
    members: [
      {
        initials: 'MH',
        name: 'Mirko Hrubik',
        role: 'Acoustique architecturale & analyse technique',
        body:
          'Ingénieur informaticien, titulaire d’un Master en acoustique architecturale et technicien du son. Il intervient sur les diagnostics, les mesures, l’analyse de la transmission sonore et la conception technique des solutions acoustiques.',
      },
      {
        initials: 'GT',
        name: 'Gaspar Tornaroli',
        role: 'Construction sur mesure & menuiserie de précision',
        body:
          'Menuisier de précision spécialisé dans la fabrication sur mesure et les finitions soignées. Il prend en charge les adaptations constructives, renforcements, structures, cadres et réalisations sur site.',
      },
      {
        initials: 'AS',
        name: 'Astor Schiantarelli',
        role: 'Réalisation audiovisuelle, image & scénario',
        body:
          'Réalisateur, scénariste et cadreur argentino-luxembourgeois, formé au cinéma et actif depuis plus de dix ans dans l’audiovisuel. Son travail couvre la fiction, les clips musicaux et les campagnes commerciales, avec des sélections et distinctions dans des festivals à Los Angeles, Paris et Tokyo.',
      },
      {
        initials: 'EC',
        name: 'Ezequiel Cappellano',
        role: 'Direction, musique & coordination de projet',
        body:
          'Fondateur d’Atahualpa Music Studio, musicien, compositeur et professionnel de l’audio. Il coordonne les projets, la relation client, l’organisation du studio et le suivi des productions et interventions.',
      },
    ],
    collaboratorsTitle: 'Des collaborateurs supplémentaires selon le projet',
    collaboratorsBody:
      'Autour de ce noyau, nous faisons régulièrement appel à un réseau de collaborateurs externes de confiance pour les productions audiovisuelles. Ingénieurs du son, techniciens, assistants et spécialistes sont mobilisés selon le format, la taille et les besoins de chaque projet.',
  },
  en: {
    eyebrow: 'The team',
    title: 'Four complementary profiles',
    lede:
      'The studio is built around a multidisciplinary core connecting music, audio, audiovisual direction, architectural acoustics and technical implementation.',
    members: [
      {
        initials: 'MH',
        name: 'Mirko Hrubik',
        role: 'Architectural acoustics & technical analysis',
        body:
          'Computer engineer, holder of a Master’s degree in Architectural Acoustics and sound technician. He works on diagnostics, measurements, sound-transmission analysis and the technical design of acoustic solutions.',
      },
      {
        initials: 'GT',
        name: 'Gaspar Tornaroli',
        role: 'Bespoke construction & precision carpentry',
        body:
          'Precision carpenter specialising in bespoke fabrication and detailed finishing. He handles construction adaptations, reinforcement, structures, frames and on-site implementation.',
      },
      {
        initials: 'AS',
        name: 'Astor Schiantarelli',
        role: 'Audiovisual direction, cinematography & writing',
        body:
          'Argentine-Luxembourgish director, writer and camera professional with a film background and more than a decade in the audiovisual industry. His work spans narrative filmmaking, music videos and commercial campaigns, with festival selections and recognition in Los Angeles, Paris and Tokyo.',
      },
      {
        initials: 'EC',
        name: 'Ezequiel Cappellano',
        role: 'Direction, music & project coordination',
        body:
          'Founder of Atahualpa Music Studio, musician, composer and audio professional. He coordinates projects, client relationships, studio operations and the follow-up of productions and interventions.',
      },
    ],
    collaboratorsTitle: 'Additional collaborators when the project requires it',
    collaboratorsBody:
      'Around this core team, we regularly call on a network of trusted external collaborators for audiovisual productions. Sound engineers, technicians, assistants and specialists are brought in according to the format, scale and needs of each project.',
  },
  es: {
    eyebrow: 'El equipo',
    title: 'Cuatro perfiles complementarios',
    lede:
      'El estudio se apoya en un núcleo multidisciplinario que conecta música, audio, realización audiovisual, acústica arquitectónica y realización técnica.',
    members: [
      {
        initials: 'MH',
        name: 'Mirko Hrubik',
        role: 'Acústica arquitectónica y análisis técnico',
        body:
          'Ingeniero informático, con un Máster en Acústica Arquitectónica y técnico de sonido. Trabaja en diagnósticos, mediciones, análisis de transmisión sonora y diseño técnico de soluciones acústicas.',
      },
      {
        initials: 'GT',
        name: 'Gaspar Tornaroli',
        role: 'Construcción a medida y carpintería de precisión',
        body:
          'Carpintero de precisión especializado en fabricación a medida y terminaciones cuidadas. Se ocupa de adaptaciones constructivas, refuerzos, estructuras, bastidores y realizaciones in situ.',
      },
      {
        initials: 'AS',
        name: 'Astor Schiantarelli',
        role: 'Realización audiovisual, cámara y guion',
        body:
          'Realizador, guionista y camarógrafo argentino-luxemburgués, formado en cine y con más de diez años de experiencia en el sector audiovisual. Su trabajo abarca ficción, videoclips y campañas comerciales, con selecciones y reconocimientos en festivales de Los Ángeles, París y Tokio.',
      },
      {
        initials: 'EC',
        name: 'Ezequiel Cappellano',
        role: 'Dirección, música y coordinación de proyectos',
        body:
          'Fundador de Atahualpa Music Studio, músico, compositor y profesional del audio. Coordina los proyectos, la relación con los clientes, la organización del estudio y el seguimiento de producciones e intervenciones.',
      },
    ],
    collaboratorsTitle: 'Colaboradores adicionales según cada proyecto',
    collaboratorsBody:
      'Alrededor de este núcleo recurrimos regularmente a una red de colaboradores externos de confianza para las producciones audiovisuales. Ingenieros de sonido, técnicos, asistentes y especialistas se incorporan según el formato, la dimensión y las necesidades de cada proyecto.',
  },
  it: {
    eyebrow: 'Il team',
    title: 'Quattro profili complementari',
    lede:
      'Lo studio si basa su un nucleo multidisciplinare che unisce musica, audio, regia audiovisiva, acustica architettonica e realizzazione tecnica.',
    members: [
      {
        initials: 'MH',
        name: 'Mirko Hrubik',
        role: 'Acustica architettonica e analisi tecnica',
        body:
          'Ingegnere informatico, titolare di un Master in Acustica Architettonica e tecnico del suono. Si occupa di diagnosi, misure, analisi della trasmissione sonora e progettazione tecnica delle soluzioni acustiche.',
      },
      {
        initials: 'GT',
        name: 'Gaspar Tornaroli',
        role: 'Costruzione su misura e falegnameria di precisione',
        body:
          'Falegname di precisione specializzato nella fabbricazione su misura e nelle finiture curate. Si occupa di adattamenti costruttivi, rinforzi, strutture, telai e realizzazioni in situ.',
      },
      {
        initials: 'AS',
        name: 'Astor Schiantarelli',
        role: 'Regia audiovisiva, fotografia e sceneggiatura',
        body:
          'Regista, sceneggiatore e operatore di ripresa argentino-lussemburghese, con formazione cinematografica e oltre dieci anni di esperienza nel settore audiovisivo. Il suo lavoro comprende fiction, videoclip e campagne commerciali, con selezioni e riconoscimenti in festival a Los Angeles, Parigi e Tokyo.',
      },
      {
        initials: 'EC',
        name: 'Ezequiel Cappellano',
        role: 'Direzione, musica e coordinamento dei progetti',
        body:
          'Fondatore di Atahualpa Music Studio, musicista, compositore e professionista dell’audio. Coordina i progetti, il rapporto con i clienti, l’organizzazione dello studio e il follow-up di produzioni e interventi.',
      },
    ],
    collaboratorsTitle: 'Collaboratori aggiuntivi in base al progetto',
    collaboratorsBody:
      'Attorno a questo nucleo ci affidiamo regolarmente a una rete di collaboratori esterni di fiducia per le produzioni audiovisive. Tecnici del suono, tecnici, assistenti e specialisti vengono coinvolti in base al formato, alle dimensioni e alle esigenze di ogni progetto.',
  },
};

const Team = () => {
  const { locale } = useLanguage();
  const t = copy[locale] || copy.fr;

  return (
    <section className="about-team">
      <Container>
        <div className="about-team__head">
          <span className="about-team__eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lede}</p>
        </div>

        <ul className="about-team__grid">
          {t.members.map((member) => (
            <li className="about-team__card" key={member.name}>
              <span className="about-team__initials" aria-hidden="true">
                {member.initials}
              </span>
              <h3>{member.name}</h3>
              <p className="about-team__role">{member.role}</p>
              <p className="about-team__bio">{member.body}</p>
            </li>
          ))}
        </ul>

        <div className="about-team__collaborators">
          <div className="about-team__collaborators-mark" aria-hidden="true">+</div>
          <div>
            <h3>{t.collaboratorsTitle}</h3>
            <p>{t.collaboratorsBody}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;
