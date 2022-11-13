import { RecoilTodoList } from 'containers/Recoil/components/TodoList'
import { RecoilRoot } from 'recoil'

export const RecoilContainer = () => {
  return (
    <RecoilRoot>
      <div>
        <RecoilTodoList />
      </div>
    </RecoilRoot>
  )
}
