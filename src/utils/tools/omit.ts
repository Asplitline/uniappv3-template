/**
 * @param {Object} obj
 * @param {String | Array} omitKey
 * @returns {Object}
 * @example
 * const obj = { a: 1, b: 2, c: 3, 'd': 4 }
 * const omitObj1 = omit(obj, 'a') // { b: 2, c: 3 }
 * const omitObj2 = omit(obj, ['a', 'c']) // { b: 2 }
 * const omitObj3 = omit(obj, 'd' ) // { a: 1, b: 2, c: 3 }
 */
export default function omit(obj: any, omitKey: string | string[]) {
  const allKeys = Object.keys(obj)
  if (Array.isArray(omitKey)) {
    const rest = {}
    allKeys.forEach((key) => {
      if (!omitKey.includes(key)) {
        rest[key] = obj[key]
      }
    })
    return rest
  } else {
    const { [omitKey]: omitValue, ...rest } = obj
    return rest
  }
}
