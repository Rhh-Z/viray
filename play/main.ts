import { createApp } from 'vue'
import App from './App.vue'
import viray from '@viray/components'
// import viray from '../dist/es/components'
const app = createApp(App)
app.use(viray)
app.mount('#app')