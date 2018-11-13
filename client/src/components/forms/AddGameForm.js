import React, { useState } from 'react'
import { useInput, useSelect } from '../hooks'
import { Form, Button } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import Files from 'react-files'
import { ADD_GAME } from '../../queries'
// TODO validation, error messages
export default ({ categories }) => {
  const category = useSelect('')
  const name = useInput('')
  const description = useInput('')
  const [file, setFile] = useState(null)
  const fileHandler = files => {
    const reader = new window.FileReader()
    const file = files[0]
    reader.onload = e => {
      setFile({
        ...file,
        result: reader.result
      })
    }
    reader.readAsText(file)
  }
  const submitHandle = (e, submit) => {
    e.preventDefault()
    submit()
  }
  return (
    <Mutation
      variables={{
        file,
        category: category.value,
        name: name.value,
        description: description.value
      }}
      mutation={ADD_GAME}
    >
      {(addGame, { loading }) => {
        return (
          <Form
            onSubmit={e => submitHandle(e, addGame)}
            loading={loading}
            className='GameForm'
          >
            <Form.Input
              icon='game'
              iconPosition='left'
              placeholder='Name'
              {...name}
            />
            <Form.TextArea
              placeholder='enter description ....'
              {...description}
            />
            <Form.Select
              {...category}
              placeholder='Category'
              options={categories}
            />
            <div>
              <Files
                className='files-dropzone'
                onChange={fileHandler}
                accepts={['application/x-shockwave-flash']}
                maxFiles={3}
                maxFileSize={10000000}
                minFileSize={0}
                clickable
              >
                Drop files here or click to upload
              </Files>
            </div>
            <Button floated='left' color='green' size='medium'>
              Add
            </Button>
          </Form>
        )
      }}

    </Mutation>
  )
}
