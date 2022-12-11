<template>
  <u-navbar v-bind="$attrs"> </u-navbar>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.cs-layout {
  box-sizing: border-box;
  height: 100vh;
  padding-left: 20rpx;
  padding-right: 20rpx;
  padding-top: var(--status-bar-height);

  &.hasTabbar {
    // padding-bottom: 100rpx;
  }

  &.hasNavbar {
    padding-top: calc(var(--status-bar-height) + 44px);
  }
}
</style>
