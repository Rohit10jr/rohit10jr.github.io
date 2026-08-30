export type RoutePath = '/' | '/about' | '/resume' | '/posts'

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

export const routeTitles: Record<RoutePath, string> = {
  '/': 'Rohit J — Engineer',
  '/about': 'About — Rohit J',
  '/resume': 'Resume — Rohit J',
  '/posts': 'Posts — Rohit J',
}

export function normalizeRoute(pathname: string): RoutePath {
  const trimmedPath =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname

  if (trimmedPath === '' || trimmedPath === '/index.html') {
    return '/'
  }

  if (
    trimmedPath === '/' ||
    trimmedPath === '/about' ||
    trimmedPath === '/resume' ||
    trimmedPath === '/posts'
  ) {
    return trimmedPath
  }

  return '/'
}
