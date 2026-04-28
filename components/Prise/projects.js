import { Container, SectionHeader, LazyVideo } from '../ui';
import { PRISE_PROJECTS } from '../../constants/prise';

const Projects = () => (
  <section id="projets" className="prise-projects">
    <Container variant="default">
      <SectionHeader
        eyebrow="Réalisations"
        title="Projets réalisés"
        lede="Captations live, enregistrements d'orchestres et streaming YouTube réalisés par notre équipe."
      />

      <div className="prise-projects__list">
        {PRISE_PROJECTS.map((project) => (
          <article key={project.id} className="prise-project">
            <header className="prise-project__head">
              <h3 className="prise-project__title">{project.title}</h3>
              <div className="prise-project__meta">
                {project.date && (
                  <span className="prise-project__pill">{project.date}</span>
                )}
                {project.location && (
                  <span className="prise-project__location">
                    {project.location}
                  </span>
                )}
              </div>
            </header>

            <div className="prise-project__body">
              {project.description.map((paragraph, idx) => (
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
                    {project.link.label} ↗
                  </a>
                </p>
              )}
            </div>

            <div className="prise-project__videos">
              {project.videos.map((url) => (
                <LazyVideo
                  key={url}
                  url={url}
                  title={project.title}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

export default Projects;
