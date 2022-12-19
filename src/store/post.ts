import { getAllComment, getAllPost } from '@/api/post'
import { defineStore } from 'pinia'

export default defineStore('post', {
  state: () => ({ commentList: [], postList: [] }),
  getters: {
    getCommentByPostId(state) {
      return (postId: string) => state.commentList?.filter((item: { postId: string }) => item.postId === postId)
    },
    getCommentByUserId(state) {
      return (userId: string) => state.commentList?.filter((item: { userId: string }) => item.userId === userId)
    },
    getPostById(state) {
      console.log('state.postList: ', state.postList)
      return (postId: number) => state.postList?.find((item: { id: number }) => item.id === postId)
    }
  },
  actions: {
    async fetchAllComment() {
      const { data } = await getAllComment()
      this.commentList = data.sort((a, b) => -new Date(a.createTime).getTime() + new Date(b.createTime).getTime())
    },
    async fetchAllPost() {
      const { data } = await getAllPost()
      console.log('data: ', data)
      this.postList = data
    }
  }
})
