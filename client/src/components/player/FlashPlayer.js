import React, { useState, useEffect } from 'react'
import ReactSwf from 'react-swf'
export default ({ src, fullscreen = false }) => {
  const [width, setWidth] = useState('600')
  const [height, setHeight] = useState('500')

  useEffect(() => {
    if (fullscreen) {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      setHeight(windowHeight)
      setWidth(windowWidth)
    }
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
