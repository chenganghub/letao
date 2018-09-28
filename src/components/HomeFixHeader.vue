<template>
  <div class="home">
    <div class="home-header">
      <img src="/../static/images/home/logo.png" alt="">
      <div class="home-header-more">···</div>
    </div>
    <div class='home-header-nav'>
      <span
      v-for="item in list"
      :key='item'
      @click="pushto"
      >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFixHeader',
  data () {
    return {
      list: ['首页', '工厂原创', '运动馆', '女士馆', '男士馆']
    }
  },
  methods: {
    pushto () {
      this.$router.history.push('/list')
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  &-header {
    height: 40px;
    background: #e6002d;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &-more {
      position: absolute;
      right: 15px;
      bottom: 0px;
      height: 40px;
      line-height: 36px;
      color: white;
      font-size: 28px;
    }
    img {
      height: 32px;
    }
  }
  &-header-nav {
    display: flex;
    height: 36px;
    line-height: 36px;
    border: 1px solid #ccc;
    span {
      padding: 0 5px;
      text-align: center;
      flex: 1;
    }
  }
}
</style>
