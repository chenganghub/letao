<template>
  <i :class="`iconfont icon-${icon}`"></i>
</template>

<script>
import "../css/icon.css";
export default {
  name: "Icon",
  props: ["icon"]
};
</script>

<style>
@import "../css/icon.css";
</style>
