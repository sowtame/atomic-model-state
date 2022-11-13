import { JotaiTodoItem } from 'containers/componets/TodoItem'
import { atom, useAtom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import { nanoid } from 'nanoid'

export interface IJotaiTodo {
  id: string
  title?: string
  requestId?: number
  loading?: boolean
}

export const todosAtom = atom<string[]>([])

export const todoAtomFamily = atomFamily(
  (param: IJotaiTodo) => atom({ title: param.title || 'No title', ...param }),
  (a: IJotaiTodo, b: IJotaiTodo) => a.id === b.id
)

export const JotaiTodoList = () => {
  const [todos, setTodos] = useAtom(todosAtom)

  const addItem = () => {
    const id = nanoid()
    setTodos([...todos, id])
    todoAtomFamily({ id })
  }

  const addItemAync = async () => {
    const id = nanoid()
    setTodos([...todos, id])
    todoAtomFamily({ id, requestId: todos.length + 1, loading: true })
  }
  return (
    <div className="todo_wrapper">
      <h2>Jotai</h2>
      {todos.map((id) => (
        <JotaiTodoItem key={id} id={id} />
      ))}
      <div className="action_buttons">
        <button onClick={addItem}>Add item</button>
        <button onClick={addItemAync}>Add item async</button>
      </div>
    </div>
  )
}
