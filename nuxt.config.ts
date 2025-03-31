// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "nuxt-quasar-ui",
    "@unocss/nuxt",
  ],
  css: ["@/assets/global.css"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-light.ico",
        },
      ],
    }
  }
});