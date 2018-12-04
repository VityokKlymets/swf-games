import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { GET_GAMES_BY_CATEGORY } from './queries'
import { Container, Header, Icon } from 'semantic-ui-react'
import GamesGrid from './components/game/GamesGrid'
import CategoriesNavbar from './components/navbar/CategoriesNavbar'
import TopLine from './components/navbar/TopLine'
import Preloader from './components/Preloader'
import withAdmin from './components/hoc/withAdmin'
import page from './components/hoc/page'
import withData from './lib/withData'
const Category = ({ isAdmin, url }) => {
  const category = url.query.cat
  return (
    <Fragment>
      <TopLine isAdmin={isAdmin} />

      <Container fluid>
        <Query query={GET_GAMES_BY_CATEGORY} variables={{ category }}>
          {({ data: { games, category, categories }, loading }) => {
            if (loading) return <Preloader />
            return (
              <Fragment>
                <CategoriesNavbar
                  style={{
                    marginTop: '0'
                  }}
                  currentCategory={category}
                  categories={categories}
                />
                <Header
                  style={{
                    paddingLeft: '1em'
                  }}
                  color='green'
                  as='h2'
                >
                  <Icon name={category.icon} />
                  <Header.Content>{category.text}</Header.Content>
                </Header>
                <GamesGrid centered games={games} />
              </Fragment>
            )
          }}
        </Query>
      </Container>
    </Fragment>
  )
}

export default withData(withAdmin(page(Category)))
