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

const VideosEleves = () => {
  const { t } = useLanguage();

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
                title={`${t('videos.itemTitle')} ${idx + 1}`}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default VideosEleves;
