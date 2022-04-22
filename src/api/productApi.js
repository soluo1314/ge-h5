/*
 * @Author: xyw
 * @Date: 2022-04-20 17:25:35
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-22 14:02:09
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
export function goods(params) {
  return request({
    method: 'get',
    url: '/api/product/goods',
    params,
  })
}
//我的产品
export function order(params) {
  return request({
    method: 'get',
    url: '/api/product/order',
    params,
  })
}
//产品购买
export function invest(data) {
  return request({
    method: 'post',
    url: '/api/product/invest',
    data,
  })
}
//产品接收
export function receiveProfit(data) {
  return request({
    method: 'post',
    url: '/api/product/receiveProfit',
    data,
  })
}
