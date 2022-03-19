export const state = () => ({
    firstName: null,
    secondName: null,
    patronymic: null,
    phone: null,
    passport: {
        seria: null,
        number: null,
    }

})

export const actions = {
}

export const mutations = {
}

export const getters = {
    userName: ({ firstName, patronymic }) => {
        const namePatronymic = `${firstName} ${patronymic[0]}`

        return namePatronymic
    }
}