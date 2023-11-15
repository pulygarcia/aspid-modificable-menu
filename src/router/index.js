import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuLayoutView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLayoutView.vue'),
      children: [
        {
          path: '/admin/new',
          name: 'new-item',
          component: () => import('../views/admin/AddNewItemView.vue')
        },
        {
          path: '/admin/items',
          name: 'current-menu',
          component: () => import('../views/admin/CurrentMenuView.vue')
        },
      ]
    },
  ]
})

export default router
