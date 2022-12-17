import request from '@/api/request'

// export function login() {

//   return request({  })
// }

export function register(body: any) {
  return request('/user/login', { method: 'POST', data: body })
}

export function login(data: any) {
  return request('/user/back/login', { method: 'POST', data })
}
