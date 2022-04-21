/*
 * @Author: xyw
 * @Date: 2022-04-21 17:08:25
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-21 17:08:26
 * @Description:
 */
import request from '../utils/request.js'
//我的
export function me(params) {
  return request({
    method: 'get',
    url: '/api/me/index',
    params,
  })
}
