<template>
  <div class="box">
    <ul class="left-nav">
      <li
      v-for="item in navs"
      :key="item.text"
      :class="item.type === ischecked ? 'nav active':'nav'"
      @click="checkthis(item.type)"
      >{{item.text}}</li>
    </ul>
    <div class="right-content"></div>
  </div>
</template>

<script>
export default {
  name: "CateBox",
  data() {
    return {
      navs: [{
          text: "运动鞋",
          type: "yundongxie"
        },{
          text: "女鞋",
          type: "nvxie"
        },{
          text: "男鞋",
          type: "nanxie"
        },{
          text: "童鞋",
          type: "tongxie"
        },{
          text: "箱包",
          type: "xiangbao"
        },
      ],
      ischecked: "yundongxie"
    };
  },
  methods: {
    checkthis(value) {
      this.ischecked = value;
      this.$router.history.push(`/category/${value}`)
    }
  }
};
</script>

<style lang="less" scoped>
@import "../lib/base.less";
.box {
  display: flex;
  height: 100%;
  .left-nav {
    width: 80px;
    height: 100%;
    list-style: none;
    .nav {
      height: 50px;
      width: 80px;
      line-height: 50px;
      text-align: center;
      margin-top: 1px;
      background-color: white;
    }
    .active {
      background-color: @gray;
      color: @red;
    }
  }
  .right-content {
    height: 100%;
    flex: 1;
    overflow-y: scroll;
  }
}
</style>
