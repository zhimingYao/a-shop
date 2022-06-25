import Vue from 'vue'
import SvgIcon from './SvgIcon.vue' // svg组件
// 注册全局组件
Vue.component('svg-icon', SvgIcon)
const req = require.context('./svg', false, /\.svg$/)
const requireAll = reqireContext => reqireContext.keys().map(reqireContext)
requireAll(req)
console.log(requireAll(req));