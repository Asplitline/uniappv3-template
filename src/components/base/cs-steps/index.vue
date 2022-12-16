<template>
  <view class="cs-step">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import type { StepItemState } from '../cs-step/index.vue'
const props = defineProps({
  active: {
    type: Number,
    default: 1
  }
})

const steps = ref([])

provide('CsSteps', { props, steps })

watch(
  () => steps.value,
  () => {
    steps.value.forEach((stepItemState: StepItemState, index) => {
      stepItemState.setIndex(index)
    })
  }
)
</script>

<style lang="scss" scoped></style>
