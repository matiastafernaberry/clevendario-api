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
  return Action.find({ email })
}


export const updateAction = async (email, actionn) => {
  try {
    const existingAction = await Action.findOne({
      email,
      createdAt: { $gte: new Date() },
    });

    if (!existingAction) {
      return null;
    }

    existingAction.action = defineAction(actionn);
    const result = await existingAction.save();

    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};