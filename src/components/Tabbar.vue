<template>
  <div class="tabbar">
    <router-link
    class="tabbar-item"
    v-for="item in links"
    :key="item.path"
    :to="item.path">
    {{item.text}}
    </router-link>
  </div>
</template>

<script>
import routesInfo from '@/routes'
export default {
  name:'tabbar',
  data(){
    return {
      routesInfo,
      selected:'首页',
    }
  },
  computed:{
    links(){
      const result = this.routesInfo.options.routes.filter(item=>item.meta);
      return result;
    }
  },
  mounted(){
    console.log(this.routesInfo.options.routes[1].meta.icon)
  }
}
</script>

<style scoped lang='less'>
.tabbar{
  height:47px;
  background-color:#4c4c4c;
  line-height:47px;
  display:flex;
  &-item{
    flex:1;
    text-align:center;
    color:white;
    text-decoration:none;
    font-size:12px;
  }
}
</style>