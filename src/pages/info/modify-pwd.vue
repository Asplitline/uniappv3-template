<template>
  <cs-layout class="modify-pwd">
    <pcs-navbar title="修改密码"> </pcs-navbar>

    <view class="md-form">
      <u-form :model="formModel" ref="uForm" label-width="120">
        <u-form-item :border-bottom="false"
          ><u-input border v-model="formModel.username" placeholder="请输入账号" class="cs-input"
        /></u-form-item>
        <u-form-item :border-bottom="false"
          ><u-input border v-model="formModel.password" placeholder="请输入密码" class="cs-input" /></u-form-item
      ></u-form>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formModel = reactive<{ username?: string; password?: string }>({})
</script>

<style lang="scss" scoped></style>
