<template>
  <div class="outer-box">
    <!-- 搜索组件 -->
    <CateSearch />
    <!-- 内容显示组件 -->
    <CateBox />
    <!-- 客服 -->
    <CustomerService />
  </div>
</template>

<script>
import { CustomerService, CateSearch, CateBox } from '@/components'
export default {
  name: 'category',
  components: {
    CustomerService,
    CateSearch,
    CateBox
  }
}
</script>

<style lang="less" scoped>
@import '../lib/base.less';
.outer-box{
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: @gray;
  .box{
    flex: 1;
  }
}
</style>
