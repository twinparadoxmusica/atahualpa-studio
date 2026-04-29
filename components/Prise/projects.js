'use client';
import { Container, SectionHeader, LazyVideo } from '../ui';
import { useLanguage } from '../../contexts/LanguageContext';
import { PRISE_PROJECTS } from '../../constants/prise';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projets" className="prise-projects">
      <Container variant="default">
        <SectionHeader
          eyebrow={t('prise.projects.eyebrow')}
          title={t('prise.projects.title')}
          lede={t('prise.projects.lede')}
        />

        <div className="prise-projects__list">
          {PRISE_PROJECTS.map((project) => {
            const base = `prise.projects.${project.id}`;
            const title = t(`${base}.title`);
            const date = t(`${base}.date`);
            const location = t(`${base}.location`);
            const paragraphs = Array.from({ length: project.paragraphs }).map(
              (_, idx) => t(`${base}.p${idx + 1}`),
            );

            return (
              <article key={project.id} className="prise-project">
                <header className="prise-project__head">
                  <h3 className="prise-project__title">{title}</h3>
                  <div className="prise-project__meta">
                    {date && (
                      <span className="prise-project__pill">{date}</span>
                    )}
                    {location && (
                      <span className="prise-project__location">
                        {location}
                      </span>
                    )}
                  </div>
                </header>

                <div className="prise-project__body">
                  {paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="prise-project__desc">
                      {paragraph}
                    </p>
                  ))}
                  {project.link && (
                    <p className="prise-project__link">
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.link.keyLabel} ↗
                      </a>
                    </p>
                  )}
                </div>

                <div className="prise-project__videos">
                  {project.videos.map((url) => (
                    <LazyVideo key={url} url={url} title={title} />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
