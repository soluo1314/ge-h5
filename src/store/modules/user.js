/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-18 14:03:39
 * @LastEditTime: 2022-04-22 11:24:04
 * @LastEditors: lz
 */
import { login, logOut, getUserInfo } from '@/api/userApi'
import { getToken, setToken, removeToken } from '@/utils/token'

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
    state.userInfo = info
  },
  M_LOGIN_OUT: (state, value) => {
    state.userInfo = value
    localStorage.removeItem('GeUserInfo')
  },
}

const actions = {
  A_LOGIN_OUT: ({ commit }) => {
    return new Promise((resolve, reject) => {
      logOut()
        .then(() => {
          removeToken()
          commit('M_SET_TOKEN', '')
          commit('M_LOGIN_OUT', null)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
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
