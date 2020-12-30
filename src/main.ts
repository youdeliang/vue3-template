import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from '@/store'
import { setupElementUI } from '@/setup/element-plus'
import '@/styles/index.scss'
import 'normalize.css'
import router from './router'

const app = createApp(App).use(router)

setupStore(app)
setupElementUI(app)
app.mount('#app')
