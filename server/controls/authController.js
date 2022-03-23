import Role from '../models/Role.js'

class AuthController {
    async registration(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
    async login(req, res) {
        try {
            const userRole = new Role()
            const adminrRole = new Role({ role: "ADMIN" })
            await userRole.save()
            await adminrRole.save()
            res.json('hello')
        } catch (error) {
            
        }
    }
}
export default new AuthController()