/*
 * @Author: xyw
 * @Date: 2022-04-21 16:12:29
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-21 16:13:47
 * @Description:
 */
import request from '../utils/request.js'
//抽奖大厅
export function lottery(params) {
  return request({
    method: 'get',
    url: '/api/gift/lottery',
    params,
  })
}
//抽奖
export function lotteryAct(data) {
  return request({
    method: 'post',
    url: '/api/gift/lotteryAct',
    data,
  })
}
//兑换红包
export function redpackAct(data) {
  return request({
    method: 'post',
    url: '/api/gift/redpackAct',
    data,
  })
}
