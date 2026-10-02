'use client';
import Image from 'next/image';
import Hero from '../Hero';
import { Container } from '../ui';
import Pricing from '../IndividualClass/pricing-individual';
import Location from '../Location';
import { useLanguage } from '../../contexts/LanguageContext';
import { guitarContent } from '../../constants/guitarContent';
import './styles.css';
export default function Guitar() {
  const { locale } = useLanguage();
  const copy = guitarContent[locale] || guitarContent.fr;
  const href = `https://wa.me/41772792514?text=${encodeURIComponent(copy.message)}`;
  return (
    <>
      <Hero
        title={copy.h1}
        description={<p>{copy.intro}</p>}
        variant="compact"
        ctas={[{ label: copy.cta, href, external: true, variant: 'primary' }]}
      />
      <Container variant="default" className="guitar-content">
        {copy.sections.map(([title, body], index) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
            {index === 3 && (
              <>
                <Image
                  src="/assets/ezequiel-cappellano-professeur.jpg"
                  alt="Ezequiel Cappellano"
                  width={800}
                  height={880}
                  sizes="(max-width: 600px) 90vw, 320px"
                  className="guitar-teacher"
                />
                <a href="/apropos">{copy.team} →</a>
              </>
            )}
          </section>
        ))}
      </Container>
      <Pricing
        planTitles={
          {
            fr: ['Formule flexible', 'Formule calendrier académique'],
            en: ['Flexible plan', 'Academic calendar plan'],
            es: ['Plan flexible', 'Plan de calendario académico'],
            it: ['Piano flessibile', 'Piano secondo il calendario accademico'],
          }[locale]
        }
        heading={copy.pricing}
        discoveryLabel={copy.cta}
        discoveryHref={href}
      />
      <Container variant="default" className="guitar-content">
        <section>
          <h2>{copy.visit}</h2>
          <p>{copy.visitBody}</p>
          <p>
            <a href="tel:+41772792514">+41 77 279 25 14</a> ·{' '}
            <a href="mailto:contact@atahualpamusicstudio.com">
              contact@atahualpamusicstudio.com
            </a>
          </p>
        </section>
        <section>
          <h2>{copy.faq}</h2>
          {copy.questions.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </section>
        <p>
          <a
            className="course-team__cta"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.cta} →
          </a>
        </p>
      </Container>
      <Location />
    </>
  );
}
