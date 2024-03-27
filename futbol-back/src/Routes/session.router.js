import { Router } from 'express'
import sessionController from '../Controllers/Session.Controller.js'

const router = Router()

router.post('/register', sessionController.register)

export default router