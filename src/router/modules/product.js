/*
 * @Author: xyw
 * @Date: 2022-04-11 16:38:34
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-11 16:45:05
 * @Description:
 */
/*
 * @Author: xyw
 * @Date: 2022-04-11 16:38:45
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-11 16:41:25
 * @Description:
 */
import { Layout } from '../constants'

const ProductRoute = {
  path: '/product',
  component: Layout,
  children: [
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/views/product/index'),
      meta: { title: 'product', keepAlive: false, showTab: true },
    },
  ],
}
export default ProductRoute
