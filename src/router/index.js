import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManagerComponent from '../components/proveedores/ManagerComponent.vue'
import RegisterComponent from '../components/proveedores/RegisterComponent.vue'
import LoginView from '../views/LoginView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register-proveedores',
    name: 'register-proveedores',
    component: RegisterComponent
  },
  {
    path:'/login',
    name:'login',
    component:LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/manager-proveedores',
    name: 'manager-proveedores',
    component: ManagerComponent,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
