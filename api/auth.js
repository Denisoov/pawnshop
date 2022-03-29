export default axios => ({
    async logIn(data) {
        return axios.post('auth/login', data)
    }
})
