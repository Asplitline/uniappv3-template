/**
 * @name isEmpty
 * @param {Any} value
 * @returns {Boolean}
 * @example
 * [0, '', undefined, null, [], {}, false, "false"].map(isEmpty)
 * // [true, true, true, true, true, true, true, false]
 */
export default function isEmpty(value: any) {
  const type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
  if (type === 'string' || type === 'array') {
    return !value.length
  } else if (type === 'object') {
    return !Object.keys(value).length
  } else if (type === 'number') {
    return !value
  } else {
    return !value
  }
}
