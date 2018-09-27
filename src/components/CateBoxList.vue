<template>
  <div class="right-content">
    <div class="title-img">
      <img :src="cateBoxList.titleImg" alt="">
    </div>
    <p>热门品牌</p>
    <div class="list-box">
      <div
      v-for="item in cateBoxList.items"
      :key="item.id"
      class="list-item">
        <img :src="item.url" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex';
export default {
  name:'CateBoxList',
  data(){
    return {
      list:{}
    }
  },
  computed:{
    ...mapState(['cateBoxList'])
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
