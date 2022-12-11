<template>
  <cs-layout class="login">
    <pcs-navbar title="123213"></pcs-navbar>
    <view class="p-4 w-10">
      <u-form :model="formModel" ref="uForm" label-width="120">
        <u-form-item><u-input v-model="formModel.username" placeholder="用户名" class="cs-input" /></u-form-item>
        <u-form-item><u-input v-model="formModel.password" placeholder="密码" class="cs-input" /></u-form-item
      ></u-form>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formModel = reactive<{ username?: string; password?: string }>({})
</script>

<style lang="scss" scoped>
.cs-input {
  border-radius: 24rpx;
  // padding: 10rpx 20rpx !important;
  padding: 0 30rpx !important;
  border: 1px solid #000;
}
</style>
