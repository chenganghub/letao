<template>
  <div class="header">
    <span
    @click='back'
    >
      <Icon icon='flow'/>
    </span>
  {{text}}
  </div>
</template>

<script>
import Icon from './Icon'
export default {
  name: 'RedHeader',
  props: ['text'],
  components: {
    Icon
  },
  methods: {
    back () {
      this.$router.history.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../lib/base.less";
.header {
  height: 38px;
  background-color: @red;
  color: white;
  position: relative;
  text-align: center;
  line-height: 38px;
  font-size: 16px;
  i {
    position: absolute;
    left: 10px;
    top: 2px;
    font-size: 26px;
  }
}
</style>
