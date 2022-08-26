import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {path:'commodity', name:'CommodityView',
        meta:{
          isShow:true,
          title:'商品列表'
        },
        component: () => import(/* webpackChunkName: "commodity" */ '../views/CommodityView.vue')},
      {path:'user',name:'user', meta:{
          isShow:true,
          title:'用户列表'
        },component: () => import(/* webpackChunkName: "user" */ '../views/UserView.vue')},
      {path:'role',name:'RoleView', meta:{
          isShow:true,
          title:'角色列表'
        },component: () => import(/* webpackChunkName: "role" */ '../views/RoleView.vue')},
      {path:'authority',name:'AuthorityView', meta:{
          isShow:true,
          title:'角色列表'
        },component: () => import(/* webpackChunkName: "authority" */ '../views/AuthorityView.vue')},
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
