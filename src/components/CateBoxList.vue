<template>
  <div class="right-content">
    <div class="title-img">
      <img :src="`../../static/images/category/${type}.jpg`" alt="">
    </div>
    <p>热门品牌</p>
    <div class="list-box">
      <div
      v-for="item in BoxList.items"
      :key="item.id"
      @click="toList(item.type,item.brand)"
      class="list-item">
        <img :src="item.url" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CateBoxList',
  props: ['type'],
  computed: {
    ...mapState(['cateBoxList']),
    // 判断本地是否有缓存，没有则请求，该方法不必使用vuex，
    BoxList () {
      const list = JSON.parse(window.localStorage.getItem(this.type)) || {}
      const isDateObsolete = (new Date().getTime() - list.getListTime) >= 604800000
      if (list.titleImg === undefined || isDateObsolete) {
        this.changeCateList()
        window.localStorage.setItem(this.type, JSON.stringify(this.cateBoxList))
        return this.cateBoxList
      }
      return list
    }
  },
  methods: {
    ...mapActions(['changeCateList']),
    toList (type, brand) {
      this.$router.history.push(`/list/?type=${type}&brand=${brand}`)
    }
  }
}
</script>

<style lang="less" scoped>
.right-content {
  height: 100%;
  flex: 1;
  background-color: white;
  padding: 10px;
  overflow-y: scroll;
  .title-img {
    width: 100%;
    height: 95px;
    margin-bottom: 15px;
  }
  .list-box {
    padding: 20px 0 10px;
    .list-item {
      width: calc(100% / 3);
      float: left;
      margin-bottom: 10px;
      text-align: center;
      img {
        height: 66px;
        width: 66px;
      }
    }
  }
}
</style>
