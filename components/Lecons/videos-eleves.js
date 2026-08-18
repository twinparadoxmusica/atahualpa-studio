'use client';
import React from 'react';
import { Container, SectionHeader, LazyVideo } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import './videos-eleves.css';

const VIDEO_URLS = [
  'https://www.youtube.com/embed/8NryZfrV0TE',
  'https://www.youtube.com/embed/K1L0NzlrmPE',
  'https://www.youtube.com/embed/jvirbfoCXDI',
  'https://www.youtube.com/embed/x7zeUqTIo1c',
];

const videoCopyByLocale = {
  fr: {
    title: 'Projet d’élève enregistré en studio',
    caption: 'Interprétation et enregistrement en studio · projet d’élève',
    play: 'Lire la vidéo',
  },
  en: {
    title: 'Student project recorded in the studio',
    caption: 'Performance and studio recording · student project',
    play: 'Play video',
  },
  es: {
    title: 'Proyecto de alumno grabado en el estudio',
    caption: 'Interpretación y grabación en estudio · proyecto de alumno',
    play: 'Reproducir el video',
  },
  it: {
    title: 'Progetto di un allievo registrato in studio',
    caption:
      'Interpretazione e registrazione in studio · progetto di un allievo',
    play: 'Riproduci il video',
  },
};

const VideosEleves = () => {
  const { locale, t } = useLanguage();
  const videoCopy = videoCopyByLocale[locale] || videoCopyByLocale.fr;

  return (
    <section className="videos-eleves">
      <Container variant="default">
        <SectionHeader
          eyebrow={t('videos.eyebrow')}
          title={t('videos.title')}
          lede={t('videos.lede')}
        />
        <ul className="videos-eleves__grid">
          {VIDEO_URLS.map((url, idx) => (
            <li key={url} className="videos-eleves__item">
              <LazyVideo
                url={url}
                title={`${videoCopy.title} ${idx + 1}`}
                playLabel={videoCopy.play}
              />
              <p className="videos-eleves__caption">{videoCopy.caption}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default VideosEleves;
