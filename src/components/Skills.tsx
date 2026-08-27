import type { SkillGroup } from '../data/profile'

type SkillsProps = {
  skillGroups: SkillGroup[]
}

export function Skills({ skillGroups }: SkillsProps) {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2 id="skills-title">Tools Rohit currently shows on the portfolio.</h2>
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
