import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
    const appConfig = useAppConfig()

    console.log('appConfig.themeConfig.theme :>> ', appConfig.themeConfig.theme);

  const vuetify = createVuetify({
      ssr: true,
      theme: {
          defaultTheme: appConfig.themeConfig.theme
      }
  })

  app.vueApp.use(vuetify);
});