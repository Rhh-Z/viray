import DefaultTheme from 'vitepress/theme'
import './style/style.css'
import './style/var.css'
// import '@viray/theme-chalk'
import viray from '@viray/components'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(viray);
  }
}