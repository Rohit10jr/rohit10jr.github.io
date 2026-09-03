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
        <p className="notfound-code">404</p>
        <h1>Off course.</h1>
        <p>
          That page is not here. It may have been renamed, or the link that
          brought you here was wrong.
        </p>
        <PageLink className="text-link" to="/" onNavigate={onNavigate}>
          <ArrowLeft aria-hidden="true" size={17} />
          Back to the home page
        </PageLink>
      </div>
    </article>
  )
}
