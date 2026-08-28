import { ArrowUpRight } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import type { SocialLink } from '../data/profile'

type ConnectBlockProps = {
  title: string
  body: string
  socialLinks: SocialLink[]
}

export function ConnectBlock({
  title,
  body,
  socialLinks,
}: ConnectBlockProps) {
  return (
    <section className="connect-block" aria-labelledby="connect-title">
      <div>
        <p className="section-kicker">Connect</p>
        <h2 id="connect-title">{title}</h2>
        <p>{body}</p>
      </div>
      <div className="connect-actions" aria-label="Connect links">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            className="button primary-button"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <BrandIcon kind={link.kind} />
            {link.label}
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        ))}
      </div>
    </section>
  )
}
