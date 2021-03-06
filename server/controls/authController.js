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

            if (!errors.isEmpty()) 
                return res.status(400).json({ error: 'Заполните все поля' })

            const { username, password } = req.body

            const candidate = await User.findOne({ username })

            if (candidate) 
                return res.status(400).json({ error: 'Пользователь с таким логином уже существует' })
            
            const hashPassword = bcrypt.hashSync(password, 7);

            const userRole = await Role.findOne({ role: "WORKER" })

            const user = new User({ 
                username, 
                password: hashPassword, 
                role: userRole.role
            })

            user.save()

            return res.json({ answer: 'Вы успешло зарегестрировали пользователя' })

        } catch (error) {
            res.status(400).json({ error: 'Невозможно зарегестрироваться' })
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body

            const candidate = await User.findOne({ username })
            
            if (!candidate) 
                return res.status(400).json({ error: `Пользователь ${username} не найден` })

            const validPassword = bcrypt.compareSync(password, candidate.password)

            if (!validPassword) 
                return res.status(400).json({ error: `Пароль неверный` })

            const token = generateAccessToken(candidate._id, candidate.role)

            return res.json({ token })

        } catch (error) {
            res.status(400).json('Невозможно авторизоваться')
        }
    }
    
    async getAllUsers(req, res) {
        try {
            const users = await User.find()

            res.json(users)
        } catch(error) {
            res.status(400).json('Невозможно получить список пользователей')
        }
    }
}
export default new AuthController()