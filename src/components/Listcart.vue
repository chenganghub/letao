<template>
  <div class="shade">
    <div class="cart">

    </div>
  </div>
</template>

<script>
export default {
  namr: 'listcart'
}
</script>

<style lang='less' scoped>
 .shade{
   width: 100%;
   height: 100%;
   background: rgba(0,0,0,.8);
   position: absolute;
   top:0;
   left:0;
     transition: all 5s;
 }
.cart{
  width: 100%;
  height: 50%;
  background: red;
  margin-top: 50%;
  position: absolute;
  top: 22%;
}
</style>
