import React from 'react'
import ReactSwf from 'react-swf'
export default ({ src, fullscreen, width = 800, height = 550 }) => {
  return (
    <div className={`FlashPlayer ${fullscreen ? 'fullscreen' : ''}`}>
      <ReactSwf
        allowNetworking='none'
        allowFullScreen
        allowFullScreenInteractive
        src={src}
        width={width}
        bgcolor='rgba(0, 0, 0, .025)'
        height={height}
        wmode='transparent'
      />
    </div>
  )
}
