import { NotFoundBlock } from '../components/NotFoundBlock'
import type { RoutePath } from '../routes'

type NotFoundPageProps = {
  onNavigate: (path: RoutePath) => void
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <NotFoundBlock
      label="Page not found"
      linkTo="/"
      linkLabel="Back to the home page"
      onNavigate={onNavigate}
    />
  )
}
