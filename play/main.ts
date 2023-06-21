import { createApp } from 'vue'
import App from './App.vue'
// import viray from '@viray/components'
// import { ViButton } from '@viray/components'
import router from './router/index'
import viray from '../dist/es/packages/components'
// import {} from '../dist/es/packages/components'

const app = createApp(App)

// app.use(ViButton)
// app.use(ViButtonGroup)
app.use(router)
app.use(viray)
app.mount('#app')