/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-18 14:03:39
 * @LastEditTime: 2022-04-19 22:20:45
 * @LastEditors: lz
 */
import { login, getUserInfo } from '@/api/userApi'
import { getToken, setToken } from '@/utils/token'

const userInfo = JSON.parse(localStorage.getItem('GeUserInfo'))
const state = {
  token: getToken(),
  userInfo: userInfo || null,
}

const mutations = {
  M_SET_TOKEN: (state, value) => {
    state.token = value
  },
  M_SET_INFO: (state, info) => {
    localStorage.setItem('GeUserInfo', JSON.stringify(info))
    state.userInfo = JSON.stringify(info)
  },
}

const actions = {
  A_LOGIN: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      login(data)
        .then(async (res) => {
          await setToken(res.data.token)
          await commit('M_SET_TOKEN', res.data.token)
          await resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  A_GET_USER_INFO: ({ commit }) => {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then((res) => {
          commit('M_SET_INFO', res.data)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
