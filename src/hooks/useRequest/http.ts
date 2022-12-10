let uniRequest = {}
import { isEmpty } from '@/utils/tools.js'

export const requestUrl = 
// export const requestUrl = {
//   [UrlType.USER]: 'http://119.8.174.32:8060',
//   [UrlType.BOSS]: 'http://47.101.153.209:8079'
//   // [UrlType.BOSS]: 'http://172.16.20.156:8079',
// }

// function debounce(fn, wait) {
//   let timerId = null
//   let flag = true
//   return function () {
//     // clearTimeout(timerId);
//     if (flag) {
//       fn.apply(this, arguments)
//       flag = false
//       timerId = setTimeout(() => {
//         flag = true
//       }, wait)
//     }
//   }
// }

// const authError = debounce((message) => {
//   setTimeout(() => {
//     uni.navigateTo({
//       url: '/pages/entry/entry'
//     })
//   }, 1500)
// }, 3000)

uniRequest.request = ({
  method = 'POST',
  url,
  data = {},
  type,
  showLoading,
  timeout = 5000,
  headers = {}
  // urlType = UrlType.USER
}) => {
  return new Promise((resolve, reject) => {
    // const urlType = store.state.urlType
    // // console.log('store.state.urlType', store.state.urlType);
    // const _urlType = isEmpty(urlType) ? UrlType.USER : urlType
    // if (showLoading) {
    //   uni.showLoading({
    //     title: '请求中...'
    //   })
    // }
    // const token = UrlType.USER === _urlType ? uni.getStorageSync('token') : uni.getStorageSync('token')

    // const requestOption = {
    //   url: requestUrl[_urlType] + url,
    //   method,
    //   data,
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //     'access-auth-token': token,
    //     ...headers
    //     // "Access-Control-Allow-Origin": store.state.baseUrl
    //   },
    //   timeout
    //   // dataType: 'json',
    // }

    // if (!token) {
    //   delete requestOption.header['access-auth-token']
    // }
    // uni.request({
    //   ...requestOption,

    //   success: (res) => {
    //     // console.log('success>>', res);
    //     if (res.statusCode === 200) {
    //       console.log(res.data)
    //       if (res.data.code === 4000) {
    //         resolve({
    //           code: 4000,
    //           message: '登录失效 ~'
    //         })
    //         uni.showToast({
    //           icon: 'none',
    //           title: '登录失效'
    //         })
    //         setTimeout(() => {
    //           uni.removeStorageSync('token')
    //           uni.redirectTo({ url: '/pages/index/index' })
    //         }, 1000)
    //       } else {
    //         resolve(res.data)
    //       }
    //     } else {
    //       resolve({
    //         code: 500,
    //         message: '服务繁忙 ~'
    //       })
    //     }

    //     // if (res.statusCode === 200) { //成功
    //     // 	const decryptResponseDataJSON = res.data;
    //     // 	const code = decryptResponseDataJSON.code;
    //     // 	if (code != 0) {
    //     // 		if (code === 4000) {
    //     // 			uni.removeStorageSync("uid");
    //     // 			uni.removeStorageSync("platform");
    //     // 			uni.removeStorageSync("token");
    //     // 		} else {
    //     // 			const errorMsg = decryptResponseDataJSON.message;

    //     // 		}
    //     // 	}
    //     // 	resolve(decryptResponseDataJSON)
    //     // } else {
    //     // 	console.log('error ---- ', res);
    //     // 	// const {
    //     // 	// 	code,message
    //     // 	// } = res.data
    //     // 	let ret = new Object()
    //     // 	ret.code = 9
    //     // 	ret.msg = res.errMsg

    //     // 	if (reject) {
    //     // 		reject(ret)
    //     // 	} else {

    //     // 	}
    //     // }
    //   },
    //   fail: (res) => {
    //     // console.log('fail>>', res);
    //     // let ret = new Object()
    //     // ret.code = 99
    //     // ret.msg = 'network error'
    //     // if (res.errMsg) {
    //     // 	ret.msg = res.errMsg;
    //     // }

    //     // uni.showToast({
    //     // 	title: ret.msg,
    //     // 	duration: 2000,
    //     // 	icon: 'none'
    //     // });
    //     resolve({
    //       code: 500,
    //       message: res.errMsg
    //     })
    //   },
    //   complete: (res) => {
    //     if (showLoading) {
    //       uni.hideLoading()
    //     }
    //   }
    // })
  })
}

export default uniRequest
