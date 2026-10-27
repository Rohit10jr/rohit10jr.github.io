import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PageLink } from './PageLink'
import { posts } from '../data/posts'
import type { RoutePath } from '../routes'

type PostNavProps = {
  slug: string
  onNavigate: (path: RoutePath) => void
}

/**
 * Links to the posts either side of this one.
 *
 * `posts` is sorted newest first, so the entry after this one in the array is
 * the older post and the entry before it is the newer one. Peter labels them by
 * array order, which puts "Previous" on the more recent post; labelling by date
 * instead matches what a reader expects of something chronological.
 */
export function PostNav({ slug, onNavigate }: PostNavProps) {
  const index = posts.findIndex((post) => post.slug === slug)

  if (index === -1) {
    return null
  }

  const older = posts[index + 1]
  const newer = posts[index - 1]

  if (!older && !newer) {
    return null
  }

  return (
    <nav className="post-nav" aria-label="More posts">
      {older ? (
        <PageLink
          className="post-nav-link"
          to={`/posts/${older.slug}`}
          onNavigate={onNavigate}
        >
          <ChevronLeft className="post-nav-chevron" aria-hidden="true" size={18} />
          <span className="post-nav-text">
            <span className="post-nav-label">Previous post</span>
            <span className="post-nav-title">{older.title}</span>
          </span>
        </PageLink>
      ) : (
        // Holds the column so a lone "next" stays on the right.
        <span aria-hidden="true" />
      )}

      {newer && (
        <PageLink
          className="post-nav-link post-nav-next"
          to={`/posts/${newer.slug}`}
          onNavigate={onNavigate}
        >
          <span className="post-nav-text">
            <span className="post-nav-label">Next post</span>
            <span className="post-nav-title">{newer.title}</span>
          </span>
          <ChevronRight className="post-nav-chevron" aria-hidden="true" size={18} />
        </PageLink>
      )}
    </nav>
  )
}
