import { ArrowRight } from 'lucide-react'
import { Hero } from '../components/Hero'
import { OpenSource } from '../components/OpenSource'
import { PageLink } from '../components/PageLink'
import { PostList } from '../components/PostList'
import { SayHello } from '../components/SayHello'
import { WorkList } from '../components/WorkList'
import { profile, projects } from '../data/profile'
import { posts } from '../data/posts'
import type { RoutePath } from '../routes'

type HomePageProps = {
  onNavigate: (path: RoutePath) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero profile={profile} />

      <section id="work" className="section work-section" aria-labelledby="work-title">
        <div className="section-heading">
          <h2 id="work-title">Selected work</h2>
        </div>
        <WorkList projects={projects} />
      </section>

      <OpenSource />

      <section className="section" aria-labelledby="posts-preview-title">
        <div className="section-heading preview-heading">
          <h2 id="posts-preview-title">Writing</h2>
          <PageLink className="text-link" to="/posts" onNavigate={onNavigate}>
            All posts
            <ArrowRight aria-hidden="true" size={17} />
          </PageLink>
        </div>
        <PostList posts={posts.slice(0, 3)} onNavigate={onNavigate} />
      </section>

      <SayHello />
    </>
  )
}
