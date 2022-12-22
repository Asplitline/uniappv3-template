import request, { IRequestQuery, IResponseData } from '@/api/request'
import { obj2Query } from '@/utils/tools'

// export function login() {

//   return request({  })
// }

export function register(body: any) {
  return request('/user/login', { method: 'POST', data: body }) as Promise<IResponseData>
}

export function login(data: any) {
  return request(`/user/back/login?${obj2Query(data)}`, { method: 'POST' })
}

export function getStatistic() {
  return request(`/apiJoiningTheParty/statistics`, {}) as Promise<IResponseData>
}

export function getCarouselList(data: IRequestQuery) {
  return request(`/apiCarousel/pageList`, { data }) as Promise<IResponseData>
}
