import { generateAdminToken } from '../utils/token'
import { isAdminCredentials } from '../utils/admin'
import jwt from 'jsonwebtoken'
export default {
  Mutation: {
    login: async (root, { email, password }) => {
      if (isAdminCredentials(email, password)) {
        return {
          token: generateAdminToken(email, password)
        }
      } else return { token: '' }
    }
  },
  Query: {
    isAdmin: async (root, { token }) => {
      if (!token) return false
      try {
        await jwt.verify(token, process.env.JWT_SECRET)
      } catch (error) {
        return false
      }

      return true
    }
  }
}
