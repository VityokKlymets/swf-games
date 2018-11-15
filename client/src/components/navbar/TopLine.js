import React from 'react'
import { Header, Icon, Button } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import { SET_ADMIN } from '../../queries'
export default ({ isAdmin }) => {
  return (
    <div className='topnavbar-line'>
      <a href='/'>
        <Header style={{ color: '#fff' }} as='h3'>
          <Icon style={{ color: '#fff' }} name='game' />
          <Header.Content>swf-games</Header.Content>
        </Header>
      </a>
      {isAdmin &&
        <div>
          <span className='admin'>
            Адміністратор <Icon name='check' color='green' />
          </span>
          <Mutation
            mutation={SET_ADMIN}
            variables={{
              value: false
            }}
          >
            {setAdmin => (
              <Button
                size='small'
                inverted
                style={{
                  marginLeft: '1em'
                }}
                onClick={() => setAdmin()}
              >
                Вийти
              </Button>
            )}

          </Mutation>

        </div>}
    </div>
  )
}
