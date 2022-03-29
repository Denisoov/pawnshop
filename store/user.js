export const state = () => ({
  token: null,
  firstName: null,
  secondName: null,
  patronymic: null,
  phone: null,
  passport: {
    seria: null,
    number: null,
  },
});

export const actions = {
  async logIn({ commit }, dataLogin) {
    const { data } = await this.$api.auth.logIn(dataLogin)

    commit('SET_TOKEN', data.token)
  },
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
};

export const getters = {
  userName: ({ firstName, patronymic }) => {
    const namePatronymic =
      firstName && patronymic
        ? `${firstName} ${patronymic[0]}.`
        : `Пользователь`;

    return namePatronymic;
  },
  authorized: ({ token }) => !!token,
};
