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

    <Component :is="isStudent ? Student : Teacher"></Component>
  </cs-layout>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store'
import { computed, inject } from 'vue'
import Student from './student.vue'
import Teacher from './teacher'
const skip = inject('skip')
const userStore = useUserStore()
const img = inject('img')

const isStudent = computed(() => {
  return userStore.userInfo.level == 0
})
</script>

<style lang="scss" scoped>
.disabled {
  pointer-events: none;
  opacity: 0.7;
}
</style>
