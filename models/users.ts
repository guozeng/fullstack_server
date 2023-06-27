import DB from '@db/DB.ts'
import getSql from './sql/index.ts'

const model: IUserModel = {
  async reg(userInfo) {
    const sql = await getSql('users/reg-account')
    const result = await DB(sql.toString(), [userInfo.account, userInfo.password])
    let msg: string, data: boolean, code: number
    if (result.errCode) {
      msg = '注册失败'
      code = 600000
      data = false
      if (result.errCode === 'ER_DUP_ENTRY') {
        code = 600001
        msg = '账户名称已存在'
      }
    } else {
      msg = '注册成功'
      code = 200
      data = true
    }
    const res: IResult = {
      msg,
      data,
      code
    }
    return res
  },
}
export default model
