# Reference study: ainsley.dev

Researched 29 October 2026. Reference: https://ainsley.dev/.

## Pages inspected

- Homepage: https://ainsley.dev/
- Portfolio: https://ainsley.dev/portfolio/
- About: https://ainsley.dev/who-we-are/
- Expanded homepage navigation, browser-visible typography, DOM section structure, and inline transform/opacity styles.

## Observed design patterns

- Near-black base (`#0a0a0a`) with high-contrast white headings and softer gray body copy.
- Plus Jakarta Sans headings with an italic serif accent inside important phrases.
- Oversized, tightly spaced typography and a prominent graphic in the homepage hero.
- Small uppercase navigation, a persistent visual identity, and a full-screen navigation overlay.
- Numbered sections, generous spacing, an editorial sequence, and large visual project previews.
- Consistent arrow language on links and calls to action.
- Broad navigation covers services, about, portfolio, insights, and contact. The portfolio separates project discovery from individual project stories.

## Observed motion

- Homepage heading is split into character/word wrappers for staged reveals.
- Navigation items have opacity and `translateY(100px)` starting states; the overlay transitions into view and reveals links sequentially.
- Header background transition is declared at 0.6s.
- Scrolling changes the hero composition relative to the background graphic. The reference’s custom scrolling is animation-heavy.
- Navigation between the homepage and portfolio includes a dark transitional state.

This is a bounded browser study, not an exhaustive animation audit. Exact timing and the reference's internal animation library are not asserted where they were not verified.

## Adaptation for George

The implementation retains the editorial principles while using original copy, identity, and artwork:

- Nuxt 4 + TypeScript + Tailwind CSS 4 + Nuxt UI 4.
- Locally hosted Plus Jakarta Sans and Instrument Serif fonts.
- Near-black, warm paper, and a restrained chartreuse accent.
- Original code-drawn metallic asterisk and four original CSS interface mockups; no reference brand assets or project imagery are reused.
- Personal flow: introduction → selected work → about → expertise → contact.
- Four explicitly labelled concepts with real navigable case-study pages, rather than invented clients or unverified results.
- Native anchor scrolling, CSS entry transitions, intersection-based section reveals, hover feedback, a slow marquee, and sculpture motion.
- Reduced-motion preferences disable continuous motion, transitions, and smooth scrolling. Content remains readable without JavaScript.
- Component library supplies dialog focus management, modal navigation, buttons, icons, and accordion interactions.

## Sources for the implementation stack

- https://nuxt.com/docs/4.x/
- https://ui.nuxt.com/docs/getting-started/
- https://ui.nuxt.com/docs/getting-started/installation/nuxt
- https://tailwindcss.com/docs
