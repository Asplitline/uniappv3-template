<template>
  <cs-layout class="comments" :hasPadding="false" hasTabbar>
    <u-tabs :list="list" :is-scroll="false" v-model="current"></u-tabs>
    <view class="post-list">
      <view class="post-item flex mb-6 p-4" v-for="i in 4">
        <view class="flex flex-col pr-4" @click="skip(`/pages/comments/post-detail?id=${i}`)">
          <text class="text-30">Repellendus similique delectus illo repellendus.</text>
          <view class="flex justify-between mt-4">
            <view class="flex items-center">
              <image
                class="w-60 h-60 b-rd-50%"
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/449.jpg"
              ></image>
              <text class="ml-1">Helga</text>
            </view>
            <view class="flex items-center text-gray text-24">
              <text class="mr-2">浏览 3343</text>
              <text>1小时前</text>
            </view>
          </view>
        </view>
        <image
          class="w-300 h-150 self-center b-rd-2"
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/851.jpg"
        ></image>
      </view>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
const current = ref('')
const skip = inject('skip')

const list = ref([
  {
    name: '全部'
  },
  {
    name: '思想汇报'
  },
  {
    name: '三会一课'
  },
  {
    name: '时政热点'
  }
])
</script>

<style lang="scss" scoped></style>
