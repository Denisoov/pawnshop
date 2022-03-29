import Auth from '@/api/auth'
import Order from '@/api/order'

export default ({$axios, store}, inject) => {
    
    const token = store.state.user.token

    const axiosInstance = $axios.create({
        baseURL: "http://localhost:5000/api/",
        headers: {'Authorization':  `Bearer ${token}`}
    })

    const apiFactories = {
        auth:  Auth(axiosInstance),
        order: Order(axiosInstance)
    }

    inject('api', apiFactories)
}