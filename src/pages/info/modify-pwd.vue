<template>
  <cs-layout class="modify-pwd">
    <pcs-navbar title="修改密码"> </pcs-navbar>
    <view class="w-80% mx-a mt-8">
      <view class="md-form">
        <u-form :model="formModel" ref="uForm" label-width="120">
          <u-form-item :border-bottom="false"
            ><u-input type="password" v-model="formModel.oldPassword" placeholder="请输入旧密码" class="b cs-input"
          /></u-form-item>
          <u-form-item :border-bottom="false"
            ><u-input type="password" v-model="formModel.newPassword" placeholder="请输入新密码" class="b cs-input"
          /></u-form-item>
          <u-form-item :border-bottom="false"
            ><u-input type="password" v-model="formModel.password" placeholder="再次确认密码" class="b cs-input" /></u-form-item
        ></u-form>
      </view>
      <view class="flex mt-4">
        <button class="btn btn-primary-2" @click="goBack">返回</button>
        <button class="btn btn-primary ml-4" @click="handleModifyPwd">确认修改</button>
      </view>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { modifyPassword } from '@/api/user'
import useForm, { IFormRule } from '@/hooks/useForm'
import useMessage from '@/hooks/useMessage'
import { useUserStore } from '@/store'
import { reactive, toRefs } from 'vue'

const formModel = reactive<{ oldPassword?: string; newPassword?: string; password?: string }>({})
const rules: IFormRule[] = [
  { prop: 'oldPassword', message: '旧密码不能为空' },
  { prop: 'newPassword', message: '新密码不能为空' },
  { prop: 'password', message: '确认密码不能为空' }
]
const { validate } = useForm(formModel, rules)
const { userInfo } = toRefs(useUserStore())
const { handleMessage } = useMessage(/*  */)
const handleModifyPwd = async () => {
  if (validate()) {
    console.log('formModel.newPassword !== formModel.password: ', formModel.newPassword, formModel.password)
    if (formModel.newPassword !== formModel.password) {
      return uni.$u.toast('两次密码不一致')
    }
    const { success, message } = await modifyPassword({
      id: userInfo.id,
      password: formModel.password
    })
    handleMessage(success, message, () => {
      uni.$u.toast('密码修改成功,下次登录生效')
      setTimeout(() => {
        goBack()
      }, 1000)
    })
  }
}
const goBack = () => {
  uni.switchTab({ url: '/pages/info/index' })
}
</script>

<style lang="scss" scoped></style>
