import { Rocket } from './Rocket'

type HeroProps = {
  profile: {
    summary: string
  }
}

export function Hero({ profile }: HeroProps) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          I{' '}
          <span className="hero-underlined">
            build
            {/* Stretched to the width of the word, so the wave has to be free
                of its aspect ratio. non-scaling-stroke keeps the line an even
                weight while that happens. */}
            <svg
              className="hero-flourish"
              viewBox="0 0 120 14"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 8 C 22 2, 42 12, 62 6 S 102 10, 118 5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </span>{' '}
          products end to end
          <br />
          that <em>hold up.</em>
        </h1>

        <p className="hero-summary">{profile.summary}</p>
      </div>

      <div className="hero-art">
        <Rocket />
      </div>
    </section>
  )
}
