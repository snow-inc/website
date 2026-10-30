# nyabwana.dev website

## Develop

Requires Node.js 22.22.3+, 24.15.0+, or 26+. The pinned local development version is Node 24.15.0 (`nvm use`).

```sh
npm install
npm run dev
```

Open the local URL printed by Nuxt (normally `http://127.0.0.1:3000`).

```sh
npm run typecheck
npm run build
```

`build` prerenders the homepage and all four case studies into `.output/public`. These files can be deployed to static hosting. No runtime server, database, credentials, or external API is required. Fonts and icons are bundled locally.

## Included

- Responsive editorial homepage and original animated SVG sculpture.
- Project category filters and four navigable concept case studies.
- Full-screen keyboard-accessible navigation, expertise accordion, and contact dialog.
- Direct email contact and copy-to-clipboard, with feedback and a graceful failure message.
- Reduced-motion support, semantic headings, skip navigation, focus styles, per-page metadata, favicon, and a custom error page.
- Research notes in `docs/reference-research.md`.

## Personalize

Profile and concept project content live in `app/data/portfolio.ts`. The current identity is George and the contact address is `onyangogeorge954@gmail.com`, as supplied. Repeated branded/header/footer copy is in the corresponding components.

**Forma, Orbit, Fieldnotes, and Goodkind are explicitly labelled demonstration concepts.** They are not claims of client work, shipped products, results, or professional experience. Replace them with your actual work and links before presenting the portfolio as a record of delivered projects. Their mockups are original CSS illustrations, not functioning standalone applications.

- `app/pages/index.vue`: homepage content and filtering
- `app/pages/work/[slug].vue`: reusable case-study route
- `app/components/ProjectArtwork.vue`: original concept mockups
- `app/assets/css/main.css`: visual design, motion, and responsive layouts
- `app/components/ContactDialog.vue`: contact actions
- `nuxt.config.ts`: static generation and SEO defaults

The wordmark `george.dev` is a visual portfolio identity, not a claim that the domain is owned or configured. No social profile URLs were guessed.

## Local verification environment

The production output was checked using a static server. This agent’s restricted macOS environment reports `EMFILE` for Nuxt’s native development watchers, including with polling enabled. If you encounter the same environment limit, generate the site and serve the output directly:

```sh
npm run build
python3 -m http.server 3010 --bind 127.0.0.1 --directory .output/public
```

This does not affect the generated static site or hosted preview.
