import { ArrowUpRight } from 'lucide-react'
import { ConnectBlock } from '../components/ConnectBlock'
import { focusAreas, profile } from '../data/profile'

export function AboutPage() {
  return (
    <article className="page-shell about-page minimal-about">
      <header className="about-header">
        <div className="about-heading">
          <p className="section-kicker">About</p>
          <h1>About Rohit J</h1>
          <p>
            Rohit is a back-end developer based in Chennai. This portfolio keeps
            the public story intentionally narrow: the facts that are already
            supported, the skills currently shown, and clear room for stronger
            project detail later.
          </p>
        </div>
        <img
          className="about-avatar"
          src={profile.image.src}
          alt={profile.image.alt}
          width="176"
          height="176"
        />
      </header>

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

      <ConnectBlock
        title="Keep in touch through the confirmed links"
        body="Use GitHub for source work and LinkedIn for professional updates until a preferred email is provided."
        socialLinks={profile.socialLinks}
      />
    </article>
  )
}
