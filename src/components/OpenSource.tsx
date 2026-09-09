import { Fragment } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { contributions } from '../data/profile'

/**
 * Merged upstream work, in two tiers. The featured project earns a list of its
 * own changes; the rest are named in a sentence, because a single doc fix in a
 * row of its own reads as more than it is.
 */
export function OpenSource() {
  const listRef = useReveal<HTMLOListElement>()
  const { featured, also } = contributions

  return (
    <section id="open-source" className="section" aria-labelledby="open-source-title">
      <div className="section-heading">
        <h2 id="open-source-title">Open source</h2>
      </div>

      <div className="oss-featured">
        <a
          className="oss-project"
          href={featured.url}
          target="_blank"
          rel="noreferrer"
        >
          {featured.project}
          <ArrowUpRight aria-hidden="true" size={17} />
        </a>
        <p className="oss-blurb">{featured.blurb}</p>
      </div>

      <ol className="work-list oss-list" ref={listRef}>
        {featured.prs.map((pr) => (
          <li key={pr.number} className="work-item reveal">
            <a
              className="work-row oss-row"
              href={pr.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="work-number">#{pr.number}</span>
              <span className="oss-pr-title">{pr.title}</span>
              <ArrowUpRight className="work-arrow" aria-hidden="true" size={18} />
            </a>
          </li>
        ))}
      </ol>

      <p className="oss-also">
        Smaller fixes merged into{' '}
        {also.map((item, index) => (
          <Fragment key={item.name}>
            <a
              className="prose-link"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.name}
            </a>
            {index < also.length - 2
              ? ', '
              : index === also.length - 2
                ? ', and '
                : '.'}
          </Fragment>
        ))}
      </p>
    </section>
  )
}
