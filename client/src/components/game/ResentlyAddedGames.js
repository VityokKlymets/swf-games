import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'
import GamesGrid from './GamesGrid'
import { GET_RECENTLY_ADDED_GAMES } from '../../queries'
import { Query } from 'react-apollo'
export default () => {
  return (
    <Container>
      <Header block as='h2'>
        <Icon color='olive' name='game' />
        <Header.Content>
          Останні додані ігри
          <Header.Subheader>
            тут показані найсвіжіші новинки з онлайн флеш ігор
          </Header.Subheader>
        </Header.Content>
      </Header>

      <Query query={GET_RECENTLY_ADDED_GAMES}>
        {({ data: { games }, loading }) => {
          if (loading) return null
          return <GamesGrid centered games={games} />
        }}
      </Query>
    </Container>
  )
}
