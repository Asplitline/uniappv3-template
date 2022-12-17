<template>
  <cs-layout>
    <pcs-navbar title="上传附件"> </pcs-navbar>
    <view class="bg-[#f8f9fd] bd-gray b-rd-1 p-4 text-gray-5 mt-3">
      <text class="text-32 mb-3 inline-block"> {{ currentInfo?.text }} - 流程明细 </text>
      <view v-for="i in currentInfo?.desc">
        {{ i.name }}
      </view>
    </view>
    <view class="bg-[#f8f9fd] bd-gray b-rd-1 p-4 text-gray-5 mt-3">
      <text>请上传完善内容，支持上传文件为：doc，docx</text>
      <view class="py-6 px-4 bd-gray b-rd-1 bg-[#fefefe] mt-2 flex flex-col items-center">
        <image src="/static/icons/img.png" class="w-120 h-120"></image>
        <button class="btn-sm b-rd-1 bd-gray bg-transparent w-160 mt-4 mb-2">选择文件</button>
        <text class="text-center">支持上传文件为：doc，docx</text>
      </view>
    </view>
    <view class="flex mt-4 px-4">
      <button class="btn btn-primary-2" @click="goBack">取消</button>
      <button class="btn btn-primary ml-3">保存</button>
    </view>
  </cs-layout>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'
import { infoList } from '@/utils/static'
const currentStatus = ref(0)

const currentInfo = computed(() => infoList.find((i) => i.status === currentStatus.value))

const goBack = () => {
  uni.switchTab({
    url: '/pages/index/index'
  })
}
onLoad((payload: any) => {
  currentStatus.value = +payload.status
  console.log('currentInfo.value :', currentInfo.value)
})
</script>

<style lang="scss" scoped></style>
