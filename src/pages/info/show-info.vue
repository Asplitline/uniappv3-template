<template>
  <cs-layout class="modify-info">
    <pcs-navbar title="个人信息"> </pcs-navbar>
    <view class="mx-a mt-8 px-2">
      <view class="bg-white shadow b-rd-2 px-4 py-2 bd-gray">
        <view class="flex py2 justify-between b-b b-gray-2">
          <text class="min-w-160 text-30">头像</text>
          <image :src="img(userInfo.url)" class="w100 h100"></image>
        </view>
        <view class="flex py3 justify-between b-b b-gray-2">
          <text class="min-w-160 text-30">账号</text>
          <text>{{ userInfo.username }}</text>
        </view>
        <view class="flex py3 justify-between b-b b-gray-2">
          <text class="min-w-160 text-30">姓名</text>
          <text>{{ userInfo.name || '暂无' }}</text>
        </view>
        <view class="flex py3 justify-between b-b b-gray-2">
          <text class="min-w-160 text-30">性别</text>
          <view v-if="userInfo.gender == '1'">
            <text>男</text>
            <u-icon name="man" color="blue"></u-icon>
          </view>
          <view v-if="userInfo.gender == '2'">
            <text>女</text>
            <u-icon name="woman" color="red"></u-icon>
          </view>
        </view>
        <view class="flex py3 justify-between b-b b-gray-2">
          <text class="min-w-160 text-30">电话号码</text>
          <text>{{ userInfo.phone || '暂无' }}</text>
        </view>
        <view class="flex py3 justify-between b-b b-gray-2">
          <text class="min-w-160 text-30">邮箱</text>
          <text>{{ userInfo.email || '暂无' }}</text>
        </view>
        <view class="flex py3 justify-between">
          <text class="min-w-160 text-30">个人简介</text>
          <view class="break-all">{{ userInfo.description || '暂无' }}</view>
        </view>
      </view>
      <view class="mt4">
        <button class="btn btn-primary-2 w300" @click="goBack">返回</button>
      </view>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import { inject, reactive, ref, toRefs } from 'vue'
const { userInfo } = toRefs(useUserStore())
const img = inject('img')
const goBack = () => {
  uni.switchTab({ url: '/pages/info/index' })
}
</script>

<style lang="scss" scoped>
.cs-textarea {
  padding: 10rpx !important;
  height: 200rpx;
}
</style>
