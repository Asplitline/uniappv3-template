<template>
  <view class="cs-layout" :class="{ hasTabbar: hasTabbar, hasNavbar: hasNavbar }">
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
  }
})
</script>

<style lang="scss" scoped>
.cs-layout {
  box-sizing: border-box;
  height: 100%;
  min-height: 100vh;
  padding-top: var(--status-bar-height);

  &.hasTabbar {
    min-height: calc(100vh - 100rpx);
  }

  &.hasNavbar {
    padding-top: calc(var(--status-bar-height) + 44px);
  }
}
</style>
