import { ArrowLeft } from 'lucide-react'
import { PageLink } from '../components/PageLink'
import { RocketMark } from '../components/RocketMark'
import type { RoutePath } from '../routes'

type NotFoundPageProps = {
  onNavigate: (path: RoutePath) => void
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <article className="page-shell notfound-page">
      <div className="notfound-art" aria-hidden="true">
        <RocketMark />
      </div>

      <div className="notfound-copy">
        {/* The number is decorative: inside the heading it concatenated into
            "404Page not found" as the accessible name. The status is already
            carried by the document title and the heading text. */}
        <p className="notfound-code" aria-hidden="true">
          404
        </p>
        <h1 className="notfound-label">Page not found</h1>
        <PageLink className="text-link" to="/" onNavigate={onNavigate}>
          <ArrowLeft aria-hidden="true" size={17} />
          Back to the home page
        </PageLink>
      </div>
    </article>
  )
}
