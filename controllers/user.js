import User from '../models/user.js'
import { encrypt, compare } from '../services/bcrypt.js'
import { defineRole } from '../services/role.js'
import { getUserByEmail } from '../services/user.js'
import { createAccessToken } from '../services/jwt.js'

export const register = async (req, res) => {
  const {
    name,
    surname,
    email,
    password,
    phone,
    role
  } = req.body

  const passwordHash = await encrypt(email, password)
  const rol = await defineRole(role)
  
  try {
    const newUser = new User({
      name,
      surname,
      email,
      password: passwordHash,
      phone,
      role: rol,
    })

    const result = await newUser.save()
    return res.status(200).json(result)
  } catch (error) {
    console.log(`Error trying to create a new user`)
    if (error.keyPattern.email === 1) {
      return res.status(400).json({message: 'User already exist'})
    }
    return res.status(500).json({message: 'Internal Server Error'})
  }
}

export const login = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await getUserByEmail(email)
    if (user == null) {
      return res.status(404).json({message: 'User not found'})
    }

    const checkPassword = await compare(email, password, user.password)

    if (!checkPassword) {
      return res.status(409).json({
        message: 'Invalid password'
      })
    }

    const jwtPayload = {
      email,
      password: user.password
    }

    const token = await createAccessToken(jwtPayload)

    return res.status(200).json({
      access_token: token,
      user
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({message: 'Internal Server Error'})
  }
}