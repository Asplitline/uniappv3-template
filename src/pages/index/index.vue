<template>
  <cs-layout class="content" :hasPadding="false" hasTabbar>
    <view class="px-3 flex items-center bg-white py-3 b-b-1 b-gray-100">
      <image
        class="w-80 h-80 b-rd-50%"
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/522.jpg"
      ></image>
      <text class="text-32 flex-1 ml-2">用户A</text>
      <image src="@/static/icons/more.png" class="w-54 h-54"></image>
    </view>
    <view class="">
      <text>当前进度</text>
      <cs-steps :active="active">
        <cs-step>
          <template #prefix>12321</template>
          <view>
            <view>21321</view>
            <view>21321</view>
            <view>21321</view>
            <view>21321</view>
            <view>21321</view>
          </view>
        </cs-step>
        <cs-step>
          <template #prefix>12321</template>
        </cs-step>
        <cs-step>
          <template #prefix>12321</template>
        </cs-step>
        <cs-step>
          <template #prefix>12321</template>
        </cs-step>
        <cs-step>
          <template #prefix>12321</template>
        </cs-step>
      </cs-steps>
    </view>
    <button @click="next">next</button>
  </cs-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref(0)
const skip = () => {
  uni.navigateTo({
    url: '/pages/login/index'
  })
}
const next = () => {
  active.value++
  if (active.value > 5) {
    active.value = 0
  }
}
</script>

<style lang="scss" scoped></style>
