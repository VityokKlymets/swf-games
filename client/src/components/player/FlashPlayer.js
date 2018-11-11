import React, { useState, useEffect } from 'react'
import ReactSwf from 'react-swf'
export default ({ src }) => {
  const [width, setWidth] = useState('600')
  const [height, setHeight] = useState('500')

  useEffect(() => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    setWidth(windowWidth)
    setHeight(windowHeight)
  })
  return (
    <div className='FlashPlayer'>
      <ReactSwf
        allowFullScreen
        src={src}
        width={width}
        height={height}
        fullScreenAspectRatio='landscape'
        wmode='transparent'
      />
    </div>
  )
}
