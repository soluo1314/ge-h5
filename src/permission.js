/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-19 20:45:58
 * @LastEditTime: 2022-04-19 22:21:05
 * @LastEditors: lz
 */
import router from './router'
import store from './store'
import { getToken } from './utils/token'
router.beforeEach(async (to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const hasToken = getToken()
    if (hasToken) {
      const userInfo = store.getters.userInfo || {}
      if (Object.keys(userInfo).length) {
        next()
      } else {
        try {
          await store.dispatch('user/A_GET_USER_INFO')
          next()
        } catch (error) {
          next('/login')
        }
      }
    } else {
      next('/login')
    }
  }
})
