import { FileText } from 'lucide-react'
import type { Post } from '../data/posts'

type PostListProps = {
  posts: Post[]
  compact?: boolean
}

export function PostList({ posts, compact = false }: PostListProps) {
  return (
    <div className={compact ? 'post-list compact' : 'post-list'}>
      {posts.map((post) => (
        <article key={post.slug} className="post-card">
          <div className="post-meta">
            <FileText aria-hidden="true" size={17} />
            <span>{post.dateLabel}</span>
            <span className="placeholder-label">Placeholder</span>
          </div>
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
        </article>
      ))}
    </div>
  )
}
