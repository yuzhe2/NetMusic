import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import MainComponent from '../views/Main/index.vue'
import EditComponent from '../views/Edit/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/main/:id',
    name: 'main',
    component: MainComponent
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditComponent
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export {
  router
}