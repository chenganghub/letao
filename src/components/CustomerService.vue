<template>
  <div class="home-service">
    <Icon icon='kefu'/>
    <span>客服</span>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "HomeService",
  components: {
    Icon
  }
};
</script>

<style lang="less" scoped>
@import "../lib/base.less";
.home-service {
  position: fixed;
  top: 150px;
  right: 10px;
  height: 43px;
  width: 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: @red;
  border-radius: 7px;
  color: white;
  padding-top: 2px;
  cursor: pointer;
  i{
    font-size: 22px;
    line-height: 22px;
  }
  span{
    font-size: 12px;
  }
}
</style>
