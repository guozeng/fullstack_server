import DB from '@db/DB.ts'
import { encrypt2Hash, verifyWithHash } from '@u/crypto.ts'
import { RSA } from "@u/RSA.ts";
import getSql from './sql/index.ts'

const model: IUserModel = {
  async reg(userInfo) {
    const sql = await getSql('users/reg-account')
    const result = await DB(sql.toString(), [userInfo.account, encrypt2Hash(RSA.decrypt(userInfo.password, 'utf-8'))])
    let msg: string, data: boolean, code: number
    if (result.errCode) {
      msg = '注册失败'
      code = 600000
      data = false
      if (result.errCode === 'ER_DUP_ENTRY') {
        code = 600001
        msg = '账户名称已存在'
      }
      if (result.errCode === 'ECONNREFUSED') {
        code = 600002
        msg = '数据库连接失败'
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
  async loginByAccount(userInfo) {
    const sql = await getSql('users/login')
    const result = await DB(sql.toString(), [userInfo.account])
    let msg: string, data: boolean, code: number
    if (result.errCode) {
      msg = '登录失败'
      code = 600000
      data = false
      if (result.errCode === 'ECONNREFUSED') {
        code = 600002
        msg = '数据库连接失败'
      }
    } else {
      const password = result.result[0]?.password || '_'
      const [ hash, salt ] = password.split('_')
      const pass = RSA.decrypt(userInfo.password, 'utf-8')
      if (verifyWithHash(pass, salt, hash)) {
        msg = '登录成功'
        code = 200
        data = true
      } else {
        msg = '账号或密码错误'
        code = 900000
        data = false
      }
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
