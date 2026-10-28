import { PageLink } from './PageLink'
import type { Tag } from '../data/posts'
import type { RoutePath } from '../routes'

type TagLinkProps = {
  tag: Pick<Tag, 'slug' | 'name'>
  /** Shown on the index, where the number is the point. */
  count?: number
  onNavigate: (path: RoutePath) => void
}

/**
 * One tag chip. Used on the tag index, on each post, and in the tag page
 * heading, so all three agree on what a tag looks like and where it links.
 */
export function TagLink({ tag, count, onNavigate }: TagLinkProps) {
  return (
    <PageLink
      className="tag-link"
      to={`/tags/${tag.slug}` as RoutePath}
      onNavigate={onNavigate}
    >
      <span className="tag-hash" aria-hidden="true">
        #
      </span>
      {tag.name}
      {count !== undefined && <span className="tag-count">{count}</span>}
    </PageLink>
  )
}
