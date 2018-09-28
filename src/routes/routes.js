const Home = () => import('@/pages/Home.vue')
const Mine = () => import('@/pages/Mine.vue')
const Cart = () => import('@/pages/Cart.vue')
const Category = () => import('@/pages/Category.vue')
const List = () => import('@/pages/List.vue')
const Detail = () => import('@/pages/Detail.vue')
const Login = () => import('@/pages/Login.vue')
const Register = () => import('@/pages/Register.vue')
const CateBoxList = () => import('../components/CateBoxList.vue')
const Tabbar = () => import('../components/Tabbar.vue')
const CateSearch = () => import('../components/CateSearch.vue')

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
    needLogin: false,
    icon: '/../static/images/base/home.png'
  },
  components: {
    default: Home,
    Tabbar
  }
}, {
  path: '/category',
  name: 'category',
  text: '分类',
  meta: {
    isNav: true,
    needLogin: false,
    icon: '/../static/images/base/category.png'
  },
  components: {
    default: Category,
    Tabbar
  },
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
    needLogin: true,
    icon: '/../static/images/base/cart.png'
  },
  components: {
    default: Cart,
    Tabbar
  }
}, {
  path: '/mine',
  name: 'mine',
  text: '会员中心',
  meta: {
    isNav: true,
    needLogin: true,
    icon: '/../static/images/base/mine.png'
  },
  components: {
    default: Mine,
    Tabbar
  }
}, {
  path: '/list',
  name: 'list',
  components: {
    default: List,
    Tabbar,
    CateSearch
  },
  meta: {
    isNav: false,
    needLogin: false
  }
}, {
  path: '/detail',
  name: 'detail',
  components: {
    default: Detail
  },
  meta: {
    isNav: false,
    needLogin: false
  }
}, {
  path: '/login',
  name: 'login',
  components: {
    default: Login
  },
  meta: {
    isNav: false
  }
}, {
  path: '/register',
  name: 'register',
  components: {
    default: Register
  },
  meta: {
    isNav: false,
    needLogin: false
  }
}]
