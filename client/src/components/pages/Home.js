import React from 'react'
import ResentlyAddedGames from '../game/ResentlyAddedGames'
import CategoriesNavbar from '../navbar/CategoriesNavbar'
import TopNavbar from '../navbar/TopNavbar'
export default () => {
  return (
    <div>
      <TopNavbar />
      <CategoriesNavbar />
      <ResentlyAddedGames />
    </div>
  )
}
