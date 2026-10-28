import { ArrowLeft } from 'lucide-react'
import { NotFoundBlock } from '../components/NotFoundBlock'
import { PostNav } from '../components/PostNav'
import { TagLink } from '../components/TagLink'
import { PageLink } from '../components/PageLink'
import { ReadingProgress } from '../components/ReadingProgress'
import { findPost, formatPostDate, tagSlug } from '../data/posts'
import type { RoutePath } from '../routes'

type PostPageProps = {
  slug: string
  onNavigate: (path: RoutePath) => void
}

export function PostPage({ slug, onNavigate }: PostPageProps) {
  const post = findPost(slug)

  if (!post) {
    return (
      <NotFoundBlock
        label="Post not found"
        linkTo="/posts"
        linkLabel="All posts"
        onNavigate={onNavigate}
      />
    )
  }

  return (
    <article className="page-shell post-page">
      <ReadingProgress key={post.slug} />
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

      {post.tags.length > 0 && (
        <div className="post-tags">
          {post.tags.map((name) => (
            <TagLink
              key={name}
              tag={{ slug: tagSlug(name), name }}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}

      <PostNav slug={post.slug} onNavigate={onNavigate} />
    </article>
  )
}
