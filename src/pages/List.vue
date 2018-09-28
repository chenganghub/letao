<template>
  <div>
    <ul class="top" >
     <li
     v-for="item in list"
    :key="item.text"
    :class="{ active : item.text === isactive}"
    @click="liClick(item.text)"
    >
    {{item.text}}
    <Icon :icon="item.icon"/>
    </li>
    </ul>
    <ul class="list">
      <li>
        <img src="/../static/images/home/banner (3).jpg" alt="">
        <p>发挥地方和东方红</p>
        <p>￥366.252 <s>12121.22</s></p>
        <p>销量&nbsp;&nbsp;0<Icon class="cart-icon" icon='liwu' /></p>
        <p>2.6折</p>
      </li> 
    </ul>
  </div>
</template>

<script>
import { Icon } from '@/components'
export default {
  name: 'list',
  data () {
    return {
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
      isactive:null
    }
  },
  components: {
    Icon
  },
  methods :{
    liClick(val){
      this.isactive = val;
    }
  }
}
</script>

<style lang="less" scoped>
  .top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    background:#f2f2f2;
    li{
      flex:1;
      border-right: 1px solid #999;
      display: flex;
      height: 25px;
      justify-content: center;
      align-items: center;
    }
    .active {
      color:red;
    }
  }
  .list{
    display: flex;
    width: 92%;
    margin: 0 auto;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: space-between;
    box-sizing: border-box;
    li{
      width:48%;
      
      img{
        width:100%;
        margin-top: 20px;
      }
      p:nth-child(2){
        font-size: 16px;
        margin-top: 15px;
      }
       p:nth-child(3){
        font-size: 15px;
        color:red;
        margin-top: 15px;
        margin-bottom: 15px;
        >s{
          font-size: 12px;
          margin-left: 10px;
          color:#999;

        }
      }
       p:nth-child(4){
        font-size: 12px;
        margin-top: 15px;
        margin-bottom: 15px;
        .cart-icon{
          float:right;
          margin-right: 5px;
        }
      }
        p:nth-child(5){
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
</style>