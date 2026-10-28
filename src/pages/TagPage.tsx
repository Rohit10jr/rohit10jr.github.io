import { ArrowLeft } from 'lucide-react'
import { NotFoundBlock } from '../components/NotFoundBlock'
import { PageLink } from '../components/PageLink'
import { PostList } from '../components/PostList'
import { findTag } from '../data/posts'
import type { RoutePath } from '../routes'

type TagPageProps = {
  slug: string
  onNavigate: (path: RoutePath) => void
}

export function TagPage({ slug, onNavigate }: TagPageProps) {
  const tag = findTag(slug)

  // A slug matching no tag is the same dead end as an unknown post, so it gets
  // the same treatment rather than an empty list.
  if (!tag) {
    return (
      <NotFoundBlock
        label="Tag not found"
        linkTo="/tags"
        linkLabel="All tags"
        onNavigate={onNavigate}
      />
    )
  }

  return (
    <article className="page-shell posts-page">
      <header className="page-hero">
        <div>
          <h1>
            <span className="tag-hash" aria-hidden="true">
              #
            </span>
            {tag.name}
          </h1>
          <p className="tag-page-count">
            {tag.posts.length} {tag.posts.length === 1 ? 'post' : 'posts'}
          </p>
        </div>
        <PageLink className="text-link" to="/tags" onNavigate={onNavigate}>
          <ArrowLeft aria-hidden="true" size={17} />
          All tags
        </PageLink>
      </header>

      <PostList posts={tag.posts} onNavigate={onNavigate} />
    </article>
  )
}
