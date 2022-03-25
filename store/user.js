export const state = () => ({
    token: null,
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
        
        const namePatronymic = (firstName && patronymic) 
            ? `${firstName} ${patronymic[0]}.`
            : `Пользователь`

        return namePatronymic
    },
    authorized: ({ token }) => !!token
}