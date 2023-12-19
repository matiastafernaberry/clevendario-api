import User from '../models/user.js'

export const getUserByEmail = async (email) => {
  return await User.findOne({ email })
}

export const getAllUsers = async () => {
  return await User.find({})
}