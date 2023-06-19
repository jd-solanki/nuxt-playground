import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/vuexy-vuejs-admin-template/demo/',
  },
  appConfig: {
    themeConfig: {
      // theme: 'dark'
    },
  },
  typescript: { shim: false },
  build: { transpile: ["vuetify"] },
  devtools: { enabled: true },
  vite: {
    plugins: [
      vuetify()
    ]
  },
})
