<template>
  <div class="orderbox">
    <div class="top">
      <span><img class="img" src="/../static/images/mine/title_icon01.png" alt="">我的订单</span>
      <span>全部订单 ></span>
    </div>
    <div class="bottom">
      <div
      v-for="item in imglist"
      :key="item.text"
      class="item"
      >
        <img :src="item.url" alt="">
        <span>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MineOrder',
  data () {
    return {
      imglist: [{
        url: '/../static/images/mine/order_icon01.png',
        text: '待支付'
      }, {
        url: '/../static/images/mine/order_icon02.png',
        text: '待发货'
      }, {
        url: '/../static/images/mine/order_icon03.png',
        text: '待收货'
      }, {
        url: '/../static/images/mine/order_icon04.png',
        text: '待评价'
      }, {
        url: '/../static/images/mine/order_icon05.png',
        text: '退款/售后'
      }]
    }
  }
}
</script>

<style lang='less' scoped>
@import '../lib/base.less';
.orderbox{
  background-color: white;
  margin-top: 10px;
  .top{
    height: 45px;
    line-height: 44px;
    font-size: 16px;
    padding: 0 15px;
    border-bottom: 1px solid @gray;
    .img{
      height: 24px;
      width: 24px;
      position: relative;
      top: 6px;
      margin-right: 5px;
    }
    span:last-child{
      float: right;
    }
  }
  .bottom{
    height: 64px;
    display: flex;
    padding: 0 15px;
    justify-content: space-around;
    align-items: center;
    .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      span{
        font-size: 12px;
      }
      img{
        width: 27px;
        height: 24px;
      }
    }
  }
}

</style>
