<template>
  <div class="lastitem">
    <div class="lastitem-title">
      <img src="../../static/images/home/pinpai.jpg" alt="">
      <img src="../../static/images/home/pinpai-nav.jpg" alt="">
    </div>
    <div class="lastitem-items">
      <img src="../../static/images/home/lastitem (1).jpg" alt="">
      <img src="../../static/images/home/lastitem (2).jpg" alt="">
      <img src="../../static/images/home/lastitem (3).jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLastItem'
}
</script>

<style lang="less" scoped>
.lastitem{
  width: 100%;
  padding-bottom:15px;
  &-title{
    img{
      width: 100%;
    }
  }
  &-items{
    overflow: hidden;
    img{
      width: 33%;
      float: left;
    }
  }
}
</style>
