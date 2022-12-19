<template>
  <cs-layout class="" :hasPadding="false">
    <pcs-navbar title="我的评论"></pcs-navbar>
    <view class="pb-4">
      <view class="mt-2 px-4" v-for="comment in commentList" :key="comment.id">
        <view class="flex">
          <image class="w80 h80 circle" :src="img(undefined, 'avatar')"></image>
          <view class="flex flex-col justify-between ml2">
            <text>{{ userStore.userInfo.name }}</text>
            <text class="text-gray text-26">{{ timeAgo(comment.createTime) }}</text>
          </view>
        </view>
        <view>
          <text class="inline-block py-3 font-bold ellipsis-3">{{ comment.content }}</text>
          <view class="bg-white b b-gray-2 b-rd-3 flex items-center">
            <image class="w100 h100 img flex-shrink-0" :src="img(undefined)"></image>
            <view class="py-2 px-4 self-stretch">
              <text class="text-gray-5 ellipsis-2">{{ comment.post.title }}</text>
            </view>
          </view>
          <view>
            <button class="btn-sm btn-plain mt-3 mr-0 w-140 px-1" @click="skip(`/pages/comments/post-detail?id=${comment.post.id}`)">
              查看详情
            </button>
          </view>
        </view>
      </view>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { usePostStore, useUserStore } from '@/store'
import { timeAgo } from '@/utils/tools'
import { inject, onMounted, ref } from 'vue'

const img = inject('img')
const skip = inject('skip')
const userStore = useUserStore()
const commentList = ref([])
const postStore = usePostStore()
const fetchComment = async () => {
  await postStore.fetchAllComment()
  await postStore.fetchAllPost()
  const list = postStore.getCommentByUserId(userStore.userInfo.id).map((i: { postId: string }) => {
    const post = postStore.getPostById(+i.postId)
    return {
      ...i,
      post
    }
  })
  commentList.value = list
}
onMounted(() => {
  fetchComment()
})
</script>

<style lang="scss" scoped>
.img {
  transform: scale(1.3);
}

.ellipsis-2 {
  display: -webkit-box; /*弹性伸缩盒子模型*/
  -webkit-box-orient: vertical; /*伸缩盒子子排列方式*/
  -webkit-line-clamp: 2; /*设置显示文本行数*/
  text-overflow: ellipsis;
  overflow: hidden;
}
.ellipsis-3 {
  display: -webkit-box; /*弹性伸缩盒子模型*/
  -webkit-box-orient: vertical; /*伸缩盒子子排列方式*/
  -webkit-line-clamp: 3; /*设置显示文本行数*/
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
