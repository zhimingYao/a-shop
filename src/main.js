import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/master.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ShopItem from './components/ShopItem/index.js'

Vue.use(ShopItem)
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
