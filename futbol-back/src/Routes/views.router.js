import { Router } from 'express'
import viewsController from '../Controllers/Views.Controller.js'

const router = Router()

router.get('/', viewsController.home)
router.get('/register',)
router.get('/login',)

export default router