import { BrandIcon } from './BrandIcon'
import { isExternalLink, profile, type SocialLink } from '../data/profile'

type FooterProps = {
  socialLinks: SocialLink[]
}

export function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>
        {profile.name} / {profile.role} / {profile.location}
      </p>
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
            title={isExternalLink(link.href) ? link.label : 'Email Rohit J'}
          >
            <BrandIcon kind={link.kind} size={28} />
          </a>
        ))}
      </div>
    </footer>
  )
}
