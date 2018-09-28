<template>
  <div class="sharebox">
    <div class="top">
      <span><img class="img" src="/../static/images/mine/title_icon03.png" alt="">我是分享达人</span>
      <span>分享管理 ></span>
    </div>
    <div class="bottom">
      <div class="item">
        <span><img src="/../static/images/mine/share_icon01.png" alt="">收益(月)</span>
        <span>0.00元</span>
      </div>
      <div class="item">
        <span><img src="/../static/images/mine/share_icon02.png" alt="">粉丝</span>
        <span>0人</span>
      </div>
      <div class="item">
        <span><img src="/../static/images/mine/share_icon03.png" alt=""></span>
        <span>0.00元</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MineShare'
}
</script>

<style lang='less' scoped>
@import '../lib/base.less';
.sharebox{
  margin-top: 15px;
  background-color: white;
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
    height: 70px;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      border-right: 1px solid @gray;
      width: calc(1 / 3 * 100%);
      &:last-child{
        border-right: none;
      }
      span{
        line-height: 24px;
      }
      img{
        width:22px;
        height: 22px;
        margin: 0 5px;
        position: relative;
        top: 5px;
      }
    }
  }
}
</style>
