<template>
  <div class='main'>
    <div class='main-info'>
      <router-view></router-view>
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import {iconCart} from '@/images/base'
export default {
  name: "App",
  components:{
    Tabbar
  },
  data() {
    return {
      name: "HDM",
      iconCart
    };
  },
};
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
body,html{
  height: 100%;
}
.main{
  display: flex;
  flex-direction: column;
  height:100%;
  &-info{
    flex:1;
  }
}
</style>
