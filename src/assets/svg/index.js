import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

// 注册到全局
Vue.component('svg-icon', SvgIcon)

const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const req = require.context('./icons', false, /\.svg$/)
requireAll(req)
