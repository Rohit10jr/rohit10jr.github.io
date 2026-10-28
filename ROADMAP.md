# Roadmap

Planned work, recorded so it is not lost between sessions. Order is rough
priority, not a schedule.

## Now

**Make the project links work.** The eight entries in `src/data/profile.ts` are
the real projects now, but six of the repositories are private, so most of the
cards link somewhere a visitor cannot follow. Checked against GitHub on
2026-10-28:

| Visibility | Repositories |
| --- | --- |
| Public | `agent-sql-schema` (Dataline), `AgentSEO` |
| Private | `OpenCRM`, `NanoClaw`, `agent-auto-apply`, `ai-business-consultant`, `ragfusion`, `jobnxt` |

Either make them public or drop the `url` on the ones staying private — a card
without a link is better than a link that 404s. The broken links were accepted
knowingly for now, so this is a pending decision rather than an oversight.

`placeholder: true` is a separate question: it marks work still in progress,
not repository visibility, and three entries carry it — Job Application Agent,
AI Business Consultant and RAG Fusion. Drop it from each as the work lands.

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
a rule demoting placeholders would only hide it. The replacement is specced
under **Better search** below, deliberately not built yet.

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

## Better search

Not now. `/search` works and is enough for three posts; this is what to build
when it stops being enough. Two things are missing, and both are real:

**1. Rank by how often a term appears.** Fuse scores the single best match in a
field and never counts occurrences, so one passing mention ranks level with a
post that is about the thing, and the shorter text then wins on length
normalisation — see the `django` case above. Proper ranking weighs frequency
against document length, which is what every real search engine does.

**2. Show the matching text, with the match highlighted.** Results currently
show each post's summary, which is the same text whatever was searched for. It
should show the sentence the match was found in, with the term marked, so a
result explains itself instead of asking you to open the post to find out why
it matched.

The likely answer is **Pagefind**, which does both out of the box — it ranks on
frequency and returns highlighted excerpts, and `@pagefind/default-ui` renders
them. It is what `steipete.me` uses (`src/pages/search.astro`), themed through
`--pagefind-ui-*` variables.

The blocker is structural, not a preference: Pagefind indexes built HTML, and
this build emits only `index.html` and `404.html`, so there is nothing per-post
for it to crawl. **It needs prerendering first** — each post rendered to its own
HTML file at build time. That is the actual piece of work; adding Pagefind
afterwards is the easy half. Prerendering would also mean posts stop shipping in
the main bundle, which is the thing worth fixing by then anyway.

Cheaper middle option if prerendering stays unattractive: keep Fuse, add
`includeMatches: true`, and build excerpts from the match offsets by hand.
That buys highlighting but not frequency ranking, and the ranking is the half
that actually misorders results.

Trigger for picking this up: ranking still reads wrong once the stub posts are
real, or the archive passes roughly thirty posts.

## Later, unscheduled

- `⌘K` to open search from anywhere, the one thing a modal buys that a page
  does not
- Resume: the CV source in `private/cv.html` is written for a specific
  application. It reads as a CV addressed to one employer, which is wrong for a
  page anyone with the passphrase can open. Worth a neutral pass
