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
          {profile.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section
        className="github-activity"
        aria-labelledby="github-activity-title"
      >
        <h2 id="github-activity-title">GitHub Activity</h2>
        <img
          src={profile.about.githubActivity.chartSrc}
          alt={profile.about.githubActivity.chartAlt}
          loading="lazy"
          width="840"
          height="140"
        />
        <p>{profile.about.githubActivity.body}</p>
        <p>
          <a
            className="text-link"
            href={profile.about.githubActivity.linkHref}
            target="_blank"
            rel="noreferrer"
          >
            {profile.about.githubActivity.linkLabel}
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>{" "}
          {profile.about.githubActivity.linkTail}
        </p>
      </section>

      <ConnectBlock
        title={profile.about.connect.title}
        body={profile.about.connect.body}
      />
    </article>
  );
}
