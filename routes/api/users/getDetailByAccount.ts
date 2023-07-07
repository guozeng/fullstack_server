import users from "@models/User.ts";

export default eventHandler(async (event) => {
  const data = await getSession(event, {
    password: 'abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde'
  })
  const res = await users.getDetailByAccount({
    account: data.data.account
  })
  return res
})
