import React from 'react'
import { Query } from 'react-apollo'
import { GET_GAME } from './queries'
import GameSingle from './components/game/GameSingle'
import TopLine from './components/navbar/TopLine'
import Preloader from './components/Preloader'
import withAdmin from './components/hoc/withAdmin'
import withData from './lib/withData'
import page from './components/hoc/page'
const Game = ({ isAdmin, url }) => {
  const id = url.query.id
  return (
    <div>
      <TopLine isAdmin={isAdmin} />
      <Query query={GET_GAME} variables={{ id }}>
        {({ data: { game }, loading }) => {
          if (loading) return <Preloader />
          return <GameSingle isAdmin={isAdmin} {...game} />
        }}
      </Query>
    </div>
  )
}

export default withData(withAdmin(page(Game)))
