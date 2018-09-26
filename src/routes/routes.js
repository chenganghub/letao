const Home = () => import('@/pages/Home.vue')
const Mine = () => import('@/pages/Mine.vue')
const Cart = () => import('@/pages/Cart.vue')
const Category = () => import('@/pages/Category.vue')
const List = () => import('@/pages/List.vue')
const Detail = () => import('@/pages/Detail.vue')

export default [{
  path: '/',
  redirect: '/home',
  meta: {
    isNav: false
  }
}, {
  path: '/home',
  name: 'home',
  text: '主页',
  meta: {
    isNav: true,
    icon: '../../static/images/base/home.png'
  },
  components: {
    default: Home
  }
}, {
  path: '/category/:type',
  name: 'category',
  text: '分类',
  meta: {
    isNav: true,
    icon: '../../static/images/base/category.png'
  },
  components: {
    default: Category
  }
}, {
  path: '/cart',
  name: 'cart',
  text: '购物车',
  meta: {
    isNav: true,
    icon: '../../static/images/base/cart.png'
  },
  components: {
    default: Cart
  }
}, {
  path: '/mine',
  name: 'mine',
  text: '会员中心',
  meta: {
    isNav: true,
    icon: '../../static/images/base/mine.png'
  },
  components: {
    default: Mine
  }
}, {
  path: '/list',
  name: 'list',
  components: {
    default: List
  },
  meta: {
    isNav: false
  }
}, {
  path: '/detail/:id',
  name: 'detail',
  components: {
    default: Detail
  },
  meta: {
    isNav: false
  }
}]
