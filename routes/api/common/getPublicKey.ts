import { RSAPublicKey } from '@u/RSA.ts'
export default eventHandler(() => {
  const result: IResult = {
    code: 200,
    data: RSAPublicKey,
    msg: '成功'
  }
  return result
})
