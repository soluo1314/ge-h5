/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-18 14:03:39
 * @LastEditTime: 2022-04-19 20:46:07
 * @LastEditors: lz
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission.js'
// svg icon
import './assets/svg/index.js'

// global css
import './assets/styles/index.scss'

// vant
import './plugins/vant.js'

// tools
import './plugins/tools.js'

// set theme
store.dispatch('theme/setThemeType', store.getters.themeType)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
