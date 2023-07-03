import users from "@models/User.ts";
import { sign } from '@u/jwt.ts'


export default eventHandler(async (event) => {
  const body = await readBody(event)
  const res = await users.loginByAccount(body.data)
  if (res.code === 202) {
    const token = sign({
      account: res.data.account
    })
    event.node.res.setHeader('Set-Cookie', `SCSESSIONID=${token}; Path=/; HttpOnly`)
  }
  return res
})
