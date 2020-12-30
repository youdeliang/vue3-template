import { createStore, Store as VuexStore, ModuleTree, CommitOptions, DispatchOptions } from 'vuex'
import type { App } from 'vue'
import { Getters, getters } from './getters'
import { ModuleType, ModuleMutations, ModuleActions } from './types'
const path = require('path')

const file = require.context('./modules', true, /\.ts/)

const modules: ModuleTree<ModuleType> = {}

file.keys().forEach((key) => {
  const name = path.basename(key, '.ts')
  modules[name] = file(key).default || file(key)
})

const store = createStore({
  modules,
  getters
})

export type Store = Omit<VuexStore<ModuleType>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof ModuleMutations, P extends Parameters<ModuleMutations[K]>[1]>(
    Key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<ModuleMutations[K]>
} & {
  dispatch<K extends keyof ModuleActions>(
    key: K,
    payload: Parameters<ModuleActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ModuleActions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

export function useStore() {
  return store as Store
}

export function setupStore(app: App<Element>) {
  app.use(store)
}
