import { Menu, Moon, Sun, X } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import type { SocialLink } from '../data/profile'

type HeaderProps = {
  socialLinks: SocialLink[]
  menuOpen: boolean
  theme: 'light' | 'dark'
  onMenuToggle: () => void
  onNavigate: () => void
  onThemeToggle: () => void
}

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#focus', label: 'Focus' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header({
  socialLinks,
  menuOpen,
  theme,
  onMenuToggle,
  onNavigate,
  onThemeToggle,
}: HeaderProps) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="header-inner">
        <a className="brand" href="#top" onClick={onNavigate}>
          <span className="brand-mark">RJ</span>
          <span className="brand-text">
            Rohit J
            <span>Back-end developer</span>
          </span>
        </a>

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
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={onNavigate}>
              {item.label}
            </a>
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
