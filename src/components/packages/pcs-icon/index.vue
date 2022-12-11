<template>
  <view class="pcs-icon flex">
    <slot name="prefix"></slot>
    <u-icon v-on="$attrs"> </u-icon>
    <slot></slot>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
