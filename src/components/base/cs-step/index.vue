<template>
  <view class="cs-step">
    <slot name="prefix"></slot>
    <view class="line" :class="{ isActive, isActiveLine, isLast }"></view>
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, inject, reactive, ref } from 'vue'
import type { Ref } from 'vue'

export interface StepItemState {
  uid: number | undefined
  setIndex: (index: number) => void
}

export interface IStepsInject {
  props: any
  steps: Ref<StepItemState[]>
}

const currentInstance = getCurrentInstance()

const parent = inject('CsSteps') as IStepsInject
const index = ref(-1)

const setIndex = (val: number) => {
  index.value = val
}

const stepsCount = computed(() => parent.steps.value.length)
const isLast = computed(() => {
  return currentInstance?.uid && currentInstance?.uid === parent.steps.value[stepsCount.value - 1]?.uid
})

const isActive = computed(() => {
  return index.value < parent.props.active
})

const isActiveLine = computed(() => {
  return index.value < parent.props.active - 1
})
const stepItemState = reactive({
  uid: computed(() => currentInstance?.uid),
  setIndex
})

parent.steps.value = [...parent.steps.value, stepItemState]
</script>

<style lang="scss" scoped>
.cs-step {
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.062);
  .line {
    position: relative;
    align-self: stretch;
    padding: 0 20rpx;
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      height: 18rpx;
      width: 18rpx;
      background-color: #ddd;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
    &::after {
      position: absolute;
      content: '';
      left: 50%;
      height: 100%;
      width: 4rpx;
      background-color: #ddd;
      transform: translate(-50%, 50%);
      opacity: 1;
    }
    &.isLast {
      &::after {
        opacity: 0;
      }
    }
    &.isActive {
      &::before {
        background-color: #2f88ff;
      }
    }
    &.isActiveLine {
      &::after {
        background-color: #2f88ff;
      }
    }
  }
}
</style>
