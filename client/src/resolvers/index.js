import { getToken } from '../components/utils/localstorage'
import { CHECK_IS_ADMIN } from '../queries'
export const defaults = {
  isAdmin: !!getToken()
}
export const resolvers = {
  Mutation: {
    setAdmin: (_, { value }, { cache }) => {
      const query = CHECK_IS_ADMIN
      cache.writeQuery({
        query,
        data: {
          isAdmin: value
        }
      })
    }
  }
}
