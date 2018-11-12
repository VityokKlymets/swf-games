import { gql } from 'apollo-server-express'

export default gql`
    extend type Query{
        game(id: String!): Game!
    }
    extend type Mutation{
        addGame(name: String!, category: String!, description: String!,file: String!): Game!
    }
    type Game{
        id: ID!
        name: String!
        category: String!
        description: String!
        src: String!
    }
`
