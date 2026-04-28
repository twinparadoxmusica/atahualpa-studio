import React from 'react';
import { Container, SectionHeader, LazyVideo } from '../ui';
import './videos-eleves.css';

const studentVideos = [
  { url: 'https://www.youtube.com/embed/8NryZfrV0TE', title: 'Élève en studio — vidéo 1' },
  { url: 'https://www.youtube.com/embed/K1L0NzlrmPE', title: 'Élève en studio — vidéo 2' },
  { url: 'https://www.youtube.com/embed/jvirbfoCXDI', title: 'Élève en studio — vidéo 3' },
  { url: 'https://www.youtube.com/embed/x7zeUqTIo1c', title: 'Élève en studio — vidéo 4' },
];

const VideosEleves = () => (
  <section className="videos-eleves">
    <Container variant="default">
      <SectionHeader
        eyebrow="Élèves en studio"
        title="Vidéos des élèves"
        lede="Les élèves enregistrent une chanson en studio à la fin de l’année pour mettre en valeur leur progression."
      />
      <ul className="videos-eleves__grid">
        {studentVideos.map((video) => (
          <li key={video.url} className="videos-eleves__item">
            <LazyVideo url={video.url} title={video.title} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default VideosEleves;
