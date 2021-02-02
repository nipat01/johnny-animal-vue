import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import App from '../App.vue'
import Homepage from '../views/Homepage.vue'
import HelloWorld from '../components/HelloWorld.vue'
import AllPet from '../components/pet/AllPet.vue'
import PetById from '../components/pet/PetById.vue'
import AllShelter from '../components/shelter/AllShelter.vue'
import ShelterById from '../components/shelter/ShelterById.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   // name: 'Homepage',
  //   component: App
  // },
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/hello',
    component: HelloWorld
  },
  {
    path: '/allpet',
    component: AllPet
  },
  {
    path: '/pet/:id',
    component: PetById
  },
  {
    path: '/allshelter',
    component: AllShelter
  },
  {
    path: '/user/:id',
    component: ShelterById
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
