import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "HOME",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/register/index.vue"),
  },
  {
    path: "/changePassword",
    name: "CPD",
    component: () => import("../views/login/Forgotpassword/idnex.vue"),
  },
  /**底部导航 botNav**/
  {
    // 关于我们
    path: "/about",
    name: "About",
    component: () => import("../components/botNav/about"),
  },
  {
    //咨询服务
    path: "/consulting",
    name: "Consulting",
    component: () => import("../components/botNav/consulting"),
  },
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
];

const router = new VueRouter({
  routes,
});

export default router;
