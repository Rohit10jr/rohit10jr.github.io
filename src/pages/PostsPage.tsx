import { PostList } from '../components/PostList'
import { posts } from '../data/posts'
import type { RoutePath } from '../routes'

type PostsPageProps = { onNavigate: (path: RoutePath) => void }

export function PostsPage({ onNavigate }: PostsPageProps) {
  return (
    <article className="page-shell posts-page">
      <header className="page-hero">
        <div>
          <p className="section-kicker">Posts</p>
          <h1>Posts</h1>
          <p>
            Notes on open source, how I work, and what I am figuring out. These
            three are placeholders while the real writing catches up.
          </p>
        </div>
      </header>

      <PostList posts={posts} onNavigate={onNavigate} />
    </article>
  )
}
