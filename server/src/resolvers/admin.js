import { generateAdminToken } from '../utils/token'
import { isAdminCredentials } from '../utils/admin'
export default {
  Mutation: {
    login: async (root, { email, password }) => {
      if (isAdminCredentials(email, password)) {
        return {
          token: generateAdminToken(email, password)
        }
      } else return { token: '' }
    }
  }
}
