import React, { Fragment } from 'react'
import ResentlyAddedGames from '../game/ResentlyAddedGames'
import CategoriesNavbar from '../navbar/CategoriesNavbar'
import TopLine from '../navbar/TopLine'
import TopNavbar from '../navbar/TopNavbar'
import page from '../hoc/page'
import withAdmin from '../hoc/withAdmin'
const Home = ({ isAdmin }) => {
  return (
    <Fragment>
      <TopLine isAdmin={isAdmin} />
      <TopNavbar />
      <CategoriesNavbar
        style={{
          marginTop: '5px'
        }}
      />
      <ResentlyAddedGames />
    </Fragment>
  )
}

export default withAdmin(page(Home))
