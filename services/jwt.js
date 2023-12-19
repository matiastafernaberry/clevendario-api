import { JWT_SECRET } from '../config.js'
import jwt from 'jsonwebtoken'

export const createAccessToken = async (payload) => {
  const token = jwt.sign(
    payload,
    JWT_SECRET,
    { expiresIn: '2h' }
  )

  return token
}