<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { provide } from 'vue'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})

const skip = (url: string) => {
  uni.navigateTo({ url })
}
provide('skip', skip)
</script>
<style lang="scss">
@import 'vk-uview-ui/index.scss';
@import '@/static/scss/index.scss';
</style>
