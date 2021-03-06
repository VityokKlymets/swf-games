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
    mutation($name: String!, $category: String!, $description: String!,$file: Upload!,$screenshot: Upload!){
        addGame(name: $name, category: $category, description: $description, file: $file,screenshot: $screenshot){
            name
            src
            category
            description
            screenshot
        }
    }
`
export const DELETE_GAME = gql`
    mutation($id: ID!){
        removeGame(id: $id){
            name
        }
    }
`
export const GET_GAME = gql`
    query($id: ID!){
        game(id: $id){
            id
            name
            src
            category
            description
        }
    }
`
export const GET_RECENTLY_ADDED_GAMES = gql`
    query{
        games{
            id
            name
            description
            category
            screenshot
            createdAt
        }
    }
`
export const GET_GAMES_WITH_CATEGORIES = gql`
    query{
        gamesWithCategories{
            id
            name
            description
            screenshot
            createdAt
        }
    }
`
export const FIND_GAMES = gql`
    query($query: String){
        findGames(query: $query){
            id
            name
            category
        }
    }
`
export const GET_HOMEPAGE_DATA = gql`
    query{
        categories{
            text
            value
            icon
        }
        games{
            id
            name
            description
            category
            screenshot
            createdAt
        }
        gamesWithCategories{
            id
            name
            description
            screenshot
            createdAt
        }
    }
`
export const GET_GAMES_BY_CATEGORY = gql`
    query($category: String!){
        games(category: $category){
            id
            name
            description
            screenshot
            createdAt
        }
        category(value: $category){
            text
            icon
        }
        categories{
            text
            value
            icon
        }
    }
`
export const GET_CATEGORIES = gql`
    query{
        categories{
            text
            value
            icon
        }
    }
`
