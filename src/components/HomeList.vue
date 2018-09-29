<template>
  <ul class="homelist">
    <li
    v-for="item in list"
    :key="item.itemId"
    >
    <div class="homelist-title">
      <img
      v-lazy="item.itemTitle"
      alt="">
    </div>
    <div class="homelist-nav">
      <img
      v-lazy="item.itemNav.url"
      @click="goList(item.itemNav.type,item.itemNav.brand)"
      alt="">
    </div>
    <div class="homelist-tags">
      <img
      v-for="tagitem in item.itemTag"
      :key="tagitem.id"
      v-lazy="tagitem.url"
      @click="goList(tagitem.type,tagitem.brand)"
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
      @click="goList(item.type,item.brand)"
      alt="">
    </div>
    </li>
  </ul>
</template>

<script>
import { Lazyload } from 'mint-ui'
import Vue from 'vue'
import { getHomeList } from '@/services'

Vue.use(Lazyload)

export default {
  name: 'HomeList',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    getHomeList().then(resp => {
      this.list = resp
    })
  },
  methods: {
    goDetail (id) {
      this.$router.history.push(`/detail/${id}`)
    },
    goList (type, brand) {
      this.$router.history.push(`/list/?type=${type}&brand=${brand}`)
    }
  }
}
</script>

<style lang="less" scoped>
.homelist {
  list-style: none;
  &-title,
  &-nav {
    width: 100%;
    img {
      width: 100%;
    }
  }
  &-tags {
    height: 30px;
    img {
      width: 25%;
      height: inherit;
    }
  }
  &-items {
    width: 100%;
    img {
      height: 230px;
      width: 50%;
      float: left;
    }
  }
}
</style>
