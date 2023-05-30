import customers from "@models/customers.ts";
export default eventHandler(async (event) => {
  customers.queryById()
  const body = await readBody(event)
  console.log(body.pageNum);

  return { nitro: body }
})
