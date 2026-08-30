import { BrandIcon } from './BrandIcon'
import { PageLink } from './PageLink'
import { isExternalLink, profile, type SocialLink } from '../data/profile'
import { routeItems, type RoutePath } from '../routes'

type FooterProps = {
  socialLinks: SocialLink[]
  onNavigate: (path: RoutePath) => void
}

export function Footer({ socialLinks, onNavigate }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>
        {profile.name} / {profile.role} / {profile.location}
      </p>
      <nav className="footer-nav" aria-label="Footer navigation">
        {routeItems.map((item) => (
          <PageLink key={item.path} to={item.path} onNavigate={onNavigate}>
            {item.label}
          </PageLink>
        ))}
      </nav>
      <div className="footer-links" aria-label="Footer social links">
        {socialLinks.map((link) => (
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
    </footer>
  )
}
