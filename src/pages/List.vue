<template>
  <div class="list-page">
    <!-- vue动画 -->
    <transition name="bounce">
       <listcart v-show="isShow" class="cartbox"></listcart>
    </transition>
    <ul class="top">
      <!-- 循环渲染数据
       点击时的title和现在的title一样就有active类名
        isactive是个预定状态
        点击那个就把他的tltle修改到 isactive
        点击时也把icon的状态改掉-->
      <li
      v-for="(item,id) in list"
      :key="item.text"
      :class="{ active : item.text === isactive}"
       @click="liClick(item.text,id)"
       >
        {{item.text}}
        <Icon :icon="item.icon" />
      </li>
    </ul>

   <div class="box">
     <!--利用插件的滚动加载  外层盒子必须给高度  再刷新数据时必须是追加数组不能 -->
      <ul
       v-infinite-scroll="loadMore"
       infinite-scroll-disabled="loading"
       infinite-scroll-distance="10" class="list"
       id="scroll"
       >
        <li
         v-for="itmes in goodslist"
         :key="itmes.img"
         @click="toDetail(itmes.id)"
         >
          <img v-lazy.container="itmes.img" alt="">
          <p>{{itmes.title}}</p>
          <p>￥{{itmes.newprice}} <s>{{itmes.price}}</s></p>
          <p>销量&nbsp;&nbsp;{{itmes.salesvolume}}
            <!-- 图标  icon渲染出来是个i标签 不能直接加点击事件 -->
            <span @click.stop="cartIconClick">
            <Icon
            class="cart-icon"
            icon='cart'
            />
            </span>
          </p>
          <p>{{itmes.discount}}折</p>
        </li>
      </ul>
   </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { getList } from '@/services'
import { Icon, listcart } from '@/components'
import { InfiniteScroll, Lazyload } from 'mint-ui'

Vue.use(InfiniteScroll, Lazyload)
export default {
  name: 'list',
  data () {
    return {
      isShow: false,
      list: [{
        text: '上架时间',
        icon: true
      }, {
        text: '价格',
        icon: true
      }, {
        text: '数量',
        icon: true
      }, {
        text: '折扣',
        icon: false
      }],
      isactive: null,
      goodslist: [],
      loading: false,
      // 排序参数化默认值
      sortlist: {
        sort: 1,
        type: 1,
        brand: 1,
        sorttype: 1
      }
    }
  },
  components: {
    Icon,
    listcart
  },
  mounted () {
    // 接受修改商品参数
    const {type, brand} = this.$route.query
    this.sortlist.type = type
    this.sortlist.brand = brand
  },
  methods: {
    cartIconClick(){
      console.log(1)
      this.isShow = true 
    },
    liClick (val, id) {
      this.isactive = val
      // console.log(this.list[id].icon)
      // 点击时更改图标样式
      this.list[id].icon = !this.list[id].icon
      // 点击时修改排序类型参数
      this.sortlist.sort = id
      // console.log(this.sort)
      // 点击时修改排序方式参数
      this.sortlist.sorttype = this.list[id].icon === true ? 1 : 2
      console.log(this.sortlist)
      getList(this.sortlist)
        .then(resp => {
          this.goodslist = resp
        })
    },
    // 跳转页面
    toDetail (id) {
      this.$router.history.push(`/detail/${id}`)
    },
    loadMore () {
      this.loading = true
      getList(this.sortlist)
        .then(resp => {
          this.goodslist = this.goodslist.concat(resp)
          this.loading = false
        })
    }
  }
}
</script>

<style lang="less" scoped>
.list-page {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  background: #f2f2f2;
  li {
    flex: 1;
    border-right: 1px solid #999;
    display: flex;
    height: 25px;
    justify-content: center;
    align-items: center;
  }
  .active {
    color: red;
    border-bottom: 1px solid pink;
  }
}
.box{
  flex: 1;
  overflow: hidden;

}
.list {
  display: flex;
  padding: 0 4%;
  overflow-x: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  li {
    width: 48%;
    img {
      width: 100%;
      margin-top: 20px;
    }
    p:nth-child(2) {
      font-size: 16px;
      margin-top: 15px;
    }
    p:nth-child(3) {
      font-size: 15px;
      color: red;
      margin-top: 15px;
      margin-bottom: 15px;
      > s {
        font-size: 12px;
        margin-left: 10px;
        color: #999;
      }
    }
    p:nth-child(4) {
      font-size: 12px;
      margin-top: 15px;
      margin-bottom: 15px;
      .cart-icon {
        float: right;
        margin-right: 5px;
      }
    }
    p:nth-child(5) {
      font-size: 12px;
      margin-top: 15px;
      width: 45px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      background: red;
      color: white;
    }
  }
}
.bounce-enter-active {
  animation: bounce-in 2s;
}
.bounce-leave-active {
  animation: bounce-in 2s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
     transform-origin: bottom;
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
