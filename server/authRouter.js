import Router from 'express'

import authController from './controls/authController.js'

const router = new Router()

router.post('/registration', authController.registration)
router.get('/login', authController.login)

export default router