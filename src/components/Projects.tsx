import { AlertCircle, ArrowUpRight, BadgeCheck } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import type { Project } from '../data/profile'

type ProjectsProps = {
  projects: Project[]
  id?: string
  title?: string
  intro?: string
  limit?: number
}

export function Projects({
  projects,
  id = 'projects',
  title = 'Provisional project list.',
  intro,
  limit,
}: ProjectsProps) {
  const visibleProjects = typeof limit === 'number' ? projects.slice(0, limit) : projects

  return (
    <section id={id} className="section projects-section" aria-labelledby={`${id}-title`}>
      <div className="section-heading projects-heading">
        <div>
          <p className="section-kicker">Projects</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </div>
        <a className="text-link" href="https://github.com/Rohit10jr" target="_blank" rel="noreferrer">
          GitHub profile
          <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article key={project.repositoryName} className="project-card">
            <div className="project-meta">
              <span>{project.repositoryName}</span>
              <span className={`project-status ${project.status}`}>
                {project.status === 'verified' ? (
                  <BadgeCheck aria-hidden="true" size={16} />
                ) : (
                  <AlertCircle aria-hidden="true" size={16} />
                )}
                {project.status === 'verified' ? 'Verified source' : 'Needs link review'}
              </span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tag-list" aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="project-actions">
              {project.sourceUrl ? (
                <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                  <BrandIcon kind="github" />
                  Source code
                </a>
              ) : (
                <span className="unlinked-source">Source link unavailable</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
