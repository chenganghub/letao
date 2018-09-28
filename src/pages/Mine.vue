<template>
  <div class="box">
    <MineHeader />
    <MineOrder />
    <MineShare />
    <MineModules />
    <CustomerService />
  </div>
</template>

<script>
import { CustomerService, MineHeader, MineOrder, MineShare, MineModules } from '@/components'
export default {
  name: 'detail',
  components: {
    CustomerService,
    MineHeader,
    MineOrder,
    MineShare,
    MineModules
  }
}
</script>

<style lang='less' scoped>
@import '../lib/base.less';
.box{
  color: @font-gray;
  background-color: @gray;
  padding-bottom: 10px;
}
</style>
