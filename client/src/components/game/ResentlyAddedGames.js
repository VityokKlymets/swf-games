import React from 'react'
import GameItem from './GameItem'
import { Container, Header, Icon } from 'semantic-ui-react'
import { GET_RECENTLY_ADDED_GAMES } from '../../queries'
import { Query } from 'react-apollo'
export default () => {
  return (
    <Container>
      <Header as='h2'>
        <Icon name='game' />
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
          return games.map((game, idx) => <GameItem {...game} key={idx} />)
        }}
      </Query>
    </Container>
  )
}
