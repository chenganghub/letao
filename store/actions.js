import { getCateList } from '@/services'

export default {
  changeCateList (ctx) {
    getCateList().then(resp => {
      ctx.commit('changeCate', resp)
    })
  }
}
