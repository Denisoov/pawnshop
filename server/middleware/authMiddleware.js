import jwt from 'jsonwebtoken'

export default function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) 
            return res.status(403).json({ error: "Пользователь не авторизован" })

        const decodeJWT = jwt.verify(token, "SECRET_KEY")

        req.user = decodeJWT

        next()

    } catch (error) {
        res.status(403).json({ error: "Проблема с авторизацией" })
    }
}