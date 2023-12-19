import bcrypt from 'bcryptjs'

export const encrypt = async (email, password) => {
  const hash = await bcrypt.hash(`${email}-${password}`, 10)
  return hash
}

export const compare = async (email, password, hashPassword) => {
  return await bcrypt.compare(`${email}-${password}`, hashPassword)
}