import jwt from 'jsonwebtoken'

export default function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]

        console.log(token)

        if (!token) return res.status(403).json({ error: "Пользователь не авторизован" })

        const decodeJWT = jwt.verify(token, "SECRET_KEY")
        console.log(req)
        return res.user = decodeJWT

    } catch (error) {
        res.status(403).json({ error: "Невозможно получить список пользователей" })
    }
}