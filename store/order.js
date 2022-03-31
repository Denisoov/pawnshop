export const state = () => ({
    productsList : [],
    product: {
        firstName: null,
        surName: null,
        patronymic: null,
        series: null,
        number: null,
        productName: null,
        price: null,
        company: false,
        rebuy_date: null,
        image: null,
        articul: null
    }
})
export const actions = {
    async getProductList({commit, rootState}){
        const { data } = await this.$api.order.getProduct(rootState.user.token);
        console.log(rootState.user.token)

        commit('SET_PRODUCT_LIST', data)

        return data 
    },
    async sendProduct({commit, rootState}, product){
        await this.$api.order.sendProduct(rootState.user.token, product)
    }
}
export const mutations = {
    SET_PRODUCT_LIST(state, data){
        state.productsList = data
    }
}
export const getters = {
    productsList: ({productsList}) => productsList
}