<template>
  <view class="cs-layout" :class="{ hasTabbar, hasNavbar, hasPadding }">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
defineProps({
  hasTabbar: {
    type: Boolean,
    default: false
  },
  hasNavbar: {
    type: Boolean,
    default: false
  },
  hasPadding: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss" scoped>
.cs-layout {
  box-sizing: border-box;
  height: 100vh;
  padding-top: var(--status-bar-height);
  background-color: #fafafa;
  &.hasPadding {
    padding-left: 20rpx;
    padding-right: 20rpx;
  }
  &.hasTabbar {
    // padding-bottom: 100rpx;
  }

  &.hasNavbar {
    padding-top: calc(var(--status-bar-height) + 44px);
  }
}
</style>
