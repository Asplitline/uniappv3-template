/**
 * @name timeAgo
 * @param date
 * @returns
 */
export default function (date) {
  const val = new Date(date).getTime()
  const now = Date.now()
  const diff = now - val
  if (diff < 0) return '未知'
  const fl = Math.floor
  const base = {
    second: 1000,
    min: 60 * 1000,
    hour: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    year: 12 * 30 * 24 * 60 * 60 * 1000
  }
  const end: { [key in string]: number } = {}
  Object.keys(base).forEach((key) => {
    end[key] = fl(diff / base[key])
  })
  if (end.year > 0) {
    return `${end.year}年前`
  } else if (end.month > 0) {
    return `${end.month}月前`
  } else if (end.day) {
    return `${end.day}天前`
  } else if (end.hour) {
    return `${end.hour}小时前`
  } else if (end.min) {
    return `${end.min}分钟前`
  } else if (end.second) {
    return `${end.second}秒前`
  } else {
    return '刚刚'
  }
}
