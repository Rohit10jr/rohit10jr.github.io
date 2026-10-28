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

**2. Tags.** Front matter already carries `tags`, and the data layer already
parses them, but nothing renders them yet. Needs a tag index and per-tag pages.
Both reference sites do this; Peter has `/tags/[tag]`, Cheng uses Hugo
taxonomies.

**3. Search.** Only worth doing once there are enough posts to make scanning the
list annoying. Two options:

- Build a small `posts.json` at build time and filter it in the browser with
  Fuse.js — fine for a few dozen posts
- Pagefind, which indexes the built HTML and ships a static search bundle —
  what to use if the archive grows

**4. RSS.** Done. `/rss.xml` is emitted by the markdown plugin from the same
parse the pages use, and excludes anything flagged `placeholder` or `draft` —
so the feed is valid and empty today and fills itself as posts become real.
Autodiscovery is declared in `index.html`; there is no visible link to it yet.

Sensible order is posts → tags → search, because tags and search only earn
their place once there is volume.

## Hero illustration

Done. The hero carries an inline SVG rocket, animated with CSS
`stroke-dashoffset` and static under `prefers-reduced-motion`, with a compact
variant reused by the back-to-top button and the 404 page.

## Later, unscheduled

- Resume: the CV source in `private/cv.html` is written for a specific
  application. It reads as a CV addressed to one employer, which is wrong for a
  page anyone with the passphrase can open. Worth a neutral pass
