import React from 'react'
import TopLine from './TopLine'
import { Grid, Header, Icon } from 'semantic-ui-react'
export default () => {
  return (
    <Grid>
      <Grid.Row
        style={{
          paddingBottom: '0px'
        }}
      >
        <Grid.Column>
          <TopLine />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className='topnavbar-content'>
        <Grid.Column>
          <Header style={{ color: '#fff' }} textAlign='center' icon as='h1'>
            <Icon style={{ color: 'rgb(90, 182, 15)' }} name='game' />
            <Header.Content>
              Вітаємо вас на нашому сайті!
              <Header.Subheader
                style={{
                  paddingTop: '1.2em',
                  color: '#e1e1e1'
                }}
              >
                тут ви знайдете кращі флеш ігри , які ви зможете пограти онлайн та без реєстрації
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
