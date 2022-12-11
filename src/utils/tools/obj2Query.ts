/**
 * @param {Object} obj
 * @returns {String}
 * @example
 * const res = obj2Query({a: 1212, b: '123123', c: undefined, d: ''})
 * // "a=1212&b=123123"
 */

import { isEmpty } from './index'

export default function obj2Query(obj: any) {
  if (typeof obj !== 'object' || obj === null) return obj
  const res: any[] = []
  Object.entries(obj).forEach(([key, value]) => {
    if (!isEmpty(value)) {
      res.push(`${key}=${value}`)
    }
  })
  return res.join('&')
}
