import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const jwt = require("jsonwebtoken")

const secret = 'Huyao1992__'
const expire = '5000'

export function sign(data: any) {
  return jwt.sign(data, secret, {
    expiresIn: expire
  })
}

export function verify(token: string) {
  return jwt.verify(token, secret)
}
