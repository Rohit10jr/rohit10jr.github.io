import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import matter from 'gray-matter'
import { marked } from 'marked'

const REQUIRED = ['title', 'date', 'summary'] as const

/**
 * Turns each posts/*.md into a JS module exporting its front matter plus
 * rendered HTML. marked and gray-matter run here, at build time, so neither
 * reaches the browser — only the finished HTML string does.
 */
function markdownPosts(): Plugin {
  return {
    name: 'markdown-posts',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) {
        return null
      }

      const { data, content } = matter(code)

      // Fail the build on a malformed post rather than shipping a broken page.
      for (const field of REQUIRED) {
        if (!data[field]) {
          this.error(`${id}: missing required front matter field "${field}"`)
        }
      }

      const date = new Date(data.date)
      if (Number.isNaN(date.getTime())) {
        this.error(`${id}: front matter "date" is not a valid date`)
      }

      const words = content.trim().split(/\s+/).length
      const post = {
        title: String(data.title),
        date: date.toISOString().slice(0, 10),
        summary: String(data.summary),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        draft: data.draft === true,
        placeholder: data.placeholder === true,
        readingMinutes: Math.max(1, Math.round(words / 200)),
        html: await marked.parse(content),
      }

      return {
        code: `export default ${JSON.stringify(post)}`,
        map: null,
      }
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), markdownPosts()],
})
