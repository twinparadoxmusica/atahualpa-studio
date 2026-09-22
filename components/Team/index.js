'use client';

import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './styles.css';

const copy = {
  fr: {
    eyebrow: 'L’équipe',
    title: 'Trois profils complémentaires',
    lede:
      'Le studio s’appuie sur un noyau pluridisciplinaire qui relie musique, audio, acoustique architecturale et réalisation technique.',
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
        initials: 'EC',
        name: 'Ezequiel Cappellano',
        role: 'Direction, musique & coordination de projet',
        body:
          'Fondateur d’Atahualpa Music Studio, musicien, compositeur et professionnel de l’audio. Il coordonne les projets, la relation client, l’organisation du studio et le suivi des productions et interventions.',
      },
    ],
    collaboratorsTitle: 'Une équipe audiovisuelle qui s’adapte au projet',
    collaboratorsBody:
      'Pour les captations et productions audiovisuelles, nous faisons régulièrement appel à un réseau de collaborateurs externes de confiance. Ingénieurs, techniciens et spécialistes sont mobilisés selon le format, la taille et les besoins de chaque production.',
  },
  en: {
    eyebrow: 'The team',
    title: 'Three complementary profiles',
    lede:
      'The studio is built around a multidisciplinary core connecting music, audio, architectural acoustics and technical implementation.',
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
        initials: 'EC',
        name: 'Ezequiel Cappellano',
        role: 'Direction, music & project coordination',
        body:
          'Founder of Atahualpa Music Studio, musician, composer and audio professional. He coordinates projects, client relationships, studio operations and the follow-up of productions and interventions.',
      },
    ],
    collaboratorsTitle: 'An audiovisual team adapted to each project',
    collaboratorsBody:
      'For audiovisual recordings and productions, we regularly call on a network of trusted external collaborators. Engineers, technicians and specialists are brought in according to the format, scale and needs of each production.',
  },
  es: {
    eyebrow: 'El equipo',
    title: 'Tres perfiles complementarios',
    lede:
      'El estudio se apoya en un núcleo multidisciplinario que conecta música, audio, acústica arquitectónica y realización técnica.',
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
        initials: 'EC',
        name: 'Ezequiel Cappellano',
        role: 'Dirección, música y coordinación de proyectos',
        body:
          'Fundador de Atahualpa Music Studio, músico, compositor y profesional del audio. Coordina los proyectos, la relación con los clientes, la organización del estudio y el seguimiento de producciones e intervenciones.',
      },
    ],
    collaboratorsTitle: 'Un equipo audiovisual adaptado a cada proyecto',
    collaboratorsBody:
      'Para grabaciones y producciones audiovisuales recurrimos regularmente a una red de colaboradores externos de confianza. Ingenieros, técnicos y especialistas se incorporan según el formato, la dimensión y las necesidades de cada producción.',
  },
  it: {
    eyebrow: 'Il team',
    title: 'Tre profili complementari',
    lede:
      'Lo studio si basa su un nucleo multidisciplinare che unisce musica, audio, acustica architettonica e realizzazione tecnica.',
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
        initials: 'EC',
        name: 'Ezequiel Cappellano',
        role: 'Direzione, musica e coordinamento dei progetti',
        body:
          'Fondatore di Atahualpa Music Studio, musicista, compositore e professionista dell’audio. Coordina i progetti, il rapporto con i clienti, l’organizzazione dello studio e il follow-up di produzioni e interventi.',
      },
    ],
    collaboratorsTitle: 'Un team audiovisivo adattato a ogni progetto',
    collaboratorsBody:
      'Per registrazioni e produzioni audiovisive ci affidiamo regolarmente a una rete di collaboratori esterni di fiducia. Ingegneri, tecnici e specialisti vengono coinvolti in base al formato, alle dimensioni e alle esigenze di ogni produzione.',
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
