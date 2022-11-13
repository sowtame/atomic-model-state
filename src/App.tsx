import { JotaiContainer } from 'containers/Jotai'
import { RecoilContainer } from 'containers/Recoil'
import './App.css'

function App() {
  return (
    <div className="App">
      <RecoilContainer />
      <JotaiContainer />
    </div>
  )
}

export default App
