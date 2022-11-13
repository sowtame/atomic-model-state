import { IJotaiTodo } from 'containers/Jotai/store/interface'
import { atom } from 'jotai'
import { atomFamily } from 'jotai/utils'

export const todosAtom = atom<string[]>([])
export const todoIdLoadingAtom = atom<string>('')

export const todoAtomFamily = atomFamily(
  (param: IJotaiTodo) => atom({ title: param.title || 'No title', ...param }),
  (a: IJotaiTodo, b: IJotaiTodo) => a.id === b.id
)
