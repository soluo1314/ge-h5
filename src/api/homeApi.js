/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-17 17:02:20
 * @LastEditTime: 2022-04-22 14:51:31
 * @LastEditors: xyw
 */
import request from '../utils/request.js'

export function getHome() {
  return request({
    method: 'get',
    url: '/api/index/index',
  })
}
//二维码
export function getQrcode() {
  return request({
    method: 'get',
    url: '/api/share/index',
  })
}
//团队
export function team(params) {
  return request({
    method: 'get',
    url: '/api/me/team',
    params,
  })
}
//新闻
export function news(data) {
  return request({
    method: 'post',
    url: '/api/index/news',
    data,
  })
}
