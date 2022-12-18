import { getAllComment } from '@/api/post'
import CacheStorage from '@/utils/cache'
import { isEmpty } from '@/utils/tools'
import { defineStore } from 'pinia'

export default defineStore('post', {
  state: () => ({ userInfo: CacheStorage.getItem('userInfo', {}), commentList: [] }),
  getters: {
    getCommentByPostId(state) {
      return (postId: string) => state.commentList?.filter((item: { postId: string }) => item.postId === postId)
    }
  },
  actions: {
    async fetchAllComment() {
      const { data } = await getAllComment()
      this.commentList = data.sort((a, b) => -new Date(a.createTime).getTime() + new Date(b.createTime).getTime())
      console.log('data: ', data)
    }
  }
})
