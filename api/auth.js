export default axios => ({
    async logIn(data) {
        return axios.post('http://localhost:5000/api/auth/login', data)
    }
})
