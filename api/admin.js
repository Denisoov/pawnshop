export default axios => ({
    async allUsers(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        return axios.get('http://localhost:5000/api/admin/getAllUsers')
    },
    async createUser(token, user){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        return axios.post('http://localhost:5000/api/admin/registration', user)
    }
})
