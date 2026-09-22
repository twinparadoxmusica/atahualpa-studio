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

  const descriptionByLocale = {
    fr: (
      <p>
        Face au lac Léman, un studio dédié à l’apprentissage, à la production
        audio-vidéo et au travail du son dans les espaces. De la musique à
        l’acoustique, une approche pratique, créative et technique.
      </p>
    ),
    en: (
      <p>
        Overlooking Lake Geneva, a studio dedicated to learning, audio-video
        production and sound in spaces. From music to acoustics, we combine a
        practical, creative and technical approach.
      </p>
    ),
    es: (
      <p>
        Frente al lago Lemán, un estudio dedicado al aprendizaje, la producción
        de audio y vídeo y al sonido de los espacios. De la música a la
        acústica, con un enfoque práctico, creativo y técnico.
      </p>
    ),
    it: (
      <p>
        Di fronte al lago Lemano, uno studio dedicato all’apprendimento, alla
        produzione audio-video e al suono degli spazi. Dalla musica
        all’acustica, con un approccio pratico, creativo e tecnico.
      </p>
    ),
  };
  const description = descriptionByLocale[locale] || descriptionByLocale.fr;
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
