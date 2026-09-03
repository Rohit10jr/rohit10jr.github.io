import { useEffect, useState } from 'react'
import { BackToTop } from './components/BackToTop'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { findPost } from './data/posts'
import { profile } from './data/profile'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PostPage } from './pages/PostPage'
import { PostsPage } from './pages/PostsPage'
import { ResumePage } from './pages/ResumePage'
import { normalizeRoute, postSlug, routeTitle, type RoutePath } from './routes'

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
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [route, setRoute] = useState<RoutePath>(() =>
    normalizeRoute(window.location.pathname),
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const slug = postSlug(route)

  useEffect(() => {
    document.title = routeTitle(route, slug ? findPost(slug)?.title : undefined)
  }, [route, slug])

  useEffect(() => {
    function handlePopState() {
      setRoute(normalizeRoute(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(path: RoutePath) {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
    }

    setRoute(path)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  return (
    <>
      <Header
        currentPath={route}
        theme={theme}
        onThemeToggle={() =>
          setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
        }
        onRouteNavigate={navigate}
      />
      <main id="main" className="page-main">
        {route === '/' && <HomePage onNavigate={navigate} />}
        {route === '/about' && <AboutPage />}
        {route === '/resume' && <ResumePage />}
        {route === '/posts' && <PostsPage onNavigate={navigate} />}
        {slug && <PostPage slug={slug} onNavigate={navigate} />}
        {route === '/404' && <NotFoundPage onNavigate={navigate} />}
      </main>
      <Footer socialLinks={profile.socialLinks} />
      <BackToTop />
    </>
  )
}
