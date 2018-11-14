import React, { useState } from 'react'
import { useInput, useSelect } from '../hooks'
import { Form, Button } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import Files from 'react-files'
import ImageInput from '../inputs/ImageInput'
import { ADD_GAME } from '../../queries'
import { readAsBinaryFile } from '../utils/files'
// TODO validation, error messages
export default ({ categories }) => {
  const category = useSelect('')
  const name = useInput('')
  const description = useInput('')
  const [file, setFile] = useState(null)
  const [screenshot, setScreenshot] = useState(null)
  const fileHandler = async files => {
    let file = files[0]
    const data = await readAsBinaryFile(file)
    setFile(data)
  }
  const screenshotHandler = data => {
    setScreenshot(data)
  }
  const submitHandler = (e, submit) => {
    e.preventDefault()
    submit().then(game => {
      console.log(game)
    })
  }
  return (
    <Mutation
      variables={{
        screenshot,
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
            onSubmit={e => submitHandler(e, addGame)}
            loading={loading}
            className='GameForm'
          >
            <Form.Input
              icon='game'
              iconPosition='left'
              placeholder={`Ім'я`}
              {...name}
            />
            <Form.TextArea placeholder='опис ....' {...description} />
            <Form.Select
              {...category}
              placeholder='Категорія'
              options={categories}
            />
            <Files
              className='files-dropzone'
              onChange={fileHandler}
              accepts={['application/x-shockwave-flash']}
              maxFiles={3}
              maxFileSize={10000000}
              minFileSize={0}
              clickable
            >
              Виберіть файл swf
            </Files>
            <ImageInput onChange={screenshotHandler} />
            <Button floated='left' color='green' size='medium'>
              Add
            </Button>
          </Form>
        )
      }}

    </Mutation>
  )
}
