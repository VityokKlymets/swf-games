import React from 'react'
import { useInput, useSelect } from '../hooks'
import { Form, Button, Loader } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import { GET_CATEGORIES } from '../../queries'
export default () => {
  const category = useSelect('')
  const name = useInput('')
  const description = useInput('')
  const width = 8
  return (
    <Query query={GET_CATEGORIES}>
      {({ loading, data: { categories } }) => {
        if (loading) return <Loader active inline />
        return (
          <Form>
            <Form.Input
              width={width}
              icon='game'
              iconPosition='left'
              placeholder='Name'
              {...name}
            />
            <Form.TextArea
              width={width}
              placeholder='enter description ....'
              {...description}
            />
            <Form.Select
              {...category}
              width={width}
              placeholder='Category'
              options={categories}
            />

            <Button floated='left' color='green' size='medium'>
              Add
            </Button>
          </Form>
        )
      }}
    </Query>
  )
}
