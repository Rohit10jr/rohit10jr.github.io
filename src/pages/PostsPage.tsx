import { PostList } from '../components/PostList'
import { posts } from '../data/posts'
import type { RoutePath } from '../routes'

type PostsPageProps = { onNavigate: (path: RoutePath) => void }

export function PostsPage({ onNavigate }: PostsPageProps) {
  return (
    <article className="page-shell posts-page">
      <header className="page-hero">
        <div>
          <h1>All posts</h1>
          <p>Notes on open source, building things, and what I am figuring out.</p>
        </div>
      </header>

      <PostList posts={posts} onNavigate={onNavigate} />
    </article>
  )
}
