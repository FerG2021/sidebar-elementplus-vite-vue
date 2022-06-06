import { createApp } from 'vue'
// Elment plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

import router from './router/index.js'

createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
