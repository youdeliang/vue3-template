import { ActionTree, Module, MutationTree, ActionContext } from 'vuex'
import { setToken } from '@/utils/cookies'
const state = {
  token: '',
  name: '',
  counter: 0
}

type UserStateType = typeof state

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<UserStateType, UserStateType>, 'commit'>

export type Mutations<S = UserStateType> = {
  ['SET_COUNTER'](state: S, payload: number): void
}

export type Actions = {
  refreshToken: ({ commit }: AugmentedActionContext, payload: number) => void
}

const actions: ActionTree<UserStateType, UserStateType> & Actions = {
  refreshToken({ commit }, payload) {
    commit('SET_COUNTER', payload)
    setToken('token')
  }
}

const mutations: MutationTree<UserStateType> & Mutations = {
  ['SET_COUNTER'](state, payload: number) {
    state.counter = payload
  }
}

const user: Module<UserStateType, UserStateType> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default user
export { UserStateType }
