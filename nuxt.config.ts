// import mkcert from 'vite-plugin-mkcert';
import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-app/demo/',
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
    // server: {
    //   https: true
    // },
    plugins: [
      vuetify(),
      // mkcert()
    ]
  },
})
