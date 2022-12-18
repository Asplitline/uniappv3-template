<template>
  <cs-layout>
    <pcs-navbar>
      <template #left></template>
    </pcs-navbar>
    <view class="pb-12.5">
      <view class="post-box py-4">
        <text class="post-title text-34 font-700">{{ currentPost.title }}</text>
        <view class="post-meta flex mt-4">
          <!-- <view class="flex items-center w"> -->
          <image class="w-80 h-80 b-rd-50% flex-shrink-0" :src="img(currentPost.user?.url, 'avatar')"></image>
          <view class="flex flex-col flex-1 ml-2">
            <text class="text-gray-500 text-30 break-all">{{ currentPost.user?.name }}</text>
            <view class="flex items-center text-24 text-gray-400 flex-shrink-0 mt-2">
              <text>{{ formatDate(currentPost.createTime) }}</text>
              <view class="w-2 h-20 bg-gray mx-2"></view>
              <text>{{ currentPost.replyNum || commentList.length }} 条评论</text>
            </view>
          </view>
          <!-- </view> -->
        </view>
        <view class="post-content py-4 px-2 b b-gray-2 b-rd-1 mt3 lh-relaxed bg-white">
          <rich-text :nodes="currentPost.htmlContent"> </rich-text>
        </view>
      </view>
      <view class="comment-box">
        <view class="comment-header flex justify-between items-center">
          <text class="text-34 font-700">全部评论 ({{ currentPost.replyNum || commentList.length }})</text>
        </view>
        <view class="comment-list py-4">
          <template v-if="!isEmpty(commentList)">
            <view class="comment-item flex mb-3" v-for="comment in commentList" :key="comment.id">
              <view class="avatar pr-3">
                <image class="w60 h60 b-rd-50%" :src="img(comment.user?.url, 'avatar')"></image>
              </view>
              <view class="content flex-col flex flex-1 mr-2">
                <view class="flex mb-2">
                  <view class="flex flex-col justify-between">
                    <text class="text-28 font-500">{{ comment.user?.name || 'admin' }}</text>
                    <text class="text-24 text-gray-400 mt-1">{{ timeAgo(comment.createTime) }}</text>
                  </view>
                </view>
                <view class="lh-loose p-2 bg-gray-1 w100%">
                  {{ comment.content }}
                </view>
              </view>
            </view>
          </template>
          <u-empty text="暂无评论" class="mt-4!" v-else></u-empty>
        </view>
      </view>
      <view class="cs-footer py-2 px-2 flex b-t b-t-gray-200">
        <view class="bg-[#f6f6f6] b-rd-4 h-100% px-3 flex items-center flex-1" @click="openPopup"> 我来讲两句 </view>
        <view class="flex items-center ml-2">
          <pcs-icon class="px-1" name="/static/icons/post-comment.png" size="48"></pcs-icon>
        </view>
      </view>
      <u-popup v-model="showPopup" mode="bottom" border-radius="16">
        <view class="px-3 py-4">
          <u-input v-model="commentVal" class="b b-rd-2 px-2! py-1!" type="textarea" placeholder="说点什么吧"></u-input>
          <view class="flex justify-end mt-2">
            <button class="btn-sm btn-primary-2 w-110 mx-0" @click="closePopup">关闭</button>
            <button class="btn-sm btn-primary w-110 mx-0 ml-2" @click="commentPost">评论</button>
          </view>
        </view>
      </u-popup>
    </view>
  </cs-layout>
</template>

<script setup lang="ts">
import { IPostDetail, addComment, getPostById } from '@/api/post'
import useMessage from '@/hooks/useMessage'
import { usePostStore, useUserStore } from '@/store'
import { formatDate, isEmpty, timeAgo } from '@/utils/tools'
import { onLoad } from '@dcloudio/uni-app'
import { inject, onMounted, ref } from 'vue'

const currentPost = ref<Partial<IPostDetail>>({})
const showPopup = ref(false)
const img = inject('img')
const commentVal = ref('')
const userStore = useUserStore()
const commentList = ref([])
const pid = ref('')
const openPopup = () => {
  if (isEmpty(userStore.userInfo)) {
    return uni.$u.toast('请先登录')
  }
  showPopup.value = true
}
const closePopup = () => {
  showPopup.value = false
}

const { fetchAllUser } = useUserStore()
const postStore = usePostStore()
const fetchPostDetail = async () => {
  const { data } = await getPostById(pid.value)
  const user = userStore.getUserById(data.authorId)
  currentPost.value = { ...data, user }
  await fetchCommentList()
}

const fetchCommentList = async () => {
  await postStore.fetchAllComment()
  const list = postStore.getCommentByPostId(pid.value)
  commentList.value = list.map((i: { userId: string }) => {
    const user = userStore.getUserById(i.userId)
    return { ...i, user }
  })
}

const { handleMessage } = useMessage()
const commentPost = async () => {
  if (isEmpty(commentVal.value)) {
    return uni.$u.toast('评论不能为空')
  }
  const { success, message } = await addComment({
    postId: currentPost.value.id,
    createTime: Date.now(),
    content: commentVal.value,
    userId: userStore.userInfo.id
  })
  handleMessage(success, message, () => {
    // uni.$u.toast('评论成功')
    setTimeout(() => {
      commentVal.value = ''
      fetchCommentList()
      closePopup()
    }, 100)
  })

  console.log('commentVal.value :', commentVal.value)
}
onLoad((payload: any) => {
  pid.value = payload.id
})
onMounted(async () => {
  await fetchAllUser()
  fetchPostDetail()
})
</script>

<style lang="scss" scoped>
.cs-footer {
  position: fixed;
  bottom: 0;
  height: 100rpx;
  left: 0;
  right: 0;
  border-radius: 20rpx 20rpx 0 0;
  background-color: #fff;
}
</style>
