import React from 'react'
import GameItem from './GameItem'
import { Container, Header, Icon, Grid } from 'semantic-ui-react'
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
          return (
            <Grid centered stackable>
              <Grid.Row>
                {games.map((game, idx) => (
                  <Grid.Column
                    textAlign='center'
                    style={{
                      padding: '1em 1em'
                    }}
                    mobile={16}
                    tablet={6}
                    computer={4}
                    key={idx}
                  >
                    <GameItem {...game} />
                  </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
          )
        }}
      </Query>
    </Container>
  )
}
