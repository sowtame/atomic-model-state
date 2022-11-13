import { JotaiTodoItem } from 'containers/componets/TodoItem'
import { atom, useAtom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import { nanoid } from 'nanoid'

export interface IJotaiTodo {
  id: string
  title?: string
  requestId?: number
}

export const todosAtom = atom<string[]>([])
export const todoIdLoadingAtom = atom<string>('')

export const todoAtomFamily = atomFamily(
  (param: IJotaiTodo) => atom({ title: param.title || 'No title', ...param }),
  (a: IJotaiTodo, b: IJotaiTodo) => a.id === b.id
)

export const JotaiTodoList = () => {
  const [todos, setTodos] = useAtom(todosAtom)
  const [todoLoadingId, setTodoLoadingId] = useAtom(todoIdLoadingAtom)

  const addItem = () => {
    const id = nanoid()
    setTodos([...todos, id])
    todoAtomFamily({ id })
  }

  const addItemAync = async () => {
    const id = nanoid()
    setTodos([...todos, id])
    setTodoLoadingId(id)
    todoAtomFamily({ id, requestId: todos.length + 1 })
  }
  return (
    <div className="todo_wrapper">
      <h2>Jotai</h2>
      {todos.map((id) => (
        <JotaiTodoItem loading={todoLoadingId === id} key={id} id={id} />
      ))}
      <div className="action_buttons">
        <button onClick={addItem}>Add item</button>
        <button disabled={!!todoLoadingId} onClick={addItemAync}>
          Add item async
        </button>
      </div>
    </div>
  )
}
