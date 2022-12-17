export default function useMessage() {
  const handleSuccess = (success: boolean, resolve?: FUNC, reject?: FUNC) => {
    if (success) {
      resolve?.()
    } else {
      reject?.()
    }
  }

  const handleMessage = (success: boolean, message?: string, resolve?: FUNC, reject?: FUNC) => {
    if (!success) {
      console.log('success: ', success)
      uni.$u.toast(message)
    }
    handleSuccess(success, resolve, reject)
  }
  return {
    handleSuccess,
    handleMessage
  }
}
