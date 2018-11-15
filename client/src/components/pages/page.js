import React from 'react'
import TopLine from '../navbar/TopLine'
import Footer from '../navbar/Footer'
export default Component => props => {
  return (
    <div>
      <TopLine />
      <div className='page-content'>
        <Component {...props} />
      </div>
      <Footer />
    </div>
  )
}
