import jwt from 'jsonwebtoken'

export const generateAdminToken = (email, password) =>
  jwt.sign(
    {
      email,
      password
    },
    process.env.JWT_SECRET
  )
