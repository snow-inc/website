# Verification

Checked on 29 October 2026 with Node 24.15.0, Nuxt 4.6.3, Nuxt UI 4.12.0, Tailwind CSS 4.3.3, and Vue 3.5.44.

- TypeScript check passed.
- Static production generation passed. Homepage and all four case-study routes were prerendered.
- Homepage and all four case-study URLs returned HTTP 200 from the generated output.
- Browser-checked the desktop layout at 1440px and mobile layout at 390px; no horizontal overflow was detected at either width.
- Opened the full-screen navigation and followed section links.
- Verified category filtering: Websites shows Forma and Fieldnotes; Web apps shows Orbit and Goodkind.
- Followed a project into its case study.
- Opened the contact dialog, verified the mailto destination, and received successful clipboard-copy feedback.
- Exercised the mobile expertise accordion and verified its expanded state.
- Reduced-motion support is implemented in CSS and the section-reveal composable. An OS-level reduced-motion override was not exercised in the browser.

## Environment notes

Nuxt native development watchers report EMFILE in this restricted macOS execution environment. Static generation and the production preview are unaffected. No system limits or global Node installation were changed.

The dependency update removed the moderate Nuxt advisories. npm still reports low-severity transitive build-tool advisories for deepmerge and esbuild; no forced major dependency overrides were introduced. Deployment consists only of generated static HTML, CSS, JavaScript, and assets.
