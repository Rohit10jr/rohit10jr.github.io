export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  draft: boolean
  placeholder: boolean
  readingMinutes: number
  html: string
}

type PostModule = { default: Omit<Post, 'slug'> }

// Vite inlines every markdown file at build time; the plugin in vite.config.ts
// has already turned each one into front matter plus rendered HTML.
const modules = import.meta.glob<PostModule>('../content/posts/*.md', {
  eager: true,
})

export const posts: Post[] = Object.entries(modules)
  .map(([path, module]) => ({
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    ...module.default,
  }))
  .filter((post) => !post.draft)
  // Newest first, falling back to the slug when two posts share a date. That
  // fallback matched what already happened, but only because the sort is
  // stable and the glob happens to enumerate alphabetically; stating it here
  // means the order no longer depends on the bundler.
  .sort(
    (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
  )

export type Tag = {
  slug: string
  /** The tag as written in front matter, for display. */
  name: string
  posts: Post[]
}

/**
 * Hand-rolled rather than pulling in a kebab-case dependency for five lines.
 * This is the only place a tag becomes a slug: the URL, the index and the tag
 * page all read it from here, so they cannot disagree about what `open source`
 * is called.
 */
export function tagSlug(tag: string): string {
  const slug = tag
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  // A tag of nothing but punctuation would otherwise slug to an empty string
  // and collide with every other such tag.
  return slug || 'untagged'
}

/**
 * Built from `posts`, which is already draft-filtered, so a hidden post cannot
 * leave an empty tag behind. Grouped by slug, so `Open Source` and
 * `open source` are one tag; the first spelling encountered supplies the name.
 *
 * Ordered by how many posts carry the tag, because a tag used once groups
 * nothing and should not lead the list.
 */
export const tags: Tag[] = (() => {
  const bySlug = new Map<string, Tag>()

  for (const post of posts) {
    for (const name of post.tags) {
      const slug = tagSlug(name)
      const existing = bySlug.get(slug)

      if (existing) {
        existing.posts.push(post)
      } else {
        bySlug.set(slug, { slug, name, posts: [post] })
      }
    }
  }

  return [...bySlug.values()].sort(
    (a, b) => b.posts.length - a.posts.length || a.name.localeCompare(b.name),
  )
})()

export function findTag(slug: string): Tag | undefined {
  return tags.find((tag) => tag.slug === slug)
}

export function findPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
