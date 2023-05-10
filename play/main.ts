import { createApp } from 'vue'
import App from './App.vue'
import viray from '@viray/components'
// import { ViButton } from '@viray/components'
// import { ViButton, ViButtonGroup } from '../dist/es/packages/components'
import router from './router/index'

const app = createApp(App)

// app.use(ViButton)
// app.use(ViButtonGroup)
app.use(router)
app.use(viray)
app.mount('#app')