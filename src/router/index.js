import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shop',
    component: shop
  },
  {
    path: '/cart',
    name: 'cart',
  }
]

const router = new VueRouter({
  routes
})

export default router
