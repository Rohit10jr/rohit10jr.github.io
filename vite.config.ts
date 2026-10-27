import { readFileSync, readdirSync } from 'node:fs'
import { basename, join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import matter from 'gray-matter'
import { marked } from 'marked'

const REQUIRED = ['title', 'date', 'summary'] as const

const POSTS_DIR = 'src/content/posts'

const SITE = {
  title: 'Rohit J — Engineer',
  description: 'Portfolio for Rohit J, an engineer based in India.',
  url: 'https://rohit10jr.github.io',
  language: 'en',
}

type PostMeta = {
  slug: string
  title: string
  date: string
  summary: string
  draft: boolean
  placeholder: boolean
}

type ParsedPost = PostMeta & {
  tags: string[]
  readingMinutes: number
  html: string
}

function slugOf(id: string): string {
  // basename rather than a split: it handles both path separators, which
  // matters because ids arrive with backslashes on Windows.
  return basename(id, '.md')
}

/**
 * The single parse. Both the module transform and the feed go through here, so
 * a post cannot mean one thing on the page and another in the feed.
 */
async function parsePost(
  id: string,
  code: string,
  fail: (message: string) => never,
): Promise<ParsedPost> {
  const { data, content } = matter(code)

  // Fail the build on a malformed post rather than shipping a broken page.
  for (const field of REQUIRED) {
    if (!data[field]) {
      fail(`${id}: missing required front matter field "${field}"`)
    }
  }

  const date = new Date(data.date)
  if (Number.isNaN(date.getTime())) {
    fail(`${id}: front matter "date" is not a valid date`)
  }

  const words = content.trim().split(/\s+/).length

  return {
    slug: slugOf(id),
    title: String(data.title),
    date: date.toISOString().slice(0, 10),
    summary: String(data.summary),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: data.draft === true,
    placeholder: data.placeholder === true,
    readingMinutes: Math.max(1, Math.round(words / 200)),
    html: await marked.parse(content),
  }
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Same filter and ordering the site uses, so the feed and the posts page can
 * never disagree. Placeholders are excluded deliberately: a feed advertising
 * stub content is worse than an empty one, and each post joins the feed the
 * moment its flag comes off.
 */
function feedPosts(posts: ParsedPost[]): ParsedPost[] {
  return posts
    .filter((post) => !post.draft && !post.placeholder)
    .sort(
      (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
    )
}

function buildFeed(posts: ParsedPost[]): string {
  const items = feedPosts(posts)

  // Dates are stored as YYYY-MM-DD, so they parse as UTC midnight. RSS wants
  // RFC 822.
  const asRfc822 = (date: string) => new Date(date + 'T00:00:00Z').toUTCString()

  const latest = items[0]?.date
  const channelDate = latest
    ? '\n    <lastBuildDate>' + asRfc822(latest) + '</lastBuildDate>'
    : ''

  // Prefixed with a newline only when there is something to prefix, or an
  // empty feed carries a stray blank line where the items would be.
  const entries = items
    .map((post) =>
      [
        '    <item>',
        '      <title>' + escapeXml(post.title) + '</title>',
        '      <link>' + SITE.url + '/posts/' + post.slug + '</link>',
        '      <guid isPermaLink="true">' +
          SITE.url +
          '/posts/' +
          post.slug +
          '</guid>',
        '      <pubDate>' + asRfc822(post.date) + '</pubDate>',
        '      <description>' + escapeXml(post.summary) + '</description>',
        '    </item>',
      ].join('\n'),
    )
    .join('\n')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    '    <title>' + escapeXml(SITE.title) + '</title>',
    '    <description>' + escapeXml(SITE.description) + '</description>',
    '    <link>' + SITE.url + '/</link>',
    '    <atom:link href="' +
      SITE.url +
      '/rss.xml" rel="self" type="application/rss+xml" />',
    '    <language>' +
      SITE.language +
      '</language>' +
      channelDate +
      (entries ? '\n' + entries : ''),
    '  </channel>',
    '</rss>',
    '',
  ].join('\n')
}

/** Reads the posts directly, for the dev server. */
async function readPostsFromDisk(): Promise<ParsedPost[]> {
  const files = readdirSync(POSTS_DIR).filter((name) => name.endsWith('.md'))

  return Promise.all(
    files.map((name) => {
      const path = join(POSTS_DIR, name)

      return parsePost(path, readFileSync(path, 'utf8'), (message) => {
        throw new Error(message)
      })
    }),
  )
}

/**
 * Turns each posts/*.md into a JS module exporting its front matter plus
 * rendered HTML, and emits /rss.xml from the same parse. marked and
 * gray-matter run here, at build time, so neither reaches the browser — only
 * the finished HTML string does.
 */
function markdownPosts(): Plugin {
  // Keyed by id so a file edited twice in one watch session does not double up.
  const parsed = new Map<string, ParsedPost>()

  return {
    name: 'markdown-posts',
    enforce: 'pre',

    buildStart() {
      parsed.clear()
    },

    async transform(code, id) {
      if (!id.endsWith('.md')) {
        return null
      }

      const post = await parsePost(id, code, (message) => this.error(message))
      parsed.set(id, post)

      const { slug: _slug, ...module } = post

      return {
        code: `export default ${JSON.stringify(module)}`,
        map: null,
      }
    },

    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'rss.xml',
        source: buildFeed([...parsed.values()]),
      })
    },

    // generateBundle does not run under `vite dev`, so the feed is served from
    // disk there instead. Same parse, same filter.
    configureServer(server) {
      server.middlewares.use('/rss.xml', async (_request, response, next) => {
        try {
          response.setHeader('Content-Type', 'application/rss+xml')
          response.end(buildFeed(await readPostsFromDisk()))
        } catch (error) {
          next(error)
        }
      })
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), markdownPosts()],
})
