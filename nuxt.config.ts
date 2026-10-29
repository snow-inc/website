export default defineNuxtConfig({
  compatibilityDate: "2026-10-29",
  devtools: { enabled: false },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  fonts: {
    providers: {
      google: false,
      bunny: false,
      fontshare: false,
      fontsource: false,
    },
  },
  colorMode: { preference: "light", fallback: "light" },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "George — Developer & Digital Craftsman",
      meta: [
        {
          name: "description",
          content:
            "George’s developer portfolio. Thoughtful interfaces, purposeful motion, and a little character. Explore selected concepts and start a conversation.",
        },
        { name: "theme-color", content: "#101110" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  nitro: { prerender: { crawlLinks: true } },
  typescript: { strict: true },
});
