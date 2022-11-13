import { JotaiTodoList } from 'containers/componets/TodoList'
import { Provider } from 'jotai'

export const JotaiContainer = () => {
  return (
    <Provider>
      <div>
        <JotaiTodoList />
      </div>
    </Provider>
  )
}
