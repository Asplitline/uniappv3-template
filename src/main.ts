import { createSSRApp, VueElement } from 'vue'
import uView from 'vk-uview-ui'
import App from './App.vue'
import 'uno.css'
import pinia from '@/store'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(uView)
  return {
    app
  }
}
