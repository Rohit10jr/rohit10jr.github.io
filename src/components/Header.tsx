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
    <header className="header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="header-nav" aria-label="Main navigation">
        <div className="logo">
          <PageLink to="/" onNavigate={onRouteNavigate}>
            Rohit J
          </PageLink>
        </div>

        <ul id="menu" className="menu">
          {routeItems.map((item) => (
            <li key={item.path}>
              <PageLink
                to={item.path}
                onNavigate={onRouteNavigate}
                ariaCurrent={currentPath === item.path ? 'page' : undefined}
              >
                <span
                  className={currentPath === item.path ? 'active' : undefined}
                >
                  {item.label}
                </span>
              </PageLink>
            </li>
          ))}
        </ul>

        <div className="logo-switches">
          <button
            id="theme-toggle"
            className="theme-toggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title="Toggle theme"
          >
            <svg
              className="moon"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg
              className="sun"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
