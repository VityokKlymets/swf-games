import { gql } from 'apollo-server-express'

export default gql`
  extend type Mutation {
    login(email: String!, password: String!): Token!
  }
  extend type Query {
    isAdmin(token: String): Boolean!
  }
  type Token {
    token: String!
  }
`
