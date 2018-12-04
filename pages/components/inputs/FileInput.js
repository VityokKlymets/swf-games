import React, { createRef, useState } from 'react'
import { Segment, Label } from 'semantic-ui-react'
import { readAsBinaryFile } from '../utils/files'
// TODO file validation
export default props => {
  const [placeholder, setPlaceholder] = useState(
    props.placeholder || 'choose file'
  )
  const input = createRef()
  const clickHandle = () => {
    let inputDOM = input.current
    inputDOM.click()
  }
  const changeHandle = async e => {
    const file = e.target.files[0]
    const data = await readAsBinaryFile(file)
    setPlaceholder(file.name)
    props.onChange(data)
  }
  return (
    <div onClick={clickHandle} className='ImageInput clearfix'>
      <Segment className='pointer'>
        <Label
          style={{
            textAlign: 'center',
            width: '100%',
            padding: '1em 0'
          }}
        >
          {placeholder}
        </Label>
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
