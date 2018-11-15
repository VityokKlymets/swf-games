import React, { useState } from 'react'
import { useInput, useSelect } from '../hooks'
import { Form, Button } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import ImageInput from '../inputs/ImageInput'
import { ADD_GAME } from '../../queries'
import FileInput from '../inputs/FileInput'
// TODO validation, error messages
const initialState = {
  category: '',
  name: '',
  description: '',
  file: null,
  screenshot: null
}
export default ({ categories }) => {
  const category = useSelect(initialState.category)
  const name = useInput(initialState.name)
  const description = useInput(initialState.description)
  const [file, setFile] = useState(initialState.file)
  const [screenshot, setScreenshot] = useState(initialState.screenshot)

  const clearState = () => {
    category.clear()
    name.clear()
    description.clear()
    setFile(initialState.file)
    setScreenshot(initialState.screenshot)
  }

  const fileHandler = file => {
    setFile(file)
  }

  const screenshotHandler = data => {
    setScreenshot(data)
  }

  const submitHandler = (e, submit) => {
    e.preventDefault()
    submit().then(game => {
      clearState()
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
              onChange={name.onChange}
              value={name.value}
            />
            <Form.TextArea
              placeholder='опис ....'
              onChange={description.onChange}
              value={description.value}
            />
            <Form.Select
              onChange={category.onChange}
              value={category.value}
              placeholder='Категорія'
              options={categories}
            />
            <FileInput
              fluid
              onChange={fileHandler}
              placeholder='Виберіть файл swf'
            />
            <ImageInput fluid onChange={screenshotHandler} />
            <Button fluid color='brown' size='large'>
              Додати
            </Button>
          </Form>
        )
      }}

    </Mutation>
  )
}
