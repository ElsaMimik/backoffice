import { IMemberResponse } from '@/models/interfaces/member'
import { ActionContextBasic } from '@/store/main'
import MemberApi from '@/api/member'
export interface State {
    memberInfos: IMemberResponse[]
}
const SEARCH_MEMBER = 'SEARCH_MEMBER';


const initState: State = {
    memberInfos: [],
}

const getters = {
    getMemberInfo: (state: State) => state.memberInfos,
}

const actions = {
    getMember(context: ActionContextBasic, uuid: string) {
        const data = MemberApi.getMemberList(uuid);
        context.commit(SEARCH_MEMBER, data);
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
