import Vue from 'vue';
import Router from 'vue-router';
import { checkPageAuth } from '@/router/auth';
Vue.use(Router)

const routes = [
  {
    path: '/member',
    name: 'member', component: () => import('@/views/members/Search.vue'),
  },
  {
    path: '/member/detail/:uuid?',
    name: 'member-detail', component: () => import('@/views/members/Detail.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach((to, from, next) => {
  console.log(to)
  // TODO : check menu auth
  // let apiPaths = ['/member', '/account/modified/abnormal/approval'];
  let apiPaths = new Array<string>();
  const isOk = checkPageAuth(to.name, apiPaths);
  console.log(isOk);
  next();
});

export default router