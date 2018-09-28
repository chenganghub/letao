<template>
  <div class="modulebox">
    <div
    v-for="item in items"
    :key="item.text"
    class="items">
      <div class="item">
        <img :src="item.url" alt="">
        <span>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MineModules',
  data () {
    return {
      items: [{
        text: '中奖纪录',
        url: '/../static/images/mine/class_icon01.png'
      }, {
        text: '我的收藏',
        url: '/../static/images/mine/class_icon02.png'
      }, {
        text: '积分商城',
        url: '/../static/images/mine/class_icon03.png'
      }, {
        text: '兑换订单',
        url: '/../static/images/mine/class_icon04.png'
      }, {
        text: '优惠券',
        url: '/../static/images/mine/class_icon05.png'
      }, {
        text: '余额使用记录',
        url: '/../static/images/mine/class_icon06.png'
      }, {
        text: '我的拼团',
        url: '/../static/images/mine/class_icon07.png'
      }, {
        text: '会员推荐',
        url: '/../static/images/mine/class_icon08.png'
      }, {
        text: '分享推荐记录',
        url: '/../static/images/mine/class_icon09.png'
      }]
    }
  }
}
</script>

<style lang='less' scoped>
@import '../lib/base.less';
.modulebox{
  margin-top: 10px;
  background-color: white;
  overflow: hidden;
  .items{
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    position: relative;
    float:left;
    &:nth-child(4n){
      .item{
        border-right: none;
      }
    }
    &:last-child{
      .item{
        border-bottom: none;
      }
    }
    .item{
      position: absolute;
      top:0;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      height:100%;
      border-right: 1px solid @gray;
      border-bottom: 1px solid @gray;
      align-items: center;
      justify-content: center;
      img{
        height: 38px;
        width:38px;
      }
    }
  }
}
</style>
