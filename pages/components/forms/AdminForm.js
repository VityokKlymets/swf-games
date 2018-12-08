import React, { useContext } from 'react'
import { Button, Icon, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import { useInput } from '../hooks'
import { LOGIN } from '../../queries'
import { AdminContext } from '../context/AdminContext'
// TODO validation, error messages
const AdminForm = () => {
  const email = useInput('')
  const { setAdminToken } = useContext(AdminContext)
  const password = useInput('')
  const handleSubmit = (e, login) => {
    e.preventDefault()
    login().then(({ data }) => {
      const token = data.login.token
      setAdminToken(token)
    })
  }
  return (
    <div className='AdminForm'>
      <Grid
        textAlign='center'
        centered
        verticalAlign='middle'
        style={{ height: '100%' }}
      >
        <Grid.Column computer={6}>
          <Header as='h2' color='teal' textAlign='center'>
            <Icon name='plug' />
            <Header.Content>Log-in to your account</Header.Content>
          </Header>
          <Mutation
            variables={{
              email: email.value,
              password: password.value
            }}
            mutation={LOGIN}
          >
            {(login, { loading }) => (
              <Form
                onSubmit={e => handleSubmit(e, login)}
                loading={loading}
                size='large'
              >
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='E-mail address'
                    onChange={email.onChange}
                    value={email.value}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={password.onChange}
                    value={password.value}
                  />

                  <Button color='teal' fluid size='large'>
                    Login
                  </Button>
                </Segment>
              </Form>
            )}
          </Mutation>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default AdminForm
