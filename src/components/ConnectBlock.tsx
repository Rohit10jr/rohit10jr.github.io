type ConnectBlockProps = {
  title: string
  body: string
}

/**
 * Closes the About page. Deliberately carries no links of its own: the site
 * footer sits directly below with every account on it, and naming them here
 * as well put the same three links on screen twice.
 */
export function ConnectBlock({ title, body }: ConnectBlockProps) {
  return (
    <section className="connect-block" aria-labelledby="connect-title">
      <h2 id="connect-title">{title}</h2>
      <p>{body}</p>
    </section>
  )
}
