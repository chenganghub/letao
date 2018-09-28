<template>
  <div class="cate-search">
    <Icon icon="flow" class="flow"/>
    <div class="inputbox">
      <input type="text" placeholder="搜索商品">
      <Icon icon="sousuo" />
    </div>
    <span>搜索</span>
  </div>
</template>

<script>
import Icon from './Icon'
export default {
  name: 'CateSearch',
  components: {
    Icon
  }
}
</script>

<style lang="less" scoped>
@import "../lib/base.less";
.cate-search {
  height: 38px;
  background-color: @red;
  border-bottom: 1px solid @gray;
  display: flex;
  align-items: center;
  color: white;
  > i ,> span {
    margin: 0 10px;
    cursor: pointer;
  }
  .flow {
    font-size: 24px;
  }
  .inputbox {
    flex: 1;
    position: relative;
    input {
      height: 30px;
      border-radius: 15px;
      width: 100%;
      text-align: center;
    }
    i {
      position: absolute;
      right: 15px;
      top: 8px;
      color: @red;
      cursor: pointer;
    }
  }
}
</style>
