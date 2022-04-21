/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-17 14:38:53
 * @LastEditTime: 2022-04-21 20:23:10
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
export function register(data) {
  return request({
    method: 'post',
    url: '/api/user/registerAct',
    data,
  })
}
export function getUserInfo() {
  return request({
    method: 'get',
    url: '/api/index/userinfo',
  })
}
export function getVcode() {
  return request({
    method: 'get',
    url: '/api/GetVcode',
  })
}
