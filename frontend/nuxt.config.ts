import * as CONSTANTS from "./utils/constants";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: `${CONSTANTS.TITLE}`,
      titleTemplate: `${CONSTANTS.TITLE_TEMPLATE}`,
      meta: [
        {
          name: "theme-color",
          hid: "theme-color",
          content: `${CONSTANTS.THEME_COLOR}`,
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/color-mode"],
  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: "",
  },
  devtools: { enabled: true },
});
