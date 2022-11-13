import { RecoilTodoItem } from 'containers/Recoil/components/TodoItem'
import { RecoilTodoItemAsync } from 'containers/Recoil/components/TodoItemAsync'
import { ITodoItem, todoAtoms } from 'containers/Recoil/Recoil'
import { nanoid } from 'nanoid'
import { useRecoilState } from 'recoil'

const getDefaultTodoItem = (): ITodoItem => ({
  id: nanoid(),
  title: '',
})

export const RecoilTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoAtoms.todoListAtom)

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        ...getDefaultTodoItem(),
        title: `Test title № ${oldTodoList.length + 2}`,
      },
    ])
  }

  const addItemAync = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        ...getDefaultTodoItem(),
        async: true,
      },
    ])
  }

  return (
    <div className="todo_wrapper">
      <h2>Recoil</h2>
      {todoList.map((item, index) => {
        if (item.async) {
          return <RecoilTodoItemAsync key={item.id} index={index} />
        }

        return <RecoilTodoItem item={item} key={item.id} index={index} />
      })}
      <div className="action_buttons">
        <button onClick={addItem}>Add item</button>
        <button onClick={addItemAync}>Add item async</button>
      </div>
    </div>
  )
}
