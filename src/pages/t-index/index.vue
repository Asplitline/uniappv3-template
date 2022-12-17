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
    <view class="py-4 bg-white mx-1 mt-4 b-rd-2 b-t b b-gray-100">
      <text class="text-32 inline-block mb-2 w100% text-center">入党流程</text>
      <cs-steps :active="active" class="px-1">
        <cs-step v-for="(i, idx) in authList" class="py-4 b-gray-1" :class="{ 'b-b': idx !== authList.length - 1 }">
          <template #prefix>
            <view class="flex flex-col text-24 pr-1 text-right text-gray-5">
              <text>19:19:22</text>
              <text>11-15</text>
            </view>
          </template>
          <view class="pl-2 flex flex flex-1 justify-between">
            <view class="flex flex-col text-26">
              <text>{{ i.text }}</text>
              <view class="mt-1">
                <template v-if="checkStatus(idx)">
                  <text class="text-gray-500 text-24" v-if="checkUpload(idx)">待审核</text>
                  <text class="text-gray-500 text-24" v-else>等待上传资料</text>
                </template>
                <text class="text-blue text-24" v-else>审核通过</text>
              </view>
            </view>
            <view class="pl-1 pr-1 flex items-center">
              <template v-if="checkStatus(idx)">
                <pcs-icon name="/static/icons/check.png" size="42" v-if="checkUpload(idx)"></pcs-icon>
                <pcs-icon
                  name="/static/icons/upload.png"
                  size="42"
                  @click="skip(`/pages/index/upload-info?status=${i.status}`)"
                  v-else
                ></pcs-icon>
              </template>
              <pcs-icon name="/static/icons/check-success.png" size="42" v-else></pcs-icon>
            </view>
          </view>
        </cs-step>
      </cs-steps>
    </view>
  </cs-layout>
</template>

<script setup lang="ts">
import { reactive, ref, inject } from 'vue'
import { infoList } from '@/utils/static'
const active = ref(0)
const isUpload = ref(false)
const authList = reactive(infoList)
const skip = inject('skip')
const checkStatus = (idx: number) => {
  return idx >= active.value
}
const checkUpload = (idx: number) => {
  return isUpload.value
}

const toggle = () => {
  isUpload.value = !isUpload.value
}
const next = () => {
  active.value++
  if (active.value > 5) {
    active.value = 0
  }
}
</script>

<style lang="scss" scoped></style>
