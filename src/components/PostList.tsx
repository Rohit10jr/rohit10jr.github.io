import { PageLink } from './PageLink'
import { formatPostDate, type Post } from '../data/posts'
import type { RoutePath } from '../routes'

type PostListProps = {
  posts: Post[]
  compact?: boolean
  onNavigate: (path: RoutePath) => void
}

export function PostList({ posts, compact = false, onNavigate }: PostListProps) {
  return (
    <div className={compact ? 'post-list compact' : 'post-list'}>
      {posts.map((post) => (
        <article key={post.slug} className="post-card">
          <p className="post-meta">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
            {post.placeholder && (
              <span className="placeholder-label">Placeholder</span>
            )}
          </p>
          <h3>
            <PageLink
              to={`/posts/${post.slug}` as RoutePath}
              onNavigate={onNavigate}
            >
              {post.title}
            </PageLink>
          </h3>
          <p>{post.summary}</p>
        </article>
      ))}
    </div>
  )
}
