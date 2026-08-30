import { ArrowUpRight, MapPin } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { PageLink } from './PageLink'
import { isExternalLink, type SocialLink } from '../data/profile'
import type { RoutePath } from '../routes'

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
  onNavigate: (path: RoutePath) => void
}

export function Hero({ profile, onNavigate }: HeroProps) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="section-kicker">{profile.location} / {profile.role}</p>
        <h1 id="hero-title">{profile.name} builds practical backend web applications.</h1>
        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-actions" aria-label="Primary actions">
          <PageLink className="button primary-button" to="/about" onNavigate={onNavigate}>
            About
            <ArrowUpRight aria-hidden="true" size={18} />
          </PageLink>
          <PageLink className="button secondary-button" to="/resume" onNavigate={onNavigate}>
            Resume
          </PageLink>
          <PageLink className="button secondary-button" to="/posts" onNavigate={onNavigate}>
            Posts
          </PageLink>
        </div>

        <div className="hero-links" aria-label="Social profile links">
          {profile.socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(isExternalLink(link.href) && {
                target: '_blank',
                rel: 'noreferrer',
              })}
              aria-label={
                isExternalLink(link.href)
                  ? `Open Rohit J on ${link.label}`
                  : 'Email Rohit J'
              }
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
