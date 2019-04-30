import Vue from 'vue'
import Router from 'vue-router'
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

const roleString = ['/member', '/account/transaction']
const menuString = [
  {name: '查詢會員相關資料', realPath: ['/member', '/member/detail'], apiPath: '/member'},
  {name: '查詢交易', realPath: ['/account/transaction'], apiPath: '/account/transaction'}
]

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach((to, from, next) => {
  console.log(to)
  // TODO : check menu auth
  next();
});

export default router