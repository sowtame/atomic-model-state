import { IRecoilTodoItem } from 'containers/Recoil/Recoil/interface'
import { atom } from 'recoil'

export class todoAtoms {
  static todoListAtom = atom<IRecoilTodoItem[]>({
    key: 'TodoList',
    default: [],
  })
}
