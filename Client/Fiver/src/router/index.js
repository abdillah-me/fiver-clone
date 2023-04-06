import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterPage.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/OrdersPage.vue')
    },
    {
      path: '/mygigs',
      name: 'mygigs',
      component: () => import('../views/MyGigs.vue')
    },
    {
      path: '/gigs',
      name: 'gigs',
      component: () => import('../views/GigsPage.vue')
    },
    {
      path: '/gig/:id',
      name: 'gig',
      component: () => import('../views/GigPage.vue')
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('../views/MessagesPage.vue')
    },
    {
      path: '/message/:id',
      name: 'message',
      component: () => import('../views/MessagePage.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddPage.vue')
    },
  ]
})

export default router
