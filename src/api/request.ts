const isDev = true
export const requestUrl = isDev ? '/api' : 'http://localhost:8090'

type REQUEST_TYPE = 'POST' | 'OPTIONS' | 'GET' | 'HEAD' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT' | undefined

interface RequestOption {
  method?: REQUEST_TYPE
  data?: any
  showLoading?: boolean
  timeout?: number
  headers?: any
}

export default (url: string, { method = 'GET', data = {}, showLoading = false, timeout = 5000, headers = {} }: RequestOption) => {
  return new Promise((resolve, reject) => {
    if (showLoading) {
      uni.showLoading({
        title: '请求中...'
      })
    }
    // const token = uni.getStorageSync('token')

    const requestOption = {
      url: requestUrl + url,
      method,
      data,
      header: {
        // 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // 'access-auth-token': token,
        ...headers
      },
      timeout
    }

    // if (!token) {
    //   delete requestOption.header['access-auth-token']
    // }
    uni.request({
      ...requestOption,
      success: (res) => {
        resolve(res.data)
      },
      fail: (res) => {
        resolve({
          code: 500,
          message: res.errMsg
        })
      },
      complete: () => {
        if (showLoading) {
          uni.hideLoading()
        }
      }
    })
  })
}
