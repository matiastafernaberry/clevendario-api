import { Router } from 'express'
const router = Router()

import { welcome } from '../controllers/health.js'
import { register, login } from '../controllers/user.js'
import { create, getAllActions, getByEmail } from '../controllers/action.js'
import { createHoliday, deleteHolidayById, editHolidayById, getAllHolidays } from '../controllers/feriados.js'

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

//action agregar feriado
router.post('/newHoliday', createHoliday)

//action ver feriados
router.get('/holidays', getAllHolidays)

//action editar feriado
router.put('/holidays/edit/:id', editHolidayById)

//action borrar feriado
router.delete('/holidays/delete/:id', deleteHolidayById)


export default router