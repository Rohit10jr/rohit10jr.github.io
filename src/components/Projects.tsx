import { AlertCircle, ArrowUpRight, BadgeCheck } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import type { Project } from '../data/profile'

type ProjectsProps = {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="section-heading projects-heading">
        <div>
          <p className="section-kicker">Projects</p>
          <h2 id="projects-title">Provisional project list.</h2>
        </div>
        <a className="text-link" href="https://github.com/Rohit10jr" target="_blank" rel="noreferrer">
          GitHub profile
          <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
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
