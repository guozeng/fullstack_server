import customers from "@models/users.ts";
export default eventHandler(async (event) => {
  const body = await readBody(event)
  return customers.add(body)
})
