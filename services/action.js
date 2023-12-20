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