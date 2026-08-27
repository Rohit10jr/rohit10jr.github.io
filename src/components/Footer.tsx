import { BrandIcon } from './BrandIcon'
import type { SocialLink } from '../data/profile'

type FooterProps = {
  socialLinks: SocialLink[]
}

export function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>Rohit J / Back-end developer / Chennai</p>
      <div className="footer-links" aria-label="Footer social links">
        {socialLinks.map((link) => (
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
    </footer>
  )
}
