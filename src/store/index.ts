import { createPinia } from 'pinia'
export { default as useUserStore } from './user'
export { default as usePostStore } from './post'

const pinia = createPinia()
export default pinia
