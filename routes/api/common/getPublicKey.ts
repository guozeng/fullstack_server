import { key } from "@u/RSA.ts";
export default eventHandler(() => {
  const result: IResult = {
    code: 200,
    data: key,
    msg: '成功'
  }
  return result
})
