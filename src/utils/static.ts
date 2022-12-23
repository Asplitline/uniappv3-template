import { baseUrl } from "@/api/request"



export const defaultAvatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
export const defaultImg = 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
export const uploadUrl = `${baseUrl}/file/uploadFile`
export const prefixUrl = `${baseUrl}/`

export const statusInfo = {
  0: {
    text: '待审核',
    type: 'primary'
  },
  1: {
    text: '已通过',
    type: 'success'
  }
}
export const infoList = [
  {
    text: '1.申请入党阶段',
    status: 1,
    desc: [{ name: '1. 入党申请书', text: '' }]
  },
  {
    text: '2.入党积极分子的确定和培养考察阶段',
    status: 2,
    desc: [
      { name: '1 .列为入党积极分子的群众意见', text: '' },
      { name: '2 .推优对象审核表', text: '' },
      { name: '3 .入党积极分子、预备党员培养教育考察登记表（样表）', text: '' },
      { name: '4. 自传(手写)', text: '' }
    ]
  },
  {
    text: '3.发展对象确定和考察阶段',
    status: 3,
    desc: [
      { name: '1 .确定发展对象的群众意见', text: '' },
      { name: '2 .函调证明材料信及父母单位开具的家庭成员政审表', text: '' },
      { name: '3 .发展对象公示情况登记表', text: '' },
      { name: '4 .发展对象培训合格证明', text: '' },
      { name: '5 .综合政审材料(校内) ', text: '' }
    ]
  },
  {
    text: '4.预备党员接收阶段',
    status: 4,
    desc: [
      { name: '1. 入党志愿书(样表)', text: '' },
      { name: '2. 支部大会会议记录', text: '' }
    ]
  },
  {
    text: '5.预备党员教育考察和转正阶段',
    status: 5,
    desc: [
      { name: '1. 预备党员转正的群众意见', text: '' },
      { name: '2. 预备党员转正公示情况登记表', text: '' },
      { name: '3. 支部大会会议记录.', text: '' }
    ]
  }
]
