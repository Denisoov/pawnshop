import Auth from '@/api/auth'
import Order from '@/api/order'
import Admin from '@/api/admin'

export default ({$axios, store}, inject) => {
    
    const token = store.state.user.token

    const apiFactories = {
        auth:  Auth($axios),
        admin: Admin($axios),
        order: Order($axios)
    }

    inject('api', apiFactories)
}