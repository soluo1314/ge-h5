/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-17 14:38:53
 * @LastEditTime: 2022-04-17 17:00:59
 * @LastEditors: lz
 */
import request from '../utils/request.js'

export function getHome() {
  return request({
    method: 'get',
    url: '/index',
  })
}
