import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
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
        <span className='admin'>
          Адміністратор <Icon name='check' color='green' />
        </span>}
    </div>
  )
}
