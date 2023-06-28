import { randomBytes, pbkdf2Sync } from 'node:crypto'

function encrypt2Hash(str: string) {
  const salt = randomBytes(16).toString('hex');
  const hash = pbkdf2Sync(str, salt, 1000, 64, 'sha512').toString('hex')
  return `${hash}_${salt}`
}

function verifyWithHash(str: string, salt: string, hash: string) {
  const inputHash = pbkdf2Sync(str, salt, 1000, 64, 'sha512').toString('hex');
  return hash === inputHash;
}


export {
  encrypt2Hash, verifyWithHash
}
