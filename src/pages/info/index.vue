<template>
  <cs-layout class="info">
    <view class="flex justify-center"> </view>
    <view class="flex items-center justify-between mt-3">
      <u-image width="120" height="120" shape="circle"></u-image>
      <view class="flex flex-1 flex-col justify-evenly self-stretch ml-1.5">
        <text class="text-34 font-400">你哈实打实的</text>
        <text class="text-gray">暂无简介</text>
      </view>
      <button class="edit-btn text-white text-24">修改资料</button>
    </view>
    <view class="flex flex-col mt-4">
      <text class="mb-2 text-32 nav-title">基础</text>
      <view class="nav-list bg-white flex shadow b-rd-3">
        <view class="nav-item">
          <image src="@/static/icons/info.png" class="img"></image>
          <text class="txt">个人资料</text>
        </view>
        <view class="nav-item" @click="skip('/pages/info/modify-pwd')">
          <image src="@/static/icons/pwd.png" class="img"></image>
          <text class="txt">修改密码</text>
        </view>
        <view class="nav-item">
          <image src="@/static/icons/logout.png" class="img"></image>
          <text class="txt">退出登录</text>
        </view>
      </view>
    </view>
    <view class="flex flex-col mt-4">
      <text class="mb-2 text-32 nav-title">其他</text>
      <view class="nav-list bg-white flex shadow b-rd-3">
        <view class="nav-item">
          <image src="@/static/icons/process.png" class="img"></image>
          <text class="txt">当前进度</text>
        </view>
      </view>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
const skip = (url: string) => {
  uni.navigateTo({ url })
}
</script>

<style lang="scss" scoped>
.edit-btn {
  border: none;
  background: #0093e9 linear-gradient(160deg, #0093e9 0%, #0080d6 100%);
  width: 160rpx;
  height: 54rpx;
  line-height: 54rpx;
  border-radius: 54rpx;
}

.nav-list {
  width: 100%;
  padding: 24rpx 0 16rpx;
  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rpx;
    flex-direction: column;
    width: 25%;
    .img {
      width: 54rpx;
      height: 54rpx;
    }
    .txt {
      margin-top: 10rpx;
      color: #666;
      font-size: 26rpx;
    }
  }
}
.nav-title {
  position: relative;
  padding-left: 20rpx;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    height: 28rpx;
    width: 6rpx;
    transform: translateY(-50%);
    border-radius: 4rpx;
    background: #0093e9 linear-gradient(to bottom, #0093e9 0%, #5289af 100%);
  }
}
</style>
