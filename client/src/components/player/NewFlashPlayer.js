import React, { createRef, useEffect } from 'react'

export default ({ src, width = 400, height = 400 }) => {
  const flash = createRef()
  useEffect(() => {})

  return (
    <div>
      <object
        ref={flash}
        type='application/x-shockwave-flash'
        data={src}
        width={width}
        height={height}
      />
    </div>
  )
}
