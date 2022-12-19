<template>
  <cs-layout class="comments" :hasPadding="false" hasTabbar>
    <view class="pt2 px2">
      <u-tabs :list="list" :is-scroll="false" v-model="current" class="p1 b b-gray-2 b-rd-2"></u-tabs>
    </view>
    <view class="post-list">
      <template v-if="!isEmpty(filterPostList)">
        <view class="post-item flex mb-2 mx-2 p-4 bg-white b b-gray-2 b-rd-1 mt2" v-for="post in filterPostList" :key="post.id">
          <view class="flex flex-col pr-2 flex-1 justify-between" @click="skip(`/pages/comments/post-detail?id=${post.id}`)">
            <text class="text-30">{{ post.title }}</text>
            <view class="flex w100% items-center">
              <image class="w-60 h-60 b-rd-50%" :src="img(post?.user?.url, 'avatar')"></image>
              <view class="flex flex-col ml2 flex-1">
                <text>{{ post.user?.name || 'admin' }}</text>
                <view class="flex items-center justify-between text-gray text-24">
                  <text class="inline-block mt-1">{{ timeAgo(post.createTime) }}</text>
                </view>
              </view>
            </view>
          </view>
          <image class="w-240 h-150 self-center b-rd-2" :src="img(undefined)"></image>
        </view>
      </template>
      <u-empty text="暂无数据" class="mt-4!" v-else></u-empty>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { getAllPost } from '@/api/post'
import useMessage from '@/hooks/useMessage'
import { useUserStore } from '@/store'
import { isEmpty, timeAgo } from '@/utils/tools'
import { onShow } from '@dcloudio/uni-app'
import { computed, inject, onMounted, ref } from 'vue'

const current = ref(0)
const skip = inject('skip')
const img = inject('img')
const list = ref([
  {
    id: 0,
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

const userStore = useUserStore()

const postList = ref<Array<{ user?: any; id: string; title: string; replyNum: number; createTime: string }>>([])
const { fetchAllUser, getUserById } = useUserStore()
const { handleMessage } = useMessage()
const filterPostList = computed(() => postList.value.filter((i) => current.value === 0 || current.value === +i.lx))
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
onShow(() => {
  if (isEmpty(userStore.userInfo)) {
    uni.$u.toast('请先登录')
    uni.redirectTo({ url: '/pages/login/index' })
  }
})

onMounted(() => {
  fetchAllUser()
  fetchPost()
})
// const
</script>

<style lang="scss" scoped></style>
