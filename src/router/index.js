import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: () => import('@/layouts/AppLayout.vue'),
    // children: [
    //   {
    //     path: '/profile',
    //     name: 'Профиль',
    //     permission: ['User'],
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import('@/views/profile/Main.vue'),
    //   },
    // ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
