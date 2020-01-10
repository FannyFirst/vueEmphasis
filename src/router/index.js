import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:"active",
  linkExactActiveClass:"active",
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

