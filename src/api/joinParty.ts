import request, { IResponseData } from '@/api/request'
import { obj2Query } from '@/utils/tools'

// export function getAllUser() {
//   return request('/user/getUser', { data: { size: 999 } }) as Promise<IResponseData>
// }

export function addJoinParty(body: any) {
  return request('/apiJoiningTheParty/insert', { method: 'POST', data: body }) as Promise<IResponseData>
}
export function getAllJoinParty() {
  return request('/apiJoiningTheParty/list', {}) as Promise<IResponseData>
}

export function getJoinPartyById(id: string) {
  return request('/apiJoiningTheParty/getById', { data: { id } }) as Promise<IResponseData>
}

export function editJoinParty(payload: any) {
  return request('/apiJoiningTheParty/update', { method: 'PUT', data: payload }) as Promise<IResponseData>
}
