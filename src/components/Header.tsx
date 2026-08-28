import { Menu, Moon, Sun, X } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { PageLink } from './PageLink'
import type { SocialLink } from '../data/profile'
import { routeItems, type RoutePath } from '../routes'

type HeaderProps = {
  currentPath: RoutePath
  socialLinks: SocialLink[]
  menuOpen: boolean
  theme: 'light' | 'dark'
  onMenuToggle: () => void
  onNavigate: () => void
  onThemeToggle: () => void
  onRouteNavigate: (path: RoutePath) => void
}

export function Header({
  currentPath,
  socialLinks,
  menuOpen,
  theme,
  onMenuToggle,
  onNavigate,
  onThemeToggle,
  onRouteNavigate,
}: HeaderProps) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="header-inner">
        <PageLink className="brand" to="/" onNavigate={onRouteNavigate}>
          <span className="brand-mark">RJ</span>
          <span className="brand-text">
            Rohit J
            <span>Back-end developer</span>
          </span>
        </PageLink>

        <button
          className="icon-button menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={onMenuToggle}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="site-navigation"
          className={`site-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          {routeItems.map((item) => (
            <PageLink
              key={item.path}
              to={item.path}
              onNavigate={(path) => {
                onRouteNavigate(path)
                onNavigate()
              }}
              ariaLabel={`Open ${item.label} page`}
              ariaCurrent={currentPath === item.path ? 'page' : undefined}
            >
              {item.label}
            </PageLink>
          ))}
        </nav>

        <div className="header-actions" aria-label="Profile links and theme">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              className="icon-button"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open Rohit J on ${link.label}`}
              title={link.label}
            >
              <BrandIcon kind={link.kind} />
            </a>
          ))}
          <button
            className="icon-button"
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
        </div>
      </div>
    </header>
  )
}
