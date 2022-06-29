import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/master.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ShopItem from './components/ShopItem/index.js'
import TabBtn from '@/components/TabBtn/index.js'
import '@/icons'
import classify from './components/classify/index.js'


Vue.use(ShopItem)
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(TabBtn)
Vue.use(ShopItem);
Vue.use(classify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
