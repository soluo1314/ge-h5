/*
 * @Author: xyw
 * @Date: 2022-04-22 14:47:42
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-22 17:44:06
 * @Description:
 */
import request from '../utils/request.js'
//充值界面
export function recharge(params) {
  return request({
    method: 'get',
    url: '/api/finance/recharge',
    params,
  })
}
//充值界面跳转
export function rechargeAct(data) {
  return request({
    method: 'post',
    url: '/api/finance/rechargeAct',
    data,
  })
}
//充值提交
export function rechargeAct_post(data) {
  return request({
    method: 'post',
    url: '/api/finance/rechargeAct_post',
    data,
  })
}
//充值记录
export function paylog(params) {
  return request({
    method: 'get',
    url: '/api/finance/paylog',
    params,
  })
}
//充值记录详情
export function payinfo(params) {
  return request({
    method: 'get',
    url: '/api/finance/payinfo',
    params,
  })
}
//提现界面
export function withdraw(params) {
  return request({
    method: 'get',
    url: '/api/finance/withdraw',
    params,
  })
}
//提现提交
export function withdrawAct(data) {
  return request({
    method: 'post',
    url: '/api/finance/withdrawAct',
    data,
  })
}
//提现记录
export function cashlog(params) {
  return request({
    method: 'get',
    url: '/api/finance/cashlog',
    params,
  })
}
