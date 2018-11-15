import React, { Fragment } from 'react'
import { split } from '../utils/location'
import { Query } from 'react-apollo'
import { GET_GAMES_BY_CATEGORY } from '../../queries'
import { Container, Header, Icon } from 'semantic-ui-react'
import GamesGrid from '../game/GamesGrid'
import CategoriesNavbar from '../navbar/CategoriesNavbar'
import page from './page'
import Preloader from '../Preloader'
const Category = props => {
  const paths = split(props.location.pathname)
  const categoryValue = paths[1]
  return (
    <Fragment>
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
            if (loading) return <Preloader />
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
export default page(Category)
