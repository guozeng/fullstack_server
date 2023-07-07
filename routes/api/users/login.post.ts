import users from "@models/User.ts";

export default eventHandler(async (event) => {
  const body = await readBody(event)
  const res = await users.loginByAccount(body.data)
  if (res.code === 202) {
    const ss = await useSession(event, {
      password: 'abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde',
    })
    await ss.update({
      account: body.data.account
    })
  }
  return res
})
