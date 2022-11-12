import { ITodoItem } from 'containers/Recoil/Recoil/interface'
import { atom } from 'recoil'

export class todoAtoms {
  static todoListAtom = atom<ITodoItem[]>({
    key: 'TodoList',
    default: [],
  })
}
