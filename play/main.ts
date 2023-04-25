import { createApp } from 'vue'
import App from './App.vue'
import viray from '@viray/components'
import router from './router/index'
// import {ViButton} from '../dist/es/components'
const app = createApp(App)

app.use(router)
app.use(viray)
app.mount('#app')