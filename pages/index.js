import React, { Fragment } from 'react'
import GamesGridWithHeader from './components/game/GamesGridWithHeader'
import CategoriesNavbar from './components/navbar/CategoriesNavbar'
import TopLine from './components/navbar/TopLine'
import TopNavbar from './components/navbar/TopNavbar'
import page from './components/hoc/page'
import withAdmin from './components/hoc/withAdmin'
import { GET_HOMEPAGE_DATA } from './queries/'
import { Query } from 'react-apollo'
import withData from './lib/withData'
const Home = ({ isAdmin }) => {
  return (
    <Fragment>
      <TopLine isAdmin={isAdmin} />
      <TopNavbar />
      <Query query={GET_HOMEPAGE_DATA}>
        {({ data: { categories, games, gamesWithCategories }, loading }) => {
          if (loading) return null
          return (
            <div>
              <CategoriesNavbar
                categories={categories}
                style={{
                  marginTop: '5px',
                  marginBottom: '1em'
                }}
              />
              <GamesGridWithHeader
                games={games}
                color='olive'
                block={false}
                header='Останні додані ігри'
                subhead=' тут показані найсвіжіші новинки з онлайн флеш ігор'
                fluid
              />
              {categories.map((category, idx) => (
                <GamesGridWithHeader
                  key={idx}
                  color='blue'
                  fluid
                  header={category.text}
                  iconname={category.icon}
                  games={gamesWithCategories[idx]}
                />
              ))}
            </div>
          )
        }}
      </Query>

    </Fragment>
  )
}

export default withData(withAdmin(page(Home)))
