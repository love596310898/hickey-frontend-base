import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import '@/assets/css/index.css';


const app = createApp(App)

app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
