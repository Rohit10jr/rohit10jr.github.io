import { profile } from '../data/profile'
import { Rocket } from './Rocket'

export function Hero() {
  const { hero } = profile

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          {hero.headlineLead}{' '}
          <span className="hero-underlined">
            {hero.headlineUnderlined}
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
                d="M3 10 C 14 3, 28 12, 44 7 C 58 3, 72 11, 86 6.5 C 98 3, 108 8, 117 4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </span>{' '}
          {hero.headlineRest}
          <br />
          {hero.headlineTail} <em>{hero.headlineAccent}</em>
        </h1>

        <p className="hero-summary">
          {hero.summary}{' '}
          {/* The closing section repeats this phrase, so it doubles as the way
              down to it. */}
          <a className="hero-summary-link" href="#say-hello">
            {hero.summaryLink}
          </a>
        </p>
      </div>

      <div className="hero-art">
        <Rocket />
      </div>
    </section>
  )
}
