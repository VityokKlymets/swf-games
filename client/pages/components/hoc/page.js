import React from 'react'
import Footer from '../navbar/Footer'
const page = Component => props => {
  return (
    <div>
      <div className='page-content'>
        <Component {...props} />
      </div>
      <Footer />
    </div>
  )
}

export default page
