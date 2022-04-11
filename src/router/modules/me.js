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
  ],
}
export default MeRoute
