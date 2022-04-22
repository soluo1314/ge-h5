/*
 * @Author: xyw
 * @Date: 2022-04-21 17:08:25
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-21 20:36:01
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
//账变记录
export function balancelog(params) {
  return request({
    method: 'get',
    url: '/api/finance/balancelog',
    params,
  })
}
//绑定银行卡_信息
export function bank(params) {
  return request({
    method: 'get',
    url: '/api/setting/bank',
    params,
  })
}
//绑定银行卡_update
export function bank_update(data) {
  return request({
    method: 'post',
    url: '/api/setting/bank_update',
    data,
  })
}
//修改密码
export function password_update(data) {
  return request({
    method: 'post',
    url: '/api/setting/password_update',
    data,
  })
}
