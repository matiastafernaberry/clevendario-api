import { Router } from 'express'
const router = Router()

import { welcome } from '../controllers/health.js'
import { register, login } from '../controllers/user.js'
import { create, getAllActions, getByEmail, updateActionController, deleteMany } from '../controllers/action.js'

router.get('/health', welcome)

// user register
router.post('/user/', register)

// login
router.post('/user/login', login)

// action register
router.post('/action/', create)

// action getAll
router.get('/action/getAll', getAllActions)

// action get by email
router.get('/action/getByEmail', getByEmail)

// action update
router.put('/action/update/:email', updateActionController);

// action delete
router.get('/action/deleteMany', deleteMany);



export default router