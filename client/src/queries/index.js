import { gql } from 'apollo-boost'

export const CHECK_IS_ADMIN = gql`
    query checkIsAdmin {
        isAdmin @client
    }
`
export const SET_ADMIN = gql`
    mutation setAdmin($value: Boolean!){
        setAdmin(value: $value) @client {
            isAdmin
        }
    }
`
export const LOGIN = gql`
    mutation($email: String!, $password: String!){
        login(email: $email ,password: $password){
            token
        }
    }
`
export const ADD_GAME = gql`
    mutation($name: String!, $category: String!, $description: String!,$file: Upload!){
        addGame(name: $name, category: $category, description: $description, file: $file){
            name
            src
            category
            description
        }
    }
`
export const GET_CATEGORIES = gql`
    query{
        categories{
            text
            value
            key
        }
    }
`
