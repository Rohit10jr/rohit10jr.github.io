import { ArrowUpRight } from 'lucide-react'
import { ConnectBlock } from '../components/ConnectBlock'
import { focusAreas, profile } from '../data/profile'

export function AboutPage() {
  return (
    <article className="page-shell about-page minimal-about">
      <header className="about-title">
        <h1>About</h1>
      </header>

      <section className="about-intro" aria-label="About Rohit J">
        <figure className="about-photo">
          <img
            className="about-avatar"
            src={profile.image.src}
            alt={profile.image.alt}
            width="280"
            height="280"
          />
        </figure>
        <div className="about-prose">
          <p>Rohit J is a back-end developer based in Chennai.</p>
          <p>
            His current public stack is Python, Django, DRF, Flask, JavaScript,
            and CSS.
          </p>
          <p>
            The project entries here are provisional links from the previous
            portfolio. They are ready to be replaced when newer work is provided.
          </p>
          <p>
            The site stays intentionally simple so profile copy, skills, project
            notes, and future writing can be updated without changing the whole
            layout.
          </p>
        </div>
      </section>

      <section className="prose-section" aria-labelledby="about-work-title">
        <h2 id="about-work-title">A practical portfolio, kept editable.</h2>
        <p>
          The site is built around simple typed data and direct page components.
          Skills, links, project placeholders, and future notes can be revised
          without changing the whole layout.
        </p>
        <p>
          For now, the copy stays close to the confirmed source material:
          Python, Django, DRF, Flask, JavaScript, CSS, Chennai, GitHub, LinkedIn,
          and provisional project links from the previous portfolio.
        </p>
      </section>

      <section className="github-activity" aria-labelledby="github-activity-title">
        <div>
          <p className="section-kicker">GitHub Activity</p>
          <h2 id="github-activity-title">Rohit10jr contribution activity.</h2>
        </div>
        <img
          src="https://ghchart.rshah.org/Rohit10jr"
          alt="Rohit10jr GitHub contribution activity chart"
          loading="lazy"
          width="840"
          height="140"
        />
        <a
          className="text-link"
          href="https://github.com/Rohit10jr"
          target="_blank"
          rel="noreferrer"
        >
          Open GitHub profile
          <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </section>

      <section
        className="prose-section philosophy-callout"
        aria-labelledby="about-philosophy"
      >
        <p className="section-kicker">Working note</p>
        <h2 id="about-philosophy">Progress beats perfection</h2>
        <p>
          The useful path is to ship a clear increment, listen to feedback, and
          improve from there. This version follows that idea: honest today, easy
          to update when better project evidence is ready.
        </p>
      </section>

      <section
        className="prose-section about-focus"
        aria-labelledby="about-focus-title"
      >
        <p className="section-kicker">Current focus</p>
        <h2 id="about-focus-title">What the current content supports.</h2>
        <ul className="about-note-list">
          {focusAreas.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <ConnectBlock
        title="Keep in touch through the confirmed links"
        body="Use GitHub for source work and LinkedIn for professional updates until a preferred email is provided."
        socialLinks={profile.socialLinks}
      />
    </article>
  )
}
