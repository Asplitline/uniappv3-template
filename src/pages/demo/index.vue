<template>
  <cs-layout class="">
    <cs-upload ref="csFile"></cs-upload>
    <button @click="onUpload">上传</button>
  </cs-layout>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'

const csFile = shallowRef()
const onUpload = () => {
  csFile.value.upload({
    url: 'http://document/upload',
    name: 'file'
  })
  // this.$refs.csFile.upload({
  //   //替换为你的上传接口地址
  //   url: 'http://document/upload',
  //   // 服务端接收附件的key
  //   name: 'file'
  // })
}
</script>

<style lang="scss" scoped></style>
