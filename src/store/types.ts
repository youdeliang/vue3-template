import type {
  UserStateType,
  Mutations as UserMutations,
  Actions as UserActions
} from '@/store/modules/user'
import type { AppStateType } from '@/store/modules/app'

export type ModuleType = {
  user: UserStateType
  app: AppStateType
}

export type ModuleMutations = {
  [K in keyof UserMutations]: UserMutations[K]
}

// type ActionsType = `${K}`

export type ModuleActions = {
  [K in keyof UserActions]: UserActions[K]
}
