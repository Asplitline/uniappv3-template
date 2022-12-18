<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { provide } from 'vue'
import { defaultAvatar, defaultImg, prefixUrl } from './utils/static'
import { isEmpty } from './utils/tools'
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
const defaultImgs = {
  image: defaultImg,
  avatar: defaultAvatar
}
const img = (url: any, def = 'image') => {
  const supportKeys = Reflect.ownKeys(defaultImgs)
  if (isEmpty(url)) {
    if (supportKeys.includes(def)) return defaultImgs['image']
    return def
  } else {
    return prefixUrl + url
  }
}
provide('skip', skip)
provide('img', img)
</script>
<style lang="scss">
@import 'vk-uview-ui/index.scss';
@import '@/static/scss/index.scss';
</style>
