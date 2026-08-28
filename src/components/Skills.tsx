import type { SkillGroup } from '../data/profile'

type SkillsProps = {
  skillGroups: SkillGroup[]
  id?: string
  title?: string
  intro?: string
}

export function Skills({
  skillGroups,
  id = 'skills',
  title = 'Tools Rohit currently shows on the portfolio.',
  intro,
}: SkillsProps) {
  return (
    <section id={id} className="section skills-section" aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </div>
      </div>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
