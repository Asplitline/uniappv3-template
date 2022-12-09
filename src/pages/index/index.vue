<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area bg-[#f00000] w-100 h-100">
      <text class="text-34 color-white">1231231212</text>
    </view>
    <view class="shadow w-150 h-150 mt-20 b-red b-2"> </view>
    <text class="title">{{ title }}</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 34rpx;
  color: #8f8f94;
}
</style>
