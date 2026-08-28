import { ArrowUpRight, MessageSquare } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import type { SocialLink } from '../data/profile'

type ContactProps = {
  socialLinks: SocialLink[]
}

export function Contact({ socialLinks }: ContactProps) {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="section-kicker">Contact</p>
        <h2 id="contact-title">Start with Rohit's verified public profiles.</h2>
        <p>
          The current portfolio source does not include a confirmed email address or
          working form endpoint, so the contact paths stay limited to GitHub and LinkedIn.
        </p>
      </div>
      <div className="contact-actions" aria-label="Contact links">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            className="button contact-button"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <BrandIcon kind={link.kind} />
            {link.label}
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        ))}
        <span className="contact-note">
          <MessageSquare aria-hidden="true" size={18} />
          Add a preferred email later to enable a direct mail link.
        </span>
      </div>
    </section>
  )
}
