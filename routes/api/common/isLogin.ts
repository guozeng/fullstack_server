export default eventHandler(async (event) => {
  const data = await getSession(event, {
    password: 'abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde'
  })
  const result: IResult = {
    code: 200,
    data: data,
    msg: '成功'
  }
  return result
})
