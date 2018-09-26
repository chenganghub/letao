<template>
  <div class="outer">
    <Icon icon='sousuo' />
    <input type="text" class="input-text" placeholder="搜索您喜欢的商品">
    <input type="button" value="搜索" class="input-button">
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "HomeSearch",
  components: {
    Icon
  }
};
</script>

<style lang="less" scoped>
@import "../lib/base.less";
.outer {
  height: 32px;
  margin-bottom: 15px;
  width: 96%;
  margin: 0 auto;
  border-radius: 3px;
  border: 1px solid @red;
  display: flex;
  align-items: center;
  input {
    height: 30px;
    line-height: 30px;
  }
  i {
    height: 16px;
    height: 16px;
    margin: 0 8px;
  }
  .input {
    &-text {
      flex: 1;
    }
    &-button {
      width: 60px;
      font-size: 16px;
      background-color: @red;
      color: white;
    }
  }
}
</style>
