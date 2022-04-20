/*
 * @Author: xyw
 * @Date: 2022-04-20 17:25:35
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-20 17:51:13
 * @Description:
 */
import request from '../utils/request.js'
//产品列表
export function plist(params) {
  return request({
    method: 'get',
    url: '/api/product/plist',
    params,
  })
}
//产品详情
export function goods() {
  return request({
    method: 'get',
    url: '/api/product/goods',
  })
}
//我的产品
export function order() {
  return request({
    method: 'get',
    url: '/api/product/order',
  })
}
//产品购买
export function invest() {
  return request({
    method: 'post',
    url: '/api/product/invest',
  })
}
