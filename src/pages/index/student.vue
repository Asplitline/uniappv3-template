<template>
  <view class="py-4 bg-white mx-1 mt-4 b-rd-2 b-t b b-gray-100">
    <text class="text-32 inline-block mb-2 w100% text-center">入党流程</text>

    <u-notice-bar mode="horizontal" class="m2" :list="['恭喜你通过全部考核，成为正式党员']"></u-notice-bar>

    <cs-steps :active="active" class="px-1">
      <cs-step v-for="(i, idx) in authList" class="py-4 b-gray-1" :class="{ 'b-b': idx !== authList.length - 1 }">
        <template #prefix>
          <view class="flex flex-col text-24 pr-1 text-right text-gray-5">
            <template v-if="showStatus[i.status]">
              <text>{{ formatDate(showStatus[i.status]?.ctime, 'HH:mm:ss') }}</text>
              <text>{{ formatDate(showStatus[i.status]?.ctime, 'MM/DD') }}</text>
            </template>
            <template v-else>
              <text>00:00:00</text>
              <text>00/00</text>
            </template>
          </view>
        </template>
        <view class="pl-2 flex flex flex-1 justify-between">
          <view class="flex flex-col text-26">
            <text>{{ i.text }}</text>
            <view class="mt-1">
              <text class="text-gray-500 text-24" v-if="showStatus[i.status]?.status == 0">待审核</text>
              <text class="text-blue text-24" v-else-if="showStatus[i.status]?.status == 1">审核通过</text>
              <text class="text-gray-500 text-24" v-else>等待上传资料</text>
            </view>
          </view>
          <view class="pl-1 pr-1 flex items-center" :class="{ disabled: isEmpty(showStatus[i.status]) }">
            <pcs-icon name="/static/icons/check.png" size="42" v-if="showStatus[i.status]?.status == 0" @click="handleCheck"></pcs-icon>
            <pcs-icon name="/static/icons/check-success.png" size="42" v-else-if="showStatus[i.status]?.status == 1"></pcs-icon>
            <pcs-icon name="/static/icons/upload.png" size="42" @click="skipProcess(i)" v-else></pcs-icon>
          </view>
        </view>
      </cs-step>
    </cs-steps>
  </view>
</template>

<script lang="ts" setup>
import { useJoinPartyStore, useUserStore } from '@/store'
import { infoList } from '@/utils/static'
import { formatDate, isEmpty } from '@/utils/tools'
import { inject, onMounted, reactive, ref } from 'vue'
const active = ref(0)
const authList = reactive(infoList)
const skip = inject('skip')
const userStore = useUserStore()
const recordList = ref([])
const img = inject('img')
const showStatus = ref({})

const skipProcess = (i: { status: number }) => {
  skip(`/pages/index/upload-info?status=${i.status}`)
}

const joinPartyStore = useJoinPartyStore()

const handleCheck = () => {
  uni.$u.toast('已提交，等待老师审核')
}
const getRecordByStatus = (status: number) => {
  return recordList.value.find((i: { type: number }) => i.type === status)
}
const initRecordStatus = () => {
  const statusList = authList.map((i) => i.status)
  statusList.forEach((status) => {
    const record = getRecordByStatus(status)
    if (record?.status === 1) {
      active.value = status
    }
    showStatus.value[status] = record
  })
  console.log('showStatus.value: ', showStatus.value)
}
const fetchData = async () => {
  await joinPartyStore.fetchAllJoinParty()
  recordList.value = joinPartyStore.getJoinPartyById(userStore.userInfo.id)
  initRecordStatus()
}
onMounted(() => {
  fetchData()
})
</script>

<style lang="scss" scoped></style>
