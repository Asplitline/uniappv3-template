import request, { IResponseData } from '@/api/request'
import { obj2Query } from '@/utils/tools'

export interface IPostDetail {
  id: number
  authorId: string
  htmlContent: string
  textContent: string
  createTime: string
  updateTime: string
  lastReplyTime: any
  replyNum: number
  title: string
  lx: string
  user: any
}

export function getAllPost() {
  return request('/apiPost/list', { showLoading: true }) as Promise<IResponseData>
}

export function getPostById(id: string) {
  return request('/apiPost/getById', { data: { id }, showLoading: true }) as Promise<IResponseData>
}

export function addComment(payload: any) {
  return request('/apiComment/insert', { method: 'POST', data: payload }) as Promise<IResponseData>
}

export function getAllComment() {
  return request('/apiComment/list', {}) as Promise<IResponseData>
}
// export function modifyPassword(payload: any) {
//   return request('/user/changePassword', { data: payload }) as Promise<IResponseData>
// }
