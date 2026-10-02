'use client';
import { useLanguage } from '../../contexts/LanguageContext';
import Hero from './index';
import { courseContent } from '../../constants/courseContent';

/**
 * Locale-aware wrapper for the home hero. Keeps `Hero` itself a pure
 * presentational component that takes data as props, while pulling the
 * copy from the translations dictionary at render time.
 */
const HomeHero = () => {
  const { t, locale } = useLanguage();

  const description = (
    <p>{(courseContent[locale] || courseContent.fr).homeDescription}</p>
  );
  const acousticChipByLocale = {
    fr: 'Acoustique',
    en: 'Acoustics',
    es: 'Acústica',
    it: 'Acustica',
  };

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
        acousticChipByLocale[locale] || acousticChipByLocale.fr,
      ]}
      align="left"
    />
  );
};

export default HomeHero;
