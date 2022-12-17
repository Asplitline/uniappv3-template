export default class CacheStorage {
  constructor() {}
  static setItem(key: string, value: any) {
    uni.setStorageSync(key, value)
  }
  static getItem(key: string, def: any) {
    return uni.getStorageSync(key) || def
  }
  static clearItem() {
    try {
      uni.clearStorageSync()
    } catch (error) {
      console.log('error: ', error)
    }
  }
}
