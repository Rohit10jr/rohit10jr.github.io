type ConnectBlockProps = {
  title: string
  body: string
}

export function ConnectBlock({ title, body }: ConnectBlockProps) {
  return (
    <section className="connect-block" aria-labelledby="connect-title">
      <h2 id="connect-title">{title}</h2>
      <p>{body}</p>
    </section>
  )
}
