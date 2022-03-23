import Router from 'express'
import authController from './controls/authController.js'
import { check } from 'express-validator'

const router = new Router()

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 символов").isLength({ min: 4 })
], authController.registration)
router.get('/login', authController.login)

export default router