<template>
  <div class="headerbox">
    <div class="logo">
      <img src="../../static/images/mine/userlogo.gif" alt="">
    </div>
    <div class="info">
      <p class="usertitle">{{username}}</p>
      <p>ID：{{userid}}</p>
      <p>等级：普通会员</p>
      <p>余额：￥0.00</p>
      <p>积分：50</p>
    </div>
    <div class="option">
      <div class="icons">
        <Icon icon='shezhi' />
        <Icon icon='mail' />
      </div>
      <p class="buttons">
        <span>充值</span>
        <span>签到</span>
      </p>
    </div>
  </div>
</template>

<script>
import { Icon } from '@/components'
export default {
  name: 'MineHeader',
  components: {
    Icon
  },
  data () {
    return {
      username: '123123',
      userid: '123123'
    }
  }
}
</script>

<style lang='less' scoped>
@import '../lib/base.less';
.headerbox{
  height: 160px;
  display: flex;
  padding: 15px;
  background: url('../../static/images/mine/bg_img.jpg') no-repeat center;
  .logo{
    height: 85px;
    width:85px;
    margin-top: 10px;
    border-radius: 50%;
    background-color: white;
    margin-right: 15px;
    overflow: hidden;
    img{
      height: 100%;
    }
  }
  .info{
    color: white;
    flex: 1;
    .usertitle{
      font-size: 16px;
      line-height: 32px;
    }
    p{
      line-height: 26px;
    }
  }
  .option{
    display: flex;
    flex-direction: column;
    .icons{
      flex: 1;
      i{
        font-size:24px;
        color: white;
        &:first-child{
          position: relative;
          top: 2px;
          margin-right: 5px;
        }
      }
    }
    .buttons{
      height: 54px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      >span{
        display: inline-block;
        height: 22px;
        width: 48px;
        border-radius: 11px;
        background-color: white;
        line-height: 22px;
        text-align: center;
        color:@red;
        margin-top: 5px;
      }
    }
  }
}
</style>
