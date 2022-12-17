import 'uno.css'
import uView from 'vk-uview-ui'
import { createSSRApp } from 'vue'
import App from './App.vue'
import pinia from '@/store'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(uView)
  return {
    app
  }
}
