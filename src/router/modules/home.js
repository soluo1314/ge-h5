/*
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-14 20:02:46
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
    {
      path: '/home/qrcode',
      name: 'HomeQrcode',
      component: () => import('@/views/home/qrcode'),
      meta: { title: 'HomeQrcode', keepAlive: false, showTab: false },
    },
    {
      path: '/home/recharge',
      name: 'HomeRecharge',
      component: () => import('@/views/home/recharge'),
      meta: { title: 'HomeRecharge', keepAlive: false, showTab: false },
    },
    {
      path: '/home/rechargerecords',
      name: 'HomeRechargerecords',
      component: () => import('@/views/home/records'),
      meta: { title: 'HomeRechargerecords', keepAlive: false, showTab: false },
    },
    {
      path: '/home/orderdetails',
      name: 'HomeOrderdetails',
      component: () => import('@/views/home/orderdetails'),
      meta: { title: 'HomeOrderdetails', keepAlive: false, showTab: false },
    },
    {
      path: '/home/withdrawal',
      name: 'HomeWithdrawal',
      component: () => import('@/views/home/withdrawal'),
      meta: { title: 'HomeWithdrawal', keepAlive: false, showTab: false },
    },
    {
      path: '/home/withdrawalrecords',
      name: 'HomeWithdrawalrecords',
      component: () => import('@/views/home/withdrawalrecords'),
      meta: { title: 'HomeWithdrawalrecords', keepAlive: false, showTab: false },
    },
  ],
}
export default HomeRoute
