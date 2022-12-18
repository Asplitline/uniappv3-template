<template>
  <view class="py-4 mx-1">
    <view class="flex px3">
      <text class="text-32 flex-1">审核列表</text>
      <view class="flex tab">
        <view class="tab-item" :class="{ active: activeStatus === 0 }" @click="setActiveStatus(0)">待审核</view>
        <view class="tab-item" :class="{ active: activeStatus === 1 }" @click="setActiveStatus(1)">已通过</view>
      </view>
    </view>
    <view class="p3">
      <template v-if="!isEmpty(filterCheckList)">
        <view
          class="py-2 flex flex-col bg-white mb-2 p-2 px-3 bd-gray b-gray-2 b-rd-2"
          v-for="checkItem in filterCheckList"
          @click="skip(`/pages/index/check-info?cid=${checkItem.id}`)"
          :key="checkItem.id"
        >
          <view class="flex justify-between">
            <view class="flex flex-col text-28">
              <view class="py-1">
                <text class="inline-block py-1">学生姓名：</text>
                <text class="inline-block">{{ checkItem.name }}</text>
              </view>
              <view class="py-1">
                <text class="inline-block py-1">当前阶段：</text>
                <text class="inline-block break-all">{{ checkItem.info.text }}</text>
              </view>
              <view class="py-1">
                <text class="inline-block py-1">提交时间：</text>
                <text class="inline-block">{{ formatDate(checkItem.ctime, 'YYYY-MM-DD HH:mm') }}</text>
              </view>
              <view class="py-1" v-if="activeStatus === 1">
                <text class="inline-block py-1">审核时间：</text>
                <text class="inline-block">{{ formatDate(checkItem.utime, 'YYYY-MM-DD HH:mm') }}</text>
              </view>
              <view class="py-1">
                <text class="inline-block py-1">审核状态：</text>
                <u-tag class="inline-block" :type="statusInfo[checkItem.status].type" :text="statusInfo[checkItem.status].text"></u-tag>
              </view>
            </view>
            <view>
              <u-circle-progress active-color="#2979ff" :percent="checkItem.percentage" width="180">
                <text class="text-24" v-if="checkItem.type !== 5">{{ checkItem.type || 1 }}/5</text>
                <text class="text-24" v-else>完成</text>
              </u-circle-progress>
            </view>
          </view>
        </view>
      </template>
      <u-empty text="暂无数据" class="mt-4!" v-else></u-empty>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useJoinPartyStore, useUserStore } from '@/store'
import { infoList, statusInfo } from '@/utils/static'
import { formatDate, isEmpty } from '@/utils/tools'
import { computed, inject, onMounted, ref } from 'vue'

const skip = inject('skip')
const joinPartyStore = useJoinPartyStore()
const userStore = useUserStore()
const checkList = ref([])
const findInfo = (status: number) => infoList.find((i) => i.status === status)
const activeStatus = ref(0)
// const processText =computed(()=)
const filterCheckList = computed(() => {
  return checkList.value.filter((i) => i.status === activeStatus.value)
})

const setActiveStatus = (status: number) => {
  activeStatus.value = status
}

const fetchData = async () => {
  await userStore.fetchAllUser()
  await joinPartyStore.fetchAllJoinParty()
  checkList.value = joinPartyStore.joinPartyList.map((i) => {
    const info = findInfo(i.type)
    return {
      ...i,
      info,
      percentage: (i.type / 5) * 100 || 0
    }
  })
}

onMounted(() => {
  fetchData()
})
</script>

<style lang="scss" scoped>
.tab {
  flex-shrink: 0;
  background-color: #f0f0f0;
  border-radius: 30rpx;

  &-item {
    padding: 10rpx 30rpx;
    font-size: 28rpx;

    &.active {
      color: #fff;
      background-color: $uni-color-primary;
      border-radius: 30rpx;
    }
  }
}
</style>
