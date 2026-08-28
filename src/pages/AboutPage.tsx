import { ArrowUpRight } from 'lucide-react'
import { ConnectBlock } from '../components/ConnectBlock'
import { FocusAreas } from '../components/FocusAreas'
import { focusAreas, profile } from '../data/profile'

export function AboutPage() {
  return (
    <article className="page-shell about-page">
      <header className="page-hero about-page-hero">
        <div>
          <p className="section-kicker">About</p>
          <h1>Practical backend work, improved in useful increments.</h1>
          <p>
            Rohit's current public portfolio is intentionally narrow: Chennai,
            back-end development, Python, Django, DRF, Flask, JavaScript, CSS,
            and a set of provisional project links.
          </p>
        </div>
        <img
          src={profile.image.src}
          alt={profile.image.alt}
          width="420"
          height="420"
        />
      </header>

      <section className="prose-section" aria-labelledby="about-work-title">
        <h2 id="about-work-title">Engineer-owned and easy to revise.</h2>
        <p>
          This redesign keeps the story direct. It presents what is already
          supported by the old site and leaves clear places for better project
          detail when Rohit provides it.
        </p>
        <p>
          The structure favors data files over hidden page copy. Updating skills,
          projects, links, and future notes should be possible without changing
          the layout components.
        </p>
      </section>

      <aside className="philosophy-callout" aria-labelledby="about-philosophy">
        <p className="section-kicker">Working note</p>
        <h2 id="about-philosophy">Progress beats perfection</h2>
        <p>
          The useful path is to ship a clear increment, get feedback, and improve
          the next version. That is how this portfolio is structured: honest
          today, ready for stronger project evidence tomorrow.
        </p>
      </aside>

      <section className="section" aria-labelledby="about-focus-title">
        <div className="section-heading">
          <p className="section-kicker">Focus</p>
          <h2 id="about-focus-title">The work areas currently supported by the source content.</h2>
        </div>
        <FocusAreas items={focusAreas} />
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
