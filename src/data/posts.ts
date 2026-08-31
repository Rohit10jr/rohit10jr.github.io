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
  .sort((a, b) => b.date.localeCompare(a.date))

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
