<template>
  <cs-layout class="modify-info">
    <pcs-navbar title="个人信息"> </pcs-navbar>
    <view class="mx-a mt-8 px-2">
      {{ fileList }}

      <view class="md-form">
        <u-form :model="formModel" ref="uForm" class="bg-white shadow b-rd-2 px-4 pb-2" label-width="120">
          <u-form-item :border-bottom="true" class="">
            <text class="min-w-160">头像 </text>
            <u-upload
              :action="uploadUrl"
              ref="avatarUpload"
              :max-count="1"
              name="files"
              :file-list="fileList"
              width="120"
              height="120"
              @on-success="uploadSuccess"
              @before-upload="beforeUpload"
              @on-remove="uploadRemove"
            ></u-upload>
          </u-form-item>
          <u-form-item :border-bottom="true" class="">
            <text class="min-w-160">姓名</text>
            <u-input v-model="formModel.name" placeholder="请输入姓名" />
          </u-form-item>
          <u-form-item :border-bottom="true" class="">
            <text class="min-w-160">性别</text>
            <!-- todo u-radio select error -->
            <u-radio-group v-model="formModel.gender">
              <u-radio shape="circle" name="1">男</u-radio>
              <u-radio shape="circle" name="2">女</u-radio>
            </u-radio-group>
          </u-form-item>

          <u-form-item :border-bottom="true" class="">
            <text class="min-w-160">电话号码</text>
            <u-input v-model="formModel.phone" placeholder="请输入电话号码" />
          </u-form-item>
          <u-form-item :border-bottom="true" class="">
            <text class="min-w-160">邮箱</text>
            <u-input v-model="formModel.email" placeholder="请输入邮箱" />
          </u-form-item>
          <u-form-item :border-bottom="false" class="">
            <text class="min-w-160 self-start">个人简介</text>
            <u-input
              type="textarea"
              :auto-height="false"
              height="90"
              class="b b-rd-1 px-1 cs-textarea"
              v-model="formModel.description"
              placeholder="请输入个人简介"
            />
          </u-form-item>
        </u-form>
      </view>
      <view class="flex mt-4 w-60% mx-a">
        <button class="btn btn-primary-2" @click="goBack">返回</button>
        <button class="btn btn-primary ml-4" @click="handleModify">确认修改</button>
      </view>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { editUser } from '@/api/user'
import useForm, { IFormRule } from '@/hooks/useForm'
import useMessage from '@/hooks/useMessage'
import { useUserStore } from '@/store'
import { uploadUrl } from '@/utils/static'
import { deepClone } from '@/utils/tools'
import { onShow } from '@dcloudio/uni-app'
import { inject, reactive, ref, toRefs } from 'vue'
const { updateInfo } = useUserStore()
const { userInfo } = toRefs(useUserStore())

const avatarUpload = ref()
console.log('userInfo: ', userInfo)
const img = inject('img')
const fileList = ref<Array<{ url: string }>>([])
const formModel = reactive<{
  name?: string
  gender?: string
  phone?: string
  email?: string
  description?: string
  url?: string
}>({})
const rules: IFormRule[] = [
  { prop: 'url', message: '请选择头像' },
  { prop: 'name', message: '请输入姓名' },
  { prop: 'gender', message: '请选择性别' },
  { prop: 'phone', message: '请输入电话号码' },
  { prop: 'email', message: '请输入邮箱' },
  { prop: 'description', message: '请输入个人简介' }
]
const { validate } = useForm(formModel, rules)
const goBack = () => {
  uni.switchTab({ url: '/pages/info/index' })
}
const { handleMessage } = useMessage()
const handleModify = async () => {
  console.log('formModel :', formModel)
  if (validate()) {
    const { success, message } = await editUser({ ...formModel, utime: Date.now() })
    handleMessage(success, message, () => {
      uni.$u.toast('修改成功 ~')
      updateInfo()
      setTimeout(() => {
        uni.switchTab({ url: '/pages/info/index' })
      }, 1000)
    })
  }
}
const uploadSuccess = (url: string) => {
  console.log('success upload :', url)
  formModel.url = url
}

const uploadRemove = () => {
  fileList.value = []
}

const beforeUpload = () => {
  avatarUpload.value.clear()
}

onShow(() => {
  if (userInfo.value.url) {
    fileList.value = [{ url: img(userInfo.value.url) as string }]
  }
  Object.assign(formModel, deepClone(userInfo.value))
})
</script>

<style lang="scss" scoped>
.cs-textarea {
  padding: 10rpx !important;
  height: 200rpx;
}
</style>
