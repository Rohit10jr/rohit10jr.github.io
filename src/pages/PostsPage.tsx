import { Rss } from 'lucide-react'
import { PostList } from '../components/PostList'
import { posts } from '../data/posts'
import type { RoutePath } from '../routes'

type PostsPageProps = { onNavigate: (path: RoutePath) => void }

export function PostsPage({ onNavigate }: PostsPageProps) {
  return (
    <article className="page-shell posts-page">
      <header className="page-hero">
        <div className="posts-hero-title">
          <h1>All posts</h1>
          {/* A real file rather than a route, so it is a plain anchor and
              leaves the app deliberately. */}
          <a
            className="feed-link"
            href="/rss.xml"
            aria-label="RSS feed"
            title="RSS feed"
          >
            <Rss aria-hidden="true" size={26} />
          </a>
        </div>
      </header>

      <PostList posts={posts} onNavigate={onNavigate} />
    </article>
  )
}
