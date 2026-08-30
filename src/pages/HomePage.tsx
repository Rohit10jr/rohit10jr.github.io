import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { ConnectBlock } from '../components/ConnectBlock'
import { FocusAreas } from '../components/FocusAreas'
import { Hero } from '../components/Hero'
import { PageLink } from '../components/PageLink'
import { PostList } from '../components/PostList'
import { Projects } from '../components/Projects'
import { focusAreas, profile, projects } from '../data/profile'
import { posts } from '../data/posts'
import type { RoutePath } from '../routes'

type HomePageProps = {
  onNavigate: (path: RoutePath) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero profile={profile} onNavigate={onNavigate} />

      <section className="section" aria-labelledby="build-title">
        <div className="section-heading">
          <p className="section-kicker">What I build</p>
          <h2 id="build-title">Backend-first projects with practical interfaces.</h2>
        </div>
        <FocusAreas items={focusAreas} />
      </section>

      <Projects
        id="selected-work"
        projects={projects}
        title="Selected placeholder work."
        intro="These entries come from the previous portfolio and verified public repository metadata where available."
        limit={3}
      />

      <section className="section" aria-labelledby="posts-preview-title">
        <div className="section-heading preview-heading">
          <div>
            <p className="section-kicker">Posts</p>
            <h2 id="posts-preview-title">A future place for short technical notes.</h2>
          </div>
          <PageLink className="text-link" to="/posts" onNavigate={onNavigate}>
            View posts
            <ArrowUpRight aria-hidden="true" size={17} />
          </PageLink>
        </div>
        <PostList posts={posts} compact />
      </section>

      <section className="philosophy-preview" aria-labelledby="philosophy-title">
        <p className="section-kicker">Philosophy</p>
        <h2 id="philosophy-title">Progress beats perfection</h2>
        <p>
          Ship useful increments, learn from feedback, and improve from there.
          The About page keeps that idea visible without turning it into a slogan.
        </p>
        <PageLink className="text-link" to="/about" onNavigate={onNavigate}>
          Read about Rohit
          <ArrowRight aria-hidden="true" size={17} />
        </PageLink>
      </section>

      <ConnectBlock
        title="Connect with Rohit"
        body="GitHub for source work, LinkedIn and X for updates, email for anything else."
        socialLinks={profile.socialLinks}
      />
    </>
  )
}
