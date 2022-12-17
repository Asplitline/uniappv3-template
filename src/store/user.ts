import CacheStorage from '@/utils/cache'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => ({ userInfo: CacheStorage.getItem('userInfo', {}) }),
  getters: {},
  actions: {
    setUserInfo(payload: any) {
      this.userInfo = payload
      CacheStorage.setItem('userInfo', payload)
    }
  }
})
