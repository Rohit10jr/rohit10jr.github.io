import { ArrowLeft } from 'lucide-react'
import { PageLink } from '../components/PageLink'
import { findPost, formatPostDate } from '../data/posts'
import type { RoutePath } from '../routes'

type PostPageProps = {
  slug: string
  onNavigate: (path: RoutePath) => void
}

export function PostPage({ slug, onNavigate }: PostPageProps) {
  const post = findPost(slug)

  if (!post) {
    return (
      <article className="page-shell post-page">
        <h1>Post not found</h1>
        <p>That post does not exist, or it has not been published yet.</p>
        <PageLink className="text-link" to="/posts" onNavigate={onNavigate}>
          <ArrowLeft aria-hidden="true" size={17} />
          All posts
        </PageLink>
      </article>
    )
  }

  return (
    <article className="page-shell post-page">
      <PageLink className="text-link post-back" to="/posts" onNavigate={onNavigate}>
        <ArrowLeft aria-hidden="true" size={17} />
        All posts
      </PageLink>

      <header className="post-header">
        <h1>{post.title}</h1>
        <p className="post-meta">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingMinutes} min read</span>
          {post.placeholder && (
            <span className="placeholder-label">Placeholder</span>
          )}
        </p>
      </header>

      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}
