import Vue from 'vue'
import VueRouter from 'vue-router'
import cart from '../views/cart'
import shop from '../views/shop'

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
    component: cart

  }
]

const router = new VueRouter({
  routes
})

export default router
