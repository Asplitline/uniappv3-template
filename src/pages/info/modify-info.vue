<template>
  <cs-layout class="modify-info">
    <pcs-navbar title="个人信息"> </pcs-navbar>
    <view class="mx-a mt-8 px-2">
      <view class="md-form">
        <u-form :model="formModel" ref="uForm" class="bg-white shadow b-rd-2 px-4 pb-2" label-width="120">
          <u-form-item :border-bottom="true" class="">
            <text class="min-w-160">头像</text>
            <!-- <u-input v-model="formModel.username" placeholder="请输入" /> -->
            <u-upload action="http://www.example.com/upload" :max-count="1" :file-list="fileList" width="120" height="120"></u-upload>
          </u-form-item>
          <u-form-item :border-bottom="true" class="">
            <text class="min-w-160">昵称</text>
            <u-input v-model="formModel.name" placeholder="请输入" />
          </u-form-item>
          <u-form-item :border-bottom="true" class="">
            <text class="min-w-160">性别</text>
            <u-radio-group v-model="formModel.gender">
              <u-radio shape="circle" name="1">男</u-radio>
              <u-radio shape="circle" name="2">女</u-radio>
            </u-radio-group>
          </u-form-item>

          <u-form-item :border-bottom="true" class="">
            <text class="min-w-160">电话号码</text>
            <u-input v-model="formModel.phone" placeholder="请输入" />
          </u-form-item>
          <u-form-item :border-bottom="true" class="">
            <text class="min-w-160">邮箱</text>
            <u-input v-model="formModel.email" placeholder="请输入" />
          </u-form-item>
          <u-form-item :border-bottom="false" class="">
            <text class="min-w-160 self-start">个人简介</text>
            <u-input
              type="textarea"
              :auto-height="false"
              height="90"
              class="b b-rd-1 px-1 cs-textarea"
              v-model="formModel.description"
              placeholder="请输入"
            />
          </u-form-item>
        </u-form>
      </view>
      <view class="flex mt-4 w-60% mx-a">
        <button class="btn btn-primary-2" @click="goBack">返回</button>
        <button class="btn btn-primary ml-4">确认修改</button>
      </view>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const fileList = ref([
  {
    url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg'
  }
])
const formModel = reactive<{
  name?: string
  gender?: string
  phone?: string
  email?: string
  description?: string
}>({})
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
