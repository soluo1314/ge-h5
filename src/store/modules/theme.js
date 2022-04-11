/*
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-11 17:03:41
 * @Description:
 */
const state = {
  themeType: 'nomal',
  themes: {
    orange: {
      color: 'rgb(210, 160, 95)',
    },
    blue: {
      color: '#2d8cf0',
    },
    red: {
      color: '#F26755',
    },
    green: {
      color: '#1AAD19',
    },
    purple: {
      color: '#796EFF',
    },
  },
}

const mutations = {
  SET_THEME_TYPE: (state, value) => {
    state.themeType = value
  },
}

const actions = {
  setThemeType({ commit }, value) {
    window.document.documentElement.setAttribute('data-theme', value)
    commit('SET_THEME_TYPE', value)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
