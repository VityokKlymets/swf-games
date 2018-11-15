import React, { createRef } from 'react'
import { Segment, Label } from 'semantic-ui-react'
import { readAsBinaryFile } from '../utils/files'
export default ({ onChange, placeholder = 'choose file' }) => {
  const input = createRef()
  const clickHandle = () => {
    let inputDOM = input.current
    inputDOM.click()
  }
  const changeHandle = async e => {
    const file = e.target.files[0]
    const data = await readAsBinaryFile(file)
    const filename = file.name
    onChange(data, filename)
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
