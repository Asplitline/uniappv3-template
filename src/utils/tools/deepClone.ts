/**
 * @param obj
 * @returns obj
 */
export default function deepClone(obj: any) {
  try {
    return JSON.parse(JSON.stringify(obj))
  } catch (e) {
    console.log(e)
    return ''
  }
}
