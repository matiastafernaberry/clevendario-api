import Action from '../models/action.js'

import { defineAction, getAll, getActionByEmail, getActionsByDate, updateAction } from '../services/action.js'

import { getUserByEmail } from '../services/user.js'

export const create = async (req, res) => {
  const {
    email,
    action
  } = req.body

  const today = new Date()
  const actions = await getActionsByDate(today, email)
  console.log(actions)
  if (actions.length > 0) {
    return res.status(400).json({
      message: 'You have already registered an action today'
    })
  }

  const user = await getUserByEmail(email)
  if (!user) {
    return res.status(404).json({
      message: 'User not found'
    })
  }

  const actionDefined = await defineAction(action)

  try {
    const newAction = new Action({
      email,
      name: user.name,
      surname: user.surname,
      action: actionDefined,
      date: today
    })

    const result = await newAction.save()
    return res.status(200).json(result)
  } catch (error) {

    console.error(error)
    return res.status(500).json({message: 'Internal Server Error'})

  }
}

export const getAllActions = async (req, res) => {
  try {
    const actions = await getAll()
    if (!actions) {
      return res.status(404).json({ message: 'Actions not found' })
    }
    return res.status(200).json(actions)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const getByEmail = async (req, res) => {
  const email = req.query.email

  if (!email) {
    return res.status(400).json({
      message: 'You have to send an email in query parameters'
    })
  }
  try {
    const actions = await getActionByEmail(email)
    if (!actions) {
      return res.status(200).json({
        message: `No actions found for ${email}`
      })
    }

    return res.status(200).json(actions)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}


//Update action

export const updateActionController = async (req, res) => {
  const { email } = req.params;
  const { action } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }


    const result = await updateAction(email, action);


    if (!result) {
      return res.status(404).json({
        message: 'No existing action found for the specified email and date'
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

