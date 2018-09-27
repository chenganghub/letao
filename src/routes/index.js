import VueRouter from 'vue-router'
import Vue from 'vue'

import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = Boolean(window.localStorage.getItem('loginUser'))
  if (to.fullPath !== '/login' && to.meta.needLogin === true && isLogin === false) {
    return next('/login')
  }
  if (to.fullPath === '/category') {
    return next('/category/yundongxie')
  }
  return next()
})

export default router
