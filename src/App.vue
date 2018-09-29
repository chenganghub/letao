<template>
  <div class='main'>
     <router-view name='CateSearch'></router-view>
    <HomeFixHeader v-if="isHome" />
    <div class='main-info' ref="mainScroll">
      <router-view></router-view>
    </div>
    <router-view name='Tabbar'></router-view>
  </div>
</template>

<script>
import { Tabbar, HomeFixHeader } from '@/components'
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  components: {
    Tabbar,
    HomeFixHeader
  },
  data () {
    return {
      name: 'HDM',
      isHome: false
    }
  },
  methods: {
    ...mapMutations(['changeReturnTop'])
  },
  updated () {
    this.isHome = this.$store.state.isHome
  },
  mounted () {
    this.el = this.$refs.mainScroll
    this.el.addEventListener('scroll', () => {
      if (this.el.scrollTop >= 500) {
        this.changeReturnTop(true)
      } else {
        this.changeReturnTop()
      }
    }, false)
  }
}
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
input {
  border: none;
}
img,video,audio {
  max-width: 100%;
  max-height: 100%;
}
ul{
  list-style: none;
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
