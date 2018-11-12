import ApolloClient from 'apollo-boost'
import { getToken } from './components/utils/localstorage'
const client = new ApolloClient({
  uri: 'http://localhost:3030/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    const token = getToken()
    operation.setContext({
      headers: {
        authorization: token
      }
    })
  }
})

export default client
