import { posts, type Post } from './posts'

/**
 * What Fuse actually matches against. The post itself carries rendered HTML,
 * which is not searchable text: a query for `langgraph` would hit the href
 * inside a link rather than anything a reader can see.
 */
type SearchDoc = {
  slug: string
  title: string
  summary: string
  tags: string
  text: string
}

/**
 * Deliberately not a build-time index file. Every post's HTML is already in
 * the main bundle — `posts` is built from an eager `import.meta.glob` — so a
 * generated `search-index.json` would ship a second copy of text the browser
 * has in hand, and add a fetch that could fall out of step with it.
 *
 * The trade-off to revisit: the thing worth fixing at a few hundred posts is
 * that the bundle carries every body on first load. Fixing that means loading
 * posts on demand, and *then* a separate index earns its place. Until then an
 * index file would cost bytes and buy nothing.
 */
function toDoc(post: Post): SearchDoc {
  return {
    slug: post.slug,
    title: post.title,
    summary: post.summary,
    // Joined rather than left an array: Fuse scores an array per-element, so
    // one long tag list would dilute a match the way a long body does.
    tags: post.tags.join(' '),
    text: plainText(post.html),
  }
}

/**
 * Strips tags and decodes the handful of entities marked renders, so the words
 * are what they were in the markdown. Not a general HTML parser — the input is
 * our own output, from our own posts.
 */
function plainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * `posts` is already filtered to non-drafts, which is the right set: search
 * should find whatever a visitor can browse. Note this differs from the RSS
 * feed, which also drops placeholders — a feed pushes into subscribers'
 * readers, where a stub does not belong, while a placeholder post is on the
 * site and findable by every other route.
 */
const bySlug = new Map(posts.map((post) => [post.slug, post]))

/**
 * Built once on the first search and reused, including while the first build
 * is still in flight: storing the promise rather than the result means two
 * quick keystrokes cannot start two imports of Fuse.
 */
let indexPromise: Promise<{
  search: (query: string) => { item: SearchDoc }[]
}> | null = null

function loadIndex() {
  if (!indexPromise) {
    // Imported here rather than at the top of the file so Fuse is fetched when
    // someone searches, not by everyone who loads the site.
    indexPromise = import('fuse.js').then(({ default: Fuse }) => {
      return new Fuse(posts.map(toDoc), {
        keys: [
          // A hit in the title means the post is about the thing; a hit in the
          // body may be one passing mention, so weight accordingly.
          { name: 'title', weight: 3 },
          { name: 'tags', weight: 2 },
          { name: 'summary', weight: 2 },
          { name: 'text', weight: 1 },
        ],
        // How much misspelling to forgive. 0 matches exactly, 1 matches
        // anything; this finds `djano` without returning the whole archive.
        threshold: 0.35,
        // Fuse otherwise scores matches near the start of a field higher,
        // which suits titles and is wrong for article bodies: a match in the
        // closing paragraph is as real as one in the opening line. With this
        // on, `location` and `distance` have no effect and are left unset.
        ignoreLocation: true,
        // So a single stray letter does not light up every post.
        minMatchCharLength: 2,
      })
    })
  }

  return indexPromise
}

/**
 * Resolves to whole posts rather than the documents Fuse matched, so results
 * render through the same `PostList` as every other listing. Fuse keeps its
 * own relevance order, which the lookup preserves.
 */
export async function searchPosts(query: string): Promise<Post[]> {
  const trimmed = query.trim()

  if (trimmed.length < 2) {
    return []
  }

  const index = await loadIndex()

  return index
    .search(trimmed)
    .slice(0, 20)
    .map((result) => bySlug.get(result.item.slug))
    .filter((post): post is Post => Boolean(post))
}
