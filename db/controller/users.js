import { User } from '../models.js'

export async function registerUser({ email, password }) {
  return await User.create({ email, password })
}

export async function getUserEmailAndPass({ email }) {
  return await User.findOne({ where: { email } })
}
