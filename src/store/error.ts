import { ActionContextBasic } from '@/store/index'
import { IError } from '@/models/interfaces/error'

export interface State {
    error: IError
}
const SET_ERROR = 'SET_ERROR';


const initState: State = {
    error: {
        code: '',
        message: '',
        traceId: '',
    },
}

const getters = {
    getError: (state: State) => state.error,
}

const actions = {
    setError(context: ActionContextBasic, payload: IError) {
        context.commit(SET_ERROR, payload);
    },
}

const mutations = {
    [SET_ERROR](state: State, payload: IError) {
        state.error = payload;
    },
}

export default {
    namespaced: true,
    state: initState,
    getters,
    actions,
    mutations,
}
