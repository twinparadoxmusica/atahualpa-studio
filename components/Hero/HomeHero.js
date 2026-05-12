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
        À Cologny / Genève, Atahualpa Music Studio propose des cours de
        musique personnalisés, des ateliers multi-instrumentaux pour
        enfants, ainsi que des services d’enregistrement, de prise de
        son et de captation vidéo.
      </p>
    ),
    en: (
      <p>
        In Cologny / Geneva, Atahualpa Music Studio offers personalized
        music lessons, multi-instrument workshops for children, and
        professional recording, audio and video capture services.
      </p>
    ),
    es: (
      <p>
        En Cologny / Ginebra, Atahualpa Music Studio ofrece clases de
        música personalizadas, talleres multi-instrumentales para niños
        y servicios de grabación, sonido y captura de video.
      </p>
    ),
    it: (
      <p>
        A Cologny / Ginevra, Atahualpa Music Studio propone lezioni di
        musica personalizzate, laboratori multi-strumentali per bambini
        e servizi di registrazione, presa diretta e riprese video.
      </p>
    ),
  };
  const description = descriptionByLocale[locale] || descriptionByLocale.fr;

  return (
    <Hero
      eyebrow={t('home.hero.eyebrow')}
      title={t('home.hero.title')}
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
        t('home.hero.chip.atelier'),
        t('home.hero.chip.individual'),
        t('home.hero.chip.recording'),
        t('home.hero.chip.video'),
      ]}
      align="left"
    />
  );
};

export default HomeHero;
