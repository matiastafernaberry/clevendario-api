import { ROLES } from '../config.js'

export const defineRole = async (role) => {
  let ROL = null
  ROLES.map(rol => {
    if (role === rol.id) {
      ROL = rol.name
    }
  })
  return ROL
}