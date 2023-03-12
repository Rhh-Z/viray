import { createApp } from 'vue'
import App from './App.vue'
import viray from "@viray/components";
const app = createApp(App)
app.use(viray)
app.mount('#app')