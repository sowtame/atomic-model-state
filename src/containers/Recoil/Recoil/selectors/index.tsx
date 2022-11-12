import axios from 'axios'
import { selectorFamily } from 'recoil'

export class todoSelectors {
  static userNameQuery = selectorFamily({
    key: 'todoAsync',
    get: (id: number) => async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      return response.data
    },
  })
}
