import { ArrowRight } from 'lucide-react'

type HeroProps = {
  profile: {
    name: string
    role: string
    location: string
    summary: string
    image: {
      src: string
      alt: string
    }
  }
}

export function Hero({ profile }: HeroProps) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow">
          {profile.name} <span aria-hidden="true">·</span> {profile.location}
        </p>

        <svg
          className="hero-flourish"
          viewBox="0 0 120 14"
          width="120"
          height="14"
          aria-hidden="true"
        >
          <path
            d="M2 8 C 22 2, 42 12, 62 6 S 102 10, 118 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <h1 id="hero-title">
          I build backend systems
          <br />
          that <em>hold up.</em>
        </h1>

        <p className="hero-summary">{profile.summary}</p>

        <a className="hero-cta" href="#work">
          See selected work
          <ArrowRight aria-hidden="true" size={18} />
        </a>
      </div>

      <figure className="profile-visual">
        <img
          src={profile.image.src}
          alt={profile.image.alt}
          width="520"
          height="520"
        />
      </figure>
    </section>
  )
}
