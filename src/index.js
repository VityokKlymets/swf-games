import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import dotenv from 'dotenv'
import admin from './middlewares/admin'

dotenv.config()

const {
  NODE_ENV,
  PORT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER
} = process.env
mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { useNewUrlParser: true }
)

const app = express()

app.use(admin)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: NODE_ENV === 'development',
  context: ({ req }) => ({
    isAdmin: req.isAdmin
  })
})
server.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(`🚀  Server ready at http://localhost:${PORT}`)
})
