import { SITE } from './data/site'

export type RoutePath =
  | '/'
  | '/about'
  | '/resume'
  | '/posts'
  | '/tags'
  | '/search'
  | '/404'
  | `/posts/${string}`
  | `/tags/${string}`

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
  '/tags': `Tags — ${SITE.name}`,
  '/search': `Search — ${SITE.name}`,
  '/404': `Not found — ${SITE.name}`,
}

/**
 * `subject` is whatever the page is about — a post title, a tag — already
 * phrased by the caller. This function only owns the suffix.
 */
export function routeTitle(route: RoutePath, subject?: string): string {
  if (subject) {
    return `${subject} — ${SITE.name}`
  }

  return TITLES[route] ?? TITLES['/']
}

/** Returns the slug when the route is a single post, otherwise null. */
export function postSlug(route: RoutePath): string | null {
  return route.startsWith('/posts/') ? route.slice('/posts/'.length) : null
}

/** Returns the slug when the route is a single tag, otherwise null. */
export function tagRouteSlug(route: RoutePath): string | null {
  return route.startsWith('/tags/') ? route.slice('/tags/'.length) : null
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

  // Whether the tag exists is not decided here. routes.ts would have to import
  // the posts to know, and the tag page already renders the not-found block for
  // a slug that matches nothing, exactly as the post page does.
  if (trimmed.startsWith('/tags/') && trimmed.slice('/tags/'.length)) {
    return trimmed as RoutePath
  }

  // Unknown paths get their own page rather than silently landing on home,
  // which made a mistyped URL look like the site had no such section.
  return '/404'
}
