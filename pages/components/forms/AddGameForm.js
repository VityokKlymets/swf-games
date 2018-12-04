import React, { useState } from 'react'
import { useInput, useSelect } from '../hooks'
import { Form, Button, Message } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import ImageInput from '../inputs/ImageInput'
import { ADD_GAME } from '../../queries'
import FileInput from '../inputs/FileInput'
import parseError from '../utils/parseError'
// TODO validation
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

  const fileHandler = (file) => {
    setFile(file)
  }

  const screenshotHandler = data => {
    setScreenshot(data)
  }

  const submitHandler = (e, submit) => {
    e.preventDefault()
    submit().then(() => {
      window.location.reload()
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
      {(addGame, { loading, error }) => {
        return (
          <Form
            onSubmit={e => submitHandler(e, addGame)}
            loading={loading}
            className='GameForm'
          >
            <Form.Field>
              <label>Ім'я</label>
              <Form.Input
                icon='game'
                iconPosition='left'
                placeholder={`Ім'я`}
                onChange={name.onChange}
                value={name.value}
              />
            </Form.Field>
            <Form.Field>
              <label>Опис</label>
              <Form.TextArea
                placeholder='...........'
                onChange={description.onChange}
                value={description.value}
              />
            </Form.Field>
            <Form.Field>
              <label>Категорія</label>
              <Form.Select
                onChange={category.onChange}
                value={category.value}
                placeholder='Виберіть категорію'
                options={categories}
              />
            </Form.Field>
            <Form.Field>
              <label>Swf файл</label>
              <FileInput
                fluid
                onChange={fileHandler}
                placeholder='Виберіть файл swf'
              />
            </Form.Field>
            <Form.Field>
              <label>Виберіть зображення</label>
              <ImageInput fluid onChange={screenshotHandler} />
            </Form.Field>
            {error &&
              <Message negative>
                <Message.Header>GraphQL Error</Message.Header>
                <Message.Content>
                  {parseError(error).map(m => <p>{m}</p>)}
                </Message.Content>
              </Message>}
            <Button fluid color='brown' size='large'>
              Додати
            </Button>
          </Form>
        )
      }}

    </Mutation>
  )
}
