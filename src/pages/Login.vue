<template>
  <div>
    <RedHeader text='登陆'/>
    <form class="loginBox">
      <div class="inputitem">
        <input type="text" v-model="username" placeholder="用户名">
        <div class="line"></div>
      </div>
      <div class="inputitem">
        <input type="password" v-model="password" placeholder="密码">
        <div class="line"></div>
      </div>
      <button class="loginButton" @click='userlogin(userinfo)'>登录</button>
    </form>
    <p class="last">
      <span>短信验证码登录</span>
      <span @click='goRegister'>新用户注册</span>
      <span>忘记密码</span>
    </p>
  </div>
</template>

<script>
import { RedHeader } from '@/components'
import { Toast } from 'mint-ui'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    RedHeader
  },
  computed: {
    userinfo () {
      const info = {
        username: this.username,
        password: this.password
      }
      return info
    }
  },
  methods: {
    goRegister () {
      this.$router.history.push('/register')
    },
    userlogin (payload) {
      const { username, password } = payload
      const state = JSON.parse(window.localStorage.getItem('userinfo')) || []
      if (state.length === 0) {
        Toast({message: '本地没有数据，先去注册一个账号吧'})
        return window.localStorage.setItem('isLogin', false)
      }
      state.map(item => {
        if (item.username === username && item.password === password) {
          window.localStorage.setItem('isLogin', true)
          const loginUser = {
            username: item.username,
            userid: item.id
          }
          window.localStorage.setItem('whoIsLogin', JSON.stringify(loginUser))
          Toast({message: '登陆成功，即将跳转'})
          setTimeout(() => {
            this.$router.history.push('/home')
          }, 2000)
        } else {
          window.localStorage.setItem('isLogin', false)
          Toast({message: '用户名或密码错误'})
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../lib/base.less";
.loginBox {
  width: 95%;
  margin: 15px auto;
  border: 1px solid @gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  .inputitem {
    width: 90%;
    margin-bottom: 20px;
    position: relative;
    input {
      padding: 0 8px;
      width: 100%;
      line-height: 22px;
      font-size: 14px;
    }
    .line {
      position: absolute;
      bottom: -5px;
      height: 11px;
      width: 100%;
      border: 1px solid @red;
      border-top: none;
    }
  }

  .loginButton {
    text-align: center;
    width: 90%;
    height: 36px;
    background-color: @red;
    border: none;
    color: white;
    letter-spacing: 5px;
  }
}
.last {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
</style>
