const Home = () => import('@/pages/Home.vue')
const Mine = () => import('@/pages/Mine.vue')
const Cart = () => import('@/pages/Cart.vue')
const Category = () => import('@/pages/Category.vue')

export default [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  text: '主页',
  meta: {
    icon: '/images/base/cart.png'
  },
  components: {
    default: Home
  }
}, {
  path: '/category',
  name: 'category',
  text: '分类',
  meta: {
    icon: '@/images/base/cart.png'
  },
  components: {
    default: Category
  }
}, {
  path: '/cart',
  name: 'cart',
  text: '购物车',
  meta: {
    icon: '@/images/base/cart.png'
  },
  components: {
    default: Cart
  }
}, {
  path: '/mine',
  name: 'mine',
  text: '会员中心',
  meta: {
    icon: '@/images/base/cart.png'
  },
  components: {
    default: Mine
  }
}]
