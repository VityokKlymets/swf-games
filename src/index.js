import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import dotenv from 'dotenv'
import admin from './middlewares/admin'
import path from 'path'
// TODO Take screenshots from test page , test page tools
dotenv.config()

const {
  NODE_ENV,
  PORT,
  IP,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER
} = process.env
process.env.STATIC_FOLDER = path.join('static')
process.env.GAMES_FOLDER = path.join('games')
process.env.ROOT = __dirname
process.env.GAME_FOLDER_PATH = path.join(
  process.env.STATIC_FOLDER,
  process.env.GAMES_FOLDER
)
process.env.HOST = `http://${IP}:${PORT}/`
mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { useNewUrlParser: true }
)

const app = express()
app.use(
  '/' + process.env.STATIC_FOLDER,
  express.static(path.join(process.env.ROOT, process.env.STATIC_FOLDER))
)
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
  console.log(`🚀  Server ready at ${process.env.HOST}`)
})
