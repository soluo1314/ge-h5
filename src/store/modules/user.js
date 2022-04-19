/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-18 14:03:39
 * @LastEditTime: 2022-04-19 19:44:39
 * @LastEditors: lz
 */
const state = {
  token: localStorage.getItem('geToken'),
}

const mutations = {
  SET_TOKEN: (state, value) => {
    localStorage.setItem('geToken', value)
    state.token = value
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
