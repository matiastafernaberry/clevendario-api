import Action from '../models/action.js'
import { ACTIONS } from '../config.js'

export const getAll = async () => {
  return await Action.find({})
}

export const defineAction = async (actionn) => {
  let ACTION = {}
  ACTIONS.map(action => {
    if (actionn === action.id) {
      ACTION = action
    }
  })
  return ACTION
}

export const getActionByEmail = async (email) => {
  return Action.find({email})
}

export const getActionsByDate = async (date, email) => {
  const init = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const fin = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
  

  const actions = await Action.find({
    date: {
      $gte: init,
      $lt: fin
    },
    email
  })

  return actions
}