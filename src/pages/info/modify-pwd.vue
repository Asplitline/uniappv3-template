<template>
  <cs-layout class="modify-pwd">
    <pcs-navbar title="修改密码"> </pcs-navbar>
    <view class="w-80% mx-a mt-8">
      <view class="md-form">
        <u-form :model="formModel" ref="uForm" label-width="120">
          <u-form-item :border-bottom="false"
            ><u-input border v-model="formModel.username" placeholder="请输入账号" class="cs-input"
          /></u-form-item>
          <u-form-item :border-bottom="false"
            ><u-input border v-model="formModel.password" placeholder="请输入密码" class="cs-input" /></u-form-item
        ></u-form>
      </view>
      <view class="flex mt-4">
        <button class="btn btn-primary-2" @click="goBack">返回</button>
        <button class="btn btn-primary ml-4">确认修改</button>
      </view>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formModel = reactive<{ username?: string; password?: string }>({})
const goBack = () => {
  uni.switchTab({ url: '/pages/info/index' })
}
</script>

<style lang="scss" scoped></style>
