import { getAllJoinParty } from '@/api/joinParty'
import { defineStore } from 'pinia'

export default defineStore('joinParty', {
  state: () => ({ joinPartyList: [] }),
  getters: {
    getJoinPartyById(state) {
      return (userId: string) => state.joinPartyList?.filter((item: { userId: string }) => item.userId === userId)
    }
  },
  actions: {
    async fetchAllJoinParty() {
      const { data } = await getAllJoinParty()
      console.log('data: ', data)
      this.joinPartyList = data.sort((a, b) => -new Date(a.utime).getTime() + new Date(b.utime).getTime())
    }
  }
})
