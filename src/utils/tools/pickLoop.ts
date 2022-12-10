/**
 * @param obj
 * @param rest
 * @returns
 */
export default function pickLoopValue(obj, ...rest) {
  let res = obj
  // console.log(rest);
  rest.every((i) => {
    if (i != undefined) {
      res = res[i]
    }
    return res != null
  })
  return res
}
