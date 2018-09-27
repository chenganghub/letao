export default {
  changeIsHome (state, bool = false) {
    state.isHome = bool
  },
  changeReturnTop (state, bool = false) {
    state.returnTopShow = bool
  },
  changeCate (state, list) {
    state.cateBoxList = list
  }
}
