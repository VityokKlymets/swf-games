import React, { useState, createRef } from 'react'
import { Segment, Image } from 'semantic-ui-react'
import { readAsDataURL } from '../utils/files'
export default ({ onChange }) => {
  const [placeholder, setPlaceholder] = useState(
    'https://react.semantic-ui.com/images/wireframe/white-image.png'
  )
  const input = createRef()
  const clickHandle = () => {
    let inputDOM = input.current
    inputDOM.click()
  }
  const changeHandle = async e => {
    const file = e.target.files[0]
    const data = await readAsDataURL(file)
    setPlaceholder(data.original)
    onChange({
      extension: data.extension,
      result: data.result
    })
  }
  return (
    <div onClick={clickHandle} className='ImageInput clearfix'>
      <Segment floated='left' className='pointer'>
        <Image size='small' src={placeholder} />
      </Segment>
      <input
        onChange={changeHandle}
        ref={input}
        type='file'
        className='hidden'
      />
    </div>
  )
}
