import { getRequestHost, getRequestURL } from 'h3';

export default defineNuxtPlugin(nuxtApp => {
  console.log('baseUrl :>> ', nuxtApp.$config.app.baseURL)

  if (nuxtApp.ssrContext?.event) {
    const host = getRequestHost(nuxtApp.ssrContext.event, { xForwardedHost: true })
    const url = getRequestURL(nuxtApp.ssrContext.event, { xForwardedHost: true })
    console.log('host :>> ', host)
    console.log('url :>> ', url)
  }

  // console.log(nuxtApp.ssrContext?.event.node.req.client);
  console.log(nuxtApp.ssrContext?.event.node.req.client._httpMessage.req.originalUrl);

  const appConfig = useAppConfig()
  if (nuxtApp.$config.app.baseURL === '/demo-1/') {
    appConfig.themeConfig.theme = 'light'
  }
  else {
    appConfig.themeConfig.theme = 'dark'
  }

  //   console.log('nuxtApp Context :>> ', nuxtApp.ssrContext?.event.context)

  //   console.log('nuxtApp._route.fullPath :>> ', nuxtApp._route.fullPath)

  // Doing something with nuxtApp
  console.log('server plugin loaded')
})
