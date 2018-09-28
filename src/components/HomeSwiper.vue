<template>
  <mt-swipe :auto="2000" class="swiperbox">
    <mt-swipe-item
    v-for="item in pics"
    :key="item"
    ><img class="pic" :src="item" alt=""></mt-swipe-item>
  </mt-swipe>
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
.swiperbox {
  height: 175px;
  margin-bottom: 10px;
  .pic {
    height: 175px;
  }
}
</style>
