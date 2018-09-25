<template>
  <div class='main'>
    <HomeFixHeader v-if="isHome" />
    <div class='main-info'>
      <router-view></router-view>
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import HomeFixHeader from "@/components/HomeFixHeader";
import { iconCart } from "@/images/base";
export default {
  name: "App",
  components: {
    Tabbar,
    HomeFixHeader
  },
  data() {
    return {
      name: "HDM",
      iconCart,
      isHome: false
    };
  },
  updated() {
    this.isHome = this.$store.state.isHome;
  }
};
</script>

<style lang="less">
html,
body,
header,
main,
nav,
footer,
div,
ul,
li,
a,
form,
fieldset,
legend,
img,
input,
p,
i,
span,
img,
h1,
h2,
h3,
h4,
h5,
h6,
section,
select,
option {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
}
body,
html {
  height: 100%;
}
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  &-info {
    flex: 1;
    overflow-y: scroll;
  }
}
</style>
