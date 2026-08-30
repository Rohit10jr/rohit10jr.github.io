import { ArrowUpRight, Printer } from 'lucide-react'
import { BrandIcon } from '../components/BrandIcon'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { isExternalLink, profile, projects, skillGroups } from '../data/profile'

export function ResumePage() {
  return (
    <article className="page-shell resume-page">
      <header className="resume-hero">
        <div>
          <p className="section-kicker">Resume</p>
          <h1>Rohit J</h1>
          <p>
            {profile.role} based in {profile.location}.
          </p>
        </div>
        <div className="resume-actions">
          {profile.socialLinks.map((link) => (
            <a
              key={link.href}
              className="button secondary-button"
              href={link.href}
              {...(isExternalLink(link.href) && {
                target: '_blank',
                rel: 'noreferrer',
              })}
            >
              <BrandIcon kind={link.kind} />
              {link.label}
              {isExternalLink(link.href) && (
                <ArrowUpRight aria-hidden="true" size={17} />
              )}
            </a>
          ))}
          <button className="button print-button" type="button" onClick={() => window.print()}>
            <Printer aria-hidden="true" size={17} />
            Print
          </button>
        </div>
      </header>

      <section className="resume-block" aria-labelledby="resume-profile-title">
        <h2 id="resume-profile-title">Profile</h2>
        <p>{profile.summary}</p>
      </section>

      <Skills
        id="resume-skills"
        skillGroups={skillGroups}
        title="Skills"
        intro="The stack I work in day to day."
      />

      <Projects
        id="resume-projects"
        projects={projects}
        title="Project placeholders"
        intro="These projects are provisional and ready to be replaced with newer work."
      />

      <section className="resume-block" aria-labelledby="resume-needed-title">
        <h2 id="resume-needed-title">Details to add</h2>
        <ul className="plain-list">
          <li>Experience history, if Rohit wants it included.</li>
          <li>Education details, if Rohit wants them included.</li>
          <li>A real resume file, if a download should be offered later.</li>
        </ul>
      </section>
    </article>
  )
}
