<template>
  <view>
    <!-- <view class="t-toptips" :style="{ top: top, background: cubgColor }" :class="[show ? 't-top-show' : '']">
      <view v-if="loading" class="flex flex-sub">
        <view class="flex flex-sub">
          <view class="cu-progress flex-sub round striped active sm">
            <view :style="{ background: color, width: value + '%' }"></view>
          </view>
          <text class="margin-left">{{ value }}%</text>
        </view>
        <view @click="downOnAbort" v-if="value < 100" class="close">取消</view>
      </view>
      <block v-else>{{ msg }}</block>
    </view> -->
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  logo: {
    type: String,
    default:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F00%2F07%2F155788a6d8a5c42.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619847627&t=2da40b583002205c204d980b54b35040'
  }
  // top: {
  //   type: String,
  //   default: 'auto'
  // },
  // bgColor: {
  //   type: String,
  //   default: 'rgba(49, 126, 243, 0.5)'
  // },
  // color: {
  //   type: String,
  //   default: '#55aa00'
  // }
})

const getRequest = () => {}
const handleBack = () => {}

const appChooseFile = ({ cuWebview = '', url, name = 'file', header, addName = '', addSize = '', maxSize = 10, ...formData } = {}) => {
  // #ifdef APP-PLUS
  let wvPath = '/static/hybrid/html/index.html'
  let wv = plus.webview.create(
    '',
    wvPath,
    {
      'uni-app': 'none',
      top: 0,
      height: '100%',
      background: 'transparent'
    },
    {
      url,
      header,
      addName,
      addSize,
      maxSize,
      formData,
      key: name,
      logo: props.logo
    }
  )
  wv.loadURL(wvPath)
  console.log('wv: ', wv)
  // this.$root.$scope.$getAppWebview().append(wv)
  // wv.overrideUrlLoading({ mode: 'reject' }, (e) => {
  //   let { fileName, size, str } = this.getRequest(e.url)
  //   fileName = unescape(fileName)
  //   str = unescape(str)
  //   return this.handleBack(fileName, str, size)
  // })
  // #endif
}

const upload = (param = {}) => {
  if (!param.url) {
    uni.$u.toast('上传地址不正确')
    return
  }
  // if (this.loading) {
  //   uni.$u.toast('还有个文件玩命处理中，请稍候..')
  //   return
  // }

  // #ifdef APP-PLUS
  appChooseFile(param)
  // #endif
}

defineExpose({
  upload
})
</script>

<style scoped>
.t-toptips {
  width: 100%;
  padding: 18upx 30upx;
  box-sizing: border-box;
  position: fixed;
  z-index: 90;
  color: #fff;
  font-size: 30upx;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-all;
  opacity: 0;
  transform: translateZ(0) translateY(-100%);
  transition: all 0.3s ease-in-out;
}

.close {
  width: 3em;
  text-align: right;
}

.t-top-show {
  transform: translateZ(0) translateY(0);
  opacity: 1;
}

.flex {
  display: flex;
  align-items: center;
}

.flex-sub {
  flex: 1;
}

.round {
  border-radius: 5000upx;
}

/* ==================
	         进度条
	 ==================== */

.cu-progress {
  overflow: hidden;
  height: 28upx;
  background-color: #ebeef5;
  display: inline-flex;
  align-items: center;
  width: 100%;
}

.cu-progress + view,
.cu-progress + text {
  line-height: 1;
}

.cu-progress.xs {
  height: 10upx;
}

.cu-progress.sm {
  height: 20upx;
}

.cu-progress view {
  width: 0;
  height: 100%;
  align-items: center;
  display: flex;
  justify-items: flex-end;
  justify-content: space-around;
  font-size: 20upx;
  color: #ffffff;
  transition: width 0.6s ease;
}

.cu-progress text {
  align-items: center;
  display: flex;
  font-size: 20upx;
  color: #333333;
  text-indent: 10upx;
}

.cu-progress.text-progress {
  padding-right: 60upx;
}

.cu-progress.striped view {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 72upx 72upx;
}

.cu-progress.active view {
  animation: progress-stripes 2s linear infinite;
}

@keyframes progress-stripes {
  from {
    background-position: 72upx 0;
  }

  to {
    background-position: 0 0;
  }
}
</style>
