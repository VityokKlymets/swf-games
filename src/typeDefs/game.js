import { gql } from 'apollo-server-express'

export default gql`
    extend type Query{
        game(id: String!): Game!
        categories: [Category!]!
        games: [Game!]!
    }
    extend type Mutation{
        addGame(name: String!, category: String!, description: String!, file: Upload!, screenshot: Upload!): Game!
    }
    type Category{
        value: String!
        text: String!
        icon: String!
    }
    type Game{
        id: ID!
        name: String!
        category: String!
        description: String!
        src: String!
        screenshot: String!
        createdAt: String!
    }
`
