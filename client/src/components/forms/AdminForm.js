import React from 'react'
import { Button, Icon, Form, Grid, Header, Segment } from 'semantic-ui-react'
// TODO validation, error messages
export default () => (
  <div className='AdminForm'>
    <Grid
      fluid
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
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)
