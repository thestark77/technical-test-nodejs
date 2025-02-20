import crypto from 'crypto'

export function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex')
}

export function checkPassword(hashedPassword, password) {
  return hashPassword(password) === hashedPassword
}
