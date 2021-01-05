import { createStore, ModuleTree, DispatchOptions, CommitOptions, Store as VuexStore } from 'vuex'
import type { App } from 'vue'
import { Getters, getters } from './getters'
import { ModuleType, ModuleMutations, ModuleActions } from './types'
const path = require('path')

import module from '@/store/modules/**/*.@(ts)'

console.log('modulesssss :>> ', module)

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

export type Store<S = ModuleType> = Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'> & {
  commit<K extends keyof ModuleMutations, P extends Parameters<ModuleMutations[K]>[1]>(
    key: K,
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
export function useStore(): Store {
  return store as Store
}

export function setupStore(app: App<Element>) {
  app.use(store)
}
