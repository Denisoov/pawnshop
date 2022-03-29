import Auth from '@/api/auth'
import Order from '@/api/order'

export default ({$axios, store}, inject) => {
    
    const token = store.state.user.token

    const apiFactories = {
        auth:  Auth($axios),
        order: Order($axios)
    }

    inject('api', apiFactories)
}