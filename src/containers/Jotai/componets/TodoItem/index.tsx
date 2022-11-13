import axios from 'axios'
import { jotaiAtoms } from 'containers/Jotai/store'
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'
import { memo, useEffect, useMemo } from 'react'

interface IProps {
  id: string
}

export const JotaiTodoItem = memo(({ id }: IProps) => {
  const setTodos = useSetAtom(jotaiAtoms.todosAtom)
  const setTodoLoadingId = useSetAtom(jotaiAtoms.todoIdLoadingAtom)
  const [todo, setTodo] = useAtom(jotaiAtoms.todoAtomFamily({ id }))

  const loadingAtom = useMemo(() => atom((get) => get(jotaiAtoms.todoIdLoadingAtom) === id), [id])

  const loading = useAtomValue(loadingAtom)

  useEffect(() => {
    if (todo.requestId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/todos/${todo.requestId}`)
        .then(({ data }) => {
          setTodo({ ...todo, ...data })
        })
        .finally(() => {
          setTodoLoadingId('')
        })
    }
  }, [])

  const onDelete = () => {
    setTodos((prev) => prev.filter((item) => item !== id))
    jotaiAtoms.todoAtomFamily.remove({ id })
  }

  if (loading) {
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
