import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'task1',
    component: () => import('../views/InputLinkView.vue')
  },
  {
    path: '/task2',
    name: 'task2',
    component: () => import('../views/TimePickerView.vue')
  },
  {
    path: '/task3',
    name: 'task3',
    component: () => import('../views/MultiSelectView.vue')
  },
  {
    path: '/task4',
    name: 'task4',
    component: () => import('../views/MultiLineView.vue')
  },
  {
    path: '/task5',
    name: 'task5',
    component: () => import('../views/DataTableView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
