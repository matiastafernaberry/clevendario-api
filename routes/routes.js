import { Router } from 'express'
const router = Router()

import { welcome } from '../controllers/health.js'
import { register, login } from '../controllers/user.js'

router.get('/health', welcome)

// user register
router.post('/user/', register)

// login
router.post('/user/login', login)

export default router