import React, { Fragment } from 'react'
import TopLine from '../navbar/TopLine'
import { split } from '../utils/location'
import { Query } from 'react-apollo'
import { GET_GAMES_BY_CATEGORY } from '../../queries'
import { Container, Header, Icon } from 'semantic-ui-react'
import GamesGrid from '../game/GamesGrid'
import CategoriesNavbar from '../navbar/CategoriesNavbar'
export default props => {
  const paths = split(props.location.pathname)
  const categoryValue = paths[1]
  return (
    <Fragment>
      <TopLine />
      <CategoriesNavbar
        style={{
          marginTop: '0'
        }}
        currentCategory={categoryValue}
      />
      <Container>
        <Query
          query={GET_GAMES_BY_CATEGORY}
          variables={{ category: categoryValue }}
        >
          {({ data: { games, category }, loading }) => {
            if (loading) return null
            return (
              <Fragment>
                <Header color='green' as='h2'>
                  <Icon name={category.icon} />
                  <Header.Content>{category.text}</Header.Content>
                </Header>
                <GamesGrid games={games} />
              </Fragment>
            )
          }}
        </Query>
      </Container>
    </Fragment>
  )
}
