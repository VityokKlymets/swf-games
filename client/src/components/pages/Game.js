import React from 'react'
import { Query } from 'react-apollo'
import { GET_GAME } from '../../queries'
import GameSingle from '../game/GameSingle'
import TopLine from '../navbar/TopLine'
import Preloader from '../Preloader'
import withAdmin from '../hoc/withAdmin'
import page from '../hoc/page'
const Game = ({ isAdmin, location }) => {
  const pathname = location.pathname
  const id = pathname.substring(pathname.lastIndexOf('/') + 1)
  return (
    <div>
      <TopLine isAdmin={isAdmin} />
      <Query query={GET_GAME} variables={{ id }}>
        {({ data: { game }, loading }) => {
          if (loading) return <Preloader />
          return <GameSingle {...game} />
        }}
      </Query>
    </div>
  )
}

export default withAdmin(page(Game))
