import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCasinoStore } from "@/stores/casino";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach( async (to, from, next) => {
  // Redirects to login if a user isn't logged in
  const store = useCasinoStore();
  if (to.path !== '/login' && !store.isAuthenticated) next({ path: '/login' })
  else next()
})

export default router