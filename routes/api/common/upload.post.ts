import { writeFileSync } from 'fs'
import { extname } from 'path'
// import users from "@models/User.ts";
const prePath = process.cwd() + '/public/upload/'
import code2msg from "@c/code2msg.ts";

export default eventHandler(async (event) => {
  const body = await readMultipartFormData(event)
  const data = []
  body.forEach((it, i) => {
    const ext = extname(it.filename)
    const filename = `${prePath}f${i}_${Date.now()}${ext}`
    data.push(`f${i}_${Date.now()}${ext}`)
    writeFileSync(filename, it.data)
  })
  const res: IResult = {
    code: 203,
    data,
    msg: code2msg[203]
  }
  return res
})
