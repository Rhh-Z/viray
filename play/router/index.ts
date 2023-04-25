import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import About from '../view/About-view.vue'
import User from '../view/User-view.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/user'
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user',
    component: User
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes: routes
})