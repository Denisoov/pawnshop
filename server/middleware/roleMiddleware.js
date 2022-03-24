import jwt from 'jsonwebtoken'

export default function(role) {
    return function(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1]
    
            if (!token) return res.status(403).json({ error: "Пользователь не авторизован" })
            
            const { role: userRole } = jwt.verify(token, "SECRET_KEY")

            if (role !== userRole) return res.status(403).json({ error: "У вас нет доступа" })
            
            next()
    
        } catch (error) {
            res.status(403).json({ error: "Ошибка доступа" })
        }
    }
}