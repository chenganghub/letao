<template>
  <div class="box">
    <div class="item">
      <mt-swipe :auto="2000" class="swiperbox">
        <mt-swipe-item
        class="iimg"
        v-for="item in pics"
        :key="item"
        ><img class="pic" :src="item" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      pics: [
        '/../static/images/home/banner (1).jpg',
        '/../static/images/home/banner (2).jpg',
        '/../static/images/home/banner (3).jpg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.box{
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  position: relative;
  .item{
    position: absolute;
    top: 0;
    height: 0;
    height: 100%;
    width: 100%;
  }
  .swiperbox {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin-bottom: 10px;
    position: relative;
    text-align: center;
    img{
      width: 100%;
    }
  }
}
</style>
