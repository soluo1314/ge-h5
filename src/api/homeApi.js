/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-17 17:02:20
 * @LastEditTime: 2022-04-17 17:15:37
 * @LastEditors: lz
 */
import request from '../utils/request.js'

export function getHome() {
  return request({
    method: 'get',
    url: '/index',
  })
}
