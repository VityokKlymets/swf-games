import React, { useState, createRef } from 'react'
import { Segment, Label } from 'semantic-ui-react'
import { readAsDataURL } from '../utils/files'
export default ({ onChange, placeholder = 'choose file' }) => {
  const [plc, setPlaceholder] = useState(placeholder)
  const input = createRef()
  const clickHandle = () => {
    let inputDOM = input.current
    inputDOM.click()
  }
  const changeHandle = async e => {
    const file = e.target.files[0]
    console.log(file)
    const data = await readAsDataURL(file)
    setPlaceholder(file.name)
    onChange(data)
  }
  return (
    <div onClick={clickHandle} className='ImageInput clearfix'>
      <Segment floated='left' className='pointer'>
        <Label>{plc}</Label>
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
