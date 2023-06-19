import { defu } from 'defu';

const defaultConfig = {
    theme: 'light'
}

export default defineNuxtPlugin(nuxtApp => {
    const config = useAppConfig()

    if (nuxtApp.$config.app.baseURL === '/demo-1/') {
        config.themeConfig.theme = 'light'
    } else if (nuxtApp.$config.app.baseURL === '/demo-2/') {
        config.themeConfig.theme = 'dark'
    }

    console.log(config.themeConfig.theme);

    config.themeConfig = defu(config.themeConfig, defaultConfig)
})