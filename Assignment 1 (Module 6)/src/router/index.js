import { createRouter, createWebHistory } from 'vue-router'
const LoginView = () => import('../views/LoginView.vue')
const RegisterView = () => import('../views/RegisterView.vue')
const NotFound = () => import('../views/NotFound.vue')
const ForgotPassword = () => import('../views/ForgotPassword.vue')
const HomeView = () => import('../views/welcomeView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path:'/forgot-password',
      name:'password-forgot',
      component: ForgotPassword
    },
    {
      path: '/:pathMatch(.*)*',
      name:NotFound,
      component:NotFound
    }
  ]
})

export default router
