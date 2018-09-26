<template>
  <div class="home">
    <div class="home-main">
      <HomeSwiper />
      <HomeSearch />
      <HomeStaticNav />
      <HomeList />
      <HomeLastItem />
      <CustomerService />
      <HomeToTop />
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import {
  HomeSwiper,
  HomeSearch,
  HomeStaticNav,
  HomeList,
  HomeLastItem,
  CustomerService,
  HomeToTop
} from "@/components";
export default {
  name: "home",
  components: {
    HomeSwiper,
    HomeSearch,
    HomeStaticNav,
    HomeList,
    HomeLastItem,
    CustomerService,
    HomeToTop
  },
  methods: {
    ...mapMutations(["changeIsHome"])
  },
  mounted() {
    this.changeIsHome(true);
  },
  beforeDestroy() {
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
