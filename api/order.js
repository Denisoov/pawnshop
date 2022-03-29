export default axios => ({
    async getProduct(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        return axios.get('order/all')
    }
})
