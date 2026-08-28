import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { focusAreas, profile, projects, skillGroups } from './data/profile'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <>
      <Header
        socialLinks={profile.socialLinks}
        menuOpen={menuOpen}
        theme={theme}
        onMenuToggle={() => setMenuOpen((current) => !current)}
        onNavigate={() => setMenuOpen(false)}
        onThemeToggle={() =>
          setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
        }
      />
      <main id="main">
        <Hero profile={profile} />
        <About summary={profile.summary} focusAreas={focusAreas} />
        <Skills skillGroups={skillGroups} />
        <Projects projects={projects} />
        <Contact socialLinks={profile.socialLinks} />
      </main>
      <Footer socialLinks={profile.socialLinks} />
    </>
  )
}
