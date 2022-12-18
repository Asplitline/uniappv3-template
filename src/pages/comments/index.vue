<template>
  <cs-layout class="comments" :hasPadding="false" hasTabbar>
    <u-tabs :list="list" :is-scroll="false" v-model="current"></u-tabs>
    <view class="post-list">
      <view class="post-item flex mb-6 p-4 pb0" v-for="post in postList" :key="post.id">
        <view class="flex flex-col pr-2 flex-1 justify-between" @click="skip(`/pages/comments/post-detail?id=${post.id}`)">
          <text class="text-30">{{ post.title }}</text>
          <view class="flex w100% items-center">
            <image class="w-60 h-60 b-rd-50%" :src="img(post?.user?.url, 'avatar')"></image>
            <view class="flex flex-col ml2 flex-1">
              <text>{{ post.user?.name || 'admin' }}</text>
              <view class="flex items-center justify-between text-gray text-24">
                <!-- <text class="mr-2">回复 {{ post.replyNum }}</text> -->
                <text class="inline-block mt-1">{{ timeAgo(post.createTime) }}</text>
              </view>
            </view>
          </view>
        </view>
        <image class="w-240 h-150 self-center b-rd-2" :src="img(undefined)"></image>
      </view>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { getAllPost } from '@/api/post'
import useMessage from '@/hooks/useMessage'
import { useUserStore } from '@/store'
import { timeAgo } from '@/utils/tools'
import { inject, onMounted, ref } from 'vue'

const current = ref(-1)
const skip = inject('skip')
const img = inject('img')
const list = ref([
  {
    id: -1,
    name: '全部'
  },
  {
    id: 1,
    name: '思想汇报'
  },
  {
    id: 2,
    name: '三会一课'
  },
  {
    id: 3,
    name: '时政热点'
  }
])

const postList = ref<Array<{ user?: any; id: string; title: string; replyNum: number; createTime: string }>>([])
const { fetchAllUser, getUserById } = useUserStore()
// const { userList, userInfo } = toRefs(useUserStore())
const { handleMessage } = useMessage()
const fetchPost = async () => {
  const { success, data } = await getAllPost()
  handleMessage(success, undefined, () => {
    postList.value = data.map((i: any) => {
      const user = getUserById(i.authorId)
      return {
        ...i,
        user
      }
    })
    console.log('postList.value : ', postList.value)
  })
}
onMounted(() => {
  fetchAllUser()
  fetchPost()
})
// const
</script>

<style lang="scss" scoped></style>
