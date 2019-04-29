import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import Member from '@/store/member'
import Error from '@/store/member'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      Member,
      Error,
  }
})

export interface ActionContextBasic {
  commit: Commit,
  dispatch: Dispatch
}
