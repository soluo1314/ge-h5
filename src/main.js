import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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
