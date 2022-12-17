import { isEmpty } from '@/utils/tools'
export interface IFormRule {
  prop: string
  message: string
}

export default function useForm(model: any, rules?: IFormRule[]) {
  const validate = () => {
    if (isEmpty(rules)) return true
    const invokeRule: IFormRule | undefined = rules?.find((rule: IFormRule) => {
      const val = model[rule.prop]
      return isEmpty(val)
    })
    if (!isEmpty(invokeRule)) {
      uni.$u.toast(invokeRule?.message)
      return false
    }
    return true
  }
  return { validate }
}
