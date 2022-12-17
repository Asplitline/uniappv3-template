<template>
  <cs-layout class="login" :hasPadding="false">
    <view class="h-540 relative text-center">
      <view class="arc-bg bg-primary flex flex-col justify-between pb-8">
        <view class="py-4">
          <text class="p-2 f-32 text-36 text-white">注册</text>
        </view>
        <view class="flex flex-col items-center">
          <view class="bg-[#eee] p-3 circle">
            <image src="@/static/icons/avatar.png" class="w-120 h-120"></image>
          </view>
          <text class="mt-4 inline-block f-32 text-white">党员发展 App</text>
        </view>
      </view>
    </view>
    <view class="p-4 mt-4">
      <u-form :model="formModel" ref="uForm" label-width="120">
        <u-form-item :border-bottom="false"
          ><u-input v-model="formModel.username" placeholder="请输入账号" class="cs-input b"
        /></u-form-item>
        <u-form-item :border-bottom="false"><u-input v-model="formModel.name" placeholder="请输入姓名" class="cs-input b" /></u-form-item>
        <u-form-item :border-bottom="false"
          ><u-input type="password" v-model="formModel.password" placeholder="请输入密码" class="cs-input b"
        /></u-form-item>
      </u-form>
    </view>
    <view class="px-10 mt-4 text-center">
      <button class="btn bg-primary text-white text-30" @click="handleRegister">注册</button>
      <text class="mt-6 inline-block">我有账号,<text class="color-primary" @click="skip('/pages/login/index')">立即登录</text></text>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { register } from '@/api/common'
import useForm, { IFormRule } from '@/hooks/useForm'
import useMessage from '@/hooks/useMessage'
import { inject, reactive } from 'vue'
const formModel = reactive<{ username?: string; password?: string; name?: string }>({})
const skip = inject('skip')
const rules: IFormRule[] = [
  {
    prop: 'username',
    message: '账号不能为空'
  },
  {
    prop: 'name',
    message: '姓名不能为空'
  },
  {
    prop: 'password',
    message: '密码不能为空'
  }
]
const { validate } = useForm(formModel, rules)
const { handleMessage } = useMessage()
const handleRegister = async () => {
  if (validate()) {
    const { success, message } = await register(formModel)
    handleMessage(success, message, () => {
      uni.$u.toast('注册成功，请开始登录吧')
      setTimeout(() => {
        uni.redirectTo({ url: '/pages/login/index' })
      }, 1000)
    })
  }
}
</script>

<style lang="scss" scoped>
.cs-input {
  border-radius: 24rpx;
  padding: 0 30rpx !important;
}
.arc-bg {
  border-radius: 0 0 100% 100%;
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  right: -15%;
  left: -15%;
}
</style>
