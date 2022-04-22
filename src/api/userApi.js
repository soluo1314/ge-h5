/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-17 14:38:53
 * @LastEditTime: 2022-04-22 11:07:55
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
export function logOut() {
  return request({
    method: 'get',
    url: '/api/user/logout',
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
export function getRegVcode() {
  return request({
    method: 'get',
    url: '/api/GetVcode/register',
  })
}
export function updateNickName(data) {
  return request({
    method: 'post',
    url: '/api/setting/c_nickname',
    data,
  })
}
