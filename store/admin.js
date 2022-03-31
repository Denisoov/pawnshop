export const state = () => ({
})
export const actions = {
    async allUsersGetter({commit, rootState}){
        const { data } = await this.$api.admin.allUsers(rootState.user.token);

        return data 
    },
    async userCreate({commit, rootState}, user){
        await this.$api.admin.createUser(rootState.user.token, user)
    }
}
export const mutations = {
}
export const getters = {
}