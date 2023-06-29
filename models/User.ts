import DB from '@db/DB.ts'
import { encrypt2Hash, verifyWithHash } from '@u/crypto.ts'
import { RSA } from "@u/RSA.ts";
import code2msg, { DBException } from "@c/code2msg.ts";
import getSql from './sql/index.ts'

class User {
  async reg(user: Pick<IUser, 'account' | 'password'>): Promise<IResult> {
    const sql = await getSql('users/reg-account')
    const result = await DB(sql, [user.account, encrypt2Hash(RSA.decrypt(user.password, 'utf-8'))])
    const { errCode } = result
    const res: IResult = {
      code: 201,
      msg: code2msg[201],
      data: true
    }
    if (errCode) {
      DBException(res)
    }
    if (errCode === 'ER_DUP_ENTRY') {
      res.code = 600011
      res.msg = code2msg[res.code]
      res.data = null
    }
    return res
  }
  async loginByAccount(user: Pick<IUser, 'account' | 'password'>) : Promise<IResult> {
    const sql = await getSql('users/login')
    const result = await DB(sql, [user.account])
    const { errCode, data } = result
    const res: IResult = {
      code: 202,
      msg: code2msg[202],
      data: true
    }
    if (errCode) {
      DBException(res)
    }
    // 验证账号和密码是否正确和是否存在
    if (data) {
      if (data.length === 0) {
        res.code = 600021
        res.msg = code2msg[res.code]
        res.data = null
      } else {
        const password = data[0].password
        const [ hash, salt ] = password.split('_')
        const pass = RSA.decrypt(user.password, 'utf-8')
        if (!verifyWithHash(pass, salt, hash)) {
          res.code = 600022
          res.msg = code2msg[res.code]
          res.data = null
        } else {
          delete data[0].password
          res.data = {
            ...data[0]
          }
        }
      }
    }
    return res
  }
}

export default new User
