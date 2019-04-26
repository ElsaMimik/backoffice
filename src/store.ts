import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import member from '@/store/member'
import error from '@/store/member'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      member,
      error,
  }
})

export interface ActionContextBasic {
  commit: Commit,
  dispatch: Dispatch
}
