<template>
  <div class="totop" @click="returnTop" v-show="returnTopShow">
    <img src="../../static/images/home/gototop.png" alt="">
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: "HomeToTop",
  computed:{
    ...mapState(['returnTopShow'])
  },
  methods: {
    returnTop() {
      const el = document.querySelector(".main-info");
      const totop = setInterval(() => {
        const top = el.scrollTop;
        el.scrollTop = top * 0.9;
        if (top == 0) clearInterval(totop);
      }, 1000 / 60);
    }
  }
};
</script>

<style lang="less" scoped>
.totop {
  height: 30px;
  width: 30px;
  position: fixed;
  right: 15px;
  bottom: 50px;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
