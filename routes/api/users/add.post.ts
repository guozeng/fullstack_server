import users from "@models/User.ts";
export default eventHandler(async (event) => {
  const body = await readBody(event)
  return users.reg(body.data)
})
