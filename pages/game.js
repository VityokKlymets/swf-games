import React from 'react'
import { Query } from 'react-apollo'
import { GET_GAME } from './queries'
import GameSingle from './components/game/GameSingle'
import TopLine from './components/navbar/TopLine'
import withAdmin from './components/hoc/withAdmin'
import withData from './lib/withData'
import page from './components/hoc/page'
const Game = ({ isAdmin, query }) => {
  const id = query.id
  return (
    <div>
      <TopLine isAdmin={isAdmin} />
      <Query query={GET_GAME} variables={{ id }}>
        {({ data: { game }, loading }) => {
          if (loading) return null
          return <GameSingle isAdmin={isAdmin} {...game} />
        }}
      </Query>
    </div>
  )
}

export default withData(withAdmin(page(Game)))
