import { jotaiAtoms } from 'containers/Jotai/store'
import { useAtom } from 'jotai'
import { nanoid } from 'nanoid'
import { memo } from 'react'

export const JotaiTodoListActions = memo(() => {
  const [todos, setTodos] = useAtom(jotaiAtoms.todosAtom)
  const [todoLoadingId, setTodoLoadingId] = useAtom(jotaiAtoms.todoIdLoadingAtom)

  const addItem = () => {
    const id = nanoid()
    setTodos([...todos, id])
    jotaiAtoms.todoAtomFamily({ id })
  }

  const addItemAync = async () => {
    const id = nanoid()
    setTodos([...todos, id])
    setTodoLoadingId(id)
    jotaiAtoms.todoAtomFamily({ id, requestId: todos.length + 1 })
  }

  return (
    <div className="action_buttons">
      <button onClick={addItem}>Add item</button>
      <button disabled={!!todoLoadingId} onClick={addItemAync}>
        Add item async
      </button>
    </div>
  )
})
