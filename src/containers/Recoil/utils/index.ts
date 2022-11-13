import { IRecoilTodoItem } from 'containers/Recoil/Recoil'

export function removeItemAtIndex(arr: IRecoilTodoItem[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
