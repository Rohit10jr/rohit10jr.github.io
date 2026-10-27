import { profile } from './profile'

/**
 * The site's own identity, in one place. Everything that needs it reads from
 * here: the document title, the meta description, every route's tab title, and
 * the RSS channel. These facts were previously written out separately in
 * index.html, routes.ts and vite.config.ts, with nothing keeping them in step —
 * changing a tagline left the tab, the search result and the feed each
 * claiming something different, silently.
 */
export const SITE = {
  name: profile.name,
  title: `${profile.name} — Engineer`,
  description: `Portfolio for ${profile.name}, an engineer based in ${profile.location}.`,
  url: 'https://rohit10jr.github.io',
  language: 'en',
}
