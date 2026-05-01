'use client';
import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';

/**
 * Visual showcase / collage of recent on-site work.
 * Sits between the "approach" steps and the detailed projects list,
 * giving readers an immediate sense of the kind of productions we run.
 */
const SHOWCASE_ITEMS = [
  {
    src: '/assets/orquestra/victoria-hall-orchestra-stage.jpg',
    altKey: 'prise.showcase.img.stage.alt',
    captionKey: 'prise.showcase.img.stage.caption',
    sizeClass: 'prise-showcase__item--lg',
  },
  {
    src: '/assets/orquestra/victoria-hall-orchestra-microphones.jpg',
    altKey: 'prise.showcase.img.microphones.alt',
    captionKey: 'prise.showcase.img.microphones.caption',
    sizeClass: 'prise-showcase__item--md',
  },
  {
    src: '/assets/orquestra/victoria-hall-orchestra-micros.jpg',
    altKey: 'prise.showcase.img.micros.alt',
    captionKey: 'prise.showcase.img.micros.caption',
    sizeClass: 'prise-showcase__item--md',
  },
  {
    src: '/assets/orquestra/victoria-hall-orchestra-setup.jpg',
    altKey: 'prise.showcase.img.setup.alt',
    captionKey: 'prise.showcase.img.setup.caption',
    sizeClass: 'prise-showcase__item--md',
  },
  {
    src: '/assets/orquestra/festival-international-music-geneve-musicale-back.jpg',
    altKey: 'prise.showcase.img.festival.alt',
    captionKey: 'prise.showcase.img.festival.caption',
    sizeClass: 'prise-showcase__item--md',
  },
];

const Showcase = () => {
  const { t } = useLanguage();

  return (
    <section className="prise-showcase" aria-labelledby="prise-showcase-title">
      <Container variant="default">
        <div className="prise-showcase__head">
          <span className="prise-showcase__eyebrow">
            {t('prise.showcase.eyebrow')}
          </span>
          <h2 id="prise-showcase-title" className="prise-showcase__title">
            {t('prise.showcase.title')}
          </h2>
          <p className="prise-showcase__lede">{t('prise.showcase.lede')}</p>
        </div>

        <ul className="prise-showcase__grid">
          {SHOWCASE_ITEMS.map(({ src, altKey, captionKey, sizeClass }) => (
            <li
              key={src}
              className={`prise-showcase__item ${sizeClass}`}
            >
              <img src={src} alt={t(altKey)} loading="lazy" decoding="async" />
              <span className="prise-showcase__caption">{t(captionKey)}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Showcase;
