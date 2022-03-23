import User from '../models/User.js'
import Role from '../models/Role.js'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'

const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role
    }
    
    return jwt.sign(payload, "SECRET_KEY")
}
class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) return res.status(400).json({ error: 'Заполните все поля' })

            const { username, password } = req.body
            const candidate = await User.findOne({ username })

            if (candidate) return res.status(400).json({ error: 'Пользователь с таким логином уже существует' })
            
            const hashPassword = bcrypt.hashSync(password, 7);

            const userRole = await Role.findOne({ role: "ADMIN" })

            const user = new User({ 
                username, 
                password: hashPassword, 
                roles: userRole.role
            })

            user.save()

            return res.json({ error: 'Вы успешло зарегестрировали пользователя' })

        } catch (error) {
            res.status(400).json({ error: 'Невозможно зарегестрироваться' })
        }
    }
    async login(req, res) {
        try {
            const { username, password } = req.body
            const candidate = await User.findOne({ username })
            
            if (!candidate) return res.status(400).json({ error: `Пользователь ${username} не найден` })

            const validPassword = bcrypt.compareSync(password, candidate.password)

            if (!validPassword) return res.status(400).json({ error: `Пароль неверный` })

            const token = generateAccessToken(candidate._id, candidate.role)

            return res.json({ token })


        } catch (error) {
            console.log(error)
            res.status(400).json('Невозможно авторизоваться')
        }
    }
}
export default new AuthController()