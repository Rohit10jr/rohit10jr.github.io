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

## After the home page: copy in the data layer

Deferred deliberately — settle the home page first, then make one pass over
all of it so the wording does not have to be revisited twice.

- **`profile.headline` is unused.** The hero renders its own hardcoded string.
  Either wire the hero to the field or delete it; the two currently disagree,
  and the hero version carries a `<br>` and an `<em>` that a plain string
  cannot, so it needs a small change either way
- **`profile.summary` still leads with backend**, which no longer matches the
  headline above it. Rebalance it toward the full-stack and product side
- **Move the About page copy into `profile.ts`.** It is hardcoded in
  `AboutPage.tsx` today, so the page and the data layer state the same things
  in different words

## Next: writing

**1. Real posts.** Five placeholders exist in `src/content/posts/`. Each is
marked `placeholder: true`, which drives the badge in the UI — remove that flag
once a post is genuinely written. Adding a post is one markdown file; the build
validates `title`, `date` and `summary` and fails if any is missing.

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

**4. RSS.** Deliberately deferred until real posts exist; a feed advertising
placeholder content is worse than no feed. Needs a build step emitting
`/rss.xml` from the same post data the pages use. Cheng gets this free from
Hugo (`outputs: home: [HTML, RSS, JSON]`); ours has to be generated.

Sensible order is posts → RSS → tags → search, because RSS only needs real
content, while tags and search only earn their place once there is volume.

## Hero illustration

Done. The hero carries an inline SVG rocket, animated with CSS
`stroke-dashoffset` and static under `prefers-reduced-motion`, with a compact
variant reused by the back-to-top button and the 404 page.

## Later, unscheduled

- Resume: the CV source in `private/cv.html` is written for a specific
  application. Worth a neutral pass for a public site
- `progress.md` predates the current structure and is stale
