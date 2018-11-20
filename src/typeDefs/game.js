import { gql } from 'apollo-server-express'

export default gql`
    extend type Query{
        game(id: ID!): Game!
        categories: [Category!]!
        findGames(query: String): [Game!]!
        games(category: String): [Game!]!
        category(value: String!): Category!
    }
    extend type Mutation{
        addGame(name: String!, category: String!, description: String!, file: Upload!, screenshot: Upload!): Game!
        removeGame(id: ID!): Game!
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
