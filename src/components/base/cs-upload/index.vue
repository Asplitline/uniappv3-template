<template>
  <view class=""> </view>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const appChooseFile = ({ cuWebview = '', url, name = 'file', header, addName = '', addSize = '', maxSize = 10, ...formData } = {}) => {
  // #ifdef APP-PLUS
  let wvPath = '/static/uni_modules/hybrid/html/index.html'
  let wv = plus.webview.create(
    '',
    wvPath,
    {
      'uni-app': 'none',
      top: 0,
      height: '100%',
      background: 'transparent'
    },
    {
      url,
      header,
      addName,
      addSize,
      maxSize,
      formData,
      key: name
    }
  )
  wv.loadURL(wvPath)
  const root = getCurrentInstance()
  console.log('root: ', root)
  // this.$root.$scope.$getAppWebview().append(wv)
  // wv.overrideUrlLoading({ mode: 'reject' }, (e) => {
  //   let { fileName, size, str } = this.getRequest(e.url)
  //   fileName = unescape(fileName)
  //   str = unescape(str)
  //   return this.handleBack(fileName, str, size)
  // })
  // #endif
}

const upload = (param: { url: string }) => {
  if (!param.url) {
    console.log('上传地址不正确 ')
    return
  }

  // #ifdef APP-PLUS
  try {
    return appChooseFile(param)
  } catch (error) {
    console.log('error: ', error)
  }
  // #endif

  // #ifdef MP-WEIXIN
  // #endif

  // #ifdef H5
  // #endif
}
defineExpose({
  upload
})
</script>

<style lang="scss" scoped></style>
