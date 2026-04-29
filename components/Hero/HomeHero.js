'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Hero from './index';

/**
 * Locale-aware wrapper for the home hero. Keeps `Hero` itself a pure
 * presentational component that takes data as props, while pulling the
 * copy from the translations dictionary at render time.
 */
const HomeHero = () => {
  const { t, locale } = useLanguage();

  const description =
    locale === 'fr' ? (
      <p>
        Face au lac Léman, deux salles dédiées à la pédagogie musicale et à la
        production audio-vidéo. Une équipe de musiciens passionnés, au service
        des élèves comme des artistes.
      </p>
    ) : (
      <p>
        Overlooking Lake Geneva, two rooms dedicated to music education and to
        audio-video production. A team of passionate musicians, here for
        students and artists alike.
      </p>
    );

  return (
    <Hero
      eyebrow={t('home.hero.eyebrow')}
      title={t('home.hero.title')}
      subtitle={t('home.hero.subtitle')}
      description={description}
      ctas={[
        {
          label: t('home.hero.ctaLecons'),
          href: '/lecons-musique',
          variant: 'primary',
        },
        {
          label: t('home.hero.ctaPrise'),
          href: '/prise-son-video',
          variant: 'ghost',
        },
      ]}
      chips={[
        t('home.hero.chip.individual'),
        t('home.hero.chip.workshops'),
        t('home.hero.chip.studio'),
        t('home.hero.chip.live'),
      ]}
      align="left"
    />
  );
};

export default HomeHero;
