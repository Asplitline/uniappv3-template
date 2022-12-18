<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area bg-[#f00000] w-100 h-100">
      <text class="text-34 color-white">1231231212</text>
    </view>
    <view class="shadow w-150 h-150 mt-20 b-red b-2"> </view>
    <text class="title" @click="skip">{{ title }}</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
const skip = () => {
  uni.navigateTo({
    url: '/pages/login/index'
  })
}
</script>

<style></style>
