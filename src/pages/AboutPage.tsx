import { ArrowUpRight } from "lucide-react";
import { ConnectBlock } from "../components/ConnectBlock";
import { profile } from "../data/profile";

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
            width="560"
            height="640"
          />
        </figure>
        <div className="about-prose">
          <p>
            I am a software engineer in Chennai, building full-stack products,
            backend systems, and agent-powered workflows.
          </p>
          <p>
            Mostly I am chasing the forefront of technology and AI. I build
            things to understand them, and the exploring is the point.
          </p>
          <p>
            Most of my work is Python with React and TypeScript where the
            interface matters.
          </p>
          <p>
            Right now I am going deeper on scalable backend architecture, cloud
            infrastructure, and agent-based systems.
          </p>
          <p>
            Away from the keyboard it is usually the gym, a long walk, a book or
            a film. That photo is from the Kedarkantha summit.
          </p>
          <p>
            Progress beats perfection. I would rather ship a clear increment,
            take the feedback, and improve from there.
          </p>
        </div>
      </section>

      <section
        className="github-activity"
        aria-labelledby="github-activity-title"
      >
        <h2 id="github-activity-title">GitHub Activity</h2>
        <img
          src="https://ghchart.rshah.org/Rohit10jr"
          alt="Rohit10jr GitHub contribution activity chart"
          loading="lazy"
          width="840"
          height="140"
        />
        <p>I build what I am curious about and leave the source code open.</p>
        <p>
          <a
            className="text-link"
            href="https://github.com/Rohit10jr"
            target="_blank"
            rel="noreferrer"
          >
            Follow me on GitHub
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>{" "}
          to catch new projects as they land.
        </p>
      </section>

      <ConnectBlock
        title="Stay connected"
        body="If you would like to connect or have questions about my work, feel free to reach out."
      />
    </article>
  );
}
