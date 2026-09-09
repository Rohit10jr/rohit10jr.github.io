import { ArrowLeft } from 'lucide-react'
import { NotFoundArt } from './NotFoundArt'
import { PageLink } from './PageLink'
import type { RoutePath } from '../routes'

type NotFoundBlockProps = {
  /** The heading, e.g. "Page not found". */
  label: string
  linkTo: RoutePath
  linkLabel: string
  onNavigate: (path: RoutePath) => void
}

/**
 * The shared dead-end: rocket, status number, and a way back. Used by the 404
 * route and by a post URL whose slug matches nothing, which is the same
 * situation and had been getting unstyled markup of its own.
 */
export function NotFoundBlock({
  label,
  linkTo,
  linkLabel,
  onNavigate,
}: NotFoundBlockProps) {
  return (
    <article className="page-shell notfound-page">
      <div className="notfound-art">
        <NotFoundArt />
      </div>

      <div className="notfound-copy">
        {/* The number is decorative: inside the heading it concatenated into
            "404Page not found" as the accessible name. The status is already
            carried by the document title and the heading text. */}
        <p className="notfound-code" aria-hidden="true">
          404
        </p>
        <h1 className="notfound-label">{label}</h1>
        <PageLink className="text-link" to={linkTo} onNavigate={onNavigate}>
          <ArrowLeft aria-hidden="true" size={17} />
          {linkLabel}
        </PageLink>
      </div>
    </article>
  )
}
