/*
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-11 16:47:44
 * @Description:
 */
import { Layout } from '../constants'
import HomeRoute from './home'
import MeRoute from './me'
import PrizeRoute from './prize'
import ProductRoute from './product'
const RootRoute = {
  path: '/',
  component: Layout,
  redirect: '/home',
}

export const basicRoutes = [RootRoute, HomeRoute, MeRoute, PrizeRoute, ProductRoute]
