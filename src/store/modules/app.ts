import { Module, MutationTree, ActionTree } from 'vuex'
const state = {
  name: 'pc'
}

type AppStateType = typeof state

const actions: ActionTree<AppStateType, AppStateType> = {}

const mutations: MutationTree<AppStateType> = {}

const app: Module<AppStateType, AppStateType> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default app
export { AppStateType }
