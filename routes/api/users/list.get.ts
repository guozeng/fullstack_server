import users from "@models/users.ts";
export default eventHandler(async (event) => {
  const sql = await users.queryById()
  // const body = await readBody(event)
  // console.log(body.pageNum);

  return { nitro: sql }
})
