export default {
  changeIsHome (state, bool = false) {
    state.isHome = bool
  },
  changeReturnTop (state, bool = false) {
    state.returnTopShow = bool
  },
  changeCate (state, list) {
    const dateNow = new Date().getTime()
    list.getListTime = dateNow
    state.cateBoxList = list
  },
  userLogin (state, payload) {
    const {
      username,
      password
    } = payload
    state.userInfo.map(item => {
      if (item.username === username && item.password === password) {
        window.localStorage.setItem('isLogin', true)
      } else {
        window.localStorage.setItem('isLogin', false)
      }
    })
  }
}
