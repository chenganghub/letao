<template>
  <div class="tabbar">
    <router-link
    class="tabbar-item"
    v-for="item in links"
    :key="item.path"
    :to="item.path"
    >
    <div class="img">
      <img :src="item.meta.icon" alt="">
    </div>
    {{item.text}}
    </router-link>
  </div>
</template>

<script>
import routesInfo from "@/routes";
export default {
  name: "tabbar",
  data() {
    return {
      routesInfo,
      selected: "首页"
    };
  },
  computed: {
    links() {
      const result = this.routesInfo.options.routes.filter(item => {
        if (item.meta.isNav == true) {
          return item;
        }
      });
      return result;
    }
  }
};
</script>

<style scoped lang='less'>
.tabbar {
  height: 47px;
  background-color: #4c4c4c;
  display: flex;
  &-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    text-decoration: none;
    font-size: 12px;
    padding-top: 6px;

    .img {
      height: 22px;
      width: 22px;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>