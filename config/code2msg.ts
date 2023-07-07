function getCode2Msg () {
  return {
    600000: '系统异常，请稍后重试',
    600011: '账户名称已存在',
    600021: '账号不存在',
    600022: '密码错误',
    201: '注册成功',
    202: '登录成功',
    203: '上传成功',
  }
}
const code2msg = getCode2Msg()
export default code2msg

export function DBException(res: IResult) {
  res.code = 600000
  res.msg = code2msg[res.code]
  res.data = null
}
