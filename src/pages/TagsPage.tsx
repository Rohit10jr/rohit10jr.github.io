import { TagLink } from '../components/TagLink'
import { tags } from '../data/posts'
import type { RoutePath } from '../routes'

type TagsPageProps = {
  onNavigate: (path: RoutePath) => void
}

export function TagsPage({ onNavigate }: TagsPageProps) {
  return (
    <article className="page-shell tags-page">
      <header className="page-hero">
        <div>
          <h1>Tags</h1>
        </div>
      </header>

      {tags.length === 0 ? (
        <p>No tags yet.</p>
      ) : (
        <div className="tag-cloud">
          {tags.map((tag) => (
            <TagLink
              key={tag.slug}
              tag={tag}
              count={tag.posts.length}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </article>
  )
}
