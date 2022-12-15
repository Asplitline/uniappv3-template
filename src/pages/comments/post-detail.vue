<template>
  <cs-layout>
    <pcs-navbar>
      <template #left>12321</template>
    </pcs-navbar>
    <view class="pb-12.5">
      <view class="post-box px-2 py-4">
        <text class="post-title text-34 font-700">Numquam nisi facere aut et recusandae.</text>
        <view class="post-meta flex justify-between mt-4">
          <view class="flex items-center">
            <image
              class="w-80 h-80 b-rd-50%"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/711.jpg"
            ></image>
            <text class="text-gray-500 text-30 ml-2">molestiae</text>
          </view>
          <view class="flex items-center text-24 text-gray-400">
            <text>21312次浏览</text>
            <view class="w-2 h-20 bg-gray mx-2"></view>
            <text>2020/06/11</text>
          </view>
        </view>
        <view class="post-content py-4 lh-relaxed">
          Omnis aspernatur incidunt repellat quas ullam ipsam aut a minima. Sed itaque vel. Pariatur nisi ipsam voluptas. Qui ex quae quo
          est ratione deserunt id et. Voluptates quis ut adipisci officia aut assumenda voluptatibus. At nisi ratione dolore ipsum.
          Consectetur animi assumenda omnis dicta. Dignissimos odit quasi optio ut. Animi est soluta. Eligendi sint velit vitae et ea.
          Reprehenderit saepe tempora dolore a saepe et ad et. Aut officia laboriosam doloribus ut. Ad eum optio vel nemo doloremque.
          Nostrum reiciendis eaque esse. <br />
          Omnis aspernatur incidunt repellat quas ullam ipsam aut a minima. Sed itaque vel. Pariatur nisi ipsam voluptas. Qui ex quae quo
          est ratione deserunt id et. Voluptates quis ut adipisci officia aut assumenda voluptatibus. At nisi ratione dolore ipsum.
          Consectetur animi assumenda omnis dicta. Dignissimos odit quasi optio ut. Animi est soluta. Eligendi sint velit vitae et ea.
          Reprehenderit saepe tempora dolore a saepe et ad et. Aut officia laboriosam doloribus ut. Ad eum optio vel nemo doloremque.
          Nostrum reiciendis eaque esse.
        </view>
      </view>
      <view class="comment-box">
        <view class="comment-header flex justify-between items-center">
          <text class="text-34 font-700">全部评论</text>
          <view class="flex items-center text-gray">
            <text class="text-blue">最新</text>
            <text class="w-2 h-20 bg-gray mx-2"></text>
            <text class="">最早</text>
          </view>
        </view>
        <view class="comment-list py-4">
          <view class="comment-item flex">
            <view class="avatar pr-3">
              <image
                class="w90 h90 b-rd-50%"
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1229.jpg"
              ></image>
            </view>
            <view class="content flex-col flex">
              <view class="flex mb-2">
                <view class="flex flex-col h-90 justify-between">
                  <text class="text-30 font-500">doloribus</text>
                  <text class="text-24 text-gray-400">2222/01/01</text>
                </view>
              </view>
              <view class="lh-loose">
                Enim sunt occaecati qui voluptatum voluptatem recusandae expedita. Molestias rerum placeat nisi illum beatae accusamus. Est
                praesentium aut temporibus quis repellat. Non sunt aut soluta amet molestiae earum qui quis sint. Quas eveniet voluptatum.
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="cs-footer py-2 px-2 flex b-t b-t-gray-200">
        <view class="bg-[#f6f6f6] b-rd-4 h-100% px-3 flex items-center flex-1" @click="openPopup"> 我来讲两句 </view>
        <view class="flex items-center ml-2">
          <pcs-icon class="px-1" name="/static/icons/post-comment.png" size="48"></pcs-icon>
        </view>
      </view>
      <u-popup v-model="showPopup" mode="bottom" border-radius="16">
        <view class="px-3 py-4">
          <u-input class="b b-rd-2 px-2! py-1!" type="textarea" placeholder="说点什么吧"></u-input>
          <view class="flex justify-end mt-2">
            <button class="btn-sm btn-primary-2 w-110 mx-0" @click="closePopup">关闭</button>
            <button class="btn-sm btn-primary w-110 mx-0 ml-2">评论</button>
          </view>
        </view>
      </u-popup>
    </view>
  </cs-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showPopup = ref(false)
const openPopup = () => {
  showPopup.value = true
}
const closePopup = () => {
  showPopup.value = false
}
</script>

<style lang="scss" scoped>
.cs-footer {
  position: fixed;
  bottom: 0;
  height: 100rpx;
  left: 0;
  right: 0;
  border-radius: 20rpx 20rpx 0 0;
  background-color: #fff;
}
</style>
