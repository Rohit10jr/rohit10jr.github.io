# Roadmap

Planned work, recorded so it is not lost between sessions. Order is rough
priority, not a schedule.

## Now

**Finish the home page.** The rebuild is in place; the content is not.

- Replace the project entries with real ones, and add URLs as repositories go
  public. Drop `placeholder: true` from each in `src/data/profile.ts` when it
  is no longer in progress. Note that three of the current entries map to
  forks rather than own repositories (`Micropyramid-Django-CRM`, `ragflow`,
  `ai-job-search`) and four have no public repository at all

## Next: writing

**1. Real posts.** One is written and published:
`open-source-is-the-best-source`. Two stubs remain, both marked
`placeholder: true`, which drives the badge in the UI and keeps them out of the
RSS feed — remove that flag once a post is genuinely written:

- `how-i-actually-build-things` — the loop, the tools that survived, the parts
  that are still messy
- `progress-beats-perfection` — shipping a clear increment over polishing
  something nobody has used

Adding a post is one markdown file; the build validates `title`, `date` and
`summary` and fails if any is missing.

**2. Tags.** Done. `/tags` lists every tag with its post count, `/tags/<slug>`
lists that tag's posts, and chips at the foot of each post are how anyone
discovers tags exist. `tagSlug()` in `src/data/posts.ts` folds spelling
variants together, so `Open Source` and `open source` share one page.

The vocabulary is deliberately small: `building`, `learning`, `open source`.
It started as six tags across three posts, each used once, so every tag page
showed the single post you had just come from. Three tags that repeat group
things; six that do not are decoration.

Keep it that way by asking which existing tag fits a new post, not what the
post is about. Add a fourth only when several posts need it, and avoid putting
one tag on every post — a tag that matches everything filters nothing.

A per-tag feed (`/tags/<slug>/rss.xml`) is now cheap to add, since the tag
grouping and the feed generator already exist. Not worth it at this volume.

**3. Search.** Done. `/search` matches titles, tags, summaries and bodies with
Fuse, and keeps the query in the URL so a search is linkable. Fuse is imported
on first use, so it lands in its own 26KB chunk rather than the main bundle.

Two decisions worth not relitigating:

- **No build-time index file.** `posts` comes from an eager `import.meta.glob`,
  so every body is already in the main bundle; a generated `search-index.json`
  would ship a second copy of that text and add a fetch that could fall out of
  step with it. `src/data/search.ts` strips the rendered HTML to plain text
  instead
- **Pagefind was ruled out, not overlooked.** It crawls built HTML, and the
  build emits only `index.html` and `404.html` — this is a client-rendered app,
  so Pagefind would index an empty shell. It becomes an option only if the site
  gains prerendering

The honest limitation: Fuse scores the single best match per field and ignores
how often a term appears, so a passing mention ranks alongside a post that is
about the thing, and the shorter post then wins on Fuse's length
normalisation. Searching `django` today returns the stub above the post with a
Django section in it, because the stub is shorter. Writing the stubs fixes it;
a rule demoting placeholders would only hide it. Revisit if ranking still
reads wrong once the posts are real — that is the point at which Pagefind plus
prerendering earns the move.

Worth adding later, cheaply: `⌘K` to open search from any page, which is the
one thing the modal approach buys that a page does not.

**4. RSS.** Done. `/rss.xml` is emitted by the markdown plugin from the same
parse the pages use, and excludes anything flagged `placeholder` or `draft` —
so it carries the one published post and fills itself as the others become
real. Autodiscovery is declared in `index.html`, and the posts page carries a
visible feed icon beside the heading.

Sensible order was posts → tags → search. Tags and search are both built, which
leaves posts — the one that was always the real work, and the one that makes the
other two worth having.

## Hero illustration

Done. The hero carries an inline SVG rocket, animated with CSS
`stroke-dashoffset` and static under `prefers-reduced-motion`, with a compact
variant reused by the back-to-top button and the 404 page.

## Later, unscheduled

- Resume: the CV source in `private/cv.html` is written for a specific
  application. It reads as a CV addressed to one employer, which is wrong for a
  page anyone with the passphrase can open. Worth a neutral pass
