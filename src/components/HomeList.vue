<template>
  <ul class="homelist">
    <li
    v-for="item in list"
    :key="item.itemId"
    >
    <div class="homelist-title">
      <img
      :src="item.itemTitle"
      @click="goList"
      alt="">
    </div>
    <div class="homelist-nav">
      <img
      :src="item.itemNav"
      @click="goList"
      alt="">
    </div>
    <div class="homelist-tags">
      <img 
      v-for="tagitem in item.itemTag"
      :key="tagitem.id"
      :src="tagitem.url"
      @click="goList"
      alt="">
    </div>
    <div class="homelist-items">
      <img 
      v-for="items in item.itemImgs"
      :key="items.id"
      :src="items.url"
      @click="goDetail(items.id)"
      alt="">
      <img 
      :src="item.itemMore"
      @click="goList"
      alt="">
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
  },
  methods:{
    goDetail(id){
      this.$router.history.push(`/detail/${id}`)
    },
    goList(){
      this.$router.history.push('/list')
    }
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
