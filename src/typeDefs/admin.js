import { gql } from 'apollo-server-express'

export default gql`
    extend type Mutation{
        login(email: String!, password: String!): Token!
    }
    type Token{
        token: String!
    }
`
