import { SITE } from './data/site'

export type RoutePath =
  | '/'
  | '/about'
  | '/resume'
  | '/posts'
  | '/404'
  | `/posts/${string}`

export type RouteItem = {
  path: RoutePath
  label: string
}

export const routeItems: RouteItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/resume', label: 'Resume' },
  { path: '/posts', label: 'Posts' },
]

// Derived rather than written out, so the name appears once.
const TITLES: Record<string, string> = {
  '/': SITE.title,
  '/about': `About — ${SITE.name}`,
  '/resume': `Resume — ${SITE.name}`,
  '/posts': `Posts — ${SITE.name}`,
  '/404': `Not found — ${SITE.name}`,
}

export function routeTitle(route: RoutePath, postTitle?: string): string {
  if (postTitle) {
    return `${postTitle} — ${SITE.name}`
  }

  return TITLES[route] ?? TITLES['/']
}

/** Returns the slug when the route is a single post, otherwise null. */
export function postSlug(route: RoutePath): string | null {
  return route.startsWith('/posts/') ? route.slice('/posts/'.length) : null
}

export function normalizeRoute(pathname: string): RoutePath {
  const trimmed =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname

  if (trimmed === '' || trimmed === '/index.html') {
    return '/'
  }

  if (trimmed in TITLES) {
    return trimmed as RoutePath
  }

  if (trimmed.startsWith('/posts/') && trimmed.slice('/posts/'.length)) {
    return trimmed as RoutePath
  }

  // Unknown paths get their own page rather than silently landing on home,
  // which made a mistyped URL look like the site had no such section.
  return '/404'
}
