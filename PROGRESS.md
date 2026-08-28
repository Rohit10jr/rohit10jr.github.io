# Portfolio Redesign - PASS

## What Changed

- Branching: preserved the old static site on `archive/static-html-before-react`, then created `redesign/react-typescript-portfolio` for all redesign work.
- Scratch rebuild: deleted the old `index.html`, `style.css`, and static `assets` tree only after the redesign branch existed.
- App stack: rebuilt the portfolio as a Vite, React, and TypeScript app using npm.
- Content data: centralized profile, social links, skill groups, focus areas, and provisional projects in `src/data/profile.ts`.
- Components: added section components for header, hero, about/focus, skills, projects, contact, and footer.
- Styling: added responsive plain CSS in `src/styles/main.css`, including focus states, mobile navigation, light/dark theme handling, and reduced-motion handling.
- Assets: restored only the real profile image into `public/assets/rohit-profile.webp`; old project thumbnails stayed removed because they appeared to be placeholders.
- Deployment readiness: added a GitHub Pages workflow in `.github/workflows/pages.yml` and set the Vite base to `/`.

## Branches

- Archive: `archive/static-html-before-react` at `fa7d44a098603c2e060eb2cb3d074d5ce87d2c26`.
- Work: `redesign/react-typescript-portfolio` at `83fb732376efa0e175eb034d343d3c1bfa00f2d8`.
- Base branch: `master` at `fa7d44a098603c2e060eb2cb3d074d5ce87d2c26`.
- No merge or deploy was performed.

## Commits

- `36fdf84` `chore: scaffold react portfolio`
- `d25bbbc` `feat: centralize portfolio content`
- `ad68043` `feat: rebuild portfolio experience`
- `83fb732` `chore: add pages build workflow`

## Verification

| Check | Result |
|---|---|
| Build | `npm run build` passed |
| Lint/typecheck | TypeScript runs through the build; no separate `lint`, `typecheck`, or test scripts exist |
| Visual smoke test | Checked desktop `1440px`, tablet `768px`, mobile `375px`, and a tall full-page capture |
| Links/contact | GitHub profile and verified project links returned `200`; LinkedIn blocks automated checks but the original URL was preserved |
| Local server | Vite dev server returned `200` at `http://127.0.0.1:5173/` during handoff |
| Timebox | Started `2026-08-27T17:15:05+05:30`, stopped `2026-08-27T17:42:20+05:30`, elapsed about 27 minutes |

## Decisions

- Kept the portfolio small and editable with React components plus typed data instead of adding a CMS, router, backend, or database.
- Used neutral copy based only on the current site and verified public repository metadata.
- Marked old project entries as provisional because the owner plans to replace them later.
- Did not render broken source links for `school-management-system` and `chatrooms`; their old URLs returned 404 during verification.
- Used a public-profile-only contact section because the previous form endpoint was malformed and no confirmed email address was available.
- Added the Pages workflow so a future merge to `master` can build `dist` for GitHub Pages, but did not deploy.

## Blocked Or Deferred

- Preferred email address or contact endpoint: needed before adding a direct email link or contact form.
- Newer projects: needed to replace the provisional old project list.
- Live project URLs: needed before adding live-site buttons.
- Correct source URLs for `school-management-system` and `chatrooms`: needed before linking those entries again.
- Resume file: needed before adding a resume download section.
