# Implementation map

## Stack

- Nuxt 4 uses the `app/` directory convention and file-based routing.
- Vue 3 Composition API and TypeScript handle client state.
- Tailwind CSS 4 is integrated through Nuxt UI; design tokens live in CSS `@theme`.
- Nuxt UI supplies `UApp`, `UButton`, `UAccordion`, `UModal`, and `UIcon`.
- Reka UI underpins accessible overlays and accordion keyboard behavior.
- All project artwork is original SVG/CSS, with locally bundled fonts and Lucide icons.

## Routes

- `/`: hero, project filters, about, expertise, contact
- `/work/forma`
- `/work/orbit`
- `/work/fieldnotes`
- `/work/goodkind`

All project routes use a shared detail component and typed data. Unknown project slugs return a 404. Static generation crawls the project links.

## Interaction model

Project filtering is local reactive state. The navigation and contact dialogs use Nuxt UI overlays with Escape handling and focus containment. Contact uses `mailto:` links and the Clipboard API; no data is submitted to a backend. The clipboard action reports success or provides a manual-copy fallback.

Page entry, hover feedback, and route transitions use CSS. `useReveals` observes below-the-fold sections once and disconnects on unmount. Content is initially visible in server-rendered HTML. A `prefers-reduced-motion` media query removes motion and smooth scrolling.

## Publishing

`npm run build` runs `nuxt generate` and produces `.output/public`. `.openai/hosting.json` identifies the private Site and static directory. The hosting integration is separate from the application; the generated site can also be deployed to another static host.
