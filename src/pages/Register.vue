<template>
  <div>
    <RedHeader text='注册'/>
    <div class="registerBox">
      <div class="inputitem">
        <input type="text" v-model="username" placeholder="请输入手机号码">
        <div class="line"></div>
      </div>
      <div class="inputitem">
        <input type="password" v-model="password" placeholder="密码">
        <div class="line"></div>
      </div>
      <div class="inputitem">
        <input type="password" v-model="checkpwd" placeholder="确认密码">
        <div class="line"></div>
      </div>
      <button class="registerButton" @click='userRegister'>注册</button>
    </div>
    <p class="last">
      <span
      @click='goLogin'
      >立即登陆</span>
    </p>
  </div>
</template>

<script>
import { RedHeader } from '@/components'
import { Toast } from 'mint-ui'
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      checkpwd: ''
    }
  },
  components: {
    RedHeader
  },
  methods: {
    userRegister () {
      const username = this.username
      const password = this.password
      const checkpwd = this.checkpwd
      // 判断输入信息是否完整
      if (username === '' && password === '' && checkpwd === '') {
        return Toast({message: '请填写完整信息'})
      }
      // 读取本地缓存
      const userinfo = JSON.parse(window.localStorage.getItem('userinfo')) || []
      // 过滤出与输入用户名相同的用户信息，判断是否存在
      let canResiger = userinfo.filter(item => {
        if (username === item.username) {
          return item
        }
      }).length === 0
      if (password !== checkpwd) {
        return Toast({message: '两次密码不一致'})
      }
      if (canResiger) {
        // 可以注册则保存用户信息
        const id = username + Math.ceil(Math.random() * 100000)
        userinfo.push({
          username,
          password,
          id
        })
        window.localStorage.setItem('userinfo', JSON.stringify(userinfo))
        Toast({message: '注册成功，即将跳转'})
        // 延迟跳转到登陆页面
        setTimeout(() => {
          this.$router.history.push('/login')
        }, 2000)
      } else {
        Toast({message: '该用户已存在'})
      }
    },
    goLogin () {
      this.$router.history.push('/login')
    }
  }
}
</script>

<style lang='less' scoped>
@import '../lib/base.less';
.registerBox{
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

  .registerButton {
    text-align: center;
    width: 90%;
    height: 36px;
    background-color: @red;
    border: none;
    color: white;
    letter-spacing: 5px;
  }
}

.last{
  width: 95%;
  margin: 0 auto;
  span{
    float: right;
    margin-right: 15px;
  }
}
</style>
