<template>
  <cs-layout class="content" :hasPadding="false" hasTabbar>
    <view class="px-3 flex items-center bg-white py-3 b-b-1 b-gray-100">
      <image class="w-80 h-80 b-rd-50%" :src="img(userStore.userInfo?.url, 'avatar')"></image>
      <view class="flex flex-col flex-1 ml-2">
        <text class="text-32 inline-block mb-1">{{ userStore.userInfo.name }}</text>
        <u-tag text="学生" class="w-90 text-center p-1!" v-if="userStore.userInfo.level == 0" />
        <u-tag text="老师" class="w-90 text-center p-1!" type="success" v-else-if="userStore.userInfo.level == 1"></u-tag>
        <u-tag text="管理员" class="w-90 text-center p-1!" type="error" v-else-if="userStore.userInfo.level == 2"></u-tag>
      </view>
      <image src="@/static/icons/id-card.png" class="w-54 h-54" @click="skip('/pages/info/show-info')"></image>
    </view>
    <cs-upload ref="upload"></cs-upload>
    <u-swiper :list="list"></u-swiper>
    <Component :is="isStudent ? Student : Teacher"></Component>
  </cs-layout>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store'
import { computed, inject, ref } from 'vue'
import Student from './student.vue'
import Teacher from './teacher.vue'
import { onShow } from '@dcloudio/uni-app'
import { isEmpty } from '@/utils/tools'
import { getCarouselList } from '@/api/common'
import { prefixUrl } from '@/utils/static'
const skip = inject('skip')
const userStore = useUserStore()
const img = inject('img')
const list = ref([])
const upload = ref()

onShow(() => {
  if (isEmpty(userStore.userInfo)) {
    uni.$u.toast('请先登录')
    uni.redirectTo({ url: '/pages/login/index' })
  }
  fetchData()
})
const isStudent = computed(() => {
  return userStore.userInfo.level == 0
})

const fetchData = async () => {
  const { list: data } = await getCarouselList({ size: 4 })

  list.value = data.map((i: any) => ({ image: prefixUrl + i.url, title: i.title }))
}
</script>

<style lang="scss" scoped>
.disabled {
  pointer-events: none;
  opacity: 0.7;
}
</style>
