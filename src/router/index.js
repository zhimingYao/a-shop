import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'HOME',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/index.vue')
  },
  /* 更改密码 */
  {
    path: '/changePassword',
    name: 'CPD',
    component: () => import('../views/login/Forgotpassword/idnex.vue')
  },
  {
    path: '/shopCar',
    name: 'ShopCar',
    component: () => import('../views/shopcar/index.vue')
  },
  /**底部导航 botNav**/
  {
    // 关于我们
    path: "/about",
    name: "About",
    component: () => import("../components/botNav/about"),
  },
  //底部路由跳转
  {
    //咨询服务
    path: "/consulting",
    name: "Consulting",
    component: () => import("../components/botNav/consulting"),
  },
  // 底部路由跳转结束
  {
    // 合租伙伴查询
    path: "/partner",
    name: "Partner",
    component: () => import("../components/botNav/partner"),
  },
  {
    // 服务条款
    path: "/clause",
    name: "Clause",
    component: () => import("../components/botNav/clause"),
  },
  {
    // 隐私政策
    path: "/privacy",
    name: "Privacy",
    component: () => import("../components/botNav/privacy"),
  },
  {
    // 服务中心
    path: "/ministry",
    name: "Ministry",
    component: () => import("../components/botNav/ministry"),
  },
  {
    // 招聘信息
    path: "/recruitment",
    name: "Recruitment",
    component: () => import("../components/botNav/recruitment"),
  },
  {
    // 全球的 404
    path: "/world",
    name: "World",
    component: () => import("../components/botNav/world"),
  },
  /**底部导航结束 botNav**/
  {
    // best
    path: '/best',
    name: 'Best',
    component: () => import('../views/best/best.vue'),
  }, 
  /* 跳转结束 */
  /* 点击头部导航栏跳转 */
  {
    path: '/popslideshow',
    name: 'Popslideshow',
    component: () => import('@/views/popslideshow/index')
  },
  /* 分类搜素 */
  {
    path:'/search',
    name:'search',
    component:()=> import ('@/views/search/index.vue'),
    redirect:'/search/product',
    children:[
      {
        path:'product',
        name:'product',
        component:()=>import ('@/views/search/product/index.vue')
      },
      {
        path:'activity',
        name:'activity',
        component:()=>import ('@/views/search/activity/index.vue')
      },
      {
        path:'show',
        name:'show',
        component:()=>import ('@/views/search/show/index.vue')
      }
    ]
  },
  {
    path: '/exclusive',
    name: 'exclusive',
    component: () => import('@/views/exclusive/wantneed/index.vue')
  },
  
];

const router = new VueRouter({
  routes
});

export default router;