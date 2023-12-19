import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes/routes.js'

const app = express()

// config
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// routes
app.use('/api/clevendario', routes)

export default app