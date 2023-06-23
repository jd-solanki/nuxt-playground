import { defu } from 'defu';

export default defineNuxtPlugin(nuxtApp => {

  let appConfig = useAppConfig()
  console.log(JSON.stringify(appConfig));

  if (process.client) {
    console.log('on client updating appConfig');
    console.log('server config', JSON.stringify(nuxtApp.payload._serverModifiedAppConfig))
    updateAppConfig(defu(nuxtApp.payload._serverModifiedAppConfig, appConfig))
    console.log(appConfig);
  }

  
  const urlSearchParams = nuxtApp.ssrContext?.event.node.req.url?.split('?')[1]
  const demoNumber = new URLSearchParams(urlSearchParams).get('demo')

  

  if (demoNumber === '1')
    appConfig.themeConfig.theme = 'light'
  else if (demoNumber === '2')
    appConfig.themeConfig.theme = 'dark'
  
  console.log(JSON.stringify(appConfig));

  nuxtApp.payload._serverModifiedAppConfig = appConfig
  
  console.log('client plugin loaded')
})