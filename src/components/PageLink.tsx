import type { MouseEvent, ReactNode } from 'react'
import type { RoutePath } from '../routes'

type PageLinkProps = {
  to: RoutePath
  onNavigate: (path: RoutePath) => void
  children: ReactNode
  className?: string
  ariaLabel?: string
  ariaCurrent?: 'page'
}

export function PageLink({
  to,
  onNavigate,
  children,
  className,
  ariaLabel,
  ariaCurrent,
}: PageLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return
    }

    event.preventDefault()
    onNavigate(to)
  }

  return (
    <a
      href={to}
      className={className}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
