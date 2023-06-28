import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const NodeRSA = require("node-rsa")

const RSA = new NodeRSA({ b: 512 })
RSA.setOptions({ encryptionScheme: "pkcs1" })

const key = RSA.exportKey()
export {
  key,
  RSA
}
