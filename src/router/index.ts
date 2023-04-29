import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/InputLinkView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/picker',
    name: 'picker',
    component: () => import('../views/TimePickerView.vue')
  },
  {
    path: '/multiselect',
    name: 'multiselect',
    component: () => import('../views/MultiSelectView.vue')
  },
  {
    path: '/multiline',
    name: 'multiline',
    component: () => import('../views/MultiLineView.vue')
  },
  {
    path: '/datatable',
    name: 'datatable',
    component: () => import('../views/DataTableView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
