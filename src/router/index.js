/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-14 22:08:14
 * @LastEditTime: 2022-04-14 22:10:05
 * @LastEditors: lz
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { basicRoutes } from './modules/index'

const createRouter = () =>
  new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    baseUrl: '/h5',
    routes: basicRoutes,
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
