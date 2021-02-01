import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import App from '../App.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Pet from '../components/pet/index.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   // name: 'Homepage',
  //   component: App
  // },
  {
    path: '/hello',
    component: HelloWorld
  },
  {
    path: '/pet',
    component: Pet
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
