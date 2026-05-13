# AGENTS.md — Portfolio

Next.js 12 static site (pages router) deployed to Netlify. Personal portfolio with i18n, Tailwind + DaisyUI, and Emotion.

## Commands

- `npm install`
- `npm run dev` — local dev server on :3000
- `npm run netlify` — **static export** (`next build && next export`); use this for the deployable artifact, not `npm run build`
- `npm run build` — standard Next.js build (not used for deploy)

## Architecture

- **Router**: pages router (`pages/`). No `app/` directory despite Tailwind `content` referencing it.
- **Entrypoint**: `pages/index.jsx` (single-page portfolio). `pages/_app.js` wraps the app with `appWithTranslation` from `i18n.js`.
- **i18n**: `next-i18next` v6. Config lives in `i18n.js` and `next.config.js` (rewrites + `publicRuntimeConfig`).
  - Translations: `public/static/locales/{en,es}/common.json`
  - Components use `withTranslation('common')` and rely on `namespacesRequired` in `getInitialProps`.
- **Styling**: TailwindCSS 3 + DaisyUI. Custom theme via CSS variables in `styles/tailwind.css` (Solarized light/dark). Theme toggle and language toggle are stored in `localStorage` via `hooks/useLocalStorage.js`.
- **Emotion**: `@emotion/react` is used for the `css` prop (e.g. `PricingBox`). Import `{ jsx, css } from '@emotion/react'` where needed; the `css` prop works because of the Emotion JSX runtime, not the TypeScript `jsx: preserve` setting.
- **TypeScript**: `tsconfig.json` is strict but the project is mostly JSX/JS (`jsconfig.json` exists with `checkJs: true`). New files can be `.ts`/`.tsx` or `.js`/`.jsx`; both are resolved.

## Deployment / Export quirks

- Netlify deploy uses `npm run netlify`, which runs `next export`. Output goes to `out/`.
- `netlify.toml` has one redirect rule (`/github-m013` → GitHub profile).
- `next.config.js` also defines a redirect (`/github` → external GitHub profile).

## Testing / Quality

- **No test suite, no linter, no formatter configured.** Do not assume `npm test` or `npm run lint` exists.

## Gotchas

- `postcss.config.js` references `purgecss` config but the PurgeCSS plugin is commented out / not active in the plugins array. Tailwind’s own purging handles CSS.
- `tailwind.config.js` still contains a legacy `purge` key alongside the modern `content` key; both point to `pages` and `components`.
- Do not add App Router conventions (e.g. `layout.tsx`, `page.tsx`); this is strictly a pages-router project.
