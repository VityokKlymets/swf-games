import '@babel/polyfill'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import dotenv from 'dotenv'
import admin from './middlewares/admin'
import path from 'path'

dotenv.config()

const { NODE_ENV, STATIC_FOLDER, GAMES_FOLDER, MONGODB_URI, PORT } = process.env
process.env.ROOT = NODE_ENV === 'development' ? __dirname : process.cwd()
process.env.GAME_FOLDER_PATH = path.join(STATIC_FOLDER, GAMES_FOLDER)

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
})
const app = express()

app.use(
  '/' + process.env.STATIC_FOLDER,
  express.static(path.join(process.env.ROOT, process.env.STATIC_FOLDER))
)
if (NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(process.env.ROOT, 'client', 'build', 'index.html')
    )
  })
}

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb' }))
app.use(admin)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: NODE_ENV === 'development',
  context: ({ req }) => ({
    isAdmin: req.isAdmin
  }),
  uploads: true
})
server.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(`🚀  Server ready at ${PORT} port`)
})
