import { createPinia } from 'pinia'
export { default as useUserStore } from './user'
export { default as usePostStore } from './post'
export { default as useJoinPartyStore } from './joinParty'

const pinia = createPinia()
export default pinia
