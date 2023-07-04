import { parse } from 'cookie'
export default eventHandler((event) => {
  const token = parse(event.node.req.headers.cookie || '')
  // console.log(verify(token.SCSESSIONID));
  const result: IResult = {
    code: 200,
    data: token,
    msg: '成功'
  }
  return result
})
