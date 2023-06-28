import users from "@models/users.ts";
export default eventHandler(async (event) => {
  const body = await readBody(event)
  return users.loginByAccount(body.data)
})
