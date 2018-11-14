import React, { useState, useEffect } from 'react'
import ReactSwf from 'react-swf'
export default ({ src, fullscreen }) => {
  const [width, setWidth] = useState('600')
  const [height, setHeight] = useState('500')
  useEffect(
    () => {
      if (fullscreen) {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        setHeight(windowHeight)
        setWidth(windowWidth)
      }
    },
    [fullscreen]
  )
  return (
    <div className={`FlashPlayer ${fullscreen ? 'fullscreen' : ''}`}>
      <ReactSwf
        allowNetworking='none'
        allowFullScreen
        src={src}
        width={width}
        bgcolor='rgba(0, 0, 0, .025)'
        height={height}
        wmode='transparent'
        fullScreenAspectRatio='landscape'
      />
    </div>
  )
}
