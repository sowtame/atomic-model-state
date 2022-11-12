import { todoAtoms, ITodoItem } from 'containers/Recoil/Recoil'
import { removeItemAtIndex } from 'containers/Recoil/utils'
import { memo } from 'react'
import { useSetRecoilState } from 'recoil'

interface IProps {
  item: ITodoItem
  index: number
}

export const RecoilTodoItem = memo(({ item: { id, title }, index }: IProps) => {
  const setTodoList = useSetRecoilState(todoAtoms.todoListAtom)

  const onDelete = () => {
    setTodoList((todolist) => removeItemAtIndex(todolist, index))
  }

  return (
    <div className="todo_item">
      <div>{id.slice(0, 4)}...</div>
      <div>{title}</div>
      <button onClick={onDelete}>X</button>
    </div>
  )
})
