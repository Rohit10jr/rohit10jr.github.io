import { ArrowUpRight, MapPin } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import type { SocialLink } from '../data/profile'

type HeroProps = {
  profile: {
    name: string
    role: string
    location: string
    headline: string
    summary: string
    image: {
      src: string
      alt: string
    }
    socialLinks: SocialLink[]
  }
}

export function Hero({ profile }: HeroProps) {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="section-kicker">{profile.location} / {profile.role}</p>
        <h1 id="hero-title">{profile.name} builds practical backend web applications.</h1>
        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary-button" href="#projects">
            View projects
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
          <a className="button secondary-button" href="#contact">
            Contact
          </a>
        </div>

        <div className="hero-links" aria-label="Social profile links">
          {profile.socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open Rohit J on ${link.label}`}
            >
              <BrandIcon kind={link.kind} />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="profile-visual">
        <img src={profile.image.src} alt={profile.image.alt} width="520" height="520" />
        <div className="profile-note">
          <span>Current focus</span>
          Python, Django, DRF, Flask
        </div>
        <div className="location-note">
          <MapPin aria-hidden="true" size={18} />
          {profile.location}
        </div>
      </div>
    </section>
  )
}
