import { isExternalLink, profile } from '../data/profile'

/**
 * Closes the page on the phrase the hero ends with. Deliberately just a
 * heading, a line of context, and one target: the site footer immediately
 * below already carries the social links, and listing them here as well put
 * two contact blocks back to back.
 */
export function SayHello() {
  const email = profile.socialLinks.find((link) => link.kind === 'email')

  return (
    <section className="say-hello" aria-labelledby="say-hello-title">
      <h2 id="say-hello-title">{profile.sayHello.title}</h2>
      <p className="say-hello-availability">{profile.sayHello.availability}</p>
      {email && (
        <a
          className="say-hello-email"
          href={email.href}
          {...(isExternalLink(email.href) && {
            target: '_blank',
            rel: 'noreferrer',
          })}
        >
          {email.href.replace('mailto:', '')}
        </a>
      )}
    </section>
  )
}
