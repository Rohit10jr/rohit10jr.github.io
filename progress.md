# Portfolio Redesign Progress

## Timebox

- Route handoff start time: `2026-08-28T23:30:40+05:30`
- Route handoff stop time: `2026-08-29T00:06:05+05:30`
- Style refresh start time: `2026-08-29T00:26:06+05:30`
- Latest stop time recorded: `2026-08-29T00:35:08+05:30`
- Latest style-pass elapsed: about 9 minutes 2 seconds
- Required route-handoff stop deadline: `2026-08-29T02:00:40+05:30`

## Branches

- Archive branch: `archive/static-html-before-react`
- Archive commit: `fa7d44a098603c2e060eb2cb3d074d5ce87d2c26`
- Redesign branch: `redesign/react-typescript-portfolio`
- Latest implementation commit before this progress note: `49ecb941b1b47d2c95a274721eb24d5d6ea14399`
- No merge or deployment was performed.

## Commits

- `36fdf84` `chore: scaffold react portfolio`
- `d25bbbc` `feat: centralize portfolio content`
- `ad68043` `feat: rebuild portfolio experience`
- `83fb732` `chore: add pages build workflow`
- `938f54b` `docs: add redesign progress summary`
- `8c558f8` `feat: add multi-page portfolio routes`
- `047afd4` `docs: update redesign progress`
- `49ecb94` `style: refine portfolio typography and layout`
- This file is the required lowercase progress note and is committed again after the style refresh.

## Areas Changed

- Added typed route metadata in `src/routes.ts`.
- Reworked the app shell into Home, About, Resume, and Posts routes.
- Added shared page/link/list components for route navigation, focus areas, posts, and connect links.
- Removed the standalone contact component and did not add a contact page, form, newsletter, signup, or subscription block.
- Added exactly two typed dummy post entries in `src/data/posts.ts`.
- Added the About page with the exact line `Progress beats perfection` and the GitHub Activity image from `https://ghchart.rshah.org/Rohit10jr`.
- Added a Resume page using only supported profile, skills, social links, and provisional project content.
- Updated responsive CSS for desktop and mobile route layouts, focus states, project cards, skill chips, and print handling.
- Added `public/404.html` and an `index.html` redirect restore script for GitHub Pages direct-route fallback.
- Replaced the previous decorative grid-heavy CSS with a quieter Peter/Cheng-inspired system: readable sans stack, serif resume headings, narrow prose width, flatter list/card treatment, compact header, and document-like resume layout.
- Removed the decorative radial background accent and kept only a subtle top wash.

## Checks

| Check | Result |
| --- | --- |
| Build | `npm run build` passed |
| Route smoke test | `/`, `/about`, `/resume`, and `/posts` returned `200` from the local Vite server |
| Visual smoke test | Desktop and mobile screenshots checked for Home, About, Resume, and Posts after the route work and after the CSS refresh |
| Mobile overflow | Fixed About intro/prose overflow and Resume skill-chip/card overflow |
| Forbidden surface scan | No matches for contact form, Formsubmit, newsletter, signup, subscription, generated-by text, or attribution-trailer text in `src`, `index.html`, or `public` |
| Link check | GitHub profile, listed linked repositories, and GitHub Activity image returned `200`; LinkedIn returned `999` to scripted GET and was preserved as the original public URL |
| Branch safety | Work remained on `redesign/react-typescript-portfolio`; archive branch remained intact |

## Route Smoke Results

- `http://127.0.0.1:5175/` -> `200`
- `http://127.0.0.1:5175/about` -> `200`
- `http://127.0.0.1:5175/resume` -> `200`
- `http://127.0.0.1:5175/posts` -> `200`

## Boundary

- Files changed only inside `D:\02_Personal\portfolio\rohit10jr.github.io`.
- Sibling repositories were used only for read-only inspiration scans.
- No code, assets, personal copy, styling identity, or brand marks were copied from sibling repositories.
- Commit messages contain no extra attribution trailer and no generated-by text.

## Content Still Needed

- Newer project list with accurate descriptions, technologies, source URLs, and live URLs if available.
- Preferred contact email or contact endpoint, if Rohit wants direct contact beyond GitHub and LinkedIn.
- Resume file, if a download should be offered.
- Experience and education details, if they should appear on the Resume page.
- Real post titles and body summaries to replace the two dummy placeholders.
- Correct source URLs for old project entries that remain unlinked.

## Remaining Work

- Push the redesign branch when ready.
- Replace provisional project and post content with owner-provided material.
- Optionally verify LinkedIn manually in a browser because automated requests are blocked by LinkedIn.
- No merge or deploy has been done.
