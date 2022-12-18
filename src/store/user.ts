import { getUserById } from '@/api/user'
import CacheStorage from '@/utils/cache'
import { isEmpty } from '@/utils/tools'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => ({ userInfo: CacheStorage.getItem('userInfo', {}) }),
  getters: {},
  actions: {
    setUserInfo(payload: any) {
      this.userInfo = payload
      CacheStorage.setItem('userInfo', payload)
    },
    async updateInfo() {
      if (isEmpty(this.userInfo?.id)) return
      const { data, success } = await getUserById(this.userInfo.id)
      if (success) {
        this.setUserInfo(data)
      }
    }
  }
})
