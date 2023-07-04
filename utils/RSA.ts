import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const NodeRSA = require("node-rsa")

const RSA = new NodeRSA({ b: 512 })
RSA.setOptions({ encryptionScheme: "pkcs1" })

const RSAPublicKey = RSA.exportKey()
export {
  RSAPublicKey,
  RSA
}
