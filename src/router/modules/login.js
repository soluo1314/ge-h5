/*
 * @Author: xyw
 * @Date: 2022-04-11 16:38:22
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-11 16:46:16
 * @Description:
 */
import { Layout } from '../constants'

const LoginRoute = {
  path: '/login',
  component: Layout,
  children: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index'),
      meta: { title: 'login', keepAlive: false, showTab: false },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/login/register'),
      meta: { title: 'register', keepAlive: false, showTab: false },
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('@/views/login/forget'),
      meta: { title: 'forget', keepAlive: false, showTab: false },
    },
  ],
}
export default LoginRoute
