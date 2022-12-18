import request, { IResponseData } from '@/api/request'
import { obj2Query } from '@/utils/tools'

export function getAllUser() {
  return request('/user/getUser', { data: { size: 999 } }) as Promise<IResponseData>
}

export function editUser(body: any) {
  return request('/user/updateUser', { method: 'PUT', data: body }) as Promise<IResponseData>
}

export function getUserById(id: string) {
  return request('/user/getById', { data: { id } }) as Promise<IResponseData>
}

export function modifyPassword(payload: any) {
  return request('/user/changePassword', { data: payload }) as Promise<IResponseData>
}
