import axios from 'axios'
import { JotaiTodoItem } from 'containers/componets/TodoItem'
import { atom, useAtom } from 'jotai'
import { nanoid } from 'nanoid'

export interface IJotaiTodo {
  id: string
  title: string
}

export const todosAtom = atom<IJotaiTodo[]>([])
export const loadingIdAtom = atom<string>('')

export const JotaiTodoList = () => {
  const [todos, setTodos] = useAtom(todosAtom)
  const [loadingId, setLoading] = useAtom(loadingIdAtom)

  const addItem = () => {
    setTodos([...todos, { id: nanoid(), title: `Test title № ${todos.length + 2}` }])
  }

  const addItemAync = async () => {
    try {
      // setLoading(id)
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todos.length + 1}`)
      setTodos([...todos, { id: data.id, title: data.title }])
    } catch (error) {
      setLoading('')
    }
  }
  return (
    <div className="todo_wrapper">
      <h2>Jotai</h2>
      {todos.map((item) => (
        <JotaiTodoItem loading={item.id === loadingId} item={item} />
      ))}
      <div className="action_buttons">
        <button onClick={addItem}>Add item</button>
        <button onClick={addItemAync}>Add item async</button>
      </div>
    </div>
  )
}
