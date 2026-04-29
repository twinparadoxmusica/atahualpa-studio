'use client';
import { Container } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';

const STEP_NUMBERS = ['01', '02', '03', '04'];

const Approach = () => {
  const { t } = useLanguage();

  return (
    <section id="approche" className="prise-approach">
      <Container variant="default">
        <div className="prise-approach__head">
          <span className="prise-approach__eyebrow">
            {t('prise.approach.eyebrow')}
          </span>
          <h2 className="prise-approach__title">{t('prise.approach.title')}</h2>
        </div>

        <ol className="prise-approach__steps">
          {STEP_NUMBERS.map((n, idx) => {
            const stepKey = `step${idx + 1}`;
            return (
              <li key={n} className="prise-approach__step">
                <span className="prise-approach__num">{n}</span>
                <h3 className="prise-approach__step-title">
                  {t(`prise.approach.${stepKey}.title`)}
                </h3>
                <p className="prise-approach__step-body">
                  {t(`prise.approach.${stepKey}.body`)}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
};

export default Approach;
