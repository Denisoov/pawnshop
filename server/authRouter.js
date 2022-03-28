import Router from 'express'

import authController from './controls/authController.js'
import orderController from './controls/productController.js'


import { check } from 'express-validator'

import authMiddleware from './middleware/authMiddleware.js'
import roleMiddleware from './middleware/roleMiddleware.js'
import uploadMiddleware from './middleware/uploadMiddleware.js'

const router = new Router()

router.post(
    '/admin/registration', 
    [
        roleMiddleware('ADMIN'),
        check('username', "Имя пользователя не может быть пустым").notEmpty(),
        check('password', "Пароль должен быть больше 4 символов").isLength({ min: 4 }),
    ], 
    authController.registration
)
router.post('/auth/login', authController.login)
router.get(
    '/admin/getAllUsers', 
    roleMiddleware('ADMIN'), 
    authController.getAllUsers
)

router.post('/order/create', 
[
    authMiddleware,
    uploadMiddleware.single('image')
]
, orderController.createProduct)
router.get('/order/all', authMiddleware, orderController.getAllOrders)
router.post('/order/remove', orderController.removeProduct)

export default router