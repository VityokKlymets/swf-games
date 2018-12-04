import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'
import GamesGrid from './GamesGrid'
export default ({
  games = [],
  color = '',
  iconname = 'home',
  header = '',
  subhead = '',
  fluid = false,
  centered = true,
  block = true
}) => {
  return (
    <Container fluid={fluid}>
      <Header
        style={{
          paddingLeft: '1em'
        }}
        block={block}
        as='h2'
      >
        <Icon color={color} name={iconname} />
        <Header.Content>
          {header}
          <Header.Subheader>
            {subhead}
          </Header.Subheader>
        </Header.Content>
      </Header>
      <GamesGrid centered={centered} games={games} />
    </Container>
  )
}
