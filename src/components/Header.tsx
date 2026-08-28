import { Moon, Sun } from 'lucide-react'
import { PageLink } from './PageLink'
import { routeItems, type RoutePath } from '../routes'

type HeaderProps = {
  currentPath: RoutePath
  theme: 'light' | 'dark'
  onThemeToggle: () => void
  onRouteNavigate: (path: RoutePath) => void
}

export function Header({
  currentPath,
  theme,
  onThemeToggle,
  onRouteNavigate,
}: HeaderProps) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="header-inner header-nav">
        <PageLink className="brand nav-logo" to="/" onNavigate={onRouteNavigate}>
          Rohit J
        </PageLink>

        <nav
          id="site-navigation"
          className="site-nav"
          aria-label="Main navigation"
        >
          {routeItems.map((item) => (
            <PageLink
              key={item.path}
              to={item.path}
              onNavigate={onRouteNavigate}
              ariaLabel={`Open ${item.label} page`}
              ariaCurrent={currentPath === item.path ? 'page' : undefined}
            >
              {item.label}
            </PageLink>
          ))}
          <button
            className="theme-toggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title="Theme"
          >
            {theme === 'dark' ? (
              <Sun aria-hidden="true" />
            ) : (
              <Moon aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
