import React from 'react'

export default () => {
  return (
    <div className='preloader-wrapper'>
      <div className='loading-window'>
        <div className='car'>
          <div className='strike' />
          <div className='strike strike2' />
          <div className='strike strike3' />
          <div className='strike strike4' />
          <div className='strike strike5' />
          <div className='car-detail spoiler' />
          <div className='car-detail back' />
          <div className='car-detail center' />
          <div className='car-detail center1' />
          <div className='car-detail front' />
          <div className='car-detail wheel' />
          <div className='car-detail wheel wheel2' />
        </div>

        <div className='text'>
          <span>Loading</span><span className='dots'>...</span>
        </div>
      </div>
    </div>
  )
}
