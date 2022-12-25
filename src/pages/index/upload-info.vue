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
      <!-- <text>请上传完善内容，支持上传文件为：doc，docx</text> -->
      <view class="py-6 px-4 bd-gray b-rd-1 bg-[#fefefe] mt-2 flex flex-col items-center">
        <!-- <image src="/static/icons/img.png" class="w-120 h-120"></image> -->
        <!-- todo upload doc -->
        <u-upload
          :action="uploadUrl"
          :max-count="1"
          name="files"
          :file-list="fileList"
          width="120"
          height="120"
          @on-success="uploadSuccess"
        >
        </u-upload>
        <!-- <text class="text-center">支持上传文件为：doc，docx</text> -->
      </view>
    </view>
    <view class="flex mt-4 px-4">
      <button class="btn btn-primary-2" @click="goBack">取消</button>
      <button class="btn btn-primary ml-3" @click="saveRecord">保存</button>
    </view>
  </cs-layout>
</template>

<script setup lang="ts">
import { addJoinParty } from '@/api/joinParty'
import useMessage from '@/hooks/useMessage'
import { useUserStore } from '@/store'
import { infoList, uploadUrl } from '@/utils/static'
import { onLoad } from '@dcloudio/uni-app'
import { computed, reactive, ref, toRefs } from 'vue'
const currentStatus = ref(0)
const fileList = ref([])
const formModel = reactive<{ url?: string }>({})
const currentInfo = computed(() => infoList.find((i) => i.status === currentStatus.value))
const { userInfo } = toRefs(useUserStore())
console.log('userInfo: ', userInfo)
const uploadSuccess = (result: string) => {
  console.log('result :', result)
  console.log('fileList.value :', fileList.value)
  formModel.url = result
}
const goBack = () => {
  uni.switchTab({
    url: '/pages/index/index'
  })
}

const getParentId = () => {
  return currentStatus.value == 1 ? null : 1
}

const { handleMessage } = useMessage()
const saveRecord = async () => {
  const payload = {
    status: 0,
    url: formModel.url,
    name: userInfo.value.name,
    ctime: Date.now(),
    userId: userInfo.value.id,
    parentId: getParentId(),
    type: currentStatus.value
  }

  const { success, message } = await addJoinParty(payload)
  handleMessage(success, message, () => {
    uni.$u.toast('提交成功，等待审核')
    setTimeout(() => {
      uni.switchTab({ url: '/pages/index/index' })
    }, 100)
  })
}

onLoad((payload: any) => {
  currentStatus.value = +payload.status
  console.log('currentInfo.value :', currentInfo.value)
})
</script>

<style lang="scss" scoped>
.slot-btn {
  width: 329rpx;
  height: 140rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(244, 245, 246);
  border-radius: 10rpx;
}

.slot-btn__hover {
  background-color: rgb(235, 236, 238);
}
</style>
