/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-17 17:02:20
 * @LastEditTime: 2022-04-20 16:39:35
 * @LastEditors: xyw
 */
import request from '../utils/request.js'

export function getHome() {
  return request({
    method: 'get',
    url: '/api/index/index',
  })
}

export function getQrcode() {
  return request({
    method: 'get',
    url: '/api/share/index',
  })
}
