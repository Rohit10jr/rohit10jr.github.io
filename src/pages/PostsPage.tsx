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
        </div>
      </header>

      <PostList posts={posts} onNavigate={onNavigate} />
    </article>
  )
}
