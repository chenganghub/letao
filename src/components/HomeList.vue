<template>
  <ul class="homelist">
    <li
    v-for="item in list"
    :key="item.itemMore"
    >
    <div class="homelist-title">
      <img :src="item.itemTitle" alt="">
    </div>
    <div class="homelist-nav">
      <img :src="item.itemNav" alt="">
    </div>
    <div class="homelist-tags">
      <img 
      v-for="tagitem in item.itemTag"
      :key="tagitem.url"
      :src="tagitem.url" alt="">
    </div>
    <div class="homelist-items">
      <img 
      v-for="items in item.itemImgs"
      :key="items.url"
      :src="items.url" alt="">
      <img :src="item.itemMore" alt="">
    </div>
    </li>
  </ul>
</template>

<script>
import { getHomeList } from "@/services";
export default {
  name: "HomeList",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    getHomeList().then(resp => {
      this.list = resp;
    });
  }
};
</script>

<style lang="less" scoped>
.homelist {
  list-style: none;
  &-title,&-nav{
    width: 100%;
    img{
      width: 100%;
    }
  }
  &-tags{
    height: 30px;
    img{
      width: 25%;
      height: inherit;
    }
  }
  &-items{
    width: 100%;
    img{
      height: 230px;
      width: 50%;
      float: left;
    }
  }
}
</style>
