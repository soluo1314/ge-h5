/*
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-11 16:45:13
 * @Description:
 */
import { Layout } from '../constants'

const HomeRoute = {
  path: '/home',
  component: Layout,
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: 'Home', keepAlive: false, showTab: true },
    },
  ],
}
export default HomeRoute
