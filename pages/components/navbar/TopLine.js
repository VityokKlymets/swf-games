import React, { useContext } from 'react'
import { Header, Icon, Button } from 'semantic-ui-react'
import { AdminContext } from '../context/AdminContext'

export default ({ isAdmin }) => {
  const { setAdminToken } = useContext(AdminContext)
  return (
    <div className='topnavbar-line'>
      <a href='/'>
        <Header style={{ color: '#fff' }} as='h3'>
          <Icon style={{ color: '#fff' }} name='game' />
          <Header.Content>swf-games</Header.Content>
        </Header>
      </a>
      {isAdmin && (
        <div>
          <span className='admin'>
            Адміністратор <Icon name='check' color='green' />
          </span>

          <Button
            size='small'
            inverted
            style={{
              marginLeft: '1em'
            }}
            onClick={() => setAdminToken('')}
          >
            Вийти
          </Button>

          <Button
            as='a'
            href='/admin'
            size='small'
            inverted
            style={{
              marginLeft: '1em'
            }}
          >
            Панель
          </Button>
        </div>
      )}
    </div>
  )
}
