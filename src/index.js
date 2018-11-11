import express from 'express'
import { ApolloServer } from 'apollo-server-express'

const app = express()
// const server = new ApolloServer({
//   playground: process.env.NODE_ENV === 'development'
// })
// server.applyMiddleware({ app })

app.listen(process.env.PORT, () => {
  console.log(
    `🚀  Server ready at http://localhost:${PORT}`
  )
})
