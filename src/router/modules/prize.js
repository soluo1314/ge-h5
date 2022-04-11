/*
 * @Author: xyw
 * @Date: 2022-04-11 16:38:22
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-11 16:46:16
 * @Description:
 */
import { Layout } from '../constants'

const PrizeRoute = {
  path: '/prize',
  component: Layout,
  children: [
    {
      path: '/prize',
      name: 'Prize',
      component: () => import('@/views/prize/index'),
      meta: { title: 'prize', keepAlive: false, showTab: true },
    },
  ],
}
export default PrizeRoute
