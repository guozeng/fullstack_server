import users from "@models/User.ts";

export default eventHandler(async (event) => {
  const body = await readBody(event)
  const res = await users.loginByAccount(body.data)
  return res
})
