import Router from 'express'
import authController from './controls/authController.js'
import { check } from 'express-validator'
import authMiddleware from './middleware/authMiddleware.js'
import roleMiddleware from './middleware/roleMiddleware.js'

const router = new Router()

router.post('/registration', [
    roleMiddleware('ADMIN'),
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 символов").isLength({ min: 4 }),
], authController.registration)
router.post('/login', authController.login)
router.get('/getAllUsers', roleMiddleware('ADMIN'), authController.getAllUsers)

export default router