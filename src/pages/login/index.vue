<template>
  <cs-layout class="login" :hasPadding="false">
    <!-- <pcs-navbar
      title="快速注册"
      is-fixed
      class="bg-blue text-white"
      :background="{ backgroundColor: 'transparent' }"
      :border-bottom="false"
      
    ></pcs-navbar> -->

    <view class="h-540 relative text-center">
      <view class="arc-bg bg-primary flex flex-col justify-between pb-8">
        <view class="py-4">
          <text class="p-2 f-32 text-36 text-white">登录</text>
        </view>
        <view class="flex flex-col items-center">
          <u-image width="160" height="160" shape="circle"></u-image>
          <text class="mt-4 inline-block f-32 text-white">党员发展 App</text>
        </view>
      </view>
    </view>
    <view class="p-4 mt-4">
      <u-form :model="formModel" ref="uForm" label-width="120">
        <u-form-item :border-bottom="false"
          ><u-input border v-model="formModel.username" placeholder="请输入账号" class="cs-input"
        /></u-form-item>
        <u-form-item :border-bottom="false"
          ><u-input border v-model="formModel.password" placeholder="请输入密码" class="cs-input" /></u-form-item
      ></u-form>
    </view>
    <view class="px-10 mt-4 text-center">
      <button class="btn bg-primary text-white text-30" @click="handleLogin">登录</button>
      <text class="mt-6 inline-block">没有账号,<text class="color-primary">立即注册</text></text>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const formModel = reactive<{ username?: string; password?: string }>({})
const handleLogin = () => {
  uni.switchTab({ url: '/pages/index/index' })
}
</script>

<style lang="scss" scoped>
.cs-input {
  border-radius: 24rpx;
  padding: 0 30rpx !important;
}
.arc-bg {
  border-radius: 0 0 100% 100%;
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  right: -15%;
  left: -15%;
}
</style>
