import React from 'react'
import TopLine from '../navbar/TopLine'
import { Query } from 'react-apollo'
import { GET_GAME } from '../../queries'
import GameSingle from '../game/GameSingle'
export default props => {
  const pathname = props.location.pathname
  const id = pathname.substring(pathname.lastIndexOf('/') + 1)
  return (
    <div>
      <TopLine />
      <Query query={GET_GAME} variables={{ id }}>
        {({ data: { game }, loading }) => {
          if (loading) return null
          return <GameSingle {...game} />
        }}
      </Query>
    </div>
  )
}
