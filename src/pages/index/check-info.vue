<template>
  <cs-layout class="">
    <pcs-navbar title="审核"></pcs-navbar>
    <view class="bg-[#f8f9fd] bd-gray b-rd-1 p-4 text-gray-5 mt-3">
      <text class="text-32 mb-3 inline-block"> {{ currentInfo?.text }} - 流程明细 </text>
      <view v-for="i in currentInfo?.desc">
        {{ i.name }}
      </view>
    </view>
    <view class="bg-[#f8f9fd] bd-gray b-rd-1 p-4 text-gray-5 mt-3">
      <view class="py-6 px-4 bd-gray b-rd-1 bg-[#fefefe] mt-2 flex flex-col items-center">
        <image :src="img(currentCheck.url)" class="w-120 h-120"></image>
      </view>
    </view>
    <view class="flex mt-4 px-4">
      <button class="btn btn-primary-2" @click="goBack">离开</button>
      <button class="btn btn-primary ml-3" @click="checkRecord">通过</button>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { editJoinParty, getJoinPartyById } from '@/api/joinParty'
import useMessage from '@/hooks/useMessage'
import { useUserStore } from '@/store'
import { infoList } from '@/utils/static'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { computed, inject, ref } from 'vue'
const currentCheck = ref({})
const currentInfo = computed(() => infoList.find((i) => i.status === 1))
const cid = ref('')
const img = inject('img')
const goBack = () => {
  uni.switchTab({
    url: '/pages/index/index'
  })
}

const userStore = useUserStore()
const fetchCheckDetail = async () => {
  const { data } = await getJoinPartyById(cid.value)
  currentCheck.value = data
}

const { handleMessage } = useMessage()
const checkRecord = async () => {
  const { success, message } = await editJoinParty({
    ...currentCheck.value,
    status: 1,
    teacherId: userStore.userInfo.id,
    teacherName: userStore.userInfo.name,
    utime: Date.now()
  })
  handleMessage(success, message, () => {
    uni.$u.toast('审核通过，进入下一个阶段')
    setTimeout(() => {
      goBack()
    }, 100)
  })
}
onShow(() => {
  fetchCheckDetail()
})
onLoad((payload: any) => {
  cid.value = payload.cid
  console.log('payload :', payload)
})
</script>

<style lang="scss" scoped></style>
