import { IMemberResponse } from '@/interfaces/member'
import { ActionContextBasic } from '@/store'
import MemberApi from '@/api/member'
import { Commit } from 'vuex'
const initState: State = {
    memberInfo: []
}



export interface State {
    memberInfo: IMemberResponse[]
}

const SEARCH_MEMBER = 'SEARCH_MEMBER'

const getters = {
    memberInfo: (state: State) => state.memberInfo,
}

const actions = {
    getMember(context: ActionContextBasic, uuid: string) {
        const  data = MemberApi.getMemberList(uuid);
        context.commit(SEARCH_MEMBER, data)
    },
}

const mutations = {
    [SEARCH_MEMBER](state: State, payload: IMemberResponse[]) {
        state.memberInfo = payload;
    },
}

export default {
    state: initState,
    getters,
    actions,
    mutations,
}
