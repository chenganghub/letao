<template>
  <div class="nav">
    <img
    v-for="item in pics"
    :key="item"
    :src="item"
    @click="pushto"
    alt=""
    class="nav-img">
  </div>
</template>

<script>
export default {
  name: 'home_static_nav',
  data (){
    return {
      pics: [
        '../../static/images/home/nav (1).jpg',
        '../../static/images/home/nav (2).jpg',
        '../../static/images/home/nav (3).jpg',
        '../../static/images/home/nav (4).jpg',
        '../../static/images/home/nav (5).jpg',
        '../../static/images/home/nav (6).jpg',
        '../../static/images/home/nav (7).jpg',
        '../../static/images/home/nav (8).jpg'
      ]
    };
  },
  methods: {
    pushto() {
      this.$router.history.push("/list");
    }
  }
};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  flex-wrap: wrap;
  &-img {
    width: 25%;
  }
}
</style>
