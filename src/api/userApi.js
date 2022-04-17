/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-17 14:38:53
 * @LastEditTime: 2022-04-17 20:53:53
 * @LastEditors: lz
 */
import request from '../utils/request.js'

export function login(data) {
  return request({
    method: 'post',
    url: '/api/user/login',
    data,
  })
}
