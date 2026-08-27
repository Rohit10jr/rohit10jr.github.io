import type { FocusArea } from '../data/profile'

type AboutProps = {
  summary: string
  focusAreas: FocusArea[]
}

export function About({ summary, focusAreas }: AboutProps) {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="section-kicker">About</p>
        <h2 id="about-title">A practical portfolio for backend work.</h2>
      </div>
      <div className="about-content">
        <p>{summary}</p>
        <dl className="quick-facts">
          <div>
            <dt>Location</dt>
            <dd>Chennai</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>Back-end developer</dd>
          </div>
          <div>
            <dt>Project data</dt>
            <dd>Typed and easy to replace</dd>
          </div>
        </dl>
      </div>
      <div id="focus" className="focus-grid" aria-label="Engineering focus">
        {focusAreas.map((item) => (
          <article key={item.title} className="focus-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
