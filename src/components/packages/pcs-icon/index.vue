<template>
  <view class="pcs-icon flex">
    <slot name="prefix"></slot>
    <u-icon v-bind="$attrs" :size="props.size"> </u-icon>
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  size: {
    type: [String, Number],
    default: 48
  }
})
</script>

<style lang="scss" scoped></style>
