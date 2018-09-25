import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 2
  },
  mutations: {
    addCount(state) {
      state.count++
    }
  }
})

export default store
