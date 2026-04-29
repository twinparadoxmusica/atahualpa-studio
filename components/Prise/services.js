'use client';
import { Container, SectionHeader } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';

const SERVICE_IDS = ['recording', 'video', 'streaming', 'mixing'];
const ICONS = {
  recording: '🎼',
  video: '🎥',
  streaming: '📡',
  mixing: '🎛️',
};

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="prise-services">
      <Container variant="default">
        <SectionHeader
          eyebrow={t('prise.services.eyebrow')}
          title={t('prise.services.title')}
          lede={t('prise.services.lede')}
        />

        <ul className="prise-services__grid">
          {SERVICE_IDS.map((id) => (
            <li key={id} className="prise-services__card">
              <span className="prise-services__icon" aria-hidden="true">
                {ICONS[id]}
              </span>
              <h3 className="prise-services__title">
                {t(`prise.services.${id}.title`)}
              </h3>
              <p className="prise-services__desc">
                {t(`prise.services.${id}.desc`)}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Services;
