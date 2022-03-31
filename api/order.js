export default axios => ({
    async getProduct(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        return axios.get('http://localhost:5000/api/order/all')
    },
    async sendProduct(token, product){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        return axios.post('http://localhost:5000/api/order/create', product)
    }
})
