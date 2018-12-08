import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { getToken } from '../components/utils/localstorage'
const cache = new InMemoryCache()

const { NODE_ENV } = process.env
const client = new ApolloClient({
  uri:
    NODE_ENV === 'development' ? 'http://localhost:3030/graphql' : '/graphql',
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
  },
  cache
})

export default client
