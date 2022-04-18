/*
 * @Author: xyw
 * @Date: 2022-04-11 16:38:45
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-11 16:41:25
 * @Description:
 */
import { Layout } from '../constants'

const MeRoute = {
  path: '/me',
  component: Layout,
  children: [
    {
      path: '/me',
      name: 'Me',
      component: () => import('@/views/me/index'),
      meta: { title: 'Me', keepAlive: false, showTab: true },
    },
    {
      path: '/me/set',
      name: 'set',
      component: () => import('@/views/me/setting'),
      meta: { title: 'set', keepAlive: false, showTab: false },
    },
    {
      path: '/me/product',
      name: 'product',
      component: () => import('@/views/me/product'),
      meta: { title: 'product', keepAlive: false, showTab: false },
    },
    {
      path: '/me/bank',
      name: 'bank',
      component: () => import('@/views/me/bank'),
      meta: { title: 'bank', keepAlive: false, showTab: false },
    },
    {
      path: '/me/financial',
      name: 'financial',
      component: () => import('@/views/me/financial'),
      meta: { title: 'financial', keepAlive: false, showTab: false },
    },
    {
      path: '/me/redpack',
      name: 'redpack',
      component: () => import('@/views/me/redpack'),
      meta: { title: 'redpack', keepAlive: false, showTab: false },
    },
    {
      path: '/me/info',
      name: 'info',
      component: () => import('@/views/me/info'),
      meta: { title: 'info', keepAlive: false, showTab: false },
    },
    {
      path: '/me/setpassword',
      name: 'setpassword',
      component: () => import('@/views/me/setpassword'),
      meta: { title: 'setpassword', keepAlive: false, showTab: false },
    },
    {
      path: '/me/paypassword',
      name: 'paypassword',
      component: () => import('@/views/me/paypassword'),
      meta: { title: 'paypassword', keepAlive: false, showTab: false },
    },
  ],
}
export default MeRoute
