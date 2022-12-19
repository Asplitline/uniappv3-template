import { getAllUser, getUserById } from '@/api/user'
import CacheStorage from '@/utils/cache'
import { isEmpty } from '@/utils/tools'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => ({ userInfo: CacheStorage.getItem('userInfo', {}), userList: [] }),
  getters: {
    getUserById(state) {
      return (id: string) => state.userList?.find((user: { id: string }) => user.id === id)
    },
    isStudent(state) {
      return state.userInfo.level == 0
    }
  },
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
    },
    async fetchAllUser() {
      const { list } = await getAllUser()
      this.userList = list
    }
  }
})
