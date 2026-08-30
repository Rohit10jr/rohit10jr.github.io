import { ArrowUpRight } from 'lucide-react'
import { ConnectBlock } from '../components/ConnectBlock'
import { profile } from '../data/profile'

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
            src={profile.aboutImage.src}
            alt={profile.aboutImage.alt}
            width="640"
            height="800"
          />
        </figure>
        <div className="about-prose">
          <p>I am a back-end developer based in Chennai.</p>
          <p>
            I work mostly in Python — Django, Django REST Framework, and Flask —
            with the JavaScript and CSS I need to finish the front end.
          </p>
          <p>
            Most of what I have built is application-shaped: a real-time chat app
            over WebSockets, an e-commerce site, a blog, a school management
            system. The projects listed here are from my earlier site, and I am
            replacing them as newer work lands.
          </p>
          <p>
            Away from the keyboard I am usually walking uphill. That photo is
            from the Kedar summit.
          </p>
          <p>
            Progress beats perfection. I would rather ship a clear increment,
            take the feedback, and improve from there.
          </p>
        </div>
      </section>

      <section className="github-activity" aria-labelledby="github-activity-title">
        <h2 id="github-activity-title">GitHub Activity</h2>
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
        title="Stay connected"
        body="GitHub for the source work, LinkedIn for everything else."
        socialLinks={profile.socialLinks}
      />
    </article>
  )
}
