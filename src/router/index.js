import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {

    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'HOME',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/index.vue'),
  },
  {
    path: '/changePassword',
    name: 'CPD',
    component: () => import('../views/login/Forgotpassword/idnex.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/botNav/about'),
  }, {
    path: '/consulting',
    name: 'Consulting',
    component: () => import('../components/botNav/consulting'),
  }, {
    path: '/partner',
    name: 'Partner',
    component: () => import('../components/botNav/partner'),
  }, {
    path: '/clause',
    name: 'Clause',
    component: () => import('../components/botNav/clause'),
  }, {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../components/botNav/privacy'),
  }, {
    path: '/ministry',
    name: 'Ministry',
    component: () => import('../components/botNav/ministry'),
  }, {
    path: '/recruitment',
    name: 'Recruitment',
    component: () => import('../components/botNav/recruitment'),
  }, {
    path: '/world',
    name: 'World',
    component: () => import('../components/botNav/world'),
  },
];


const router = new VueRouter({
  routes,
});

export default router;
