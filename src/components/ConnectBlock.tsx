import type { ReactNode } from 'react'
import { isExternalLink, profile, type SocialLink } from '../data/profile'

type ConnectBlockProps = {
  title: string
  body: string
}

type ProseLinkProps = {
  kind: SocialLink['kind']
  children: ReactNode
}

function ProseLink({ kind, children }: ProseLinkProps) {
  const link = profile.socialLinks.find((item) => item.kind === kind)

  if (!link) {
    return <>{children}</>
  }

  return (
    <a
      className="prose-link"
      href={link.href}
      {...(isExternalLink(link.href) && {
        target: '_blank',
        rel: 'noreferrer',
      })}
    >
      {children}
    </a>
  )
}

export function ConnectBlock({ title, body }: ConnectBlockProps) {
  return (
    <section className="connect-block" aria-labelledby="connect-title">
      <h2 id="connect-title">{title}</h2>
      <p>{body}</p>
      <p>
        <ProseLink kind="linkedin">LinkedIn</ProseLink> and{' '}
        <ProseLink kind="twitter">X</ProseLink> for updates, or{' '}
        <ProseLink kind="email">email</ProseLink> for anything else.
      </p>
    </section>
  )
}
