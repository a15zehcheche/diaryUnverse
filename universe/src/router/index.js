import { createRouter, createWebHistory } from '@ionic/vue-router';

import MemoriesPage from '../pages/MemoriesPage.vue';
import HomePage from '../pages/HomePage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/memories/:id',
    component: () => import('../pages/MemoryDetailsPage.vue')
  },
  {
    path: '/memories/add',
    component: () => import('../pages/AddMemoryPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router