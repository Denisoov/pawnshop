import User from '../models/User.js'
import Role from '../models/Role.js'

import bcrypt from 'bcryptjs'

import { validationResult } from 'express-validator'

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) return res.status(400).json('Ошибка при регистрации', errors)
            
            const { username, password } = req.body
            const candidate = await User.findOne({ username })

            if (candidate) return res.status(400).json('Пользователь с таким логином уже существует')
            
            const hashPassword = bcrypt.hashSync(password, 7);

            const userRole = await Role.findOne({ role: "ADMIN" })

            const user = new User({ 
                username, 
                password: hashPassword, 
                roles: userRole.role
            })

            user.save()

            return res.json('Вы успешло зарегестрировали пользователя')

        } catch (error) {
            res.status(400).json('Невозможно зарегестрироваться')
        }
    }
    async login(req, res) {
        try {
            console.log('hello')
        } catch (error) {
            console.log(error)
            res.status(400).json('Невозможно авторизоваться')
        }
    }
}
export default new AuthController()