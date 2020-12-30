import { ModuleType } from '@/store/types'
import { GetterTree } from 'vuex'

export type Getters = {
  counter(state: ModuleType): number
}

export const getters: GetterTree<ModuleType, ModuleType> & Getters = {
  counter: (state) => state.user.counter
}
