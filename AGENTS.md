# Repository Guidelines

## Project Structure & Module Organization

This repository is a TypeScript application deployed as a Cloudflare Worker.

- `src/react-app/` contains the React 19 client. Keep page and component code here, with component-specific CSS and imported assets nearby.
- `src/react-app/assets/` stores bundled images and SVGs.
- `src/worker/index.ts` defines the Hono API and Worker entry point. API routes should remain under `/api/`.
- `public/` contains static files copied without bundling.
- `wrangler.json` controls Worker deployment, SPA fallback, compatibility, and observability.
- `vite.config.ts` connects React, Vite, and the Cloudflare runtime.

Generated output belongs in `dist/` and must not be committed.

## Build, Test, and Development Commands

Install exact locked dependencies with `npm ci`.

- `npm run dev` starts the local Vite/Worker development server.
- `npm run build` type-checks all TypeScript projects and creates the production bundle.
- `npm run lint` runs ESLint across the repository.
- `npm run check` validates TypeScript, performs a build, and dry-runs the Worker deployment.
- `npm run preview` builds and serves the production output locally.
- `npm run cf-typegen` regenerates Cloudflare binding types after configuration changes.
- `npm run deploy` deploys to Cloudflare; run only from an intended account and environment.

## Coding Style & Naming Conventions

Use TypeScript with strict compiler checks. Follow existing formatting: tabs for indentation, double quotes, semicolons, and trailing commas. ESLint enforces TypeScript, React Hooks, and React Refresh rules.

Name React components and files in `PascalCase` (`PricingCard.tsx`), functions and variables in `camelCase`, and constants in `UPPER_SNAKE_CASE` when truly global. Keep Worker route handlers small; extract reusable logic into clearly named modules.

## Testing Guidelines

No automated test framework or coverage threshold is configured yet. Every change must pass:

```bash
npm run lint
npm run check
```

Manually verify changed UI flows and `/api/` behavior through `npm run dev`. If adding a test runner, use colocated `*.test.ts` or `*.test.tsx` files and add its command to `package.json`.

## Commit & Pull Request Guidelines

Git history currently provides no established convention beyond an initial import. Use concise, imperative commit subjects, optionally scoped, such as `feat(ui): add pricing section` or `fix(api): validate request body`.

PRs should explain purpose, implementation, and verification commands. Link relevant issues. Include screenshots or recordings for visual changes, and note any `wrangler.json`, binding, or deployment impact.
