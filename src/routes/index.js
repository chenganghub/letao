import VueRouter from 'vue-router'
import Vue from 'vue'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/category/:type') {
    return next('/category/yundongxie')
  }
  return next()
})

export default router
