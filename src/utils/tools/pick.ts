/**
 * @param {Object} obj
 * @param {String | Array} pickKey
 * @returns {Object}
 * @example
 * const obj = { a: 1, b: 2, c: 3 }
 * const pickObj1 = pick(obj, 'a') // { a: 1 }
 * const pickObj2 = pick(obj, ['a', 'c']) // { a: 1, c: 3 }
 */
export default function pick(obj: any, pickKey: string | string[]) {
  const allKeys = Object.keys(obj)
  if (Array.isArray(pickKey)) {
    const rest = {}
    pickKey.forEach((key) => {
      if (allKeys.includes(key)) {
        rest[key] = obj[key]
      }
    })
    return rest
  } else {
    if (!allKeys.includes(pickKey)) return {}
    return {
      [pickKey]: obj[pickKey]
    }
  }
}
