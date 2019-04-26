import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import member from '@/store/member'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      member,
  }
})

export interface ActionContextBasic {
  commit: Commit,
  dispatch: Dispatch
}
