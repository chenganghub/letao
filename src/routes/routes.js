const Home = () => import('@/pages/Home.vue')
const Mine = () => import('@/pages/Mine.vue')
const Cart = () => import('@/pages/Cart.vue')
const Category = () => import('@/pages/Category.vue')
const List = () => import('@/pages/List.vue')
const Detail = () => import('@/pages/Detail.vue')
const CateBoxList = () => import('../components/CateBoxList.vue')

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
    icon: '/../static/images/base/home.png'
  },
  components: {
    default: Home
  }
}, {
  path: '/category',
  name: 'category',
  text: '分类',
  meta: {
    isNav: true,
    icon: '/../static/images/base/category.png'
  },
  component: Category,
  children: [{
    path: 'nvxie',
    name: 'nvxie',
    component: CateBoxList
  }, {
    path: 'nanxie',
    name: 'nanxie',
    component: CateBoxList
  }, {
    path: 'tongxie',
    name: 'tongxie',
    component: CateBoxList
  }, {
    path: 'yundongxie',
    name: 'yundongxie',
    component: CateBoxList
  }, {
    path: 'xiangbao',
    name: 'xiangbao',
    component: CateBoxList
  }]
}, {
  path: '/cart',
  name: 'cart',
  text: '购物车',
  meta: {
    isNav: true,
    icon: '/../static/images/base/cart.png'
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
    icon: '/../static/images/base/mine.png'
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
  path: '/detail',
  name: 'detail',
  components: {
    default: Detail
  },
  meta: {
    isNav: false
  }
}]
