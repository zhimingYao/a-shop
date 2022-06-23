import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path:'/',
    redirect: '/home'
  },
  {
    path:'/home',
    name:'HOME',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path:'/changePassword',
    name:'CPD',
    component:()=> import('../views/login/Forgotpassword/idnex.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router