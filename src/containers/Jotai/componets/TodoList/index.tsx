import { JotaiTodoListActions } from 'containers/Jotai/componets/TodoActions'
import { JotaiTodoItem } from 'containers/Jotai/componets/TodoItem'
import { jotaiAtoms } from 'containers/Jotai/store'
import { useAtomValue } from 'jotai'

export const JotaiTodoList = () => {
  const todos = useAtomValue(jotaiAtoms.todosAtom)

  return (
    <div className="todo_wrapper">
      <h2>Jotai</h2>
      {todos.map((id) => (
        <JotaiTodoItem key={id} id={id} />
      ))}
      <JotaiTodoListActions />
    </div>
  )
}
