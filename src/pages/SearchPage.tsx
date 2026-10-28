import { useEffect, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { PostList } from '../components/PostList'
import { posts, type Post } from '../data/posts'
import { searchPosts } from '../data/search'
import type { RoutePath } from '../routes'

type SearchPageProps = { onNavigate: (path: RoutePath) => void }

/** Matches Fuse's `minMatchCharLength`, so one stray letter searches nothing. */
const MIN_QUERY = 2

/** Long enough that typing a word runs one search instead of one per letter. */
const DEBOUNCE_MS = 120

/** Lets `/search?q=django` arrive already searched, from a link or a reload. */
function initialQuery(): string {
  return new URLSearchParams(window.location.search).get('q') ?? ''
}

export function SearchPage({ onNavigate }: SearchPageProps) {
  const [query, setQuery] = useState(initialQuery)
  // null means nothing has been searched yet, which is not the same as a
  // search that came back with nothing.
  const [results, setResults] = useState<Post[] | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // The query belongs in the URL: a search is then linkable, survives a
  // reload, and can be sent to someone. replaceState rather than pushState, or
  // every keystroke would become a back-button step.
  useEffect(() => {
    const trimmed = query.trim()

    window.history.replaceState(
      window.history.state,
      '',
      trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : '/search',
    )
  }, [query])

  useEffect(() => {
    const trimmed = query.trim()

    if (trimmed.length < MIN_QUERY) {
      setResults(null)
      return
    }

    let cancelled = false
    const timer = window.setTimeout(() => {
      // Fuse is imported on first use, so an early search resolves after a
      // short delay and a later one could overtake it. The guard keeps the
      // results matching the box.
      void searchPosts(trimmed).then((found) => {
        if (!cancelled) {
          setResults(found)
        }
      })
    }, DEBOUNCE_MS)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [query])

  const searching = query.trim().length >= MIN_QUERY
  const empty = searching && results?.length === 0

  const status = !searching
    ? `Showing all ${posts.length} posts`
    : results === null
      ? 'Searching'
      : results.length === 1
        ? '1 result'
        : `${results.length} results`

  return (
    <article className="page-shell posts-page search-page">
      <header className="page-hero">
        <h1>Search</h1>
      </header>

      {/* No submit: results follow the typing, so Enter has nothing to do. */}
      <form className="search-form" role="search" onSubmit={(event) => event.preventDefault()}>
        <Search className="search-icon" aria-hidden="true" size={20} />
        <input
          ref={inputRef}
          className="search-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search posts"
          placeholder="Search posts, e.g. open source"
          autoComplete="off"
          spellCheck={false}
        />
        {query && (
          <button
            type="button"
            className="search-clear"
            onClick={() => {
              setQuery('')
              inputRef.current?.focus()
            }}
            aria-label="Clear search"
          >
            <X aria-hidden="true" size={18} />
          </button>
        )}
      </form>

      {/* Results appear without any announcement otherwise, so a screen reader
          user gets no sign the page changed. */}
      <p className="search-status" role="status" aria-live="polite">
        {status}
      </p>

      {empty ? (
        <p className="search-empty">
          Nothing matches <strong>{query.trim()}</strong>. Three posts is a
          small haystack — try a broader word.
        </p>
      ) : (
        // An unsearched box lists everything rather than showing a blank page,
        // so arriving here never looks like a broken screen.
        <PostList posts={results ?? posts} onNavigate={onNavigate} />
      )}
    </article>
  )
}
