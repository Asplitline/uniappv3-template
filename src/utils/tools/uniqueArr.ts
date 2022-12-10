/**
 * @name deduplication
 * @param {Array} arr
 * @returns
 */
export default function (arr = []) {
  return [...new Set(arr)]
}
