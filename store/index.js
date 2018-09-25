import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isHome: false
  },
  mutations: {
    changeIsHome(state, bool) {
      state.isHome = bool
    }
  }
})

export default store
