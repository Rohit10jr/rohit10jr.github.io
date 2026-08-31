import { ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import type { Project } from '../data/profile'

type WorkListProps = {
  projects: Project[]
}

/**
 * Numbered list of work. Each row is one link, so the whole row is the target
 * rather than a small anchor inside a card.
 */
export function WorkList({ projects }: WorkListProps) {
  const listRef = useReveal<HTMLOListElement>()

  return (
    <ol className="work-list" ref={listRef}>
      {projects.map((project, index) => {
        const number = String(index + 1).padStart(2, '0')
        const body = (
          <>
            <span className="work-number">{number}</span>
            <span className="work-info">
              <span className="work-name">{project.title}</span>
              <span className="work-desc">{project.description}</span>
              <span className="work-meta">
                {project.meta}
                {project.placeholder && (
                  <span className="work-soon">In progress</span>
                )}
              </span>
            </span>
            {project.url && (
              <ArrowUpRight className="work-arrow" aria-hidden="true" size={18} />
            )}
          </>
        )

        return (
          <li key={project.title} className="work-item reveal">
            {project.url ? (
              <a
                className="work-row"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                {body}
              </a>
            ) : (
              <div className="work-row">{body}</div>
            )}
          </li>
        )
      })}
    </ol>
  )
}
