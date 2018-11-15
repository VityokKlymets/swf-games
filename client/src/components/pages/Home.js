import React from 'react'
import ResentlyAddedGames from '../game/ResentlyAddedGames'
import CategoriesNavbar from '../navbar/CategoriesNavbar'
import TopNavbar from '../navbar/TopNavbar'
import page from './page'
const Home = () => {
  return (
    <div>
      <TopNavbar />
      <CategoriesNavbar
        style={{
          marginTop: '5px'
        }}
      />
      <ResentlyAddedGames />
    </div>
  )
}
export default page(Home)
