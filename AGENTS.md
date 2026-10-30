# Agent instructions — George’s portfolio

These instructions apply throughout this repository. Follow the user’s current request when it changes the direction described here. Improve the site within the requested scope; routine implementation decisions do not require a separate approval step.

## Project intent and identity

Build George’s personal developer portfolio into a distinctive, polished experience that demonstrates engineering judgment and visual craft. The design reference is [ainsley.dev](https://ainsley.dev/); use its editorial principles as inspiration while developing George’s own identity, copy, artwork, and interactions.

- Name: George.
- Contact: `onyangogeorge954@gmail.com`.
- Voice: personal, clear, confident, and concise. Prefer concrete descriptions of the work to generic marketing language.
- The `george.dev` wordmark is a visual identity. Do not assume domain ownership or configure that domain without a corresponding request.
- Forma, Orbit, Fieldnotes, and Goodkind are demonstration concepts. Preserve their concept labels until the user supplies verified real projects. Do not invent clients, employment, awards, testimonials, results, or social profiles.
- The current visitor journey is introduction → selected work → about → expertise → contact. New sections should contribute a distinct purpose to that journey.

## Start here

1. Work in this checkout. Earlier copies under Documents/Codex are snapshots; do not silently edit those instead.
2. Read `README.md`, `docs/reference-research.md`, and the files relevant to the request. Check `git status --short` and preserve unrelated changes.
3. Inspect the actual components and CSS before introducing a new visual or interaction pattern. Research notes distinguish observed reference behavior from implementation choices.
4. Keep changes focused. When the brief leaves details open, extend the established design system using the guidance below.

## Stack and structure

- Nuxt 4, Vue 3 Composition API, TypeScript, Tailwind CSS 4, and Nuxt UI 4.
- Keep the Nuxt 4 `app/` directory convention, file-based routing, and `<script setup lang="ts">` components.
- Use Nuxt UI for accessible primitives such as dialogs, accordions, buttons, menus, and forms. Customize their presentation to fit this portfolio.
- Reuse the installed local Lucide icon collection. Bundle fonts and icons locally; avoid introducing runtime CDN dependencies for existing assets.
- `app/data/portfolio.ts`: typed profile, projects, and capability content. Prefer this shared data over new duplicated strings.
- `app/pages/index.vue`: homepage and project filtering.
- `app/pages/work/[slug].vue`: shared project detail route.
- `app/components/ProjectArtwork.vue`: original CSS concept mockups.
- `app/components/CraftSculpture.vue`: original SVG hero artwork.
- `app/components/SiteHeader.vue`, `SiteFooter.vue`, and `ContactDialog.vue`: shared navigation and contact.
- `app/composables/useReveals.ts`: section-reveal lifecycle.
- `app/assets/css/main.css`: global visual tokens, responsive rules, and motion.
- `nuxt.config.ts`: global metadata, route transitions, module setup, and static generation.

The application currently exports static files with no backend. Keep that deployment model for presentation and browser-local features. Add server behavior or external services when the requested feature calls for them, documenting the resulting architecture change.

## Visual direction

Aim for an editorial portfolio with a strong typographic hierarchy, generous space, confident compositions, and a restrained technical character.

- Preserve oversized headings, selective italic serif phrases, numbered section markers, fine rules, small uppercase metadata, and consistent arrow cues.
- Use the metallic asterisk/sculptural motif as a recognizable signature. Add supporting artwork when it strengthens the story; avoid competing decorative focal points.
- Keep the contrast between dark introduction/about areas, warm paper project sections, and the chartreuse contact area intentional.
- Maintain staggered project layouts on larger screens and a clear single-column reading order on mobile.
- Use cards where the content warrants a card. Avoid replacing the editorial structure with repeated generic feature grids, excessive rounded containers, or dashboard styling across the public portfolio.
- Keep component-library defaults from dictating the site’s visual identity. Check overlay colors, body backgrounds, focus states, and typography after component or theme changes.
- The body must retain its explicit dark background. Nuxt UI’s light color mode previously supplied a white body behind transparent hero sections.

### Color palette

Use existing semantic variables in `app/assets/css/main.css` as the source of truth. Extend the tokens when a reusable new role is needed.

| Token | Current value | Intended role |
| --- | --- | --- |
| `--ink` | `#101110` | Main dark canvas, primary text on light surfaces |
| `--paper` | `#f1f0eb` | Warm light canvas, primary text on dark surfaces |
| `--acid` | `#d7ff71` | Signature chartreuse accent, key actions, contact area |
| `--muted` | `#94968f` | Secondary copy where contrast remains sufficient |
| `--line` | `#353731` | Fine separators on dark surfaces |
| `--ui-primary` | `#d7ff71` | Nuxt UI primary accent |

The current focus outline is `#738d2c`. Validate its contrast against any newly introduced surface rather than assuming one focus color works everywhere.

Use chartreuse selectively so it retains emphasis. Muted olive, architectural neutrals, lavender-blue, forest green, and butter yellow belong to individual project artwork; do not let those secondary palettes fragment the shared site chrome. Check text and control contrast against their actual backgrounds, including hover and disabled states.

### Typography and spacing

- Sans: locally bundled Plus Jakarta Sans Variable. Serif accent: locally bundled Instrument Serif italic.
- Use the serif for selected expressive words, not long reading passages or navigation labels.
- Keep display typography fluid with `clamp()` and deliberate line breaks. Tight tracking must preserve visible word separation and legibility.
- Keep paragraph line lengths comfortable. Do not extend the tiny decorative metadata sizes to essential content or controls.
- Reuse `.section-shell` and established spacing rhythms. Current page gutters are `clamp(24px, 5.2vw, 96px)`.
- Revisit text wrapping, logo balance, and artwork placement at each breakpoint when editing headlines or copy.

## Motion and interaction

Motion should express craft, orient the visitor, and make state changes understandable. Preserve a calm, deliberate rhythm. Every new animation needs a clear purpose and a stable resting state.

### Current motion vocabulary

These are implementation baselines, not immutable limits. Inspect the current CSS before changing them and keep related interactions coherent.

| Interaction | Baseline |
| --- | --- |
| Hero line entry | Opacity plus 40px upward reveal; 1.1s; second line staggered by 0.12s |
| Main reveal easing | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Section reveal | 35px travel; opacity 0.8s, transform 1s; observed once |
| Route transition | Opacity plus 8px travel; 0.25s; `out-in` |
| Project filter entry | Opacity plus 20px travel; 0.4s |
| Project artwork hover | Scale to 1.045; 0.8s with the main reveal easing |
| Project arrow feedback | Chartreuse background and 45-degree rotation; 0.4s |
| Small link/menu feedback | Approximately 0.3s |
| Hero sculpture | Gentle float over 12s; restrained rotation/scale over 25s |
| Decorative asterisk | Slow 32s rotation |
| Decorative marquee | 40s linear loop |

- Use CSS transitions/keyframes for simple motion and the existing observer composable for section entry. Introduce a motion library only when an actual interaction needs capabilities the current approach cannot reasonably provide.
- Prefer `transform` and `opacity`. Avoid per-frame layout measurement and animation of dimensions or page offsets. Reserve space so artwork and reveals do not cause layout shifts.
- Reuse existing wrappers or introduce separate wrappers when hover, scroll, and idle animations would otherwise compete for the same transform.
- Keep native scrolling, browser history, and anchor navigation reliable. Do not introduce scroll hijacking, mandatory smooth-scroll engines, or a custom cursor as incidental embellishments.
- Full-screen navigation should open promptly, retain focus containment, and close reliably. Any added item stagger must remain brief and must not delay keyboard access or link activation.
- Route transitions must never leave an empty screen, stale content, stranded focus, or an overlay intercepting the destination page. Verify direct URLs, back/forward navigation, and navigation with hashes.
- Keep project-filter changes understandable as items enter, leave, and reorder. Stable keys, accurate project counts, and layout stability matter more than elaborate choreography.
- Treat pointer parallax, magnetic buttons, and tilt as optional enhancements. Restrict them to capable pointers, keep movement subtle, and retain straightforward touch/keyboard behavior.
- Pause newly added expensive continuous effects when offscreen or when the document is hidden. Long-running moving content should have an accessible way to stop or pause it when needed.

### Reduced motion and progressive enhancement

- Every new transition, reveal, parallax effect, marquee, and loop must respect `prefers-reduced-motion: reduce`.
- Reduced-motion mode should display the complete resting composition immediately, disable continuous movement, and use normal scrolling. Do not replace one large movement with another.
- JavaScript-driven motion should check the preference before starting and handle preference changes while mounted. Remove media-query listeners on cleanup.
- Preserve readable server-rendered HTML. Content should be visible without JavaScript; add hidden reveal states only after mounting and only when they can be safely resolved.
- Keep browser-only APIs behind client lifecycle hooks. Avoid hydration differences from random values, viewport measurements, or animation state in server-rendered markup.
- Disconnect observers, remove event listeners, cancel animation frames, and clear timers on unmount. New motion must not continue after route changes.

## Accessibility and responsive behavior

- Use semantic headings, landmarks, real links for navigation, and buttons for actions. Retain skip navigation and clearly visible keyboard focus.
- Preserve Nuxt UI/Reka UI dialog naming, focus management, Escape dismissal, and accordion keyboard behavior when customizing their appearance.
- Provide meaningful labels for icon-only controls. Keep decorative SVGs, duplicated marquee text, and mockup internals out of the accessibility tree where the surrounding content already communicates their purpose.
- Do not make essential content or actions available only on hover. Provide equivalent focus and touch behavior.
- Essential controls need comfortable touch targets, ideally at least 44px; do not mistake small visual metadata for a usable action target.
- Test narrow screens, tablet widths, and wide displays. Existing layout breakpoints include 640px and 1000px, with a large-screen adjustment at 1600px.
- Check at least 390px and 1440px for visual changes, plus any breakpoint directly affected. Inspect long text, menu height, contact email wrapping, artwork clipping, and horizontal overflow.
- Scale or simplify decorative artwork on mobile before reducing essential text to fit. Keep the reading order useful without animation.

## Content, assets, and functional changes

- Keep portfolio entries typed and data-driven. When adding a project, update filtering, counts, categories, detail content, next-project navigation, and prerendered links together. Some current counts are literal values; verify them rather than assuming every count is computed.
- Keep concept artwork distinguishable from real product screenshots. Use assets supplied by the user or appropriately licensed original material.
- Preserve the original identity; do not copy the reference’s source, branding, trademarks, client work, or proprietary assets.
- Current contact actions use `mailto:` and clipboard copying. Keep success/error feedback honest. A new form must have real delivery behavior before displaying a sent confirmation.
- For changes to metadata or project routes, check titles, descriptions, heading hierarchy, favicon behavior, and direct route access.
- Optimize added media, use responsive dimensions, and avoid loading large videos or rendering engines merely to decorate the page.

## Development and validation

Use the Node version in `.nvmrc` (currently 24.15.0) or a version supported by `package.json`.

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

- Keep `package.json` and `package-lock.json` consistent. An earlier lockfile passed npm 11 checks but failed npm 10 clean-install validation because optional `@emnapi` entries were missing. Use the intended npm version to regenerate a lockfile; do not hand-edit dependency integrity data.
- For dependency or lockfile changes, verify a clean `npm ci` in an isolated checkout or directory before publishing. Do not remove an existing working installation as a casual validation step.
- Run type checking and production generation after substantive application changes. Documentation-only edits do not need an application rebuild.
- For visual or interactive changes, inspect the affected views in a browser on desktop and mobile. Exercise the changed behavior, keyboard navigation, reduced-motion mode, and relevant route transitions. Capture screenshots when helpful and allow entry transitions to finish before judging the final composition.
- Update `docs/verification.md` with what was actually checked. Do not represent historical checks as fresh evidence or claim untested accessibility/performance results.
- Check that all intended project routes are generated, unknown routes retain useful error behavior, and fonts/assets load without avoidable external requests.
- If native development watchers fail with `EMFILE` in a restricted macOS environment, verify the generated static output instead. Do not change system limits, global installations, or working application behavior to conceal an environment restriction.

```sh
npm run build
python3 -m http.server 3010 --bind 127.0.0.1 --directory .output/public
```

## Git and publishing

- Preserve user edits and inspect the diff before finishing. Keep generated output, dependency directories, local credentials, and temporary screenshots out of source control.
- This checkout currently has no configured remote. Do not assume a GitHub repository exists or add a guessed remote.
- `.openai/hosting.json` retains the existing Site identity. Reuse that identity when an update to the hosted portfolio is requested; do not register a duplicate Site.
- A documentation-only task is a local repository edit; it does not itself request a website deployment.
- When publishing application changes, follow the available hosting workflow, preserve the current audience, and match the pushed commit to the packaged output. Supply the packaged static build using the tool’s documented `archive` field; an omitted archive previously triggered an unnecessary remote build.
- Report the actual result: what changed, what was verified, and any remaining limitation. Clearly distinguish a successful local build from a confirmed hosted deployment.
