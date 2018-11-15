import React from 'react'
import { Query } from 'react-apollo'
import { GET_GAME } from '../../queries'
import GameSingle from '../game/GameSingle'
import Preloader from '../Preloader'
import page from './page'
const Game = props => {
  const pathname = props.location.pathname
  const id = pathname.substring(pathname.lastIndexOf('/') + 1)
  return (
    <Query query={GET_GAME} variables={{ id }}>
      {({ data: { game }, loading }) => {
        if (loading) return <Preloader />
        return <GameSingle {...game} />
      }}
    </Query>
  )
}
export default page(Game)
