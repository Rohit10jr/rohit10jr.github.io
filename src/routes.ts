export type RoutePath = '/' | '/about' | '/resume' | '/posts' | `/posts/${string}`

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

const TITLES: Record<string, string> = {
  '/': 'Rohit J — Engineer',
  '/about': 'About — Rohit J',
  '/resume': 'Resume — Rohit J',
  '/posts': 'Posts — Rohit J',
}

export function routeTitle(route: RoutePath, postTitle?: string): string {
  if (postTitle) {
    return `${postTitle} — Rohit J`
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

  return '/'
}
