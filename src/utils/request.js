/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-17 14:38:53
 * @LastEditTime: 2022-04-24 18:22:30
 * @LastEditors: lz
 */
import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'
import router from '@/router'

// create an axios instance

const service = axios.create({
  // baseURL: 'https://api2.kk8898.co', // url = base url + request url
  baseURL: process.env.VUE_APP_API_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60 * 1000, // request timeout 60s
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = store.getters.token
    }
    Toast.loading({
      duration: 0,
      message: 'loading...',
      forbidClick: true,
    })
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data
    Toast.clear()
    if (res.code !== 1) {
      if (res.code === -98) {
        // Dialog.confirm({
        //   title: '提示',
        //   message: '登录已过期，请重新登录',
        // })
        //   .then(() => {
        //     // on confirm
        //     store
        //       .dispatch('user/LogOut')
        //       .then(() => {
        //         location.reload()
        //       })
        //       .catch(() => {
        //         store.dispatch('user/FedLogOut').then(() => {
        //           location.reload()
        //         })
        //       })
        //     router.push('/login')
        //   })
        //   .catch(() => {
        //     // on cancel
        //   })
        Toast.fail(res.info || 'Error')
        router.push('/login')
      } else {
        Toast.fail(res.info || 'Error')
      }
      return Promise.reject(res)
    } else {
      return Promise.resolve(res)
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    Toast.fail('网络异常')
    return Promise.reject(error)
  }
)

export default service
