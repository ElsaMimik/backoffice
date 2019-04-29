import { IMemberResponse } from '@/model/interfaces/member'
import { ActionContextBasic } from '@/store'
import MemberApi from '@/api/member'
const initState: State = {
    memberInfos: []
}



export interface State {
    memberInfos: IMemberResponse[]
}

const SEARCH_MEMBER = 'SEARCH_MEMBER'

const getters = {
    memberInfo: (state: State) => state.memberInfos,
}

const actions = {
    getMember(context: ActionContextBasic, uuid: string) {
        const  data = MemberApi.getMemberList(uuid);
        context.commit(SEARCH_MEMBER, data)
    },
}

const mutations = {
    [SEARCH_MEMBER](state: State, payload: IMemberResponse[]) {
        state.memberInfos = payload;
    },
}

export default {
    state: initState,
    getters,
    actions,
    mutations,
}
