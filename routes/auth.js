import { Router } from 'express'
import { login, register } from '../controller/auth.js'
const authRouter = Router()

authRouter.get('/register', register)
authRouter.get('/login', login)

export { authRouter }
