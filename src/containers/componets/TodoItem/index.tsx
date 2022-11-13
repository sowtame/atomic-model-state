import { IJotaiTodo, todosAtom } from 'containers/componets/TodoList'
import { atom, PrimitiveAtom, useAtom, useSetAtom } from 'jotai'
import { memo } from 'react'
import { atomFamily } from 'jotai/utils'

interface IProps {
  item: IJotaiTodo
  loading: boolean
}

// const todoAtomFamily = atomFamily((param: string) => atom({ title: '' }))

export const JotaiTodoItem = memo(({ item: atom, loading }: IProps) => {
  const setTodos = useSetAtom(todosAtom)
  // const [item, setItem] = useAtom(todoAtomFamily(atom.id))

  const onDelete = () => {
    setTodos((prev) => prev.filter((item) => item.id !== atom.id))
  }

  return (
    <div className="todo_item">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>{atom.id}</div>
          <div>{atom.title}</div>
          <button onClick={onDelete}>X</button>
        </>
      )}
    </div>
  )
})
