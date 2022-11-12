import { RecoilTodoList } from 'containers/Recoil/components/TodoList'
import { RecoilRoot } from 'recoil'

interface IProps {}

export const RecoilContainer = ({}: IProps) => {
  return (
    <RecoilRoot>
      <div>
        <RecoilTodoList />
      </div>
    </RecoilRoot>
  )
}
