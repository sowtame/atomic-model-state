import { todoAtoms, todoSelectors } from 'containers/Recoil/Recoil'
import { removeItemAtIndex } from 'containers/Recoil/utils'
import { memo } from 'react'
import { useSetRecoilState, useRecoilValueLoadable } from 'recoil'

interface IProps {
  index: number
}

export const RecoilTodoItemAsync = memo(({ index }: IProps) => {
  const setTodoList = useSetRecoilState(todoAtoms.todoListAtom)
  const { state, contents } = useRecoilValueLoadable(todoSelectors.userNameQuery(index + 1))

  const onDelete = () => {
    setTodoList((todolist) => removeItemAtIndex(todolist, index))
  }

  return (
    <div className="todo_item">
      {state === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>{contents.id}</div>
          <div>{contents.title}</div>
          <button onClick={onDelete}>X</button>{' '}
        </>
      )}
    </div>
  )
})
