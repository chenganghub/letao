<template>
  <div class="home">
    <div class="home-main">
      <HomeSwiper />
      <HomeSwiper />
      <HomeSwiper />
      <HomeSwiper />
      <HomeSwiper />
      <HomeSwiper />
      <HomeSwiper />
      <HomeSwiper />
      <HomeSwiper />
    </div>
  </div>
</template>
<script>
import HomeSwiper from "@/components/HomeSwiper";
import { mapMutations } from "vuex";
export default {
  name: "home",
  components: {
    HomeSwiper
  },
  methods: {
    ...mapMutations(["changeIsHome"])
  },
  mounted() {
    console.log("start");
    this.changeIsHome(true);
  },
  beforeDestroy() {
    console.log("end");
    this.changeIsHome(false);
  }
};
</script>

<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  &-header {
    height: 76px;
  }
  &-main {
    flex: 1;
    overflow-y: scroll;
  }
}
</style>
