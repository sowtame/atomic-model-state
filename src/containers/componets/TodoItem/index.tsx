import axios from 'axios'
import { todoAtomFamily, todosAtom } from 'containers/componets/TodoList'
import { useAtom, useSetAtom } from 'jotai'
import { memo, useEffect } from 'react'

interface IProps {
  id: string
}

export const JotaiTodoItem = memo(({ id }: IProps) => {
  const setTodos = useSetAtom(todosAtom)
  const [todo, setTodo] = useAtom(todoAtomFamily({ id }))

  useEffect(() => {
    if (todo.requestId) {
      axios.get(`https://jsonplaceholder.typicode.com/todos/${todo.requestId}`).then(({ data }) => {
        setTodo({ ...todo, loading: false, ...data })
      })
    }
  }, [])

  const onDelete = () => {
    setTodos((prev) => prev.filter((item) => item !== id))
    todoAtomFamily.remove({ id })
  }

  if (todo.loading) {
    return <div className="todo_item">Loading...</div>
  }

  return (
    <div className="todo_item">
      <div>{todo.id}</div>
      <div>{todo.title}</div>
      <button onClick={onDelete}>X</button>
    </div>
  )
})
