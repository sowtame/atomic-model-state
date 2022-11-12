import { ITodoItem } from 'containers/Recoil/Recoil'

export function removeItemAtIndex(arr: ITodoItem[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
